import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Roots extends Component {
	constructor(props,context){
	    super(props,context);
	}    
    render() {
        return (
	       	<div>
		        <ul>
		          <li><Link to="/">首页</Link></li>
		          <li><Link to="/detail">详情</Link></li>
		          <li><Link to="/center">个人中心</Link></li>
		          <li><Link to="/home">主页</Link></li>
		        </ul>
		        {this.props.children}
			</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Roots)
