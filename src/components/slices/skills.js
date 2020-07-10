import React from 'react';

import Title from '../modules/title';
// eslint-disable-next-line
import universal from '../../assets/css/Universal.module.scss';
import styles from '../../assets/css/Skills.module.scss';
import data from '../../data/home.json';


class Skills extends React.Component {
  render () {
    const skills = data.skills.skillList;

    return (
      <section
        className={styles.wrap}
        id={this.props.id}>
        <div className={styles.content}>
          <Title color="blue">Skills</Title>
          <p className={styles.bio}>I like to put myself in the ciabatte of the <strong>users</strong> that will interact with the websites I build. I wonder what they are looking for and where they would look for it. <br/><br/>My <strong>knowledge of design</strong> software and development technologies is tailored to satisfy that need in the most efficient way, resulting in <strong>fast, minimal, light websites</strong>.</p>
          <section className={styles.skillList}>
            {skills.map((skill, index) => {
              return (
                <img className={styles.skill} alt={skill.name + " logo"} key={skill.name} src={skill.icon}/>
              )
            })}
          </section>
        </div>
      </section>
    )
  }
}

export default Skills;
