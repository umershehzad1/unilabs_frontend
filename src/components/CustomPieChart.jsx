import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import 'highcharts/modules/variable-pie';
import { Image } from 'react-bootstrap';

const MyHighchartsPie = () => {
    const [chartData, setChartData] = useState([
        { name: 'Uni A', y: 20, z: 50 },
        { name: 'Uni B', y: 35, z: 30 },
        { name: 'Uni C', y: 25, z: 25 },
        { name: 'Uni D', y: 15, z: 40 },
        { name: 'Uni E', y: 15, z: 60 },
    ]);

    const colorPalette = [
        '#589CFFE5',
        '#0068FFCC',
        '#6358FFCC',
        '#0400FFB2',
        '#0058FFCC',
    ];

    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'variablepie',
                backgroundColor: 'transparent',
            },
            title: { text: '' },
            tooltip: false,
            plotOptions: {
                variablepie: {
                    showInLegend: false,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        connectorColor: 'green',
                        connectorWidth: 2,
                        formatter: function () {
                            return `
                                <div class="custom-label-card">
                                    <div class="custom-label-body">${this.point.z}%</div>
                                    <div class="custom-label-header">${this.point.name}</div>
                                </div>
                            `;
                        },
                    },
                    borderWidth: 5,
                    borderColor: 'transparent',

                },
            },
            series: [
                {
                    minPointSize: 10,
                    innerSize: '10%',
                    zMin: 0,
                    name: 'Unil-Token',
                    borderRadius: 1,
                    data: chartData.map((item, index) => ({
                        name: item.name,
                        y: item.y,
                        z: item.z,
                        color: colorPalette[index % colorPalette.length],
                    })),
                },
            ],
        });

        const interval = setInterval(() => {
            setChartData((prevData) =>
                prevData.map((item) => ({
                    ...item,
                    y: Math.floor(Math.random() * 40 + 10),
                    z: Math.floor(Math.random() * 50 + 20),
                }))
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [chartData]);

    return (
        <div className="h-100 w-100 position-relative">
            <figure className="highcharts-figure position-relative">
                <div id="container" style={{ width: '100%'}}></div>
                <Image
                    src="/pieBg.png"
                    alt="BGChart"
                    className="pieBG"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                />
            </figure>
        </div>
    );
};

export default MyHighchartsPie;
