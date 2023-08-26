import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const AnimatedName = ['A','j','e','e','t']

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm {AnimatedName.map((letter)=>{
            return(
              <span>{letter}</span>
            )
          })}
          <br />
          Full Stack developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <a
            className="home__contact-me_link"
            href="https://drive.google.com/file/d/1uRTVNuZiYulaACh4GuVLgSBNxbiRJnI5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download resume</button>
          </a>
        </div>
        <div className="home_icons">
          <div className="home_icons_icon">
            <a
              href="https://www.linkedin.com/in/ajeet--tiwari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: "3.5rem" }} />
            </a>
          </div>
          <a
            href="https://github.com/Ajeettiwarii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="home_icons_icon">
              <FaGithub style={{ fontSize: "3.5rem" }} />
            </div>
          </a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
