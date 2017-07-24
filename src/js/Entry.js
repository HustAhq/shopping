import React from 'react';
import ReactDom from 'react-dom';
import Index from './Index';


window.index = ()=>{
    ReactDom.render(<Index/>, document.getElementById('box'))
}