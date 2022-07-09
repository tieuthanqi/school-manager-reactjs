import React from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../../../../dropdown/Dropdown";

import user_image from "../../../../assets/images/logo.png";

//import user_menu_admin from '../../../../assets/JsonData/user_menu_admin.json'

var user_menu = [
  {
    routes: "/manager/profile",
    content: "Hồ sơ",
  },
  {
    routes: "/manager/logout",
    content: "Đăng xuất",
  },
];

var curr_user = {
  display_name: localStorage.getItem("name"),
  image: user_image,
};

// const renderNotificationItem = (item, index) => (
//     <div className="notification-item" key={index}>
//         <i className={item.icon}></i>
//         <span>{item.content}</span>
//     </div>
// )

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user_image} alt="" />
    </div>
    <div className="topnav__right-user__name">
      <span className="topnav__right-hello">Xin chào, </span>
      <br />
      {localStorage.getItem("name")}
    </div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to={item.routes} key={index}>
    <div className="notification-item">
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="welcome-info"></div>

      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>

        <div className="topnav__right-item"></div>
      </div>
    </div>
  );
};

export default TopNav;
