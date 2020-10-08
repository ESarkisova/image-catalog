import React from 'react';
import './App.css';
import Buttons from "./components/Buttons/ButtonsContainer";
import Images from "./components/Images/ImagesContainer";
import AlertComponent from "./components/Alert/AlertComponent";

function App() {
  return (
    <div className="App">
        <AlertComponent />
        <Buttons />
        <Images/>
    </div>
  );
}

export default App;
