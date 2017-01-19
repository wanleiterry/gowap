import React,{Component} from 'react'
import {Link,state} from 'react-router'
import Footer from './../common/footer.jsx'
import HotSell from './hot-sell.jsx'

export default class Kind extends Component{
  constructor(props){
    super(props);
    this.state = {number:1};
  }

  render(){
    return  <div className='hot-sells'>
              <div className='hot-sells-head'>
                <div className='hot-sells-title'>热销专场</div>
                <span className='hot-sells-more'>
                  <span className='hot-sells-more-img'></span>
                  <span className='hot-sells-more-text'>查看更多</span>
                </span>
              </div>
              <ul className='hot-sells-goods'>
              {this.props.sell.map(function(props,index){
                return  <li key={index}>
                          <div className='hot'></div>
                          <div className='hot-sells-goods-img'></div>
                          <div className='hot-sells-goods-content'>
                            <span className='hot-sells-goods-introduce'>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</span>
                            <div className='hot-sells-goods-addres'>致力进口</div>
                            <div className='hot-sells-goods-price-cart'>
                              <span className='hot-sells-goods-price'>￥250.00</span>
                              <span className='hot-sells-goods-cart'></span>
                            </div>
                            <div></div>
                            <div className='hot-sells-goods-distribution'>
                              <span className='distribution'>免配送费</span>
                              <span>起批量：1箱</span>
                            </div>
                          </div>
                          <div className='isolation'></div>
                        </li>

              })}
              </ul>
            </div>
  }
}