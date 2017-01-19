import React,{Component} from 'react'
import {Link,state} from 'react-router' 
import Kind from './kind.jsx'

export default class SearchTop extends Component{
  constructor(props){
    super(props);
    this.state = {data:[],number:1,show:0};
    console.log( this.props.show );
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
          console.log( this.state.data );
      //   }
      // }
      
    }.bind(this))
  }
  values(event){
    this.setState({number: event.target.value});
  }
  subtract(){
    this.setState({number: (this.state.number-1)<1?1:this.state.number-1})
  }
  adds(){
    this.setState({number: this.state.number-0+1})
  }
  shoppingCart(){
    this.setState({show:1})
  }

  render(){
    return  <div className={this.props.show==1?'popup-window show':'popup-window'}>
              <div className='container'>
                <div className='merchandise'>
                  <img src='http://img0.imgtn.bdimg.com/it/u=537561834,2645097582&fm=21&gp=0.jpg'/>
                  <div className='goods'>
                    <div className='introduce'> 介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介</div>
                    <div className='price'>￥250.00</div>
                    <p>商品编号：123456667</p>
                  </div>
                </div>
                <div className='kindn'>
                  <p>种类</p>
                  <Kind data={this.state.data}/>
                </div>
                <div className='kind'>
                  <span className='count'>数量</span>
                  <div className='adds'>
                    <span className='subtract' onTouchStart={this.subtract.bind(this)}>
                      <span className='subtract-img'></span>
                    </span>
                    <input type='number' value={this.state.number}  onChange={this.values.bind(this)} ref='input'/>
                    <span className='add' onTouchStart={this.adds.bind(this)}>
                      <span className='add-img'></span>
                    </span>
                  </div>
                </div>
                <div className='button'>
                  <button className='add-shopping-cart' onTouchStart={this.shoppingCart.bind(this)}>加入购物车</button>
                  <button className='buy-now'>立即购买</button>
                </div>
                <div className={this.state.show==1?'succeed show':'succeed'}>
                  <span className='succeed-cart'></span>
                  <p>已成功添加购物车</p>
                </div>
              </div>
            </div>
  }
}