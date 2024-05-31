// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import AlertCategoryChart from './components/AlertCategoryChart';
import AlertTimeChart from './components/AlertTimeChart';
import AlertSeverityChart from './components/AlertSeverityChart';
import TopSourceIPsChart from './components/TopSourceIPsChart';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Typography variant="h4" gutterBottom>Alert Dashboard</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <h3>Alert Category Chart</h3>
                      <p>This bar chart displaying the count of alerts categorized by their type. It provides a visual representation of how many alerts fall under each category, helping users quickly understand the distribution of different alert types.</p>
                        <AlertCategoryChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <h3>Time Chart</h3>
                      <p>This line chart isshowing the number of alerts over time, with timestamps on the x-axis and the count of alerts on the y-axis. It helps users identify patterns or spikes in alert occurrences, which can be useful for pinpointing specific times of high alert activity.</p>
                        <AlertTimeChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <h3>Alert Severity Chart</h3>
                      <p>This pie chart showing the distribution of alerts based on their severity levels. Each segment of the pie represents a severity level, and the size of the segment corresponds to the count of alerts at that severity. This chart allows users to assess the overall risk level by visualizing how many alerts are high, medium, or low severity.</p>
                        <AlertSeverityChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <h3>Top SourceIPs Chart</h3>
                      <p>This bar chart highlights the top source IP addresses that have triggered the most alerts. It shows the source IPs on the x-axis and the count of alerts on the y-axis. This visualization is crucial for identifying potentially malicious IP addresses that are generating the most alert activity.</p>
                        <TopSourceIPsChart />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
