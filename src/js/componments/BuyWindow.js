import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class BuyWindow extends React.Component{
    constructor () {
        super();
        this.state = {
            activePrice : '',
            activeQuantity : '',
            activeSpect : '',
            number : 1,
            spectIsOK : '0'  //是否显示规格的表单，必须在选择规格。选择是1，不选择是0
        }
    }
    closeBuyWindow () {
        let showBuyWindow = '0';
        this.props.handlecloseBuyWindow(showBuyWindow);
    }
    chooseSpect(e){
        this.setState({
            spectIsOK : '1'
        })
        let spectList = this.props.spectList;
        $('.buy_spect_li').removeClass('buy_spect_red');
        $(e.target).addClass ('buy_spect_red');
        spectList.forEach((item, index)=>{
            if($(e.target).text() === item.spect){
                this.setState({
                    activePrice : item.price,
                    activeQuantity : item.quantity,
                    activeSpect : item.spect
                });
            }
        })
    }
    numberDe(){
        if(this.state.number < this.state.activeQuantity){
           let  number = this.state.number;
           this.setState({
              number : number + 1
           });
        }
    }
    numberIn (){
        if(this.state.number > 0){
            let number = this.state.number;
            this.setState({
               number : number - 1
           })
        }
    }
    sureSpect () {
        if(this.state.spectIsOK == '1'){
           let showBuyWindow = '0';
           let spect = this.state.activeSpect;
           let price = this.state.activePrice;
           let number = this.state.number;
           this.props.handleshowBuyWindow(showBuyWindow, spect, price, number);
        }
    }
    render () {
        let spectList = this.props.spectList;
        let spectListArr = [];
        let minMax = this.props.minMax;
        spectList.forEach((item, index)=>{
            if(item.quantity > 0){
                 spectListArr.push(<li className="buy_spect_li" onClick={this.chooseSpect.bind(this)} key={index}>{item.spect}</li>);
            }else{
                 spectListArr.push(<li className="buy_spect_li buy_spect_gray" key={index}>{item.spect}</li>);
            }
        });
        let acitvePrice = this.state.activePrice;
        let activeQuantity = this.state.activeQuantity;
        if(acitvePrice == ''){
            acitvePrice = minMax;
        }
        if(activeQuantity == ''){
            activeQuantity = '请选择'
        }
        return (
            <div className="buy_wrap">
                <div className="buy_gray" onClick={this.closeBuyWindow.bind(this)}></div>  
                <div className="buy_content">
                    <div className="buy_content_item buy_price">
                        <div className="buy_left buy_price_title">单价</div>
                        <div className="buy_price_wrap">
                            <span className="buy_price_red">&#165;{acitvePrice}</span>
                            <span>库存  {activeQuantity}</span>
                        </div>
                    </div>
                    <div className="buy_content_item buy_spect">
                        <div className=" buy_left buy_spect_title">规格</div>
                        <div className="buy_spect_wrap">
                            <ul>
                                {spectListArr}                            
                            </ul>
                        </div>
                    </div>
                    <div className="buy_content_item buy_number">
                        <div className="buy_left buy_number_title">数量</div>
                        <div className="buy_number_wrap">
                            <ul>
                                <li className="buy_number_increse" onClick={this.numberIn.bind(this)}>-</li>
                                <li className="buy_number_value">{this.state.number}</li>
                                <li className="buy_number_decrese" onClick={this.numberDe.bind(this)}>+</li>
                            </ul>
                        </div>
                    </div>
                    <div className="buy_ok" onClick={this.sureSpect.bind(this)}>
                        <a href="javascript:;">确认</a>
                    </div>
                </div>
            </div>
        )
    }
}