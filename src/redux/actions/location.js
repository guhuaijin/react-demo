
import * as types from '../types'
import api from '../api'

/*
	Action 本质上是 JavaScript 普通对象。
	我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。
	多数情况下，type 会被定义成字符串常量。
	当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
*/

/*
	除了 type 字段外，action 对象的结构完全由你自己决定。
	我们应该尽量减少在 action 中传递的数据。
*/

/*
	在 Redux 中的 action 创建函数只是简单的返回一个 action:
	这样做将使 action 创建函数更容易被移植和测试。
*/

function getMore(status = false) {
	return {
		type: types.GET_LOCATION_MORE,
		data: status
	}
}


//Action 创建函数
function getLocationList(res) {
	//定义的action对象
	return {
		type: types.GET_LOCATION_LIST,
		data: res.books
	}
}


export function fetchLocationLsit(cb) {
	return (dispath) => {

		//防止执行多次
		dispath(getMore());

		api.getLocalNews((res) => {
			dispath(getLocationList(res));
			cb && cb();
		})
	}
}