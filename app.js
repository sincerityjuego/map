const map = new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json",
  center: [121.08, 14.33], // Biñan, Laguna
  zoom: 12
});

map.on("click", async e => {
  const lat = e.lngLat.lat;
  const lng = e.lngLat.lng;

  try {
    const res = await fetch(`/api/data?lat=${lat}&lng=${lng}`);
    const data = await res.json();

    document.getElementById("panel").innerHTML = `
      <h3>GeoVision Monitor</h3>
      <p><b>Latitude:</b> ${data.lat}</p>
      <p><b>Longitude:</b> ${data.lng}</p>
      <p><b>Motion Status:</b> ${data.motionStatus}</p>
      <p><b>Weather:</b> ${data.weather}</p>
      <p><b>Disaster Risk:</b> ${data.disasterRisk}</p>
      <p><b>Infrastructure:</b> ${data.infraStatus}</p>
    `;
  } catch(err) {
    document.getElementById("panel").innerHTML = `<p>Error loading data</p>`;
  }
});
