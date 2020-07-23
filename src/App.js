import React from "react";
import "./App.css";

function App() {
  function buttonFunc(text) {
    alert(text);
  }

  return (
    <div>
      <h1>React</h1>
      <p>gitの２回目のコミット</p>
      <button onClick={() => buttonFunc("アラート")}>ボタン</button>
    </div>
  );
}

export default App;
