import React from "react";
import "./about.css";
import ME from "../../assets/amrit2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="containter about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>i don't have clients yet</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed (my own)</small>
            </article>
          </div>
          <p>
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello hello hello
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
