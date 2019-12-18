import React from 'react';
// eslint-disable-next-line
import styles from '../../assets/css/Footer.module.scss';

class Footer extends React.Component {
  render () {
    const date = new Date();
    const year = date.toISOString().substring(0, 4);
    console.log(year);
    return (
      <footer>Copyright©{year} Tameto Design</footer>
    )
  }
}

export default Footer;
