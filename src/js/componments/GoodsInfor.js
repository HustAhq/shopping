import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import BuyWindow from './BuyWindow';


export default class GoodsInfor extends React.Component{
    constructor(){
        super();
        this.state = {
            showBuyWindow : '0',//是否展示showBuyWindow 1是展示其他不展示
            activeHPrice : '',
            activeHSpect : '',
            number : '',   //可以用来判断是否选择规格，有的话就是已经选择，不然就是没有选择
        }
    }
    showBuyWindow () {
        this.setState({
            showBuyWindow : '1'
        })
    }
    closeBuyWindow (val) {
        this.setState({
            showBuyWindow : val
        })
    }
    sureSpect (val, spect, price, number){
        this.setState({
            showBuyWindow : val,
            activeHPrice : price,
            activeHSpect : spect,
            number : number,
        })
    }
    submitOk() {
        if(this.state.number){
            let name = encodeURIComponent(this.props.activeGoods.name);
            let price = this.state.activeHPrice;
            let number = this.state.number;
            let spect = encodeURIComponent(this.state.activeHSpect);
            let img = this.props.activeGoods.imgurl[0];
            let _url = './submit.html?name=' + name + '&price=' + price + '&number=' + number + '&spect=' + spect + '&img=' + img;
            location.href = _url;
        }
    }
    render(){
        let activeGoods = this.props.activeGoods;
        var mixPrice = activeGoods.spectList[0].price;//价格最小值
        var maxPrice = activeGoods.spectList[0].price;//价格最大值
        const imgArr = [];
        activeGoods.imgurl.forEach((item, index)=> {
           imgArr.push(<img src={item} alt="" key={index}/>)
        });
        activeGoods.spectList.forEach( (item, index)=> {
            if(mixPrice > item.price){
                mixPrice = item.price;
            }
            if(maxPrice < item.price){
                maxPrice = item.price;
            }
        });
        const minMax = mixPrice + '~' + maxPrice;
        let activeHPrice = this.state.activeHPrice;
        let activeHSpect = this.state.activeHSpect;
        let number = this.state.number;
        if(activeHPrice == ''){
            activeHPrice = minMax;
        }

        if(activeHSpect == ''){
            activeHSpect = '请选择商品规格';
        }else{
            activeHSpect = '已经选择 ' + activeHSpect + ' 数量 ' +  + number;
        }
        return (
            <div className="goods_info_wrap">
                <div className="info_one infor_wrap">
                    <img src={activeGoods.imgurl[0]} alt=""/>
                    <div className="one_wrap">
                        <p className="one_name">{activeGoods.name}</p>
                        <p className="one_price">&#165; {activeHPrice}</p>
                    </div>
                </div>
                <div className="info_two infor_wrap" onClick={this.showBuyWindow.bind(this)}>
                    <p className="two">&nbsp;{activeHSpect}
                        <span>></span>
                    </p>
                </div>
                <div className="info_three infor_wrap">
                    <h2>商品详情</h2>
                    <p>{activeGoods.name}</p> 
                    {imgArr}
                </div>
                <div className="info_four infor_wrap" onClick={this.submitOk.bind(this)}>
                    <a href="javascript:;">立即购买</a>
                </div> 
                {
                    this.state.showBuyWindow === '1' ? <BuyWindow 
                    handlecloseBuyWindow={this.closeBuyWindow.bind(this)} 
                    spectList={activeGoods.spectList}
                    handleshowBuyWindow={this.sureSpect.bind(this)} minMax={minMax}></BuyWindow> : null
                }
            </div>
        )
    }
}