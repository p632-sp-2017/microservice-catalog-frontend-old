import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Table } from 'react-bootstrap/lib';
import './DataView.css';

const data = [
  {title:'Microservice 1', description:'Description for Micro Service 1', url:'http://sample1.url'},
  {title:'Microservice 2', description:'Description for Micro Service 2', url:'http://sample2.url'},
  {title:'Microservice 3', description:'Description for Micro Service 3', url:'http://sample3.url'},
  {title:'Microservice 4', description:'Description for Micro Service 4', url:'http://sample4.url'},
  {title:'Microservice 5', description:'Description for Micro Service 5', url:'http://sample5.url'}
];

const header = [
  {title:"Title", description:"Description", url:"URL"}
]


class DataView2 extends Component {
  getData = () => {
    return data;
  };

  render(){
    const Data = this.getData();
    return (
      <div className="Div-container">
      <Table responsive hover className="Data">
        <thead>
          {header.map((entry,idx) => (
            <tr>
              <th>{entry.title}</th>
              <th>{entry.description}</th>
              <th>{entry.url}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {Data.map((entry,idx) => (
            <tr>
              <td>{entry.title}</td>
              <td>{entry.description}</td>
              <td><a href={entry.url}>{entry.url}</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default DataView2;
