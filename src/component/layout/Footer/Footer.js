import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>FlipZonn.</h1>
        <p>Shop. Click. Smile.</p>

        <p>Copyrights 2023 &copy; FlipZonn</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="haha">Instagram</a>
        <a href="haha">Youtube</a>
        <a href="haha">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;