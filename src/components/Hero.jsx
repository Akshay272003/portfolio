import "../styles/blurbubble.css";
const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div>
                <div className="hero-intro">Hi, my <br /> name is <b>Akshay</b>
                </div>

                <p className="hero-intro-subtitle">I'm a creative programmer from Mandsaur, India.</p>

            </div>
            {/* herp image  */}

            <img src="src\assets\akshay.jpg" className="hero-img"/>
            <div className="blur-bubble-container">
                <div className="bubble bubble-blue"></div>
                <div className="bubble bubble-green"></div>
            </div>

            <span className="hero-scroll">SCROLL</span>

        </div>
    );
}

export default Hero;