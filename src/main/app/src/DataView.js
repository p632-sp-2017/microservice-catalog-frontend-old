import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Table } from 'react-bootstrap/lib';
import './DataView.css';
import SearchBox from './SearchBox'
import FontAwesome from 'react-fontawesome';
import DetailView from './DetailView'


const header = [
  {title:"Title", description:"Description", url:"URL"}
]
var open = false;
//var heightChecked = false;
var initHeight = 120;
var intval = null;
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

handleArrowClick(event){
  let classes = event.target.classList;
  let classToAdd = 'fa-caret-down';
  if(classes.contains('fa-caret-down')){
    classToAdd = 'fa-caret-up';
  }
  classes.remove('fa-caret-down','fa-caret-up');
  classes.add(classToAdd);
  let element = event.target.closest('tr').nextSibling;
  this.slideToggle(element);
}

/*Slide-toggle related code*/

slideToggle(element) {
    window.clearInterval(intval);
    var mdiv = document.getElementById('mdiv');
    mdiv = element;
    if(getComputedStyle(mdiv).getPropertyValue('display') === "none"){
      open = false;
    }
    else{
      open = true;
    }
    if(open) {
      mdiv.style.visibility="hidden";
        var h = mdiv.offsetHeight;
        open = false;
        intval = setInterval(function(){
			h--;
			mdiv.style.height = h + 'px';
			if(h <= 0){
				window.clearInterval(intval);
        mdiv.style.display = 'none';
      }
    }, 1
		);

    }
    else {
      mdiv.style.display = 'block';
      mdiv.style.visibility = "visible";
        h = 0;
        open = true;
	    intval = setInterval(function(){
			h++;
      mdiv.style.height = "auto";
			if(h >= initHeight)
				window.clearInterval(intval);
			}, 1
		);
    }
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
    debugger;
    tableData = this.state.filterData.map((dataItem)=>{
      if(dataItem !== undefined){
        return [<tr>
             <td> {dataItem.title} </td>
             <td> {dataItem.description}</td>
             <td> {dataItem.url}</td>
             <td  onClick={this.handleArrowClick.bind(this)}><FontAwesome className="caret-down" name="caret-down" size="lg" /></td>
           </tr>,
           <tr className="details"><DetailView serviceDetails={dataItem} /></tr>];
      }
      else {
        return "";
      }
    },this);

    return (
      <div className="Div-container">
      <SearchBox filterRows={this.handleFilterRows.bind(this)} />
      <Table responsive hover className="Data">
        <thead>
          {header.map((entry,idx) => (
            <tr>
              <th>{entry.title}</th>
              <th>{entry.description}</th>
              <th>{entry.url}</th>
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody>
        {tableData}

        </tbody>
      </Table>
      </div>
    );
  }
}

export default DataView2;
