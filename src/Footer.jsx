import React from "react";

export default function App() {
  return (
    <div>
      <footer className="footer section">
        <div className="footer_container bd-gird">
          <h1 className="footer_title">Kuldeep</h1>
          <p className="footer_description">
            This is my personal website and you can contact me here if you have
            any questions
          </p>
          <div className="footer_social">
            <a href="/" className="footer_link">
              {" "}
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="/" className="footer_link">
              {" "}
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="/" className="footer_link">
              {" "}
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <p className="footer_copy">All right reserved by Kuldeep -2023</p>
        </div>
      </footer>
    </div>
  );
}
