import React, { useEffect } from 'react';
import './App.css';
import Aurora from './components/Aurora';
import Magnet from  './components/Magnet';
import StarBorder from './components/StarBorder';
import Counter from './components/Counter';

function App() {
    useEffect(() => {});
    return (
    <div className="App">
      <header className="App-header">
        <title>My Website</title>
        <Aurora
          className="aurora"
          colorStops={["#56CCF2", "#27AE60", "#1ABC9C"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Magnet padding={20} disabled={false} magnetStrength={10}>
          <img className="syflag" src="https://cdn.britannica.com/50/4550-050-3D264DD7/Flag-Syria.jpg" alt="" width="20%"></img>
        </Magnet>
        <div className='buttons'>
          <StarBorder
            as="container"
            className="textc"
            color="cyan"
            speed="5s"
          >
            <p className="text">This is Adnan's Page</p>
          </StarBorder>
        </div>
        <Counter className="counter" />
      </header>
    </div>
  );
}

export default App;