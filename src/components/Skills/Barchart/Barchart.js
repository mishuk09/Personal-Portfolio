import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Barchart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [{
                data: [70, 65, 60, 60, 50, 70, 75]
            }],
            chart: {
                height: 305,
                type: 'bar',
            },
         
            xaxis: {
                categories: ['HTML', 'CSS', 'JS', 'REACT', 'NODE JS', 'JAVA', 'C#']
            },
            title: {
                text: 'My Coding Abilities', // Add your title here
                align: 'center',
                 
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#263238'
                }
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        // Clean up the chart on unmount
        return () => {
           
            chart.destroy();
        };
    }, []);

    return (
        <div ref={chartRef}></div>
    );
};

export default Barchart;
