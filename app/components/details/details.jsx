import React,{Component} from 'react'
import {Link,state} from 'react-router' 
import Choose from '../choose/choose.jsx'

export default class SearchTop extends Component{
  constructor(props){
    super(props);
    this.state = {show:'0'};
  }
  addCart(){
    if( this.state.show=='0' ){
      this.setState({show:'1'})
    }else{
      this.setState({show:'0'})
    }
    
  }
  render(){
    return<div>  
            <div className='details'>
              <div className='details-container'>
                <div className='details-goods'>
                  <img src='http://img3.imgtn.bdimg.com/it/u=3292014428,470687461&fm=21&gp=0.jpg'/>
                </div>
                <div className='details-introduce' >
                  <div>介绍34567890987634567890介绍莪无法wfuhewiu服务好服务额烦服务飞蛾晚饭额无法莪无法我服务</div>
                  <div className='span'>
                  <span className='collect'></span>
                  <span className='collect-text'>收藏</span>
                  </div>
                </div>
                <div className='details-price'> 
                  <span className='current-price'>￥250.00</span>
                  <span className='ruling-price'>原价￥1234.00</span>
                </div>
                <ul className='Package-mail'>
                  <li>包邮</li>
                  <li>月销量123笔</li>
                  <li className='addres'>库存1234</li>
                  <li className='addres'>江苏无锡</li>
                </ul>
                <ul className='guarantee'>
                  <li><span></span>商家认证</li>
                  <li><span></span>正品优惠</li>
                  <li><span></span>七天退货</li>
                </ul>
              </div>
                <div className='separate'></div>
                <div className='choose' onTouchStart={this.addCart.bind(this)}>
                  <span>选择</span>
                  <span>商品型号</span>
                  <span className='go'>》</span>
                </div>
                <div className='gallery'>
                  <span className='lin'></span>
                  <span className='gallery-lin'>继续拖动，查看图文详情</span>
                  <span className='lin-right'></span>
                </div>
                <div className='product-details'>
                  <h3>产品详情</h3>
                  <ul>
                    <li></li>
                  </ul>
                </div>
            </div>
          <Choose show={this.state.show}/>
          </div>

  }
}