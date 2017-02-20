import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './SearchBox.css';
//import { FieldGroup } from 'react-bootstrap/lib';
import './Fonts.css';

class SearchBox extends Component {
  handleChange(e){
    this.setState({ value: e.target.value });
  }

  handleKeyPress(e){
    this.props.filterRows(this.refs.searchbox.value);
  }

  render() {
    return(
      <div className="Search-box">
        <input type="search" onKeyUp={this.handleKeyPress.bind(this)} ref="searchbox" id="search" placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBox;
