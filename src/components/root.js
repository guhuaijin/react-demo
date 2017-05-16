import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Roots extends Component {
	constructor(props,context){
	    super(props,context);
	}    
    render() {
        return (
	       	<div className="container">
		        <div className="content">
		        	{this.props.children}
		        </div>
		        <ul className="footer">
		         	<li><Link to="/home">主页</Link></li>
		        	<li><Link to="/index">首页</Link></li>
		         	<li><Link to="/detail">详情</Link></li>
		         	<li><Link to="/center">个人中心</Link></li>
		        </ul>
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
