import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




class Roots extends Component {

	static defaultProps = {
		title:'123'
	}

	constructor(props,context){
	    super(props,context);

	} 
	componentWillMount(){   //会在首次渲染之前调用一次，
	}  
    render() {
        return (
	       	<div className="container">
                <ReactCSSTransitionGroup component="div" className="content" transitionName="carousel1" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
    		        	{ this.props.children }
                </ReactCSSTransitionGroup>
			</div>
        )
    }
    //真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。
    //在服务端中，该方法不会被调用。
    componentDidMount(){  
    	// console.log('root this.props:', this.props)
    }
    //组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state
    componentWillReceiveProps(nextProps){  

    }
    //组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
	//在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用
    shouldComponentUpdate(){
    	return true;
    }
    //接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
    componentWillUpdate(){

    }
    //完成渲染新的props或者state后调用，此时可以访问到新的DOM元素
    componentDidUpdate(){

    }
    //组件被移除之前被调用
    componentWillUnmount(){}
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Roots)
