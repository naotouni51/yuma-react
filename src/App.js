import React, { useState } from "react";

function App() {
  const [dom, setDom] = useState(false);

  function domRender() {
    if (dom) {
      return (
        <div>
          <h1>HTMLです2</h1>
          <div>
            <div>domの説明</div>
            <div>domの説明2</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>HTMLです</h1>
          <div>
            <div>domの説明</div>
            <div>domの説明2</div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "yellow",
          height: 60,
          fontSize: 40,
        }}
      >
        REACT DOM
      </div>

      {domRender()}

      <button onClick={() => setDom(!dom)}>DOM切替ボタン</button>
    </div>
  );
}

export default App;
