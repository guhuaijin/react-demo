import React, { Component } from 'react'
import { connect } from 'react-redux'

import Marquee from 'react-marquee'
import './index.css';

class MarqueePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loop: false,
            loopData: [{ txt: "这是一条数据1" }, { txt: "这是一条数据2" }, { txt: "这是一条数据3" }, { txt: "这是一条数据4" }]
        }
    }
    render() {
        let { loop, loopData } = this.state;
        return (
            <div>
                <div className="box">
                    <Marquee loop={loop} loopData={loopData} getMarquee={this.getMarquee} />
                </div>
                <div className="botton" onClick={this.runMarquee}>运动</div>
                <div className="botton" onClick={this.stopMarquee}>暂停</div>
            </div>
        )
    }

    getMarquee = (params) => {
        this.marqueeParams = params
    }

    stopMarquee = () => {
        this.marqueeParams.stopMarquee();
    }

    runMarquee = () => {
        this.marqueeParams.runMarquee();
    }

}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MarqueePage)