import {useEffect} from 'react';
import JsLogo from "../assets/logo-javascript.svg";
import Reactlogo from "../assets/react-1.svg";
import PythonLogo from "../assets/python-5.svg";
import DjangoLogo from "../assets/django.svg";
import GithubLogo from "../assets/github-icon-1.svg";
import TailwindLogo from "../assets/tailwind-css-2.svg";
import MysqlLogo from "../assets/mysql-6.svg";
import CssLogo from "../assets/css-3.svg";
import HtmlLogo from "../assets/html-1.svg";
import GitLogo from "../assets/git-icon.svg";
import VscodeLogo from "../assets/visual-studio-code-1.svg";


const Skills = () => {
    
    // apply animation on scroll intersection 
    useEffect(() => {
     const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
             entry.target.classList.toggle("slide-out-1", !entry.isIntersecting);
         })
     })
     
     const ele = document.querySelectorAll(".skill-block")
     ele.forEach(element => {
        //  console.log(element)
         observer.observe(element);
     })
     
    })
    

    return ( 
        <div id='my-skills' className="panel-content">
            <p className="panel-content-header skill-header">
              Skills
            </p>
            <div className="skills-main-container">

                <div id='technical' className="skill-block technical-skills slide-out-1">
                    <h2>Technical Skills</h2>
                    <div>
                        <img src={JsLogo} alt="" />
                        JavaScript
                    </div>
                    <div>
                        <img src={Reactlogo} alt="" />
                        ReactJs
                    </div>
                    <div>
                        <img src={PythonLogo} alt="" />
                        Python
                    </div>
                    <div>
                        <img src={DjangoLogo} alt="" />
                        Django
                    </div>
                    <div>
                        <img src={HtmlLogo} alt="" />
                        HTML
                    </div>
                    <div>
                        <img src={CssLogo} alt="" />
                        CSS
                    </div>
                    <div>
                        <img src={TailwindLogo} alt="" />
                        TailwindCss
                    </div>
                    <div>
                        <img src={MysqlLogo} alt="" />
                        MySql
                    </div>
                </div>

                <div className="skill-block soft-skills slide-out-1">
                    <h2>Soft Skills</h2>
                    <div>
                        <img src={GithubLogo} alt="" />
                        Effective Listening
                    </div>
                    <div>
                        <img src={GithubLogo} alt="" />
                        Problem Solving
                    </div>
                    <div>
                        <img src={GithubLogo} alt="" />
                        Quick Learning
                    </div>
                </div>

                <div className="skill-block tools slide-out-1">
                    <h2>Tools</h2>
                    <div>
                        <img src={GithubLogo} alt="" />
                        GitHub
                    </div>
                    <div>
                        <img src={GitLogo} alt="" />
                        Git
                    </div>
                    <div>
                        <img src={VscodeLogo} alt="" />
                        VsCode
                    </div>
                </div>
            


            </div>

            <div className="custom-shape-divider-top-1685238740">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
</div>
          </div>
     );
}
 
export default Skills;