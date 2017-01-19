import React,{Component} from 'react'
import {Link,state} from 'react-router'
import Footer from './../common/footer.jsx'
import HotSell from './hot-sell.jsx'
import Slider from './slide.jsx'
import Brand from './brand.jsx'
 
export default class Kind extends Component{
  constructor(props){
    super(props);
    this.state = {number:1,sell:[]};
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
          this.setState({sell:data});
          console.log( this.state.sell );
      //   }
      // }
      
    }.bind(this))
  }

  render(){
    return  <div className='homes'>
              <div className='header'>
                <div className='addres'>
                  <span className='addres-name'>杭州</span>
                  <span className='black'></span>
                </div>
                <div className='homes-search'>
                  <input placeholder="这里输入文字"/>
                  <span className='homes-search-img'></span>
                </div>
                <div className='service'>
                  <span className='service-img'></span>
                  <p>找客服</p>
                </div>
              </div>
              <div className='slider'>
                <Slider/>
              </div>
              <div className='nav'>
                <ul>
                  <li>
                    <span className='hot-sell-img'></span>
                    <p>热销排行</p>
                  </li>
                  <li>
                    <span className='seafood-img'></span>
                    <p>水产海鲜</p>
                  </li>
                  <li>
                    <span className='meat-img'></span>
                    <p>牛肉羊肉</p>
                  </li>
                  <li>
                    <span className='eggs-img'></span>
                    <p>肉禽蛋类</p>
                  </li>
                  <li>
                    <span className='flavour-img'></span>
                    <p>调料干货</p>
                  </li>
                  <li>
                    <span className='grain-img'></span>
                    <p>粮油米面</p>
                  </li>
                  <li>
                    <span className='beverage-img'></span>
                    <p>饮料酒水</p>
                  </li>
                  <li>
                    <span className='other-img'></span>
                    <p>其他</p>
                  </li>
                </ul>
              </div>
              <div className='quarantine'> </div>
              <HotSell sell={this.state.sell}/>
              <div className='brand'>
                <div className='brand-recommendation'>品牌推荐</div>
                <div className='brand-recommend'>
                  <div className='brand-left'><img/></div>
                  <div className='brand-right'><img/></div>
                  <div className='brand-right'><img/></div>
                </div>
              </div>
              <Brand brend={this.state.sell}/>
              <Footer types='home'/>
            </div>
  }
}