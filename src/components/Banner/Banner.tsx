import Image from "next/image";
import React from "react";
import img from "../../assets/banner.jpg";
// import img2 from "../../assets/bannerImg02.jpg";

const Banner = () => {
  return (
    <div className="mt-5">
      <div className=" max-w-[1440px] mx-auto px-5 ">
        <Image
          className="w-[100%] h-[350px] lg:h-[500px] rounded-lg"
          src={img}
          width={500}
          height={500}
          alt="Picture of the logo"
        />
      </div>
    </div>
  );
};

export default Banner;
