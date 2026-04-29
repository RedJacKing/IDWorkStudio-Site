exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Example input
    const { propertyType, size, selections } = data;

    // 🔒 PRIVATE PRICING LOGIC (this is now hidden from public)
    let base = 20000;

    if (propertyType === "HDB") base += 5000;
    if (size === "4-room") base += 8000;

    // Example selection logic
    if (selections?.includes("carpentry")) base += 12000;
    if (selections?.includes("worktop")) base += 5000;

    // Return only range (not detailed pricing)
    const result = {
      estimatedLow: Math.round(base * 0.9),
      estimatedHigh: Math.round(base * 1.1)
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Calculation failed" })
    };
  }
};