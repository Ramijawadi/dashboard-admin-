import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';

const SideBar = () => {

    const {dispatch} = useContext(DarkModeContext);
  return (
 <div className="Sidebar">

<div className="top">
    <Link to='/' style={{textDecoration: "none"}}>
     <span className='logo'><span style={{ color :"red" , letterSpacing:"1px",fontSize:"20px"}}>AD</span>MiN</span>
    </Link>
</div>
<hr />
<div className="center">
<ul>



  <p className="title"> MAIN</p>
  <Link  to='/' style={{textDecoration: "none"}}  >
    <li>
        <DashboardIcon  className='icon'/>
        <span>Dashboard</span>
    </li>
    </Link>




    <p className="title">LIST</p>

    <Link to="/users" style={{textDecoration: "none"}}  >
    <li>
        <PersonOutlineIcon  className='icon'/>
        <span>Users</span>
    </li>
    </Link>



    <Link to="/products" style={{textDecoration: "none"}}  >
    <li>
        <Inventory2OutlinedIcon className='icon'/>
        <span>Products</span>
    </li>
    </Link>

    <Link to="/Orders" style={{textDecoration: "none"}}  >

    <li>
        <ViewStreamOutlinedIcon className='icon' />
        <span>Orders</span>
    </li>
</Link>


    <Link to="/delivery" style={{textDecoration: "none"}}  >
    <li>
    <LocalShippingOutlinedIcon className='icon'/>
        <span>Delivery</span>
    </li>
    </Link>

    <Link to="/Notification" style={{textDecoration: "none"}}  >
    <p className="title">USEFUL</p>
    <li>
        <NotificationsActiveOutlinedIcon className='icon'/>
        <span>Notifications</span>
    </li>
    </Link>




    <p className="title">SERVICE</p>
    <Link to="/network" style={{textDecoration: "none"}}  >
     <li>
        <MonitorHeartOutlinedIcon  className='icon'/>
        <span>Network</span>
    </li>
    </Link>


    <Link to="/Logs" style={{textDecoration: "none"}}  >
     <li>
        <PsychologyOutlinedIcon className='icon' />
        <span>Logs</span>
    </li>

    </Link>

    <Link to="/Settings" style={{textDecoration: "none"}}  >
     <li>
        <SettingsOutlinedIcon className='icon' />
        <span>Settings</span>
    </li>

    </Link>

    <Link to="/profile" style={{textDecoration: "none"}}  >
    <p className="title">USER</p>
    <li>
  <PortraitIcon className='icon' />
        <span>Profile</span>
    </li>
    </Link>

    <Link to="/Logout" style={{textDecoration: "none"}}  >
    <li>
        <LogoutOutlinedIcon  className='icon'/>
        <span>Logout</span>
    </li>
    </Link>
</ul>

</div>
<div className="bottom">
<div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
<div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>

 </div>
 </div>
  )
}

export default SideBar