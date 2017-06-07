
import * as types from '../types'
import api from '../api'

function getLocationList(res){
	return {
		type:types.GET_LOCATION_LIST,
		data:res.list
	}
}

export function fetchLocationLsit(cb){
	return (dispath)=>{
		api.getLocalNews((res)=>{
			dispath(getLocationList(res));
			cb && cb();			
		})
	}
}