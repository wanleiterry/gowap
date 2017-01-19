import React,{Component} from 'react'
import {Link,state} from 'react-router' 
import SearchHead from './search/index.jsx'
import SearchTop from './select/select-top/index.jsx'
import Footer from './../common/footer.jsx'

export default class Classify extends Component{
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
    .catch(function(err){
        console.log("Fetch错误:"+err);
    });

  }
  render(){
    return <div>
            <SearchHead/>
            <SearchTop search={this.state.data} />
           <Footer types='classify'/>
          </div>
  }
}