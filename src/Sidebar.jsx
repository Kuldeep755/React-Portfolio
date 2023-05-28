import React from 'react';
import propTypes from "prop-types"
import resumePDF from './Kuldeep.pdf';

 export default function Sidebar(props) {
  return (
    <div>
      <header className="header-1">
      <nav className="nav bd-grid">
        <div className="nav_toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>

        <div>
          <a href="/" className="nav_logo">Kuldeep Jat</a>
        </div>
        <div className="nav_menu" id="nav-menu">
          <div className="nav_close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
          <ul className="nav_list">
            <li className="nav_item"><a href="#Home" className="nav_link active">{props.title}</a></li>
            <li className="nav_item"><a href="#About" className="nav_link">{props.Abouttext}</a></li>
            <li className="nav_item"><a href="#Skills" className="nav_link">{props.Skilstext}</a></li>
            <li className="nav_item"><a href="#Contact" className="nav_link">{props.Contact}</a></li>
            <li className="nav_item"><a href={resumePDF} className="nav_link">{props.myresume}</a></li>
            <li className="nav_item"><a href="#Certification" className="nav_link">{props.myCertification}</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  );
}
Sidebar.propTypes={
  title : propTypes.string,
  Abouttext :propTypes.string,
}
Sidebar.defaultProps={
  Skilstext : propTypes.string,
}

