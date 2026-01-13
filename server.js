const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static("public"));

// API to return fake monitoring data
app.get("/api/data", (req, res) => {
  const lat = parseFloat(req.query.lat).toFixed(5);
  const lng = parseFloat(req.query.lng).toFixed(5);

  const motionStatus = Math.random() > 0.5 ? "IN MOTION" : "AT REST";
  const weather = ["Sunny", "Rainy", "Cloudy", "Typhoon"][Math.floor(Math.random()*4)];
  const disasterRisk = ["Low", "Medium", "High", "Extreme"][Math.floor(Math.random()*4)];
  const infraStatus = ["Operational", "Under Maintenance", "Damaged"][Math.floor(Math.random()*3)];

  res.json({
    lat,
    lng,
    motionStatus,
    weather,
    disasterRisk,
    infraStatus
  });
});

app.listen(PORT, () => {
  console.log(`GeoVision-Fresh running at http://localhost:${PORT}`);
});
