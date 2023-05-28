import GithubLogo from "../assets/white-github.svg"
import LinkedinLogo from "../assets/white-linkedin-circled.svg"
const Footer = () => {
    return (
        <div className="footer">
            <div className="brand-name">
                <div><b>Akshay</b></div>
                <div className="copy-right"><span>&copy;</span> by Akshay 2023.</div>
            </div>

            <div className="links-container">
                <div className="site-map">
                    <a href="#hero">Home</a>
                    <a href="#about-me">About Me</a>
                    <a href="#my-skills">Skills</a>
                    <a href="#my-projects">Projects</a>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/akshay-mundra-0a81121a5">
                        <img src={LinkedinLogo} />
                        Linkedin
                    </a>
                    <a href="https://github.com/Akshay272003">
                        <img src={GithubLogo} />
                        Github
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Footer;