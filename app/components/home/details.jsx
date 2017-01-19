

import React,{Component} from 'react'
import {Link,state} from 'react-router'


 export default class Comment extends Component{
    constructor(props){
    super(props);
    this.state = {};
  }
 
  render(){
     return <ul>{this.props.commons}</ul>;    
  }
}