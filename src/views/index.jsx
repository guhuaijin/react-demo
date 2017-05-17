import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'


class Index extends Component {
	constructor(props,context){
	    super(props,context);
	}
    render() {
        return (<div className="index">首页</div>)
    }
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
