import MailLogo from "../assets/gmail-icon-1.svg";
import LinkedinLogo from "../assets/linkedin-icon.svg"

const Contact = () => {
    return (
        <div id="contact-me" className="contact-panel">

            <div className="panel-content-header contact-header">
                Contact me
            </div>

            <div className="contact-info-container">

                <div className="contact-info-child-cont">
                    <img className="contact-info-logo" src={MailLogo} alt="" />
                    <a href='mailt&#111;&#58;aksha%&#55;9&#46;%6Dundr&#97;0%38%40&#103;m&#97;il&#46;co&#109;'>aksha&#121;&#46;&#109;undra08&#64;g&#109;&#97;i&#108;&#46;&#99;om</a>
                </div>

                <div className="contact-info-child-cont">
                    <img src={LinkedinLogo} alt="" className="contact-info-logo" />
                    <a href="https://www.linkedin.com/in/akshay-mundra-0a81121a5">Linkedin</a>
                </div>
            </div>

        </div>
    );
}

export default Contact;

<a href='mailt&#111;&#58;aksha%&#55;9&#46;%6Dundr&#97;0%38%40&#103;m&#97;il&#46;co&#109;'>aksha&#121;&#46;&#109;undra08&#64;g&#109;&#97;i&#108;&#46;&#99;om</a>