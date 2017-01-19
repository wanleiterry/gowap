import React,{Component} from 'react'
import {Link,state} from 'react-router' 

export default class Kind extends Component{
  constructor(props){
    super(props);
    this.state = {number:1};
  }
  render(){
    var items = function(props,index) {

       return <li className='classify'  key={index++}>
                {props.title}
              </li>; 

     }; 
    return  <ul>
              {this.props.data.map(items)}
            </ul>;
  }
}