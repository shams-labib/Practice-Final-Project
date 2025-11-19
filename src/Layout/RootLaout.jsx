import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router";
import Container from "../Shared/Container/Container";

const RootLaout = () => {
  return (
    <Container>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </Container>
  );
};

export default RootLaout;
