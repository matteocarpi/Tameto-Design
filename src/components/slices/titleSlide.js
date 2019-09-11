import React from 'react';

import styles from '../../assets/css/TitleSlide.module.scss';

class TitleSlide extends React.Component {
  render () {
    return (
      <section className={styles.wrap}>
        <span><h1>Tameto</h1><h1>Design</h1></span>
        <span className={styles.slogan}>Web design and Development</span>
      </section>
    )
  }
}

export default TitleSlide;
