import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class GoodsInfor extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="goods_info_wrap">
                <div className="info_one">
                    <img src="" alt=""/>
                    <div className="one_wrap">
                        <p className="one_name">商品名称</p>
                        <p className="one_price">&#165; 11</p>
                    </div>
                </div>
                <div className="info_two">
                    <p className="two">选择&nbsp;商品型号</p>
                </div>
                <div className="info_thre">
                    <h2>商品详情</h2>
                    <p>商品名称</p> 
                    <img src="" alt=""/>
                </div>
                <div className="info_four">
                    <a href="">立即购买</a>
                </div> 
            </div>
        )
    }
}