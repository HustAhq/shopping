import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Address from './componments/Address';


export default class Submit extends React.Component{
    constructor(){
        super();
        this.state = {
            userInfor: '',
            activeName: '',
            activePhone: '',
            activeAdderss: '',
            showAddress : '0' //判断是否显示地址，是0不显示， 1显示
        }
    }
    componentDidMount (){
        this.getUserInfor();
    }
    getUserInfor () {
        let _url = './api/userInfor.json';
        $.ajax({
            type : 'GET',
            dataType : 'json',
            url : _url,
            async : true,
            timeout : 8000,
            success : (data)=>{
                console.log(data)
               this.setState({
                    userInfor: data.adderss,//用来缓存信息，以便后续的修改
                    activeName: data.adderss[0].name,//初始值name
                    activePhone: data.adderss[0].mobile,//初始值Phone
                    activeAdderss:  data.adderss[0].orderAdderss//初始值Adderss
               })
            },
            error : ()=>{
                console.log('getUserInfor失败');
            }
        });
    }

    getQueryString(name) {//正则匹配URL后面所需要的内容
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        }
        return null;
    }
    showAddress () {
        this.setState({
            showAddress : '1'
        })
    }
    showAddressBack(val){
       this.setState({
           showAddress : val
       })
    }
    addChooseAddress(closeAddress, item){
       this.setState({
            activeName: item.name,
            activePhone: item.mobile,
            activeAdderss: item.orderAdderss,
            showAddress : '0'
       })
    }
    toIndex(){
        let _url = './index.html';
        location.href = _url;
    }
    render(){
        //输出转码decodeURIComponent
        let name = decodeURIComponent(this.getQueryString("name"));
        let spect = decodeURIComponent(this.getQueryString("spect"));
        let number = this.getQueryString("number");
        let img = this.getQueryString('img');
        let price = this.getQueryString('price');
        let allPrice = number * price;//总价格
        
        return (
            <div className="submit_wrap">
                <div className="content">
                    <div className="content_one">
                         <p>配送信息</p>
                    </div>
                    <div className="content_two" onClick={this.showAddress.bind(this)}>
                        <p className="content_two_title">
                            <span className="two_title_name">{this.state.activeName}</span>
                            <span className="two_title_phone">{this.state.activePhone}</span>
                        </p>
                        <span className="jiao">></span>
                        <p className="content_two_adress">{this.state.activeAdderss}</p>
                    </div>
                    <div className="content_three">
                        <img src={img} alt=""/>
                        <div className="content_three_infor">
                            <p className="three_infor_title">
                                <span className="left_name">{name}</span>
                                <span className="right_price">&#165; {price}</span>
                            </p>
                            <p className="three_infor_gray">
                                <span className="left_spect">{spect}</span>
                                <span className="right_number"> X {number}</span>
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
                        <span className="total_price_value"> &#165;{allPrice}</span>
                    </div>
                    <div className="submit_btn" onClick={this.toIndex.bind(this)}>提交订单</div>
                </div>
                 {
                     this.state.showAddress == '1' ? <Address userInfor={this.state.userInfor}
                     handleShowAddress={this.showAddressBack.bind(this)}
                     handleAddChooseAddress={this.addChooseAddress.bind(this)}
                     address={this.state.activeAdderss}
                     phone={this.state.activePhone}
                     name={this.state.activeName}></Address> : null
                 }
            </div>
        )
    }
}