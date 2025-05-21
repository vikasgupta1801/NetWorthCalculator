# Net Worth Calculator

This is a simple React web application that helps you calculate your total net worth over a specified time period based on:

- **Initial Investment**: The starting amount of money you invest.
- **Recurring Investment**: The amount you add to your investment every year.
- **Growth Rate**: The annual percentage growth rate of your investments.
- **Time Period**: The number of years you want to calculate for.

## How It Works

1. Enter your initial investment, recurring investment per year, expected annual growth rate (in %), and the number of years.
2. Click **Calculate**.
3. The app will display your total net worth after the specified period, factoring in compound growth and recurring investments.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev -- --host
   ```
3. Open your browser to the provided URL (e.g., `http://localhost:5173/`).

## Project Files
- `App.jsx`: Main React component and logic for the calculator.
- `main.jsx`: Entry point for the React app.
- `index.html`: HTML template.
- `package.json`: Project dependencies and scripts.

## License
MIT
