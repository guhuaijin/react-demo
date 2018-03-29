import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { Slider } from 'antd'

// import Switch from 'antd/lib/Switch';  // 加载 JS


import './index.scss'

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <DocumentTitle title='My Web App'>
                <div className="box">
                    <Slider />
                </div>
            </DocumentTitle>
        )
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)