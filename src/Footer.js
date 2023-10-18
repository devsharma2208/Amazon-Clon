import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div class="foot-panel1">Back to Top</div>
        <div class="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Deevices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Deevices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Deevices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Deevices</a>
            <a>Amazon Science</a>
          </ul>
        </div>
        <div class="foot-panel3">
          <div class="logo">
            <Link to="/">
              <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div class="foot-panel4">
          <div class="pages">
            <a>Conditions of use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
          <div class="copyright">
            &copy; 1996-2023,Amazon.com, Inc. or its affilates.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
