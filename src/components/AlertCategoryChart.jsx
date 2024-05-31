// src/components/AlertCategoryChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data';

const alertCategories = data.reduce((acc, curr) => {
    const category = curr.alert.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

const chartData = Object.keys(alertCategories).map(key => ({
    category: key,
    count: alertCategories[key],
}));

function AlertCategoryChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default AlertCategoryChart;
