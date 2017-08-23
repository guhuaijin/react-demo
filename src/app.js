
import 'lib-flexible'

import 'assets/scss/main.scss'

import React,{Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import router from './routers.jsx'
import store from './redux'

render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
)