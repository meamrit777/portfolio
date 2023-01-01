import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="experience__section">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> FrontEnd Development</h3>
          <div className="experience__content">
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> BackEnd Development</h3>
          <div className="experience__content">
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="'experience__details">
              <BsPatchCheckFill classname="experience__details-icon" />
              <div>
                <h4>EXPRESS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
