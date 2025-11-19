import React from "react";
import Container from "../Shared/Container/Container";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import AuthImg from "../assets/authImage.png";

const AuthLaytout = () => {
  return (
    <Container>
      <Logo></Logo>
      <div className="flex items-center min-h-screen">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AuthLaytout;
