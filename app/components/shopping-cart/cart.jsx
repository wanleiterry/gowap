import React,{Component} from 'react'
import {Link,state} from 'react-router'
import Footer from './../common/footer.jsx'

export default class SearchTop extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      number:1,
      showAll:0,
      showPart:0,
      showOnly:0
    };
  }
  values(event){
    this.setState({number: event.target.value});
  }
  subtrac(){
    this.setState({number: (this.state.number-1)<1?1:this.state.number-1})
  }
  adds(){
    this.setState({number: this.state.number-0+1})
  }
  checkPart(){
    if( this.state.showPart=='1' ){
      this.setState({showPart:0})
      this.setState({showOnly:0})
    }else{
      this.setState({showPart:1})
      this.setState({showOnly:1})
    }
  }
  check(){
    console.log( this.state.showAll );
    if( this.state.showAll=='1' ){
      this.setState({showAll:0})
      this.setState({showPart:0})
      this.setState({showOnly:0})
    }else{
      this.setState({showAll:1})
      this.setState({showPart:1})
      this.setState({showOnly:1})
    }
  }
  checkOnly(){
    if( this.state.showOnly=='1' ){
      this.setState({showOnly:0})
    }else{
      this.setState({showOnly:1})
    }
  }
  starts(event){
    console.log( event.pageX );
    console.log( event.pageX,'starts' );
    console.log( event.pageY,'starts');
  }
  mover(event){
    console.log( event.pageX,'mover' );
    console.log( event.pageY,'mover' );
  }
  render(){
    var reactid = 0; 
 
    return  <div>
              {this.props.data.map(function(props) {

              return  <div key={reactid++}>
                        <div className='trading' key={reactid++}>
                          <div className='shop-name'>
                            <div className={this.state.showPart==1?'check check-item':'check'} onTouchStart={this.checkPart.bind(this)}></div>
                            <div className='name'>
                              <span className='img'></span>
                              <span className='title'>小象龙虾管</span>
                              <span className='go'></span>
                            </div>
                            <div className='remove'></div>
                          </div> 
                          <ul key={reactid++}>
                            <li onTouchStart={this.starts.bind(event)}>
                              <span className={this.state.showOnly==1?'imgs check-item':'imgs'} onTouchStart={this.checkOnly.bind(this)}></span>
                              <img/>
                              <div className='content'>
                                <div className='introduce'>介绍介绍介绍介绍介绍介绍介绍介绍</div>
                                <div className='price-number'>
                                  <span className='price'>￥250.00</span>
                                  <div className='adds'>
                                    <span className='subtract' onTouchStart={this.subtrac.bind(this)}>
                                      <span className='subtract-img'></span>
                                    </span>
                                    <input type='number' value={this.state.number}  onChange={this.values.bind(this)}  ref='input'/>
                                    <span className='add' onTouchStart={this.adds.bind(this)}>
                                      <span className='add-img'></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className='interval'></div>
                        </div> 
                        <div className='interval'></div>
                      </div>
                }.bind(this))}
                  <div className='settlement'>
                    <div className= {this.state.showAll==1?'check check-item':'check'} onTouchStart={this.check.bind(this)}></div>
                    <span className='check-all'>全选</span>
                    <button>去结算</button>
                    <div className='total'>
                      <span className='totals'>合计:</span>
                      <span className='price'>￥124</span>
                      <span className='logistics'>免物流费用</span>
                    </div>
                    
                  </div>
                  <Footer types='cart'/>
              </div>;
                     

  }
}