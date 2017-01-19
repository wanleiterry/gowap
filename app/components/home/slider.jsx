import React, { Component } from 'react' 
import SliderItem from './slideritem.jsx'

export default class Slide extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:100
    }
  }
  componentDidMount(){
    console.log( this.state.data );
    var sta = this.state.data; 
    setInterval(function(){
      sta+=sta;
      star(sta);
      // this.setState({data:sta})
    },1000)
    function star( argument ){
      
    }
    this.setState({data:sta})
    

  }

  move(evevt){
      var wi = 100;

  }

  render(){
    return  <ul className='silidr' onTouchMove={this.move} style={{left:0+'%'}}><SliderItem item={item} count={1}/></ul>
    
   
  }
}
var item = {
  src:'http://pic33.nipic.com/20130916/3420027_192919547000_2.jpg',
  o:1
}