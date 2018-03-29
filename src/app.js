
import 'lib-flexible'

import 'assets/scss/main.scss'

import React,{Component} from 'react'

import {render} from 'react-dom'

import {Provider} from 'react-redux'

import router from './routers'
import store from './redux'

/*
	<Provider store={store}>
		{router}
	</Provider>

	返回一个对象

*/

// console.log(render);

render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app'),
	()=>{
		console.log('callback')
	}
)