import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/PageHeaderContent"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid, DiMongodb } from "react-icons/di";
import { FaDev, FaDatabase, FaReact, FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const personalDetails = [
  {
    label: "Name",
    value: "Ajeet Tiwari",
  },
  {
    label: "Email",
    value: "ajeet21.tiwari@gmail.com",
  },
  {
    label: "Contact No",
    value: "7357150203",
  },
];

const jobSummary =
"I'm thrilled to introduce myself as a final-year B.Tech IT student at IIST Indore. My heart beats for coding, and I'm captivated by the world of full-stack development, with a special affinity for the MERN stack. To complement this, I've built a robust foundation in data structures and algorithms. Let's connect and discuss how my skills can contribute to your project or organization!"
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiMongodb size={80} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiExpress size={80} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaReact size={80} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaNode size={80} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;