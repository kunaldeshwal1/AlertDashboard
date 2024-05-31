// src/components/AlertTimeChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data';

const alertTimes = data.map(alert => ({
    timestamp: new Date(alert.timestamp).toLocaleTimeString(),
    count: 1,
}));

const alertCountByTime = alertTimes.reduce((acc, curr) => {
    const time = curr.timestamp;
    acc[time] = (acc[time] || 0) + 1;
    return acc;
}, {});

const chartData = Object.keys(alertCountByTime).map(key => ({
    time: key,
    count: alertCountByTime[key],
}));

function AlertTimeChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AlertTimeChart;
