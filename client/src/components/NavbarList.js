import React from "react";
import styled from "styled-components/macro";

const NavbarItem = styled.li`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fcfcfc;
  }
  &:active {
    color: #fcfcfc;
    background-color: #282828;
  }
`;

const NavbarIcon = styled.div`
  margin-right: 20px;
`;

const NavbarList = (props) => {
  return (
    <NavbarItem>
      <NavbarIcon>
        <i className={props.logoClass}></i>
      </NavbarIcon>
      <span>{props.name}</span>
    </NavbarItem>
  );
};

export default NavbarList;
