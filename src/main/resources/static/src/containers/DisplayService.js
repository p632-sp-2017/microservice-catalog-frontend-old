/**
* @Author: arpitkhandelwal
* @Date:   11-Feb-2017
* @Last modified by:   arpitkhandelwal
* @Last modified time: 11-Feb-2017
*/
import React from 'react';

const display =  (props) => {
  return (
    <div>
      <h1> Title : {props.title} </h1>
      <h1> Description : {props.desc} </h1>
      <h1> URL : {props.url} </h1>
    </div>
  );
};

export default display;
