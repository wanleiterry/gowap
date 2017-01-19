import React,{Component} from 'react'
import {Link,state} from 'react-router'
import ShoppingCart from './cart.jsx'

export default class SearchTop extends Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  componentDidMount(){
    function status(response){
      if(response.status>=200 && response.status<300){
          return Promise.resolve(response);
      }
      else{
          return Promise.reject(new Error(response.statusText));
      }
    }
    function json(response){
        return response.json();
    }
    fetch("http://localhost:3000/posts",{
      method:'GET'
    })
    .then(status)
    .then(json)
    .then(function(data){
      
      // for( var i = 0, l = data.length; i < l; i ++ ){
      //   // console.log( data[i].auth,this.props.location.state.id  );
        // if(data[i].auth==this.props.location.state.id  ){
          // console.log( data[i].auth );
          this.setState({data:data});
      //   }
      // }
      
    }.bind(this))
  }
  render(){
    return  <div className='shopping-cart'>
              <ShoppingCart data={this.state.data}/>
              
            </div>
  }
}