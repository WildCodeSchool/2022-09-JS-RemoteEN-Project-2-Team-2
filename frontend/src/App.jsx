import React from "react";
import MainContainer from "./components/main-container/main-container";
import SavedLocations from "./components/SavedLocations/SavedLocations";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <SavedLocations />
    </div>
  );
}

export default App;
