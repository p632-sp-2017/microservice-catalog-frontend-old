import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Accordion, Panel } from 'react-bootstrap/lib';

const data = [
  {title:'Microservice 1', description:'Description for Micro Service 1', url:'http://sample1.url'},
  {title:'Microservice 2', description:'Description for Micro Service 2', url:'http://sample2.url'},
  {title:'Microservice 3', description:'Description for Micro Service 3', url:'http://sample3.url'},
  {title:'Microservice 4', description:'Description for Micro Service 4', url:'http://sample4.url'},
  {title:'Microservice 5', description:'Description for Micro Service 5', url:'http://sample5.url'}
];

class AccordionView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data2: []
    };
  }

componentDidMount() {
  var _this = this;
  fetch("/catalog").then(r => r.json())
  .then(data => _this.setState({data2: data}))
  .catch(e => console.log("Error in getting data"))

  /*fetch("/catalog").then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) {
        // process your JSON further
        _this.setState({data2: json});
        console.log("Got some data from catalog");
      });
    } else {
      console.log("Oops, we haven't got JSON!", json);
    }
  });*/
};


  getData = () => {
    return this.state.data2;
  };

  render(){
    const Data = this.getData();
    return(
      <div>
        <Accordion>
          {Data.map((entry,idx) => (
            <Panel header={entry.title} eventKey={idx}>
              {entry.description}<br/>
              <a href={entry.url}>Link</a>
            </Panel>
          ))}
        </Accordion>
      </div>
    )
  }
}

export default AccordionView;
