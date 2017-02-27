import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import DataView from './DataView';
import './Fonts.css'
import AccordionView from './containers/AccordionView';
import AppHeader from './AppHeader';

const App = ()=> {
    return (
      <div className="App">
        <AppHeader />
        <DataView />
        <AccordionView />
      </div>
    );
}

export default App;
