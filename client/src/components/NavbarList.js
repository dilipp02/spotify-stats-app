import React from "react";

const NavbarList = (props) => {
  return (
    <li className="NavbarItem">
      <div className="NavbarIcon">
        <i className={props.logoClass}></i>
      </div>
      {props.name}
    </li>
  );
};

export default NavbarList;
