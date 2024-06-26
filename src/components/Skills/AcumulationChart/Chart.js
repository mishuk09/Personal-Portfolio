import React from 'react';
import '../../../index.css'
import ReactApexChart from 'react-apexcharts';


const Chart = () => {

    const series = [44, 55, 50, 15, 20];
    const options = {
        chart: {
            type: 'donut',
        },
        labels: ['HTML', 'CSS', 'JS', 'JAVA', 'C#'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <div className="chart  hidden md:block">
            <p className='mx-5 mt-2  font-bold'>Most Used Language in Github</p>

            <ReactApexChart className='chart-child' options={options} series={series} type="donut" width={'300'} />

            <a href="https://github.com/mishuk09" target='blank'><button className='mt-3 github-btn'>Github</button> </a>
        </div>
    );
};

export default Chart;
