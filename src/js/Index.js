import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

export default class Index extends React.Component{
    constructor () {
        super();
    }
    render () {
       return (
           <div className="wrap">
               <div className="tab_header">
                   <div className="header_loader">Hi, anna</div>
                   <div className="header_btn">我的订单</div>
               </div>
               <div className="tab_content"></div>
           </div>
       )
    }
}