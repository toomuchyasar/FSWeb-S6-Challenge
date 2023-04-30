import axios from 'axios';
import React, { useEffect } from 'react';
import Karakter from './components/Karakter';


const App = () => {
  
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <hr />
       <Karakter />
    </div>
  );
}

export default App;
