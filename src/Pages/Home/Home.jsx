import React from "react";
import Bannar from "../Banner/Bannar";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Container from "../../Shared/Container/Container";

const Home = () => {
  return (
    <Container>
      <div>
        <Bannar></Bannar>
        <Brands></Brands>
        <Reviews></Reviews>
      </div>
    </Container>
  );
};

export default Home;
