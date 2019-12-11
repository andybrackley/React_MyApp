import React from 'react';
import './App.css';

import CounterWithButton from "./Examples/CounterWithButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="Main-body">
          <CounterWithButton message={"Show Number Of Clicks"} />
      </main>
    </div>
  );
}

export default App;
