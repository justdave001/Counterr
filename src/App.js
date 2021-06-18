import React, { useState } from "react";

import "./App.css";

//initialize state of object  to give id for
//uniquely id'ing btns and factor gives
//incremental value for "{value}'s" and can be changed
//if needed
const data = [
  { id: 1, value: 0, factor: 1 },
  { id: 2, value: 0, factor: 1 },
  { id: 3, value: 0, factor: 1 },
  { id: 4, value: 0, factor: 1 }
];
const Counterr = ({ id, value, onDecrement, onIncrement }) => {
    return (
      <div className="counter">
        
        <div className="counter-controls">
            <p>{value}</p>
          <button className="button-is-danger-is-small" onClick={onDecrement}>
            -
          </button>
          <button className="button is-success is-small" onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
    );
  };
function App() {
  //object list to return value at state and set function 
  //for returning updates (state (val), setState(func()))
  //"state" is set to the have the initial 
  //data object as its value
  const [state, setState] = useState(data);

  // "[sum, setSum]" object instatiated  @ 0 
  //adds to values of states gotten from 
  // buttons during loop
  const [sum, setSum] = useState(0);


  //create decrement function to that takes in
  //id and the factor of increase as parameters
  //and makes use of that factor for decreasing 
  //value of button (can be either by 1,2,3... depending
  //--on magnitude given in "data")
  const onDecrement = (id, factor) => {
    //changeable list to store previous state values
    //for later update
    let updateState = [...state];
    //object that holds the id for pointing to button
    let point = { ...state[id] };
    //let point have value
    point.value = point.value - Number(factor);
    //find btn for update
    updateState[id] = point;
    //perform sum
    setSum((prevSum) => prevSum - Number(factor));
    //update value of state
    setState(updateState);
  };
//do same as for "onDecrement" but add change 
//"-" to + as it calls for increasing value
  const onIncrement = (id, factor) => {
    let updateState = [...state];
    let point = { ...state[id] };
    point.value = point.value + Number(factor);
    updateState[id] = point;
    setSum((prevSum) => prevSum + Number(factor));
    setState(updateState);
  };

  return (
    <div className="App">
        <h1>Hello there, I'm counter</h1>
      <div>
        {/* loop to put all right element ids with button increase/dec */}
        {state.map((counter) => (
          <Counterr
            //set attributes to be used by Counterr Component
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncrement={() => onIncrement(counter.id - 1, counter.factor)}
            onDecrement={() => onDecrement(counter.id - 1, counter.factor)}
          />
        ))}
      </div>
      <p><strong>The sum of all values is: <b>{sum}</b></strong></p>
    </div>
    
  );
}
export default App;