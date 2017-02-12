/**
* @Author: arpitkhandelwal
* @Date:   11-Feb-2017
* @Last modified by:   arpitkhandelwal
* @Last modified time: 11-Feb-2017
*/

import React, { Component } from 'react';
import DisplayService  from './containers/DisplayService.js'
import MicroserviceData from './MicroserviceData.js'

class App extends Component {

  display(){
    var v1 = [];
    for(var i=0;i<MicroserviceData.length;i++){
      v1.push(
        <div  key={i} >
          <DisplayService title={MicroserviceData[i].title} desc={MicroserviceData[i].description} url ={MicroserviceData[i].url} />
          <hr></hr>
        </div>
      );
    }
    return v1;
  }

  render() {
    return (
      <div>
        <h1> Microservice-catalog</h1>
        <hr></hr>
        {this.display()}
      </div>
    );
  }
}

export default App;
