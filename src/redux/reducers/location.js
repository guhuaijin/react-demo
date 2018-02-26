import * as types from '../types'

/*
    Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
    记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
*/


/*
    设计 State 结构
    尽量把这些数据与 UI 相关的 state 分开。


*/
const initialState = {
    list: [],
    isMore: true
}



/*
    保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
    1.修改传入参数；
    2.执行有副作用的操作，如 API 请求和路由跳转；
    3.调用非纯函数，如 Date.now() 或 Math.random()。

    只要传入参数相同，返回计算得到的下一个 state 就一定相同。
    没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

    时刻谨记永远不要在克隆 state 前修改它。


*/

//reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
export default function locationState(state = initialState, action) {

    // console.log('action', action)

    switch (action.type) {

        case types.GET_LOCATION_MORE:
            return Object.assign({}, state, {
                isMore: action.data
            })
        case types.GET_LOCATION_LIST:

            let { data } = action;
            let list = [];

            if (data && data.length > 0) {
                list = data.map((item) => {
                    return {
                        summary: item.summary,
                        title: item.title,
                        image: item.image,
                        price: item.price
                    }
                })
            }

            //不要修改 state。
            return Object.assign({}, state, {
                list: state.list.concat(list),
                isMore: true
            });
        // return { ...state, list }
        default:
            //在 default 情况下返回旧的 state
            return state;
    }
}


//每个 reducer 只负责管理全局 state 中它负责的一部分。
//每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。