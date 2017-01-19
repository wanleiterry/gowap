import React,{Component} from 'react'
import {Link,state} from 'react-router' 

export default class SearchHead extends Component{
   constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return <div className='search'>
              <div className='search-tpl'></div>
              <div className='search-search'>
                <span className='search-img'></span>
                <input className='search-input' type='text' placeholder="搜索您要的食材" />
              </div>
              <div className='search-message'></div>
           </div>
  }
}