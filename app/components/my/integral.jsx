import React,{Component} from 'react'
import {Link,state} from 'react-router' 

export default class Integral extends Component{
   constructor(props){
    super(props);
    console.log( props );
    this.state = {};
  }
  render(){
    return  <div className='integral'>
              <div className='integral-my'>
                <span className='back'></span>
                <span className='integral-title'>我的积分</span>
              </div>
              <div className='No-points'></div>
              <div className='segmentation'></div>
              <div className='rental'>
                <span className='rental-title'>积分总额</span>
                <span className='rental-nb'>12321323分</span>
              </div>
              <div className='rental'>
                <span className='rental-title'>可兑换积分</span>
                <span className='rental-nb'>123213分</span>
              </div>
              <div className='rental'>
                <span className='rental-title'>总成交金额</span>
                <span className='rental-nb'>1232133分</span>
              </div>
              <div className='segmentation'></div>
              <div className='rental'>
                <span className='rental-title'>积分明细</span>
                <span className='integral-details'></span>
              </div>
              <div className='cover'></div>
            </div>
  }
}