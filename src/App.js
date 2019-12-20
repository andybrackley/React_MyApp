import React from 'react';
import './App.css';

import CounterWithButton from "./Examples/CounterWithButtons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <main className="Main-body">
          <Switch>
            <Route exact path="/"><div>Welcome</div></Route>
            <Route path="/counter">
              <CounterWithButton message={"Show Number Of Clicks"} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
