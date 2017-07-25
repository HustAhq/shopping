import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class Address extends React.Component{
    constructor(){
        super();
    }
    back (){
        let showAddress = '0';
        this.props.handleShowAddress(showAddress);
    } 
    addChooseAddress(item, e){
       let closeAddress = '0';
       $('.address_radius').removeClass('active_radius');
       $(e.target).addClass('active_radius');
       this.props.handleAddChooseAddress(closeAddress, item);
    }
    render(){
        let name = this.props.name;
        let phone = this.props.phone;
        let address = this.props.address;
        let userInfor = this.props.userInfor;
        let userInforArr = [];
        userInfor.forEach((item, index)=>{
           userInforArr.push(<div className="address-item" key={index}>
                                <div className="address_radius" onClick={this.addChooseAddress.bind(this, item)}></div>
                                <div className="address_right">
                                    <p className="address_n_p">
                                        <span className="address_name">{item.name}</span>
                                        <span className="address_phone">{item.mobile}</span>
                                    </p>
                                    <p className="address_more">{item.orderAdderss}</p>
                                </div>
                            </div>
                         )
        })
        return (
            <div className="address_wrap">
                <div className="address_header">
                    <div className="address_btn" onClick={this.back.bind(this)}>返回</div>
                    <p className="address_list">收货地址</p>
                </div>
                <div className="address_content">
                    {userInforArr}
                </div>
            </div>
        )
    }
}