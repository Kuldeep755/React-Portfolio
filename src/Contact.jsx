import React from "react";
export default function App(){
    return (
<div>
 <section className="contact_section" id="Contact">
  <span className="section-subtitle">Contact Me</span>
  <h2 className="section-title">Get In Touch</h2>

  <form action=""className="contact_form"/>
    <div className="contact_inputs">
      <input type="text" className="contact_input" placeholder="Name"/>
      <input type="text" className="contact_input" placeholder="Email"/>
    </div>
    <input type="text" className="contact_input" placeholder="Project"/>
    <textarea rows="10" cols="0" name="" placeholder="Message" className="contact_input"></textarea>
    <input type="submit" className="button contact_button" value="Send Message"/>
  
  <div className="contact_info">
    <h3 className="contact_subtitle">Call Me</h3>
    <span className="contact_text">8875522755</span>
    <span className="contact_text">8217521059</span>
  </div>

  <div className="contact_info">
    <h3 className="contact_subtitle">E-mail</h3>
    <span className="contact_text">kuldeepjat43360@gmail.com</span>
    <span className="contact_text">Conactme@kuldeepkuldeep.com</span>
  </div>
  <div className="contact_info">
    <h3 className="contact_subtitle">Location</h3>
    <span className="contact_text">Btm Layout 2nd Stage</span>
    <span className="contact_text">Bangalore</span>
  </div>
</section>
        </div>
    );
}
