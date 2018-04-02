import React, { Component } from 'react'
import { connect } from 'react-redux'

import ScrollMenu from 'react-scroll-menu'

import './index.css'

class ScrollMenuPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuItem: [
                { itemName: 'IN潮精选' },
                { itemName: '潮流女装' },
                { itemName: '品牌男装' },
                { itemName: '时尚女鞋' },
                { itemName: '流行男鞋' },
                { itemName: '内衣' },
                { itemName: '配饰' },
                { itemName: '运动' },
                { itemName: '童装' },
                { itemName: '户外' },
                { itemName: '箱包' },
                { itemName: '珠宝' },
                { itemName: '奢侈品' },
                { itemName: '潮流女装' },
                { itemName: '品牌男装' },
                { itemName: '时尚女鞋' },
                { itemName: '流行男鞋' },
                { itemName: '内衣' },
                { itemName: '配饰' },
                { itemName: '运动' },
                { itemName: '童装' },
                { itemName: '户外' },
                { itemName: '箱包' },
                { itemName: '珠宝' },
                { itemName: '奢侈品' },
                { itemName: '腕表' }
            ]
        }
    }
    render() {
        let { menuItem } = this.state;
        return (
            <div className="menu-vertical-box">
                <ScrollMenu menuItem={menuItem} itemActive={4} />
            </div>
        )
    }



}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollMenuPage)