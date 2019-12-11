import React from 'react';

/*
   Example using props to contain an initial message and some state that gets updated
   via events.

   There's also an example of using some inline css styling for the button:
       <button onClick={this.IncState} style={{ verticalAlign:'middle' }}>+</button>
    NOTE: it targets the css property 'vertical-align' but for inline compilation you replace the '-' with camelCase
*/

class CounterWithButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: props.message, counter: 0 }
    }
  
    UpdateCounterState = (incBy) => {
        this.setState( { counter: this.state.counter + incBy })
    }

    Clear(props) {
      var clearClicked = () => {
        this.setState ({ counter: 0 }); 
      }
    
      return (
        <div><button data-testid="Button_Reset" onClick={clearClicked}>Reset</button></div>
      )} 

    render() {
      return ( 
        <section>
            <div data-testid="Text_Message" id="textMessageId">{this.state.text}</div>
            <section>
                <button data-testid="Button_IncCounter" onClick={() => this.UpdateCounterState(+1) } style={{ verticalAlign:'middle', minWidth:100, minHeight:25 }}>+</button>
                <div data-testid="Text_Counter">{this.state.counter}</div>   
                <button data-testid="Button_DecCounter" onClick={() => this.UpdateCounterState(-1) } style={{ verticalAlign:'middle', minWidth:100, minHeight:25 }}>-</button>
                <div>{this.Clear(this.state)}</div>
            </section>
        </section>
     
      )
    }
  }


export default CounterWithButton; 