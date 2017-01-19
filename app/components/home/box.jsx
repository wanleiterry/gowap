import React,{Component} from 'react'
import {Link,state} from 'react-router'


 export default class Comment extends Component{
    constructor(props){
    super(props);
    this.state = {};
  }
 
  render(){

    var reactid = 0; 
      var createItem = function(props) {

       return <li  key={reactid++} name={props.auth}><Link to={{ pathname:'/po/' ,state:{id :props.auth} }}>{props.title}</Link></li>; 
     }; 
     return <ul>{this.props.common.map(createItem)}</ul>;
    
  }
}

  