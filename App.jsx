import React, { useState } from "react";

function calculateNetWorth(initial, recurring, rate, years) {
  let total = initial;
  for (let i = 1; i <= years; i++) {
    total = (total + recurring) * (1 + rate / 100);
  }
  return total;
}

export default function App() {
  const [initial, setInitial] = useState(0);
  const [recurring, setRecurring] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(1);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const netWorth = calculateNetWorth(
      Number(initial),
      Number(recurring),
      Number(rate),
      Number(years)
    );
    setResult(netWorth.toFixed(2));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Net Worth Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Initial Investment: </label>
          <input type="number" value={initial} onChange={e => setInitial(e.target.value)} required />
        </div>
        <div>
          <label>Recurring Investment (per year): </label>
          <input type="number" value={recurring} onChange={e => setRecurring(e.target.value)} required />
        </div>
        <div>
          <label>Growth Rate (% per year): </label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} required />
        </div>
        <div>
          <label>Time Period (years): </label>
          <input type="number" value={years} onChange={e => setYears(e.target.value)} min={1} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Calculate</button>
      </form>
      {result && (
        <div style={{ marginTop: 20 }}>
          <strong>Total Net Worth after {years} years: ${result}</strong>
        </div>
      )}
    </div>
  );
}
