import React from 'react';
import {Router} from '@reach/router';

import './App.css';

// COMPONENTS
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';

// FROM VIEWS - STABLE COMPS BEFOR ROUTES!
import SearchBar from './views/SearchBar';



// FOR ERROR
import Error from './components/Error';






function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>

      <Router>
        <People path='/people/:id' />
        <Planets path='/planets/:id' />
        <Starships path='/starships/:id' />
        <Error path='/error' />
      </Router>

    </div>
  );
}

export default App;
