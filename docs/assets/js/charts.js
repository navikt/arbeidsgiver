google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  createChart('Rolle', [
    ['Støtteapparat', 8],
    ['Designere', 3],
    ['Domeneeksperter', 6],
    ['Produkteiere', 4],
    ['Utviklere', 21],
  ]);
}

function createChart(name, rows) {
  const rollerData = new google.visualization.DataTable();
  rollerData.addColumn('string', name);
  rollerData.addColumn('number', 'Antall');
  rollerData.addRows(rows);
  const options = {
    'title': name,
    'backgroundColor': 'transparent',
  };
  const elementId = 'chart-' + name;
  const element = document.getElementById(elementId);
  if (element) {
    const chart = new google.visualization.PieChart(element);
    chart.draw(rollerData, options);
  } else {
    console.error('Couldnt find element with Id: ' + elementId);
  }
}
