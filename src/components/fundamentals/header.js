import React from "react";

import { NavHashLink as Link } from "react-router-hash-link";
// import classnames from "classnames";
import styles from "../../assets/css/Header.module.scss";
import navigation from "../../data/navigation.json";

// eslint-disable-next-line
import universal from '../../assets/css/Universal.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
      // isPageScrolled: false
    };
  }

  handleMenuButtonClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    // const { isMenuOpen } = this.state;

    return (
      <header>
        <nav className={styles.desktop}>
          <ul className={styles.desktopMenu}>
            {navigation.map((item, index) => {
              const firstLetter = item.label.charAt(0);
              const restOfLabel = item.label.substring(1);

              return (
                <li>
                  <Link smooth to={item.link}>
                    <span className={universal.bold}>{firstLetter}</span>
                    <span className={universal.light}>{restOfLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
