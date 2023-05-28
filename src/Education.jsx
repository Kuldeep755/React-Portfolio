import React from "react";

export default function Education() {
  return (
    <div>
      <section className="education section">
        <span className="section-subtitle">Qulification</span>
        <h2 className="section-title">My Education</h2>

        <div className="education_container bd-grid">
          <div className="education_content">
            <div>
              <h3 className="education_year">2019-2022</h3>
              <span className="education_university">University of Studies</span>
            </div>
            <div className="education_time">
              <span className="education_rounder"></span>
              <span className="education_line"></span>
            </div>

            <div>
              <h3 className="education_race">Bsc Information Technology (BIT)</h3>
              <span className="education_specialty"></span>
            </div>
          </div>
          <div className="education_content">
            <div>
              <h3 className="education_year">2018-2019</h3>
              <span className="education_university">High School -12th</span>
            </div>

            <div className="education_time">
              <span className="education_rounder"></span>
              <span className="education_line"></span>
            </div>

            <div>
              <h3 className="education_race">Sr. Seconadry Education</h3>
              <span className="education_specialty"></span>
            </div>
          </div>
          <div className="education_content">
            <div>
              <h3 className="education_year">2016-2017</h3>
              <span className="education_university">MiddleSchool</span>
            </div>

            <div className="education_time">
              <span className="education_rounder"></span>
              <span className="education_line"></span>
            </div>

            <div>
              <h3 className="education_race">Secondary Education</h3>
              <span className="education_specialty"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

