import React,{Component} from 'react'

import {Router,Route,Redirect,IndexRoute,browserHistory,hashHistory} from 'react-router'

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

const RouteConfig = (
	<Router history={history}>
		<Route path='/' component={Roots}>
			<IndexRoute component={home} />
			<Route path='home' component={home} />
			<Route path='index' getComponent={index} />
			<Route path='detail' getComponent={detail} />
			<Route path='center' getComponent={center} />
			<Redirect from='*' to='/' />
		</Route>
	</Router>
)

export default RouteConfig


















