import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "hehe";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://www.liveabout.com/thmb/6hW0_C6uWjQi3dIMSO370F-ALLc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg"
              alt="Founder"
            />
            <Typography>Abhishek Kulkarni</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample e-commerce website made by me to showcase my
              skills. This website is made using MERN applications
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="hehe" target="blank">
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="heh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
