# Alert Dashboard

This project is a simple React-based dashboard to visualize alert data. It includes several charts to display different aspects of the alert events using dummy data.

## Files

- **src/data.js**: Contains the dummy data used for visualization.
- **src/App.js**: Main application file where the dashboard layout is defined.
- **src/components/**: Directory containing chart components:
  - **AlertCategoryChart.js**: Bar chart displaying the count of alerts by category.
  - **AlertTimeChart.js**: Line chart showing the number of alerts over time.
  - **AlertSeverityChart.js**: Pie chart illustrating the distribution of alert severities.
  - **TopSourceIPsChart.js**: Bar chart highlighting the top source IPs triggering alerts.

## Packages Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React UI framework for styling and components.
- **Recharts**: Charting library for creating responsive and composable charts.
- **@mui/material**: React components library for Material-UI.
- **@emotion/react**, **@emotion/styled**: Emotion for styling components.
