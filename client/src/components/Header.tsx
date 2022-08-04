import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onhandleLogout } from "../apis";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onLogoutClick = () => {
    onhandleLogout();
    navigate("/");
  };
  return (
    <HeaderDiv>
      <h3>todo application</h3>
      {token && <LogoutBtn onClick={onLogoutClick}>Logout</LogoutBtn>}
    </HeaderDiv>
  );
};
const HeaderDiv = styled.header`
  display: flex;
  padding: 1rem 5rem;
  align-items: center;
`;
const LogoutBtn = styled.button`
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: bold;
  background: none;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;

export default Header;
