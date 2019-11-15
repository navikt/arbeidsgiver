google.charts.load('current', {'packages': ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  createPieChart('chart-roller', 'Roller', [
    ['Støtteapparat', 8],
    ['Designere', 3],
    ['Domeneeksperter', 6],
    ['Produkteiere', 4],
    ['Utviklere', 21],
  ]);

  createStackedLineChart('chart-kjonn2', [
    ['Kjønnsbalanse', 'Kvinner', 'Menn', {role: 'annotation'}],
    ['Støtteapparat', 4, 4, ''],
    ['Designere', 1, 2, ''],
    ['Domeneeksperter', 3, 3, ''],
    ['Produkteiere', 4, 0, ''],
    ['Utviklere', 3, 18, ''],
  ]);
}

function createStackedLineChart(elementId, dataArray) {
  const dataTable = google.visualization.arrayToDataTable(dataArray);
  const options = {
    backgroundColor: 'transparent',
    legend: {position: 'top', maxLines: 3},
    bar: {groupWidth: '75%'},
    isStacked: true,
  };
  const element = document.getElementById(elementId);
  if (element) {
    const chart = new google.charts.Bar(element);
    chart.draw(dataTable, google.charts.Bar.convertOptions(options));
  } else {
    console.error('Couldnt find element with Id: ' + elementId);
  }
}

function createPieChart(elementId, title, rows) {
  const rollerData = new google.visualization.DataTable();
  rollerData.addColumn('string', name);
  rollerData.addColumn('number', 'Antall');
  rollerData.addRows(rows);
  const options = {
    title: title,
    backgroundColor: 'transparent',
    slices: {
      0: {color: '#66CBEC'},
      1: {color: '#C2EAF7'},
      2: {color: '#85D5F0'},
      3: {color: '#5EAEC7'},
      4: {color: '#A3E0F4'},
      5: {color: '#E0F5FB'},
    },
  };
  const element = document.getElementById(elementId);
  if (element) {
    const chart = new google.visualization.PieChart(element);
    chart.draw(rollerData, options);
  } else {
    console.error('Couldnt find element with Id: ' + elementId);
  }
}
