import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class BuyWindow extends React.Component{
    constructor () {
        super();
    }
    closeBuyWindow () {
        let showBuyWindow = '0';
        this.props.handlecloseBuyWindow(showBuyWindow);
    }
    render () {
        return (
            <div className="buy_wrap">
                <div className="buy_gray" onClick={this.closeBuyWindow.bind(this)}></div>  
                <div className="buy_content">
                    <div className="buy_content_item buy_price">
                        <div className="buy_left buy_price_title">单价</div>
                        <div className="buy_price_wrap">
                            <span>&#165;34</span>
                            <span>43</span>
                        </div>
                    </div>
                    <div className="buy_content_item buy_spect">
                        <div className=" buy_left buy_spect_title">规格</div>
                        <div className="buy_spect_wrap">
                            <ul>
                                <li>规格1</li>
                                <li>规格2</li>
                                <li>规格3</li>                              
                            </ul>
                        </div>
                    </div>
                    <div className="buy_content_item buy_number">
                        <div className="buy_left buy_number_title">数量</div>
                        <div className="buy_number_wrap">
                            <ul>
                                <li>-</li>
                                <li className="buy_number_value">1</li>
                                <li>+</li>
                            </ul>
                        </div>
                    </div>
                    <div className="buy_ok">
                        <a href="javascript:;">确认购买</a>
                    </div>
                </div>
            </div>
        )
    }
}