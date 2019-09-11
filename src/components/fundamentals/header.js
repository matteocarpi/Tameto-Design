import React from "react";

import { NavHashLink as Link } from "react-router-hash-link";
import classnames from "classnames";
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

  // listenScrollEvent = e => {
  //   window.scrollY > 580
  //     ? this.setState({ isPageScrolled: true })
  //     : this.setState({ isPageScrolled: false });
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent)
  // }

  handleMenuButtonClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header>
        <nav className={styles.mobile}>
          <div
            className={styles.menuButton}
            onClick={this.handleMenuButtonClick}
          >
            <i class="fas fa-bars" />
          </div>
          <ul
            className={classnames(
              styles.mobileMenu,
              isMenuOpen ? styles.open : styles.close
            )}
          >
            {navigation.map((item, index) => {
              const firstLetter = item.label.charAt(0);
              const restOfLabel = item.label.substring(1);

              return (
                <li>
                  <Link onClick={this.closeMenu} smooth to={item.link}>
                    <span>{firstLetter}</span>
                    <span>{restOfLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={styles.desktop}>
          <ul className={styles.desktopMenu}>
            {navigation.map((item, index) => {
              const firstLetter = item.label.charAt(0);
              const restOfLabel = item.label.substring(1);

              return (
                <li>
                  <Link smooth to={item.link}>
                    <span>{firstLetter}</span>
                    <span>{restOfLabel}</span>
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
