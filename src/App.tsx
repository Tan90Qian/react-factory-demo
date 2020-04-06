import React from "react";
import { Factory } from "./core/inject";
import { globalStores, services } from "./global";
import CountFactory from "./modules/count";

const Count = Factory(CountFactory)
  .receive({ globalStores, services })
  .create();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Count />
      </header>
    </div>
  );
}

export default App;
