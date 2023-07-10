import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import "./network.scss"

import user  from "../../img/user2.jpg";
import user1  from "../../img/user3.jpg";
import user2  from "../../img/user4.jpg";
import user3  from "../../img/user5.jpg";

const Network = () => {
  return (
    <div className="list">
      <SideBar />

      <div className="listContainer">
        <Navbar />
        

       <div className="tree">
  <ul>
    <li>
      <a href="#"><img src={user1} alt={user1} /><span>Great</span></a>
      <ul>
        <li><span className='plus_Gauche'>+</span><a href="#"><img src={user1} alt={user1}/><span> Great Child1</span></a> 
          <ul>
            <li><a href="#"><img src={user} alt={user} /><span>Great Child11</span></a></li>
            <li><a href="#"><img src={user} alt={user} /><span>Great  Child12</span></a></li>
          </ul>
        </li>
        <li><a href="#"><img src={user} alt={user} /><span>Great Child2</span></a>
          <ul>
            <li><a href="#"><img src={user} alt={user}/><span>Great  Child21</span></a></li>
            <li><a href="#"><img src={user} alt={user}/><span>Great  Child22</span></a></li>
           
          </ul>
        </li>
        
      </ul>  
    </li>
  </ul>
</div>


      </div>
    </div>
  )
}

export default Network