import React, { useContext } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import user  from "../../img/user2.jpg";
import { DarkModeContext } from "../../context/darkModeContext";



const Navbar = () => {

  // const {dispatch} = useContext(DarkModeContext);
  // return (
  //   <div className="navbar">
  //     <div className="wrapper">
  //       <div className="search">
  //         <input type="text" placeholder="search ..." />
  //         <SearchOutlinedIcon className="icon" />
  //       </div>
  //       <div className="items">
  //         <div className="item">
  //           <LanguageOutlinedIcon className="icon" />
  //           English
  //         </div>

  //         <div className="item">
  //           <DarkModeOutlinedIcon className="icon"  onClick={()=> dispatch({type:"TOGGLE"})} />
  //         </div>

  //         <div className="item">
  //           <FullscreenExitOutlinedIcon className="icon" />
           
  //         </div>

  //         <div className="item">
  //           <NotificationsOutlinedIcon className="icon" />
  //           <div className="counter">1</div>
  //         </div>
  //         <div className="item">
  //           <ChatBubbleOutlineOutlinedIcon className="icon" />
  //           <div className="counter">2</div>
  //         </div>

  //         <div className="item">
  //           <ListOutlinedIcon  className="icon"/>
  //         </div>
  //         <div className="item">
  //         <img  src={user} alt="user" className="avatar"/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbar;
