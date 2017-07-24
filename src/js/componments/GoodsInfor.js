import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class GoodsInfor extends React.Component{
    constructor(){
        super();
    }

    render(){
        let activeGoods = this.props.activeGoods;
        console.log(activeGoods )
        var mixPrice = activeGoods.spectList[0].price;
        var maxPrice = activeGoods.spectList[0].price;
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
        return (
            <div className="goods_info_wrap">
                <div className="info_one infor_wrap">
                    <img src={activeGoods.imgurl[0]} alt=""/>
                    <div className="one_wrap">
                        <p className="one_name">{activeGoods.name}</p>
                        <p className="one_price">&#165; {mixPrice}~ {maxPrice}</p>
                    </div>
                </div>
                <div className="info_two infor_wrap">
                    <p className="two">选择&nbsp;商品型号
                        <span>></span>
                    </p>
                </div>
                <div className="info_three infor_wrap">
                    <h2>商品详情</h2>
                    <p>{activeGoods.name}</p> 
                    {imgArr}
                </div>
                <div className="info_four infor_wrap">
                    <a href="">立即购买</a>
                </div> 
            </div>
        )
    }
}