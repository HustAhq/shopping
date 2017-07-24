import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

export default class GoodsItem extends React.Component{
    constructor(){
        super()
    }
    showGoodList () {
        let showGoodList ='1';
        let activeGoods = this.props.activeGoods;
        this.props.handleshowGoodsList(showGoodList, activeGoods);
    }
    render(){
        let activeGood = this.props.activeGoods;
        return (
            <div className="goods_item" onClick={this.showGoodList.bind(this)}>
               <img src={activeGood.imgurl[0]} alt=""/>
               <div className="goods_item_info">
                   <p className="item_name">{activeGood.name}</p>
                   <p className="item_price"> &#165; {activeGood.spectList[0].price}</p>
               </div>
            </div>
        )
    }
}