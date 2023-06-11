import React from "react";
import "./skills.css";



const Skills = () => {
  return (
    <section id="conocimientos">
      <h3 className="title">Conocimientos</h3>

      <h5 className="skills_title">Lenguajes</h5>
      <div className="skills_container">
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="23"
            height="23"
          />
          <span className="skills_name">JavaScript</span>
        </div>
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">Java</span>
        </div>
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">Python</span>
        </div>
      </div>

      <h5 className="skills_title">Front-End</h5>
      <div className="skills_container">
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">Html</span>
        </div>
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">Css</span>
        </div>
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">Bootstrap</span>
        </div>
        <div className="skills_card">
          <img
            className="skills_img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="javascript"
            width="30"
            height="30"
          />
          <span className="skills_name">React</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
