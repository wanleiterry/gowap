import React,{Component} from 'react';

export default class SlideItem extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {count,item} = this.props;
    let width = 100/count+'%';
    return (
      <li className='slide-item' style={{width:width}}>
        <img src = {item.src} alt = {item.alt} />
      </li>
    )
  }
}