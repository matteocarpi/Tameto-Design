import React from 'react';
import classnames from 'classnames';

// eslint-disable-next-line
import styles from '../../assets/css/Title.module.scss';
import universal from '../../assets/css/Universal.module.scss';

class Title extends React.Component {
  render () {
    const content = this.props.children;

    return (
      <span className={classnames(styles.title, universal.inline, universal.yellow)}><h1>{content.charAt(0)}</h1><h1 className={classnames(this.props.color === "yellow" ? universal.yellowOutline : universal.blue)}>{content.substring(1)}</h1></span>
    )
  }
}

export default Title;
