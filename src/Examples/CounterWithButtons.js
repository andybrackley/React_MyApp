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

    IncCounter = () =>  {
      this.UpdateCounterState(+1)
    } 
  
    DecCounter = () => {
      this.UpdateCounterState(-1)
    } 
  
    render() {
      return ( 
        <section>
            <div id="textMessageId">{this.state.text}</div>
            <section>
                <button data-testid="Button_IncCounter" onClick={this.IncCounter} style={{ verticalAlign:'middle', minWidth:100, minHeight:25 }}>+</button>
                <div>{this.state.counter}</div>   
                <button data-testid="Button_DecCounter" onClick={this.DecCounter} style={{ verticalAlign:'middle', minWidth:100, minHeight:25 }}>-</button>
            </section>
        </section>
     
      )
    }
  }


export default CounterWithButton; 