import React,{Component} from 'react'
import Comment from './box.jsx'
import Header from './header.jsx'

export default class Index extends Component{
  // static defaultProps() {
  //   common:'123456'

  // };
  constructor(props){
    super(props);
    console.log( props)
    this.state = {data:[]};
    
  }
  
  
//   Index.defaultProps = {
//   color: 'blue'
// };
  componentDidMount(){
    const {store} = this.context;
    // console.log( store.getState() );

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
      this.setState({data: data});
    }.bind(this))
    .catch(function(err){
        console.log("Fetch错误:"+err);
    });
  }
  show(){
    alert(1)
  }

  render(){
    return (
      <div>
        <Header/>
        <Comment common={this.state.data}/>
        <div onClick={this.show}>234567890</div>
      </div>
    )
  }
}

  
  