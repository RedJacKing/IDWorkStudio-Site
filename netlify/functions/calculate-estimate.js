
// Secure backend calculator logic for ID Work Studio
// Public site sends form selections here. This file is not exposed to visitors.

exports.handler = async (event) => {
  try {
    const incoming = JSON.parse(event.body || '{}');

// =============================================
// CONSTANTS — CUSTOMER ESTIMATE RATES
// =============================================
const M2SF = 10.7639, MFT = 3.28084;
const SGD = new Intl.NumberFormat('en-SG',{style:'currency',currency:'SGD',maximumFractionDigits:0});

const PROPERTY = {
  hdb:   {label:'HDB',    resaleH:1.0, cx:1.00},
  condo: {label:'Condo',  resaleH:1.0, cx:1.08},
  landed:{label:'Landed', resaleH:1.0, cx:1.25},
};

const HDB_TYPES = {
  '2room':{label:'2-Room Flexi',sqft:430},
  '3room':{label:'3-Room',      sqft:700},
  '4room':{label:'4-Room',      sqft:969},
  '5room':{label:'5-Room',      sqft:1184},
  'ea':   {label:'EA / EM',     sqft:1561},
  'dbss': {label:'DBSS',        sqft:1100},
};

const PAINT_HDB = {
  '2room':{standard:1300,classic:1500,premium:1750},
  '3room':{standard:1650,classic:1900,premium:2300},
  '4room':{standard:1900,classic:2150,premium:2500},
  '5room':{standard:2100,classic:2350,premium:2700},
  'ea':   {standard:2250,classic:2700,premium:2950},
  'dbss': {standard:2100,classic:2400,premium:2700},
};
const PAINT_CONDO = {
  1:{standard:1550,classic:1820,premium:2015},
  2:{standard:1900,classic:2210,premium:2470},
  3:{standard:2275,classic:2535,premium:3055},
  4:{standard:2665,classic:2925,premium:3315},
};
const PAINT_LANDED = {standard:3500,classic:5000,premium:7500};

// =============================================
// FORM STATE
// =============================================
let step=0;
let form={
  projectType:'wholeHouse',
  propertyType:'hdb', hdbFlatType:'4room',
  propertyCondition:'resale',
  sizeUnit:'sqft', propertySizeInput:969,
  roomCounts:{bedrooms:3,toilets:2},
  hasFloorPlan:false,
  skipDetails:false,
  includeGst:false,
  areas:{livingDining:true,kitchen:true,masterBedroom:true,bedrooms:true,toilets:true,serviceYard:false,balcony:false},
  scope:{hacking:true,flooring:true,carpentry:true,electrical:true,plumbing:true,glass:true,paintingCeiling:true,aircon:false,doors:false,windowGrilles:false},
  kitchenCabinetUnit:'ft',kitchenCabinetInput:10,
  kitchenTopCabinet:true, worktop:'quartz', kitchenTileWork:'hack',
  toiletTileWork:'hack',
  toiletGlassTypes:['none','none','none','none'],
  showerScreenBlackFrame:false,
  kitchenGlassBackingSqft:0,
  kitchenSinkInstallation:false,
  toiletAccessories:true,
  toiletBowlQty:2, showerSetQty:2, instantHeaterQty:0, storageHeaterQty:0,
  flooringType:'vinyl', flooringAreaUnit:'sqft', flooringAreaInput:0,
  hackingItems:{
    auto:false,
    wholeHouse:false,
    kitchen2ToiletsFW:false,
    kitchen2ToiletsFloorOnly:false,
    kitchenFW:false,
    twoToiletsFW:false,
    oneToiletFW:false,
    oneToiletFloorOnly:false,
    oneToiletWallOnly:false,
    livingBedroomFloor:false,
    livingFloor:false,
    bedroomFloor:false,
    kitchenFloor:false,
    kitchenCabinetOnly:false,
    sinkSupport:false,
    kitchenCabinetSinkSupport:false,
    
    floorSkirtingWholeHouse:false,
    wallDemolitionSqft:false,
    partitionDemolitionSqft:false,
    parquetFlooring:false,
    vinylFlooring:false,
    falseCeilingHack:false,
    cornice:false,
    wardrobeLess6ft:false,
    doorFrame:false,
    door:false,
    looseFurniture:false,
    wallpaperHack:false,
    cabinetRemoval:false
  },
  wallHackSqft:0, partitionHackSqft:0,
  pendingHackingItem:'',
  wardrobeUnit:'ft',wardrobeInput:0,
  tvConsoleUnit:'ft',tvConsoleInput:0,
  shoeCabinetUnit:'ft',shoeCabinetInput:0,
  studyTableUnit:'ft',studyTableInput:0,
  storageCabinetUnit:'ft',storageCabinetInput:0,
  featureWall:false,
  carpentryComplexity:'standard',
  lightPoints:0,powerPoints:0,dataPoints:0,hoodPoints:0,
  lightInstallations:0,concealedWiring:false,airconIsolators:0,
  airconUnits:3,airconPiping:'exposed',airconTier:'mid',
  paintPackage:'standard',
  falseCeiling:false,falseCeilingSqft:0,lBox:false,wallpaper:false,
  mainDoorType:'hdbTimber',hdbGate:false,bedroomDoorQty:0,toiletDoorQty:0,
  windowGrilleQty:0,
  name:'',email:'',
};

// =============================================
// HELPERS
// =============================================
const sqft=()=>form.sizeUnit==='m2'?Number(form.propertySizeInput||0)*M2SF:Number(form.propertySizeInput||0);
const lFt=(i,u)=>u==='m'?Number(i||0)*MFT:Number(i||0);
const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
const rng=(c,lo=1.00,hi=1.12)=>({low:Math.round(c*lo),high:Math.round(c*hi)});

function areaSqft(a){
  const R={livingDining:.28,kitchen:.14,masterBedroom:.12,bedrooms:.22,toilets:.08,serviceYard:.06,balcony:.05};
  return sqft()*(R[a]||0);
}
function floorArea(){
  let t=0;
  ['livingDining','masterBedroom','bedrooms','serviceYard','balcony'].forEach(k=>{if(form.areas[k])t+=areaSqft(k)});
  return t;
}
function isSmallProject(){
  return form.projectType==='kitchenOnly'||form.projectType==='toiletOnly';
}
function projectBaseCharges(){
  if(form.projectType==='kitchenOnly') return {profSvc:200, haulage:200};
  if(form.projectType==='toiletOnly') return {profSvc:200, haulage:300};
  if(form.projectType==='partial') return {profSvc:500, haulage:715};
  return {profSvc:800, haulage:1065};
}
function effectiveFloorArea(){
  const manual=form.flooringAreaUnit==='m2'?Number(form.flooringAreaInput||0)*M2SF:Number(form.flooringAreaInput||0);
  return manual>0?manual:floorArea();
}
function hdbHackColumn(){
  if(form.propertyType==='condo') return 'condo';
  if(form.propertyType==='landed') return 'maisonette';
  if(['2room','3room'].includes(form.hdbFlatType)) return '3room';
  if(form.hdbFlatType==='4room') return '4room';
  if(['5room','dbss'].includes(form.hdbFlatType)) return '5room';
  return 'maisonette';
}
function hackingPackagePrice(key){
  const col=hdbHackColumn();
  const table={
    wholeHouse:{'3room':3250,'4room':3770,'5room':4550,maisonette:0,condo:5200},
    kitchen2ToiletsFW:{'3room':2600,'4room':2600,'5room':2600,maisonette:3250,condo:2860},
    kitchen2ToiletsFloorOnly:{'3room':1690,'4room':1690,'5room':1690,maisonette:2080,condo:2080},
    kitchenFW:{'3room':1495,'4room':1495,'5room':1495,maisonette:1495,condo:1625},
    twoToiletsFW:{'3room':1495,'4room':1495,'5room':1495,maisonette:1820,condo:1820},
    oneToiletFW:{'3room':1040,'4room':1040,'5room':1040,maisonette:1170,condo:1170},
    oneToiletFloorOnly:{'3room':585,'4room':585,'5room':585,maisonette:715,condo:715},
    oneToiletWallOnly:{'3room':715,'4room':715,'5room':715,maisonette:845,condo:845},
    livingBedroomFloor:{'3room':1950,'4room':2470,'5room':2990,maisonette:0,condo:0},
    livingFloor:{'3room':1365,'4room':1625,'5room':1885,maisonette:2145,condo:2145},
    bedroomFloor:{'3room':585,'4room':1040,'5room':1365,maisonette:1625,condo:1950},
    kitchenFloor:{'3room':1365,'4room':1365,'5room':1365,maisonette:1365,condo:1495},
    kitchenCabinetOnly:{'3room':455,'4room':455,'5room':455,maisonette:455,condo:455},
    sinkSupport:{'3room':390,'4room':390,'5room':390,maisonette:390,condo:390},
    kitchenCabinetSinkSupport:{'3room':715,'4room':715,'5room':715,maisonette:715,condo:715},
    
    floorSkirtingWholeHouse:{'3room':260,'4room':325,'5room':390,maisonette:0,condo:520},
    parquetFlooring:{'3room':455,'4room':455,'5room':455,maisonette:455,condo:455},
    vinylFlooring:{'3room':650,'4room':715,'5room':780,maisonette:780,condo:910},
    falseCeilingHack:{'3room':390,'4room':0,'5room':0,maisonette:0,condo:0},
    cornice:{'3room':390,'4room':455,'5room':520,maisonette:650,condo:650},
    wardrobeLess6ft:{'3room':234,'4room':234,'5room':234,maisonette:234,condo:234},
    doorFrame:{'3room':130,'4room':130,'5room':130,maisonette:130,condo:130},
    door:{'3room':130,'4room':130,'5room':130,maisonette:130,condo:130},
    looseFurniture:{'3room':195,'4room':195,'5room':195,maisonette:195,condo:195},
    wallpaperHack:{'3room':195,'4room':0.65,'5room':0.65,maisonette:0.65,condo:0.65},
    cabinetRemoval:{'3room':455,'4room':455,'5room':455,maisonette:455,condo:455}
  };
  return (table[key]&&table[key][col])||0;
}
function getPaintingFlat(){
  const p=form.paintPackage;
  if(form.propertyType==='hdb')return(PAINT_HDB[form.hdbFlatType]||{})[p]||0;
  if(form.propertyType==='condo'){const br=clamp(Number(form.roomCounts.bedrooms||2),1,4);return(PAINT_CONDO[br]||{})[p]||0;}
  if(form.propertyType==='landed')return PAINT_LANDED[p]||0;
  return 0;
}
function getRealityBuffer(){
  return form.propertyCondition==='resale'
    ? {label:'+15% to +30%', low:0.15, high:0.30, note:'Resale homes usually have more site-condition risk, hacking variation, and making-good works.'}
    : {label:'+10% to +15%', low:0.10, high:0.15, note:'New/BTO homes usually have lower hidden-condition risk, but site validation can still change scope.'};
}
function filledDetailCount(){
  let count=0;
  if(form.flooringAreaInput>0) count++;
  if(lFt(form.kitchenCabinetInput,form.kitchenCabinetUnit)>0) count++;
  if(lFt(form.wardrobeInput,form.wardrobeUnit)>0) count++;
  if(form.lightPoints>0||form.powerPoints>0||form.dataPoints>0||form.hoodPoints>0) count++;
  if(Object.values(form.hackingItems||{}).some(Boolean)) count++;
  if(form.toiletGlassTypes.some(v=>v&&v!=='none')) count++;
  if(form.falseCeiling&&form.falseCeilingSqft>0) count++;
  return count;
}
function getAccuracyScore(){
  if(form.skipDetails) return {score:60,label:'Quick estimate'};
  const details=filledDetailCount();
  if(details>=5) return {score:85,label:'Detailed estimate'};
  if(step>=2||details>=2) return {score:75,label:'Guided estimate'};
  return {score:60,label:'Basic estimate'};
}
function getBenchmark(){
  const key=form.propertyType+'_'+form.propertyCondition+'_'+(form.propertyType==='hdb'?form.hdbFlatType:clamp(Number(form.roomCounts.bedrooms||3),1,4));
  const table={
    hdb_new_3room:[25000,45000], hdb_new_4room:[35000,60000], hdb_new_5room:[45000,75000], hdb_new_2room:[18000,35000], hdb_new_ea:[60000,95000], hdb_new_dbss:[45000,75000],
    hdb_resale_3room:[35000,60000], hdb_resale_4room:[45000,70000], hdb_resale_5room:[60000,90000], hdb_resale_2room:[25000,45000], hdb_resale_ea:[80000,120000], hdb_resale_dbss:[65000,95000],
    condo_new_1:[30000,55000], condo_new_2:[45000,75000], condo_new_3:[60000,100000], condo_new_4:[85000,130000],
    condo_resale_1:[40000,70000], condo_resale_2:[60000,95000], condo_resale_3:[80000,130000], condo_resale_4:[110000,160000],
    landed_new_3:[120000,220000], landed_new_4:[150000,280000], landed_resale_3:[180000,320000], landed_resale_4:[220000,400000]
  };
  const range=table[key]||[45000,90000];
  return {low:range[0], high:range[1]};
}
function getBenchmarkStatus(totalLow,totalHigh){
  const b=getBenchmark();
  const mid=(totalLow+totalHigh)/2;
  if(mid<b.low*0.9) return 'Slightly below typical market range';
  if(mid>b.high*1.1) return 'Above typical market range';
  return 'Within typical market range';
}
function getCostDrivers(mods){
  const total=mods.reduce((s,m)=>s+m.cost,0)||1;
  return [...mods].sort((a,b)=>b.cost-a.cost).slice(0,3).map(m=>({name:m.name,pct:Math.round(m.cost/total*100)}));
}

// =============================================
// CALCULATE
// =============================================
function calcEst(){
  const prof=PROPERTY[form.propertyType];
  const isResale=form.propertyCondition==='resale';
  const tc=Number(form.roomCounts.toilets||0);
  const sz=sqft();
  const mods=[];
  const add=(name,c)=>{if(c>0)mods.push({name,cost:c})};

  const baseCharges=projectBaseCharges();
  let profSvc=baseCharges.profSvc;
  let haulage=0,hacking=0,masonry=0,carpentry=0;
  let plumbing=0,electrical=0,glass=0,aircon=0;
  let painting=0,doors=0,grilles=0;

  // ── HACKING / REMOVAL ──
  if(form.scope.hacking){
    const selected=form.hackingItems||{};

    if(selected.auto){
      if(isResale) haulage=baseCharges.haulage;
    }

    let anySelected=false;
    Object.keys(selected).forEach(key=>{
      if(!selected[key]||key==='auto') return;
      anySelected=true;
      if(key==='wallDemolitionSqft') hacking+=Math.max(400,Number(form.wallHackSqft||0)*50);
      else if(key==='partitionDemolitionSqft') hacking+=Math.max(250,Number(form.partitionHackSqft||0)*35);
      else hacking+=hackingPackagePrice(key);
    });
    if(anySelected) haulage=baseCharges.haulage;
  }

  // ── KITCHEN TILING ONLY ──
  if(form.areas.kitchen){
    if(form.kitchenTileWork==='hack')    masonry+=1100;
    if(form.kitchenTileWork==='overlay') masonry+=550;
    if(form.scope.carpentry){
      const ft=lFt(form.kitchenCabinetInput,form.kitchenCabinetUnit);
      if(ft>0){
        carpentry+=ft*111;
        if(form.kitchenTopCabinet) carpentry+=ft*111;
        const wt={quartz:100,sintered:160};
        carpentry+=ft*(wt[form.worktop]||100);
      }
    }
    if(form.scope.plumbing){
      plumbing+=form.projectType==='kitchenOnly'?150:648;
      if(form.kitchenSinkInstallation) plumbing+=120;
    }
    if(form.scope.electrical) electrical+=form.projectType==='kitchenOnly'?100:130;
  }

  // ── TOILET TILING ONLY ──
  if(form.areas.toilets){
    if(form.toiletTileWork==='hack')    masonry+=tc*1750;
    if(form.toiletTileWork==='overlay') masonry+=tc*1450;
    if(form.scope.plumbing){
      plumbing+=tc*950;
      plumbing+=Number(form.toiletBowlQty||0)*100;
      plumbing+=Number(form.showerSetQty||0)*70;
      plumbing+=Number(form.instantHeaterQty||0)*80;
      plumbing+=Number(form.storageHeaterQty||0)*180;
      if(form.toiletAccessories) plumbing+=tc*50;
    }
    if(form.scope.glass){
      const sR={none:0,screen180Casement:530,lShape90Sliding:610};
      const bfR={none:0,screen180Casement:195,lShape90Sliding:220};
      for(let i=0;i<tc;i++){
        const gt=form.toiletGlassTypes[i]||'none';
        glass+=sR[gt]||0;
        if(form.showerScreenBlackFrame) glass+=bfR[gt]||0;
      }
      glass+=Number(form.kitchenGlassBackingSqft||0)*12;
    }
  }

  // ── FLOORING ──
  if(form.scope.flooring){
    const fa=(isSmallProject() && !form.flooringAreaInput)?0:effectiveFloorArea();
    if(fa>0){
      const fR={vinyl:6,overlayTiles:12,tiles:8};
      masonry+=fa*(fR[form.flooringType]||7);
    }
  }

  // ── CARPENTRY ──
  if(form.scope.carpentry){
    carpentry+=lFt(form.wardrobeInput,     form.wardrobeUnit)     *280;
    carpentry+=lFt(form.tvConsoleInput,    form.tvConsoleUnit)    *117;
    carpentry+=lFt(form.shoeCabinetInput,  form.shoeCabinetUnit)  *125;
    carpentry+=lFt(form.studyTableInput,   form.studyTableUnit)   *108;
    carpentry+=lFt(form.storageCabinetInput,form.storageCabinetUnit)*250;
    if(form.featureWall) carpentry+=2500;
    const complexityMultiplier=form.carpentryComplexity==='custom'?1.2:1;
    carpentry*=complexityMultiplier;
  }

  // ── ELECTRICAL ──
  if(form.scope.electrical){
    electrical+=Number(form.lightPoints||0)        *45;
    electrical+=Number(form.powerPoints||0)        *70;
    electrical+=Number(form.dataPoints||0)         *130;
    electrical+=Number(form.hoodPoints||0)         *130;
    electrical+=Number(form.lightInstallations||0) *25;
    if(form.concealedWiring) electrical+=Number(form.lightPoints||0)*38;
    electrical+=Number(form.airconIsolators||0)    *165;
  }

  // ── AIRCON ──
  if(form.scope.aircon){
    const units=Number(form.airconUnits||0);
    const tR={basic:700,mid:950,premium:1500};
    aircon+=units*(tR[form.airconTier]||950);
    if(form.airconPiping==='concealed') aircon+=units*650;
  }

  // ── PAINTING & CEILING ──
  if(form.scope.paintingCeiling){
    painting+=getPaintingFlat();
    const fcR={hdb:3.0,condo:3.15,landed:3.50};
    if(form.falseCeiling) painting+=Number(form.falseCeilingSqft||0)*(fcR[form.propertyType]||3);
    if(form.lBox)      painting+=800;
    if(form.wallpaper) painting+=4000;
  }

  // ── DOORS ──
  if(form.scope.doors){
    const mdR={none:0,hdbTimber:1800,security:3500};
    doors+=mdR[form.mainDoorType]||0;
    if(form.hdbGate) doors+=1200;
    doors+=Number(form.bedroomDoorQty||0)*480;
    doors+=Number(form.toiletDoorQty||0) *420;
  }

  // ── WINDOW GRILLES ──
  if(form.scope.windowGrilles){
    grilles+=Number(form.windowGrilleQty||0)*350;
  }

  add('Professional Services & Site Washing',profSvc);
  if(haulage>0||hacking>0) add('Hacking, Removal & Haulage',haulage+hacking);
  if(masonry>0)  add('Masonry, Tiling & Flooring',masonry);
  if(carpentry>0)add('Carpentry & Worktop',carpentry);
  if(electrical>0)add('Electrical Works',electrical);
  if(aircon>0)   add('Aircon Supply & Installation',aircon);
  if(plumbing>0) add('Plumbing & Sanitary',plumbing);
  if(glass>0)    add('Glass Works & Shower Screen',glass);
  if(painting>0) add('Painting & Ceiling Works',painting);
  if(doors>0)    add('Doors',doors);
  if(grilles>0)  add('Window Grilles',grilles);

  const subtotalBeforeGst=mods.reduce((s,m)=>s+m.cost,0)*prof.cx;
  const gstAmount=form.includeGst?subtotalBeforeGst*0.09:0;
  const subtotal=subtotalBeforeGst+gstAmount;
  const total=rng(subtotal);
  const accuracy=getAccuracyScore();
  return{mods,total,subtotalBeforeGst,gstAmount,gstIncluded:form.includeGst,acc:accuracy.label,accuracyScore:accuracy.score,reality:getRealityBuffer(),benchmark:getBenchmark(),drivers:getCostDrivers(mods)};
}



    // Replace frontend form state with submitted browser form
    form = {
      ...form,
      ...incoming,
      roomCounts: { ...form.roomCounts, ...(incoming.roomCounts || {}) },
      areas: { ...form.areas, ...(incoming.areas || {}) },
      scope: { ...form.scope, ...(incoming.scope || {}) },
      hackingItems: { ...form.hackingItems, ...(incoming.hackingItems || {}) }
    };

    const estimate = calcEst();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        estimatedLow: estimate.total.low,
        estimatedHigh: estimate.total.high
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Calculation failed"
      })
    };
  }
};
