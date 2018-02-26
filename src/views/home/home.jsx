import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.scss'
import * as actions from '../../redux/actions/location'
import mixin from '../../utils/mixin'

// console.log(Component);

let _key = 0;

@mixin({
    test: () => {
        console.log('mixin')
    }
})
class Home extends Component {
    constructor(props, context) {

        super(props, context);

        this.handleScrollMore = this.handleScrollMore.bind(this)
        this.props.actions.fetchLocationLsit(() => { });
        
        this.testAsyncFn();

        this.test()
      
    }

     testAsyncFn = async () =>{

        // console.log(3333)

        await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log(158)
                resolve();
            }, 2000)
        })

        // console.log(111111)

        
    }

    handleScrollMore = () => {
        if (document.body.scrollTop + window.innerHeight >= document.getElementById('wrap').clientHeight - 200) {
            if (this.props.isMore) {
                this.props.actions.fetchLocationLsit(() => { });
            }
        }
    }

    renderList() {

        const { list } = this.props;

        if (list.length == 0) return;

        let str = [];

        for (let item of list) {
            str.push(
                <div className="item" key={++_key}>
                    <img className="item-image" src={item.image} />
                    <div className="item-title">{item.title}</div>
                    <div className="item-summary">{item.summary}</div>
                </div>
            )
        }
        return str;
    }

    render() {
        let listStr = this.renderList();
        return (
            <div className="wrap" id="wrap">
                {listStr}
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollMore)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollMore)
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return {
        list: state.locationState.list,
        isMore: state.locationState.isMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //bindActionCreators() 自动把多个 action 创建函数 绑定到 dispatch() 方法上。
        actions: bindActionCreators(actions, dispatch)
    }
}

// 返回Connect函数
// function connect(mapStateToProps, mapDispatchToProps, mergeProps)
// wrapWithConnect 第一个参数是，继承react Component对象的一个组件对象


const c = window.c = connect(mapStateToProps, mapDispatchToProps)(Home)
// console.log(c+'')
export default c
