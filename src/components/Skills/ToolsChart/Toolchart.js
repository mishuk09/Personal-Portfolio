import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Toolchart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [{
                data: [75, 60, 50, 80, 70, 60, 75]
            }],
            chart: {
                height: 305,
                type: 'bar',
            },

            xaxis: {
                categories: ['GIT', 'FIREBA', 'DOCKER', 'FIGMA', 'TESTING', 'SQL', 'LINUX']
            },
            title: {
                text: 'Software Utilities', // Add your title here
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
        <div className='' ref={chartRef}></div>
    );
};

export default Toolchart;
