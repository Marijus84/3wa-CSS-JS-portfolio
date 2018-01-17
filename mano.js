var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
    datasets: [{
        data: [60, 50, 40],
        backgroundColor: ["#F5AE28","#F3453C","#F4813A"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
},

    // Configuration options go here
    options: {}
});
