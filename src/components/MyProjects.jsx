import GithubLogo from "../assets/github-icon-1.svg";
import JsLogo from "../assets/logo-javascript.svg";
import Reactlogo from "../assets/react-1.svg";
import TailwindLogo from "../assets/tailwind-css-2.svg";
import CssLogo from "../assets/css-3.svg";
import HtmlLogo from "../assets/html-1.svg";

const MyProjects = () => {
    return (
        <div id="my-projects" className="panel-content">
            <p className="panel-content-header">
                My Projects
            </p>

            <div className="projects-container">

                {/* eat fit project card  */}
                <div className="project-card eat-fit-card">
                    <div className="image-container">
                        <img className="project-image" src="src\assets\eat-fit.PNG" alt="" />

                        <a className="proj-link" href="https://a-eatfit.netlify.app/">Go to site</a>
                    </div>

                    <div className="project-desc">
                        <h2>Eat Fit</h2>
                        <p>Its a calorie tracker app, this idea comes to me when I was searching for a calorie tracker app for indian food and found nothing then I thought why not built my own. So here it is (Eat-Fit) It consist of calorie tracker , BMI and daily macro nutrition requirements calculator to help user to achieve their daily goal.
                        </p>

                        <div className="tect-stack-outer-container">
                            <p><strong>Technology used</strong></p>
                            <div className="project-tech-stack">
                                <img src={JsLogo} alt="" />
                                <img src={Reactlogo} alt="" />
                                <img src={TailwindLogo} alt="" />
                                <img src={HtmlLogo} alt="" />
                                <img src={CssLogo} alt="" />
                            </div>

                        </div>

                        <div className="project-link-container">

                            <a href="https://a-eatfit.netlify.app/">live site</a>
                            <a href="">
                                <img className="git-link-icon" src={GithubLogo} alt="" />
                                Github
                            </a>

                        </div>

                    </div>
                </div>

                {/* portfolio website project card */}
                <div className="project-card portfolio-card">
                    <div className="image-container">
                        <img className="project-image" src="src\assets\portfolio.PNG" alt="" />

                        <a className="proj-link" href="">Go to site</a>
                    </div>

                    <div className="project-desc">
                        <h2>My Portfolio</h2>
                        <p>
                            This is my developer portfolio, I built this with love and its special for me because its the first website which represents me. It consist of almost all the details a developer portfolio should have. I made this website to represent me and its for learning purpose also that's why I used pure css in it.
                        </p>

                        <div className="tect-stack-outer-container">
                            <p><strong>Technology used</strong></p>
                            <div className="project-tech-stack">
                                <img src={JsLogo} alt="" />
                                <img src={Reactlogo} alt="" />
                                <img src={HtmlLogo} alt="" />
                                <img src={CssLogo} alt="" />
                            </div>

                        </div>

                        <div className="project-link-container portfolio-link-container">

                            <a href="">live site</a>
                            <a href="">
                                <img className="git-link-icon" src={GithubLogo} alt="" />
                                Github
                            </a>

                        </div>

                    </div>
                </div>

                {/* pokedex project card  */}
                <div className="project-card pokedex-card">
                    <div className="image-container">
                        <img className="project-image" src="src\assets\pokedex.PNG" alt="" />

                        <a className="proj-link" href="https://a-pokedex.netlify.app/">Go to site</a>
                    </div>

                    <div className="project-desc">
                        <h2>Pokedex</h2>
                        <p>
                            I am an Pokemon lover and for learning purposes why not build a pokedex, here it is. It is a pokedex where user can search a pokemon by its name or id and find its details such as stats in a graphical manner using Chart.js package. By building this website I learnt many things specially how to request data and handle responses here I used pokeapi to fetch pokemon details.
                        </p>

                        <div className="tect-stack-outer-container">
                            <p><strong>Technology used</strong></p>
                            <div className="project-tech-stack">
                                <img src={JsLogo} alt="Js" />
                                <img src={Reactlogo} alt="React" />
                                <img src={TailwindLogo} alt="Tailwindcss" />
                                <img src={HtmlLogo} alt="HTML" />
                                <img src={CssLogo} alt="CSS" />
                            </div>

                        </div>

                        <div className="project-link-container portfolio-link-container">

                            <a href="https://a-pokedex.netlify.app">live site</a>
                            <a href="">
                                <img className="git-link-icon" src={GithubLogo} alt="" />
                                Github
                            </a>

                        </div>

                    </div>
                </div>




            </div>

        </div>
    );
}

export default MyProjects;