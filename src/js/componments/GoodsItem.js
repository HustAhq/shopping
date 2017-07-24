import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

export default class GoodsItem extends React.Component{
    constructor(){
        super()
    }
    showGoodList () {
        let showGoodList ='1';
        this.props.handleshowGoodsList(showGoodList);
    }
    render(){
        return (
            <div className="goods_item" onClick={this.showGoodList.bind(this)}>
               <img src="" alt=""/>
               <div className="goods_item_info">
                   <p className="item_name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
                   <p className="item_price"> &#165; 商品价格</p>
               </div>
            </div>
        )
    }
}