import React, { Component } from 'react'
import { connect } from 'react-redux'
import './detail.scss'

class Detail extends Component {
	constructor(props,context){
	    super(props,context);
	}
    render() {
        return (<div className="detail">详情12312</div>)
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
