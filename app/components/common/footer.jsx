import React,{Component} from 'react'
import {Link,state} from 'react-router' 

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return <div className='footer'>
            <ul>
              <Link to='/home'>
                <li>
                  <span className={this.props.types=='home'?'home homes':'home'}></span>
                  <p className={this.props.types=='home'?'homes-p':''}>首页</p>
                </li>
              </Link>
              <Link to='/classify'>
                <li>
                  <span className={this.props.types=='classify'?'classify classifys':'classify'}></span>
                  <p className={this.props.types=='classify'?'classifys-p':''}>分类</p>
                </li>
              </Link>
              <Link to='/cart'>
                <li>
                  <span className={this.props.types=='cart'?'cart carts':'cart'}></span>
                  <p className={this.props.types=='cart'?'carts-p':''}>采购车</p>
                </li>
              </Link>
              <Link to='/my'>
                <li>
                  <span className={this.props.types=='my'?'my mys':'my'}></span>
                  <p className={this.props.types=='my'?'mys-p':''}>我的</p>
                </li>
              </Link>
            </ul>
           </div>
  }
}