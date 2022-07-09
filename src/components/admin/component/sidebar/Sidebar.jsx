import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../../../assets/images/logo.png";

import sidebar_admin from "../../../../assets/JsonData/sidebar_admin.json";

let SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

var Sidebar = (props) => {
  var items = sidebar_admin;
  const activeItem = items.findIndex(
    (item) => item.route === props.location.pathname
  );
  console.log("SiderBar");
  console.log(items);
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
