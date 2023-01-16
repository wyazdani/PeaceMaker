import React from "react";
import classes from "./index.module.scss";
import profile from '../../Images/unsplash.png'
import HeaderTop from "../../Components/Header";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Card, CardImg, Col, Tab, Tabs } from "react-bootstrap";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            align: 'start',
            fontColor: '#000000',

            padding: {
                top: 50,
            },

            labels: {
                boxWidth: 100,
                boxHeight: 1,
                position: 'start',

                font: {
                    size: 14,
                    weight: 'normal',
                }

            }

        },
        title: {
            display: true,
            text: 'Weekly Report',
            align: 'start',

            padding: {
                top: 0,
                bottom: 50
            },

            font: {
                size: 18,
                weight: 'normal',
            }

        },

    },
    scales: {
        // to remove the labels
        x: {
            ticks: {
                display: true,
            },
            // to remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        // to remove the y-axis labels
        y: {
            ticks: {
                display: false,
                beginAtZero: false,
            },
            // to remove the y-axis grid
            grid: {
                drawBorder: false,
                display: true,
            },
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data = {
    labels,
    datasets: [
        {
            label: 'Food',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(88, 160, 235)',
            borderWidth: '1',
            backgroundColor: 'rgba(88, 160, 235, 1)',
            position: 'start',

        },
        {
            label: 'Alcohol',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(142, 178, 111)',
            borderWidth: '1',
            backgroundColor: 'rgba(142, 178, 111, 1)',
        },
        {
            label: 'Screen Time',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(238,210,2)',
            borderWidth: '1',
            backgroundColor: 'rgba(238,210,2, 1)',
        },
    ],
};

const User = () => {
    return (
        <>


            <div className={classes.border_box}>
                <Line options={options} data={data} />
            </div>

            <div className={classes.border_box}>
                <Line options={options} data={data} />
            </div>

            <div className={classes.border_box}>
                <Line options={options} data={data} />
            </div>



        </>
    );
};

export default User;
