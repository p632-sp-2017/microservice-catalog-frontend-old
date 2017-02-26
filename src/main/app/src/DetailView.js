import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './DetailView.css';

class DetailView extends Component {

  render() {
    let detailHtml = [];
    let allKeys = Object.keys(this.props.serviceDetails);
    for(var i=0;i<allKeys.length;i++){
      var key = allKeys[i];
      debugger
      detailHtml.push(<div>
      <div className="fieldKey">{key}</div>
      <div className="fieldValue">{this.props.serviceDetails[key]}</div></div>);
    }
    return(
      <div>{detailHtml}</div>
    );
  }
}

export default DetailView;
