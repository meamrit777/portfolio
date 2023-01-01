import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "first title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "second title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "third title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    image: IMG4,
    title: "fourth title",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio__section">
      <h5> My Recet Task</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <img src={image} alt={title} className="portfolio__item-image" />

              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
