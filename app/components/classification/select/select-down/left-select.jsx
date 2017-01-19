import React,{Component} from 'react'
import {Link,state} from 'react-router' 

export default class LeftSelect extends Component{
   constructor(props){
    super(props);
    console.log( props,'left' );
    this.state = {};
  }

  render(){

      var reactid = 0; 
      var createItem = function(props) {
        console.log( props );

       return <li className='select-down-li'  key={reactid++}>
                <Link className="link" to={{ pathname:'/' ,state:{id :props.auth} }} >
                  <span>{props.title}</span>
                </Link>
              </li>; 

     }; 
     var createItems = function(props){
        return  <Link to='/details'>
                  <li key={reactid++}>
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

     return <div>
              <div className='select-down'>
                <ul className = 'select-down-top'>{this.props.search.map(createItem)}</ul>
              </div>

              <div className='select-goods'>
                <ul>
                  {this.props.search.map(createItems)}
                </ul>
              </div>
            </div>
  }
}