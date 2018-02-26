import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

//createStore(reducer, preloadedState, enhancer)
let store = createStore(
	/*	
		reducer
		源码 combination 函数
		遍历执行 reducer 返回 state 对象
	*/
	reducer,
	//第二个参数是可选的, 用于设置 state 初始状态。
	applyMiddleware(thunk)
	
)

window.store = store;

export default store
