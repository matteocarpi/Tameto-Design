import React from 'react';
// eslint-disable-next-line
import styles from '../../assets/css/Title.module.scss';

class Title extends React.Component {
  render () {
    const content = this.props.children;

    return (
      <span><h1>{content.charAt(0)}</h1><h1>{content.substring(1)}</h1></span>
    )
  }
}

export default Title;
