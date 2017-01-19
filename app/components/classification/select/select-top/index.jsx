import React,{Component} from 'react'
import {Link,state} from 'react-router' 
import LeftSelect from '../select-down/left-select.jsx'


export default class SearchTop extends Component{
   constructor(props){
    super(props);
    this.state = {
      index:0,
      date:props,
      twoClass:0
    };
                
  }
  componentDidMount(){
    
  }

  _handleClick(e,index){
  
    this.setState({index:e,date:this.props});
    //判断当前点击应对应显示数据
  }
  selectLeft(i){
    this.setState({twoClass:i});
  }

  render(){
      var reactid = 0; 
      var r = {};

      //to={{ pathname:'/' ,state:{id :props.auth} }}
      
     return <div>
              <div className='select'>
                <ul className = 'select-top'>
                  {this.props.search.map(function(props,index) {
                   
                    r= props;

                  if( index == this.state.index ){
                    return  <li onClick={this._handleClick.bind(this,index)} className='select-li select-check'   key={reactid++}>
                              <Link className="link select-link" to={{ pathname:'/' ,state:{id :props.auth} }} >{props.title}</Link>
                            </li>;
                  }else{
                    return  <li onClick={this._handleClick.bind(this,index)} className='select-li' key={reactid++}>
                              <Link className="link" to={{ pathname:'/' ,state:{id :props.auth} }} >{props.title}</Link>
                            </li>; 
                  }
                  
                  },this)}
                </ul>
              </div>
              <div>
                <div className='select-down'>
                  <ul className = 'select-down-top'>{this.props.search.map(function(props,index) {     
                        var array = [];
                        if( props.auth == this.state.index+1 ){console.log( props );
                          for( var i = 0, l = props.vpf.length; i < l; i ++ ){
                            if( i == this.state.twoClass ){
                              array.push(                          
                                <li onClick={this.selectLeft.bind(this,i)} className='select-down-li seleck-down-check-white' key={reactid++}>
                                  <Link className="link" >
                                    <span className='seleck-down-check'>{props.vpf[i]}</span>
                                  </Link>
                                </li>
                              )
                            }else{
                              array.push(                          
                                <li onClick={this.selectLeft.bind(this,i)} className='select-down-li'  key={reactid++}>
                                  <Link className="link" >
                                    <span>{props.vpf[i]}</span>
                                  </Link>
                                </li>
                              )
                            }

                          }
                          return array;
                        }
                      },this )}
                  </ul>
                </div>

                <div className='select-goods'>
                  <ul>
                      {this.props.search.map(function(props,index){
                        if( props.auth == this.state.twoClass+1 ){
                          return  <Link to='/details' key={reactid++}>
                                    <li >
                                      <img/>
                                      <div className='content'>
                                        <h3>{props.titles}</h3>
                                        <div className='introduce'>{props.content}</div>
                                        <span className='weight'>(10斤|￥21/斤)</span>
                                        <div className='price'>
                                          <span className='unit-price'>￥{props.pipc}元</span>
                                          <span className='price-number'>/袋(10斤)</span>
                                          <span className='shopping-cart'></span>
                                        </div>
                                      </div>
                                    </li>
                                  </Link>
                        }
                      },this)}
                  </ul>
                </div>
              </div>
              
            </div>
  }
}