import React from "react"

import Title from "../modules/title"

import data from "../../data/home.json"
import styles from "../../assets/css/Portfolio.module.scss"
import universal from "../../assets/css/Universal.module.scss"

export default function Portfolio({ id }) {
  const projects = data.portfolio.projects

  return (
    <section className={styles.wrap} id={id}>
      <div className={styles.content}>
        <Title color="blue" className={universal.yellow}>
          Portfolio
        </Title>

        <section className={styles.projects}>
          {projects.map((project, index) => {
            return (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                className={styles.projectLink}
              >
                <img
                  className={styles.projectLogo}
                  src={project.logo}
                  alt={project.name + "logo"}
                  key={project.link}
                />
              </a>
            )
          })}
        </section>
      </div>
    </section>
  )
}
