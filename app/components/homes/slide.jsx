import React,{Component} from 'react'
import {Link,state} from 'react-router'


export default class Slider extends Component{
  constructor(props){
    super(props);
    this.state = {number:130,m:0,startX:0,startY:0,q:0};
  }
  componentDidMount(){
    setInterval(function(){
      if( this.state.m<=(-104) ){
        this.setState({m:0});
      }else if( this.state.m==(-78.6) ){
        this.setState({q:1});
        this.setState({m:(this.state.m)-26.2});
        setTimeout(function(){
        this.setState({m:0});
        }.bind(this),1000);
      }else if( this.state.m==(0) ){
        this.setState({q:0});
        this.setState({m:(this.state.m)-26.2});
      }
      else if(this.state.m>=(-104)){
        this.setState({m:(this.state.m)-26.2});
      }
      
    }.bind(this),6000)
  }
  move(event){
    console.log(event.nativeEvent.changedTouches[ 0 ].clientX,
    event.nativeEvent.changedTouches[ 0 ].clientX );
    this.setState({startX:event.nativeEvent.changedTouches[ 0 ].clientX});
    this.setState({starty:event.nativeEvent.changedTouches[ 0 ].clientX})
    
  }
  end(event){
    if( this.state.startX> event.nativeEvent.changedTouches[ 0 ].clientX){
      this.setState({m:(this.state.m)-26.2});
    }else{
      this.setState({m:(this.state.m)+26.2});
    }
//     console.log( this.state.startX,this.state.startX,'12232132' );
// console.log(event.nativeEvent.changedTouches[ 0 ].clientX,
//     event.nativeEvent.changedTouches[ 0 ].clientX );
  }
  render(){
    return  <div className='slide-component'>
              <ul style={{width:this.state.number+'rem',marginLeft:this.state.m+'rem'}} onTouchStart={this.move.bind(this)} onTouchEnd={this.end.bind(this)}>
                <li>
                  <img src='http://ximg.tuxi.com.cn/i-1yxdownimgages/2013/11/18/9e2d94ef-f3d9-41c2-82ec-5a60064e01ab.jpg'/>
                </li>
                <li><img src='http://www.people.com.cn/mediafile/pic/20151021/85/10103181652196403437.jpg'/></li>
                <li><img src='http://www.ipb.cc/uploads/allimg/c150302/1425262O41E0-154A3.jpg'/></li>
                <li><img src='http://imgsrc.baidu.com/forum/pic/item/5749034f78f0f736f7eeddd90a55b319eac41387.jpg'/></li>
              </ul>
              <div className={this.state.q==1? 'last last-left':'last'}><img src='http://ximg.tuxi.com.cn/i-1yxdownimgages/2013/11/18/9e2d94ef-f3d9-41c2-82ec-5a60064e01ab.jpg'/></div>
              <div className='slide-point'>
                <ul>
                  <li className={this.state.m/26.2==0?'point current':'point'}></li>
                  <li className={this.state.m/26.2==-1?'point current':'point'}></li>
                  <li className={this.state.m/26.2==-2?'point current':'point'}></li>
                  <li className={this.state.m/26.2==-3?'point current':'point'}></li>
                </ul>
              </div>

            </div>
  }
}