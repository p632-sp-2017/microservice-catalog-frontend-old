import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './SearchBox.css';
//import { FieldGroup } from 'react-bootstrap/lib';
import './Fonts.css';

class SearchBox extends Component {
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return(
      <div className="Search-box">
        <input type="search" id="s" placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBox;
