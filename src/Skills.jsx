import React from "react";
export default  function Skills () {
    return(
        <div>
    
    <section className="skills section" id="Skills">
      <span className="section-subtitle">Why Choose Me</span>
      <h2 className="section-title">My expertise Area</h2>

      <div className="skills_container bd-grid">
        <div className="skills_content">
          <h3 className="skills_subtitle">Frontend</h3>

          <div className="skills_data">
            <span className="skills_name">HTML/Css</span>
            <span className="skills_number">80%</span>
            <span className="skills_bar skills_html"></span>
          </div>

          <div className="skills_data">
            <span className="skills_name">JavaScript</span>
            <span className="skills_number">70%</span>
            <span className="skills_bar skills_js"></span>
          </div>

          <div className="skills_data">
            <span className="skills_name">React</span>
            <span className="skills_number">60%</span>
            <span className="skills_bar skills_react"></span>
          </div>

          <div className="skills_data">
            <span className="skills_name">Linux</span>
            <span className="skills_number">60%</span>
            <span className="skills_bar skills_linux"></span>
          </div>
        </div>
      </div>
    </section>

        </div>
    );
}
