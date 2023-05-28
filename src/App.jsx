
import Sidebar from "./Sidebar"
import Main from "./Main"
import About from "./About"
import Skills from "./Skills"
import Education from "./Education"
import Service from "./Service"
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer"
import 'boxicons/css/boxicons.min.css';
import New from "./New"

import './App.css';

function App (){
        return(
        <div>  
        <Sidebar title="Home" Abouttext="About Me" Skilstext="Skills" Contact="Contact Me" myresume="Resume" myCertification="Certification"></Sidebar>
        <Main></Main>
        <About></About>
        
        <Skills></Skills>
        <Education></Education>
        <Service></Service>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
        <New></New>
        </div>
        );      
}
export default App;
