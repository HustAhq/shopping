import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import GoodsItem from './componments/GoodsItem';
import GoodsInfor from './componments/GoodsInfor';

export default class Index extends React.Component{
    constructor () {
        super();
        this.state = {
            loadInfor : '',//登录信息
            goodsList : '',//商品列表
            showGoodsInfo : '0',//是否显示商品详情，1显示。其他不显示
        }
    }
    // componentWillMount  render渲染之前渲染
    componentDidMount () {//render渲染完成后
         this.getLoadInfor();
         this.getGoodLists ();
    }
    getLoadInfor () {//获取登录的信息
        let _url = '/api/loadInfor.json';
        const getLoadInfor = $.ajax({
            type:'GET',
            dataType : 'json',
            url: _url,
            async: true,
            timeout:8000,
            success: ((data)=>{
                this.setState({
                    loadInfor : data.load
                })
            }),
            error:(()=>{
                console.log('getLoadInfor失败');
            })
        })
    }
    getGoodLists () {//获取列表信息
        let _url = 'api/goodsList.json';
        $.ajax({
            type:'GET',
            dataType:'json',
            url:_url,
            async:true,
            timeout:8000,
            success:((data)=>{
                this.setState({
                     goodsList : data.list
                })
            }),
            error:(()=>{
                console.log('getGoodLists失败');
            })
        })
    }
    showGoodsList (val, activeGoods) {
        this.setState({
            showGoodsInfo : val,
            activeGoods : activeGoods
        })
    }
    render () {
       const goodsList = this.state.goodsList;
       const goodsListArr = [];
       if(goodsList != ''){
           goodsList.forEach((item, index)=>{
                goodsListArr.push(<GoodsItem key={index}  activeGoods={item}
                handleshowGoodsList={this.showGoodsList.bind(this)}></GoodsItem>)
            });
        }
       return (
           <div className="wrap">
               <div className="tab_header">
                   <div className="header_loader">Hi, {this.state.loadInfor.name}</div>
                   <div className="header_btn">我的订单</div>
               </div>
               <div className="tab_content">
                   {goodsListArr}
               </div>
               {this.state.showGoodsInfo === '1'? <GoodsInfor activeGoods={this.state.activeGoods}></GoodsInfor> : null}
           </div>
       )
    }
}