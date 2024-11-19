// Define data set for all charts
let dataBaby = [1, 10, 5, 2, 20, 30, 45];
let moreDataBaby = [20, 30, 15, 12, 21, 30, 40];
myData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data, baby!",
            fill: false,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: dataBaby,
          },
            {
            label: "More data, baby!",
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: moreDataBaby,
        }]
    };

// Default chart defined with type: 'line'
Chart.defaults.global.defaultFontFamily = "monospace";
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: myData
});

// Function runs on chart type select update
function updateChartType() {
  // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
   myChart.destroy();
   myChart = new Chart(ctx, {
     type: document.getElementById("chartType").value,
     data: myData,
   });
};

// Randomize data button function
function randomizeData() {
  let newDataBaby = dataBaby.map(x => Math.floor(Math.random() * 50));
  let newMoreDataBaby = moreDataBaby.map(x => Math.floor(Math.random() * 40));
  myData.datasets[0].data = newDataBaby
  myData.datasets[1].data = newMoreDataBaby
  myChart.update();
  console.log(newDataBaby);
};

