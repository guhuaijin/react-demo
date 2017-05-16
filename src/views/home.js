import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
	constructor(props,context){
	    super(props,context);
	}
    render() {
        return (<div>'/' 默认是home页面</div>)
    }
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
