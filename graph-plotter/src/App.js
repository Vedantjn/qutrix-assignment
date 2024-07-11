import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import GraphForm from './components/GraphForm';
import GraphPlot from './components/GraphPlot';

const App = () => {
  const [graphData, setGraphData] = useState([]);

  const handleGraphData = (data) => {
    setGraphData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="chart-container">
          {graphData.length > 0 ? (
            <GraphPlot data={graphData} />
          ) : (
            <p>No data to display. Please add data using the form.</p>
          )}
        </div>
        <GraphForm onSubmit={handleGraphData} />
      </div>
    </div>
  );
};

export default App;