import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Fonts.css'

import NavInstance from './containers/Navigation'


import Header from './AppHeader'
const App = ({children})=> {
    return (
      <div className="App">
        <Header/>
        <NavInstance/>
        <div>
          {children}
        </div>
      </div>
    );
}

export default App;
