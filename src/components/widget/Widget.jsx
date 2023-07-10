import React from 'react';
import "./widget.scss";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({ type }) => {



let data;

//temporary
const amount = 100;
const diff = 20;

switch(type){
case "user":
  data={
 title :"USERS",
 isMoney : false ,
 link: "See all users",
 icon: <PersonOutlineOutlinedIcon className='icon' style ={{color:"crimson" ,
  backgroundColor:"rgba(255, 0, 0, 0.2)",

}} />,

  };
  break;


  case "order":
  data={
 title :"ORDERS",
 isMoney : false ,
 link: "See all orders",
 icon: <ShoppingCartOutlinedIcon  className='icon'  style ={{color:"goldenrod" ,
 backgroundColor:"rgba(218, 165, 32, 0.2)",

}} />,

  };
  break;


  case "earning":
  data={
 title :"EARNINGS",
 isMoney : true ,
 link: "See all earnings",
 icon: <MonetizationOnOutlinedIcon className='icon'   style ={{color:"green" ,
 backgroundColor:"rgba(0, 128, 0, 0.2)",

}} />,

  };
  break;


  case "balance":
  data={
 title :"BALANCE",
 isMoney : true ,
 link: "See details",
 icon: <AccountBalanceOutlinedIcon className='icon' style ={{color:"purple" ,
 backgroundColor:"rgba(128, 0, 128, 0.2)",

}}  />,

  };
  break;
  default:
    break;

}
  return (
   <div className="widget">

    <div className="left">

<div className="title">{data.title}</div>
<div className="counter">{data.isMoney && "$"} {amount} </div>
<div className="link">{data.link}</div>

    </div>
    <div className="right">
      <div className="percentage positive">
        
        <KeyboardDoubleArrowUpIcon />
        {diff} %
        </div>
      {data.icon}
    </div>

   </div>
  )
}

export default Widget