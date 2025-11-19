import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import BannerImg1 from "../../assets/banner/banner1.png";
import BannerImg2 from "../../assets/banner/banner2.png";
import BannerImg3 from "../../assets/banner/banner3.png";

const Bannar = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={BannerImg1} alt="" />
      </div>
      <div>
        <img src={BannerImg2} alt="" />
      </div>
      <div>
        <img src={BannerImg3} alt="" />
      </div>
    </Carousel>
  );
};

export default Bannar;
