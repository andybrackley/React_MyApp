import React from 'react';
import './App.css';

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: props.message, counter: 1 }
  }

  render() {
    return ( 
      <div>Text={this.state.text} counter={this.state.counter}</div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent message={"Test Message"}></TestComponent>
      </header>
    </div>
  );
}

export default App;
