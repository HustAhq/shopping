import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class Submit extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="submit_wrap">
                <div className="content">
                    <div className="content_one">
                         <p>配送信息</p>
                    </div>
                    <div className="content_two">
                        <p className="content_two_title">
                            <span className="two_title_name">Daaaau</span>
                            <span className="two_title_phone">181239469349</span>
                        </p>
                        <span className="jiao">></span>
                        <p className="content_two_adress">黑龙江省 哈尔滨市 南岗区 学府路52号</p>
                    </div>
                    <div className="content_three">
                        <img src="" alt=""/>
                        <div className="content_three_infor">
                            <p>
                                <span className="left">商品名称</span>
                                <span className="right">&#165; 商品单价</span>
                            </p>
                            <p className="three_infor_gray">
                                <span className="left">规格</span>
                                <span className="right"> X 数量</span>
                            </p>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="content_four">
                        <p>
                            <span className="four_one">支付方式</span>
                            <span className="four_two">现金支付</span>
                        </p>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="footer">
                    <div className="total_price">
                        <span className="total_price_gray">总价:&nbsp;  </span>
                        <span className="total_price_value"> &#165;12</span>
                    </div>
                    <div className="submit_btn">提交订单</div>
                </div>
            </div>
        )
    }
}