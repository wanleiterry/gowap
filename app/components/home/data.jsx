import React,{Component} from 'react'
import Details from './details.jsx'


export default class Index extends Component{
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
      for( var i = 0, l = data.length; i < l; i ++ ){
        // console.log( data[i].auth,this.props.location.state.id  );
        if(data[i].auth==this.props.location.state.id  ){
          // console.log( data[i].auth );
          this.setState({data:data[i].auth});
        }
      }
      
    }.bind(this))
    .catch(function(err){
        console.log("Fetch错误:"+err);
    });

  }
  render(){
    return (
      <div>
        <Details commons={this.state.data}/>
      </div>
    )
  }
}
  
  