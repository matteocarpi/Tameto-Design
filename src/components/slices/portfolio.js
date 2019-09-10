import React from 'react';

import data from '../../data/home.json';
import styles from '../../assets/css/Portfolio.module.scss';
import universal from '../../assets/css/Universal.module.scss';

class Portfolio extends React.Component {
  render () {
    const projects = data.portfolio.projects;

    return (
      <Title className={universal.yellow}>Portfolio</Title>
      <section className={styles.projects}>

        {projects.map((project, index) => {
          return (
            <a href={project.link}><img src={project.logo} alt={project.name +  "logo"} key={project.link}/></a>
          )
        })}
      </section>
    )
  }
}

export default Portfolio;
