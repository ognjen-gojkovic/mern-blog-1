import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://images.pexels.com/photos/7404949/pexels-photo-7404949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="person"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          corrupti dolorum quos. Dolores, quam nesciunt.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
