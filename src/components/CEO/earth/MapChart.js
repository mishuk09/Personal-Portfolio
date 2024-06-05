import React, { useEffect, useRef } from 'react';
import '../../../index.css'
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

const MapChart = () => {
    const chartRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create('chartdiv', am4maps.MapChart);
        chartRef.current = chart;

        if (!chart) return; // Check if chart is valid
        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = 'rotateLongLat';
        chart.deltaLatitude = -20;
        chart.padding(20, 20, 20, 20);

        // Disable zoom-related interactivity
        chart.chartContainer.wheelable = false;
        chart.chartContainer.draggable = false;
        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;


        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';
        polygonTemplate.fill = am4core.color('green');
        polygonTemplate.stroke = am4core.color('#000033');
        polygonTemplate.strokeWidth = 0.5;
        polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        polygonTemplate.url = 'https://www.datadrum.com/main.php?package={id}';
        polygonTemplate.urlTarget = '_blank';

        let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
        graticuleSeries.mapLines.template.line.stroke = am4core.color('#fff');
        graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
        graticuleSeries.fitExtent = false;

        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color('#ffffff');

        let hs = polygonTemplate.states.create('hover');
        hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

        animationRef.current = setTimeout(() => {
            if (chartRef.current) {
                animationRef.current = chartRef.current.animate({ property: 'deltaLongitude', to: 300000 }, 20000000);
            }
        }, 3000);

        return () => {
            if (chartRef.current) {
                chartRef.current.dispose();
            }
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, []);

    return <div id="chartdiv" style={{ width: '100%', height: '400px', maxWidth: '100%', }} />;
};

export default MapChart;
