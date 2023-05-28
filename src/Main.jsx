import React from "react";
import deepImage from "./deep.png";
import resumePdf from "./Kuldeep.pdf"

export default function Main() {
  return (
    <>
        <section class="home" id="Home">
          <div class="home_container">
            <div class="home_data">
              <div class="home_img">
                <img src={deepImage} alt="deep" />
              </div>

              <h1 class="home_title">Kuldeep Jat</h1>
              <span class="home_profession">FrontEnd Developer</span>

              <div class="home_social">
                <a
                  href="https://www.linkedin.com/in/kuldeep-jat-7251291a1/"
                  class="home_social-link"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Kuldeep755"
                  class="home_social-link"
                >
                  <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://wa.me/<number>+91 8875522755<number/>"
                  class="home_social-link"
                >
                  <i class="bx bxl-whatsapp"></i>
                </a>
              </div>
              <a href={resumePdf} class="button home_button">
                Downlode Resume
              </a>
            </div>
          </div>
        </section>
      
    </>
  );
}

