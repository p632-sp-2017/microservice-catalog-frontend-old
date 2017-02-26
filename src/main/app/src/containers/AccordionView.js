import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Accordion, Panel } from 'react-bootstrap/lib';
import {getDataOnStart} from '../actions';
import React from 'react';

const AccordionView = ( props ) => {
const {dispatch, serviceData}  = props;
//   fetch("/catalog").then((response)=>{
//     console.log(response);
//     dispatch(getDataOnStart(response.json()));
//   }
// )
// .catch(e => console.log("Error in getting data"))

let tempData =[{title:'Microservice hello', description:'Hello Description for Micro Service 1', url:'http://sample1.url'}];
let tempData1 =[{title:'Microservice 2323', description:'Hello Description for Micro Service 1', url:'http://sample1.url'}];

let Data = serviceData;
if(null == Data){
  Data = tempData1;
  dispatch(getDataOnStart(tempData));
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
