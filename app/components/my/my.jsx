import React,{Component} from 'react'
import {Link,state} from 'react-router' 
import Footer from './../common/footer.jsx'

export default class SearchTop extends Component{
   constructor(props){
    super(props);
    console.log( props );
    this.state = {};
  }

  render(){
    return  <div>
              <header className='my-header'>
                <div className='my-set'></div>
                <div className='my-data'>
                  <img src='./imgs/tpl.png'/>
                  <span className='my-name'>U菜城供应商</span>
                  <span className='my-grade'>等级</span>
                </div>
              </header>
              <nav className='my-nav'>
                <ul>
                  <li>
                    <span className='payment payment-img back' ></span>
                    <p>待付款</p>
                  </li>
                  <li>
                    <span className='payment shipments-img back'></span>
                    <p>待发货</p>
                  </li>
                  <li>
                    <span className='payment not-receiving back'></span>
                    <p>待收获</p>
                  </li>
                  <li>
                    <span className='payment refund-img back'></span>
                    <p>退款/退货</p>
                  </li>
                </ul>
              </nav>
              <div className='isolation'></div>
              <div className='about-me'>
                <ul>
                  <li>
                    <span className='the-order order'></span>
                    <p>我的订单</p>
                  </li>
                  <li className='border'>
                    <span className='the-order collect back'></span>
                    <p>我的收藏</p>
                  </li>
                  <li>
                    <span className='the-order address'></span>
                    <p>收货地址</p>
                  </li>
                  <Link to='/integral'>
                    <li>
                      <span className='the-order integral back'></span>
                      <p>我的积分</p>
                    </li>
                  </Link>
                  <li className='border'>
                    <span className='the-order service back'></span>
                    <p>客服中心</p>
                  </li>
                  <li></li>
                </ul>
              </div>
              <Footer types='my'/>
            </div>
  }
}