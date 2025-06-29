function drawRadarChart(data) {
  const ctx = document.getElementById('chart').getContext('2d');
  const labels = data.fields.map(f => f.name);
  const values = data.tables.DEFAULT[0].map(v => v.value);

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: "レーダーチャート",
        data: values,
        fill: true,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      }
    }
  });
}

dscc.subscribeToData(drawRadarChart);
