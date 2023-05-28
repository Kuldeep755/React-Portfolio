import React from "react";
import myImage from './IMG_20220224_091659-01.jpeg';


export default function Project() {
  return (
    <div>
      <section className="project section">
        <div className="project_container bd-gird">
          <div className="project_data">
            <h2 className="section-title project_title">
              Have you thought about a project?
            </h2>
            <p className="project_description">
              If you have a project you want to do, do not hesitate and tell me
              what it is. I can provide you with the services you need. Please
              feel free to contact me directly.
            </p>
            <a href="#contact" className="button button_light">
              Contact Me
            </a>
          </div>
          <img src={myImage} alt="" className="project_img" />
        </div>
      </section>
    </div>
  );
}

