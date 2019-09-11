import React from 'react';
import classnames from 'classnames';

import universal from '../../assets/css/Universal.module.scss';
import styles from '../../assets/css/TitleSlide.module.scss';

class TitleSlide extends React.Component {
  render () {
    return (
      <section className={styles.wrap}>
        <span><h1 className={universal.blue}>Tameto</h1><h1 className={universal.blueOutline}>Design</h1></span>
        <span className={classnames(styles.slogan, universal.blue)}>Web design and Development</span>
      </section>
    )
  }
}

export default TitleSlide;
