import React,{Component} from 'react'

import {Router,Route,Redirect,IndexRoute,browserHistory,hashHistory, withRouter } from 'react-router'

import Roots from './components/root'
import home from './views/home'

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const history = hashHistory;


const index  = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./views/index').default)
	},'index')
}

const detail  = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./views/detail').default)
	},'detail')
}

const center  = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./views/center').default)
	},'center')
}

/**
 *	路由钩子函数，进入相应页面时触发；
 * 	这里可以对用户，做权限管理的判断
 * 
 */
const auth = (nextState, replace) => {
   	console.log('nextState:', nextState);
   	console.log('replace:', replace);

   	//replace({ pathname: '/center', query:{id:123} })
}

const RouteConfig = (
	<Router history={history} >
		<Route path='/' component={Roots} >
			<IndexRoute component={home} />
			<Route path='home' component={home} onEnter={auth}/>
			<Route path='index' getComponent={index} onEnter={auth}/>
			<Route path='detail' getComponent={detail} onEnter={auth}/>
			<Route path='center' getComponent={center}/>
			<Redirect from='*' to='/' />
		</Route>
	</Router>
)

export default RouteConfig


















