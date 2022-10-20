import React from "react";

export default function App() {
  return (
    <div className="App">
      <section>
        <div id="controlPanel">
          <h1 id="stopButton" class="button">
            Stop
          </h1>
          <h1 id="slowButton" class="button">
            Slow
          </h1>
          <h1 id="goButton" class="button">
            Go
          </h1>
        </div>
        <div id="traffic-light">
          <div id="stopLight" class="bulb"></div>
          <div id="slowLight" class="bulb"></div>
          <div id="goLight" class="bulb"></div>
        </div>
      </section>
    </div>
  );
}
