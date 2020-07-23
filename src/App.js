import React from "react";

function GrandSon() {
  return <h6>孫です</h6>;
}

function Child() {
  return (
    <dvi>
      <h4>子供です</h4>
      <GrandSon />
    </dvi>
  );
}

function App() {
  return (
    <div>
      <h1>親です</h1>
      <Child />
    </div>
  );
}

export default App;
