import React, { useState } from 'react';

const GraphForm = ({ onSubmit }) => {
  const [label, setLabel] = useState('');
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      label,
      xAxis: xAxis.split(',').map(Number),
      yAxis: yAxis.split(',').map(Number),
    });
    setLabel('');
    setXAxis('');
    setYAxis('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          X-Axis Data (comma separated):
          <input
            type="text"
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Y-Axis Data (comma separated):
          <input
            type="text"
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Plot Graph</button>
    </form>
  );
};

export default GraphForm;
