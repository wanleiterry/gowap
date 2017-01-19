import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, hashHistory,IndexRoute} from 'react-router'
import App from './components/home/app.jsx'
import Index from './components/home/index.jsx'
import Data from './components/home/data.jsx'
import '../sass/app.scss'
import Home from './components/homes/header.jsx'
import Hoose from './components/choose/choose.jsx'
import Slider from './components/home/slider.jsx'
import Classify from './components/classification/index.jsx'
import My from './components/my/my.jsx'
import Details from './components/details/details.jsx' 
import Cart from './components/shopping-cart/shopping-cart.jsx'
import Integral from './components/my/integral.jsx'
import MyOrder from './components/order/my-order.jsx'
// import {createStore} from 'redux'
// import sees from '../scripts/reducer.js'
// import { Provider } from 'react-redux'

// let store = createStore(sees)
// console.log( store,13 );
// // store.dispatch(show())

const classif = (location,callback) =>{
            require.ensure([],function(require){
              
              callback(null,require('./components/classification/index.jsx').default
                
                );
            })
          }

const my = (location,callback) =>{
            require.ensure([],function(require){
              
              callback(null,require('./components/my/my.jsx').default
                
                );
            })
          }
const hom = (location,callback) =>{
            require.ensure([],function(require){
              
              callback(null,require('./components/homes/header.jsx').default
                
                );
            })
          }

ReactDom.render(
  (
    <Router history = {hashHistory}>
      <Route path = '/' component={App}>
        <IndexRoute component = {Home}/>
        <Route path = '/po' component = {Data}/>
      <Route path = '/home' getComponent={hom}/>
        <Route path = '/classify' getComponent={classif}/>
        <Route path = '/cart' component = {Cart}/>
        <Route path = '/my' getComponent = {my}>
          <Route path = '/integral' component = {Integral}/>
        </Route>
        <Route path = '/details' component = {Details}/>
      </Route>
    </Router>
  ),document.getElementById('content')
)