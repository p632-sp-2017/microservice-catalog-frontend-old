import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Accordion, Panel } from 'react-bootstrap/lib';
import './DataView.css';
import SearchBox from './SearchBox'

class DataView2 extends Component {
  constructor(){
    super();
    this.state = {
      serviceData:{},
      filterData:{}
    }
  }

  handleFilterRows(data){
  data=data.trim();   //added by gulshan on 02/19 to check for blank values as well
  if(data===""){
    this.setState({filterData:this.state.serviceData});
    return;
  }
  let tableData = []
  let tempData = this.state.serviceData;
  tableData = tempData.map(function(dataItem){
    if(dataItem.title.toUpperCase().indexOf(data.toUpperCase())!==-1 || dataItem.description.toUpperCase().indexOf(data.toUpperCase())!==-1){
      return({
        title: dataItem.title,
        description: dataItem.description,
        url: dataItem.url
      });
    }
    else{
      return undefined;
    }
  });
  this.setState({filterData:tableData})
}

componentWillMount(){
  this.setState({
    serviceData : [
      {title:'Microservice 1', description:'Description for Micro Service 1', url:'http://sample1.url'},
      {title:'Microservice 2', description:'Description for Micro Service 2', url:'http://sample2.url'},
      {title:'Microservice 3', description:'Description for Micro Service 3', url:'http://sample3.url'},
      {title:'Microservice 4', description:'Description for Micro Service 4', url:'http://sample4.url'},
      {title:'Microservice 5', description:'Description for Micro Service 5', url:'http://sample5.url'}
    ]
  });
  this.setState({filterData:[
    {title:'Microservice 1', description:'Description for Micro Service 1', url:'http://sample1.url'},
    {title:'Microservice 2', description:'Description for Micro Service 2', url:'http://sample2.url'},
    {title:'Microservice 3', description:'Description for Micro Service 3', url:'http://sample3.url'},
    {title:'Microservice 4', description:'Description for Micro Service 4', url:'http://sample4.url'},
    {title:'Microservice 5', description:'Description for Micro Service 5', url:'http://sample5.url'}
  ]})
}

  render(){
    let tableData = []
    tableData = this.state.filterData.map(function(dataItem,idx){
      if(dataItem !== undefined){
        return <Accordion>
          <Panel header={dataItem.title} eventKey={idx}>
            {dataItem.description}<br/>
            <a href={dataItem.url}>{dataItem.url}</a>
        </Panel>
        </Accordion>
      }
      else {
        return "";
      }
    });

    return (
      <div className="Div-container">
      <SearchBox filterRows={this.handleFilterRows.bind(this)} />
      {tableData}
      </div>
    );
  }
}

export default DataView2;
