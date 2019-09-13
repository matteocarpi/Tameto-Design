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
          <p className={styles.bio}>{data.skills.bio}</p>
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
