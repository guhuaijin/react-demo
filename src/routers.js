import React, { Component } from 'react'

import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory, withRouter } from 'react-router'

import Roots from './components/root'
import home from './views/home/home'

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const history = hashHistory;

/**
 * 异步加载
 */
// const home = (location,cb) => {
// 	require.ensure([],require => {
// 		cb(null,require('./views/home/home').default)
// 	},'home')
// }

// const detail  = (location,cb) => {
// 	require.ensure([],require => {
// 		cb(null,require('./views/detail').default)
// 	},'detail')
// }

const antd = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('./views/antd/index').default)
	}, 'antd')
}

const marquee = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('./views/marquee/index').default)
	}, 'marquee')
}

/**
 *	路由钩子函数，进入相应页面时触发；
 * 	这里可以对用户，做权限管理的判断
 * 
 */
// const auth = (nextState, replace) => {
//    	console.log('nextState:', nextState);
//    	console.log('replace:', replace);
//    	//replace({ pathname: '/center', query:{id:123} })
// }

const RouteConfig = (
	<Router history={history} >
		<Route path='/' component={Roots} >
			<IndexRoute component={home} />
			<Route path='home' component={home} />
			<Route path='antd' getComponent={antd} />
			<Route path='marquee' getComponent={marquee} />
			<Redirect from='*' to='/' />
		</Route>
	</Router>
);

export default RouteConfig


















