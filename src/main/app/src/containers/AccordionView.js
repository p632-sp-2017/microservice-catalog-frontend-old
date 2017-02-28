import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Accordion, Panel } from 'react-bootstrap/lib';
import {getDataOnStart} from '../actions';
import React from 'react';

const AccordionView = ( props ) => {
  const {dispatch, serviceData}  = props;

let tempData1 =[{title:'Microservice Dummy Data without Server', description:'Description for Micro Service 1', url:'http://sample1.url'}];

let Data = serviceData;
if(null == Data){
  Data = tempData1;
  fetch("api/catalog")
    .then((response)=>{
      console.log(response);
      if(response.status === 200){
        response.json().then((data)=>{
          console.log(data);
          dispatch(getDataOnStart(data))
        })
      }
    })
    .catch( e => console.log(e))
}

return(
  <div>
    <Accordion>
      {Data.map((entry,idx) => (
        <Panel key={idx} header={entry.title} eventKey={idx}>
          {entry.description}<br/>
        <a href={entry.url}>Link</a>
      </Panel>
    ))}
  </Accordion>
</div>
)
}

const mapStateToProps = (state) => {
  return{
    serviceData : state.getDataOnLoad.serviceData
  }
}

export default connect(mapStateToProps)(AccordionView);
