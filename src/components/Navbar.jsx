const Navbar = () => {

    const handleClick = () => {
        document.getElementById("menu").classList.toggle("menu-open")
    }

    return (

        <div className="navbar">
            <a href="#hero" className="nav-link">HOME</a>
            <span onClick={handleClick} className="nav-link menu-btn">MENU
                <div id="menu" className="menu">
                    <a href="#hero">Home</a>
                    <a href="#about-me">About Me</a>
                    <a href="#my-skills">Skills</a>
                    <a href="#my-projects">Projects</a>
                    <a href="#contact-me">Contact Me</a>
                </div>
            </span>

        </div>

    );
}

export default Navbar;