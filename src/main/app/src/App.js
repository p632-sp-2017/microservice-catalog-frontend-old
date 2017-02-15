import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ViewData from './DataView';
import SearchBox from './SearchBox';
import './Fonts.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Micro Service Catalog</h2>
          <div className="App-intro">
            <SearchBox/>
          </div>
        </div>



        <div>
          <ViewData />
        </div>
      </div>
    );
  }
}

export default App;
