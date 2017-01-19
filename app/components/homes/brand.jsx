import React,{Component} from 'react'
import {Link,state} from 'react-router'

export default class Brand extends Component{
  constructor(props){
    super(props);
    this.state = {number:1};
  }
  render(){
    return <div>
             {this.props.brend.map(function(props,index){
              return  <div className='brand-details'>
                        <div className='brand-tetle'>
                          <span className='aquatic-product-img'></span>
                          <span className='aquatic-product-text'>肉禽蛋类</span>
                          <span className='aquatic-product-more'>
                            <span className='brand-details-more'>查看更多</span>
                            <span className='brand-details-more-img'></span>
                          </span>
                        </div>
                        <div className='brand-recommend-details'>
                          <ul>
                            <li>
                              <div className='brand-recommend-img'>
                                <img/>
                              </div>
                              <p>商品名</p>
                              <div className='brand-p'>
                                <span className='brand-price'>￥250/斤</span>
                                <span className='brand-price-original'>293/斤</span>
                              </div>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                        <div className='isolation'></div>
                      </div>
             })}
            </div>
  }
}