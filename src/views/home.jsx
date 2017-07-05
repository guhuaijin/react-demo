import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.scss'
import * as actions from '../redux/actions/location'

let _key = 0;

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.actions.fetchLocationLsit(() => {})

    }
    renderList() {

  		const { list } = this.props;
  		
  		if(list.length == 0) return;

  		let str = [];

  		for(let item of list){
  			str.push(
  				<div className="item" key={++_key}>{item.title}</div>
  			)
  		}
		
		  return str;
	
    }
    render() {

    	let listStr = this.renderList();

        return (<div>{listStr}</div>)
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.locationState.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
