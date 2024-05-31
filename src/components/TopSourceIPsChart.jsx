// src/components/TopSourceIPsChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data';

const sourceIPs = data.reduce((acc, curr) => {
    const srcIP = curr.src_ip;
    acc[srcIP] = (acc[srcIP] || 0) + 1;
    return acc;
}, {});

const chartData = Object.keys(sourceIPs).map(key => ({
    srcIP: key,
    count: sourceIPs[key],
}));

chartData.sort((a, b) => b.count - a.count);

function TopSourceIPsChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
                <XAxis dataKey="srcIP" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TopSourceIPsChart;
