import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Content">
        <div className="Media">
          <div className="Link">
            <a href="https://google.com" rel="noopener noreferrer" target="_blank" >
              <i className="fab fa-facebook-square"/>Facebook
            </a>
          </div>
          <div className="Link">
            <a href="https://google.com" rel="noopener noreferrer" target="_blank" >
              <i className="fab fa-instagram"/>Instagram
            </a>
          </div>
        </div>
        <div className="Copyright">
          Copyright&nbsp;©&nbsp;2020&nbsp;K8&nbsp;ART.
          All&nbsp;rights&nbsp;reserved.
        </div>
      </div>
    </footer>
  );
}
