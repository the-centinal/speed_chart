var i = 0;
var x_co = [0, 5, 8, 11, 15, 20, 25, 30];
var j = 0;
var y_co = [0, 9, 33, 35, 47, 42, 50, 55]
const labels = x_co


const data = {
    labels: labels,
    datasets: [{
        label: 'Speed Chart',
        backgroundColor: '#34d2eb',
        borderColor: '#34d2eb',
        data: y_co
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Speed OF Vehicle (in Km/hr)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Time (in mins.)'

                }
            }
        }
    }};
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
