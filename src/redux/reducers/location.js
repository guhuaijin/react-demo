import * as types from '../types'

const initialState = {
    list: []
}

export default function locationState(state = initialState, action) {
    switch (action.type) {
        case types.GET_LOCATION_LIST:

        	let { data } = action;
        	let list = [];

        	if( data && data.length > 0 ){
        		list = data.map((item)=>{
        			return {
        				summary: item.summary,
        				title: item.title,
        				image: item.image,
        				price: item.price
        			}
        		})
        	}

        	console.log(list);
            return Object.assign({}, state, {list});
        default:
            return state;
    }
}
