import React, { useState } from "react";

function Parent() {
  const [counter, setCounter] = useState(0);

  function onAddClicked() {
    setCounter(counter + 1);
  }

  function onRemoveClicked() {
    setCounter(counter - 1);
  }

  function onSonClicked() {
    console.log("Son clicked in parent " + counter);
    onRemoveClicked();
  }

  return (
    <div>
      <h1>Parent</h1>
      <div>Counter : {counter}</div>
      <button onClick={onAddClicked}> Add</button>
      <button onClick={onRemoveClicked}> Remove</button>
      <h1>-----------------------------------</h1>
      <Daughter counter={counter} onButtonClicked={onAddClicked} />
      <Son>
        Son : {counter}
        <button
          onClick={function () {
            onSonClicked();
          }}
        >
          Remove
        </button>
      </Son>
    </div>
  );
}

export default Parent;

function Son(props) {
  console.log(props);
  const { counter, onButtonClicked, children } = props;
  return (
    <div>
      <h1> JE SUIS LE FILS </h1>

      {children}
    </div>
  );
}

function Daughter({ counter, onButtonClicked }) {
  return (
    <div>
      Daughter : {counter}
      <button onClick={onButtonClicked}>Add</button>
    </div>
  );
}
