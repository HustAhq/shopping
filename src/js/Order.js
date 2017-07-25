import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import OrderInfor from './componments/OrderInfor';


export default class Order extends React.Component{
    constructor(){
        super();
        this.state = {
            orderList : '',
            showOrderInfor: '0',
            activeOrder: ''
        }
    }
    getQueryString(name) {//正则匹配URL后面所需要的内容
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        }
        return null;
    }
    componentDidMount (){
        this.getOrderInfor();
    }
    getOrderInfor (){
        let _url = './api/order.json';
        $.ajax({
            type: 'GET',
            dataType : 'json',
            url : _url,
            async: true,
            timeout: 8000,
            success : (data)=>{
                this.setState({
                    orderList : data.datalist
                })
            },
            error : ()=>{
                console.log('getOrderInfor失败')
            }
        })
    }
    toIndex(){
        let url = './index.html';
        location.href = url;
    }
    showOrderMain (item){
       this.setState({
           showOrderInfor: '1',
           activeOrder: item
       })
    }
    render(){
        let name = decodeURIComponent(this.getQueryString("name"));
        let orderList = this.state.orderList;
        let orderListArr = [];
        if(orderList){
             orderList.forEach((item, index)=>{
                 console.log(item)
                orderListArr.push( <div className="order_item" key={index}>
                                        <div className="order_item_title">
                                            <p>
                                                <span className="item_title_ma">订单号</span>
                                                <span className="item_title_number">{item.ordernum}</span>
                                            </p>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="order_item_one" onClick={this.showOrderMain.bind(this, item)}>
                                            <img src={item.imgurl} alt=""/>
                                            <div className="content_three_infor">
                                                <p className="three_infor_title">
                                                    <span className="left_name">{item.name}</span>
                                                    <span className="right_price">&#165; {item.price}</span>
                                                </p>
                                                <p className="three_infor_gray">
                                                    <span className="left_spect">{item.spect}</span>
                                                    <span className="right_number"> X {item.number}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="order_item_two">
                                            <p>
                                                <span className="item_two_left">总价：</span>
                                                <span className="item_two_right">&#165; {item.amount}</span>
                                            </p>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                        )
            })
        }
        return (
            <div className="order_wrap">
                <div className="tab_header">
                    <div className="header_loader">Hi,{name}</div>
                    <div className="header_btn" onClick={this.toIndex.bind(this)}>商品列表</div>
                </div>
               <div className="order_box">
                    {orderListArr}
               </div>
               {
                   this.state.showOrderInfor == '1' ? <OrderInfor activeOrder={this.state.activeOrder}></OrderInfor> : null
               }
            </div>
        )
    }
}