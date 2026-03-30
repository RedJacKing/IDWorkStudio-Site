import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(...args: any[]){ window.dataLayer.push(args); }
(window as any).gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-S82B3CLFH8', { 'send_page_view': true });

const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-S82B3CLFH8';
document.head.appendChild(gtagScript);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);