// src/components/AlertSeverityChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data';

const alertSeverity = data.reduce((acc, curr) => {
    const severity = curr.alert.severity;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
}, {});

const chartData = Object.keys(alertSeverity).map(key => ({
    severity: key,
    count: alertSeverity[key],
}));

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function AlertSeverityChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={chartData} dataKey="count" nameKey="severity" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default AlertSeverityChart;
