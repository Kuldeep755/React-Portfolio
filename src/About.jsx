import React from "react"

export default function About ( ){
    return(
        <div>
    <section className="about section" id="About">
      <span className="section-subtitle">My intro</span>
      <h2 className="section-title">About Me</h2>

      <div className="about_container">
        <div className="about_data">
          <p className="about_description">
            I am kuldeep and I am originally from Ajmer Rajasthan. At the moment, I live in Bangalore. I have just completed my graduation from MDS University Ajmer ,and i am presently looking for a good opportunity where i can contribute my knowledge and grow my skills. And I know HTML , CSS and JavaScript . Currently, I'm learning React </p>
          
        </div>
        <div>
          <div className="about_information">
            <h3 className="about_information-title">Information</h3>

            <div className="about_information-data">
              <i className="bx bxs-user about_information-icon"></i>
              <span>Kuldeep Jat</span>
            </div>

            <div className="about_information-data">
              <i className="bx bxs-phone about_information-icon"></i>
              <span>+91 8875522755 </span>
            </div>

            <div className="about_information-data">
              <i className="bx bxs-envelope about_information-icon"></i>
              <span>kuldeepjat43360@gmail.com</span>
            </div>
          </div>

          <div className="about_information">
            <h3 className="about_information-title">Experience and support</h3>

            <div className="about_information-data">
              <i className="bx bxs-medal about_information-icon"></i>
              <div>
                <spna className="about_information-subtitle">Fresher</spna>
                <spna className="about_information-subtitle-small"
                  >My current position is as a trainee at the Besant Institute</spna>
              </div>
            </div>
            <div className="about_information-data">
              <i className="bx bxs-briefcase about_information-icon"></i>
              <div>
                <spna className="about_information-subtitle">5 Project</spna>
                <spna className="about_information-subtitle -small">Completed</spna>
              </div>
            </div>

            <div className="about_information-data">
              <i className="bx bx-support about_information-icon"></i>
              <div>
                <spna className="about_information-subtitle">Support</spna>
                <spna className="about_information-subtitle-small"
                  >Online 24/7</spna>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>

    );
 }
 
