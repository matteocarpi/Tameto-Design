import React from "react";

import Title from '../modules/title';

import styles from "../../assets/css/Contacts.module.scss";
// eslint-disable-next-line
import universal from "../../assets/css/Universal.module.scss";

import avatar from '../../assets/img/matteo-carpi-avatar.png';
import data from "../../data/home.json";

class Contacts extends React.Component {
  render() {
    const contacts = data.contacts.options;

    const avatarStyle = {
      backgroundImage: `url(${avatar}`
    }
    return (
      <section className={styles.wrap} id={this.props.id}>
        <div className={styles.content}>
          <Title color="yellow">Contacts</Title>
          <div className={styles.avatar} style= {avatarStyle}>
          </div>
          <section className={styles.contacts}>


            <div className={styles.contactDetails}>
              {contacts.map((contact, index) => {
                return (
                  <a
                    href={contact.link}
                    target={contact.target}
                    className={styles.contactOption}
                  >
                    <i class={contact.icon}></i>
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Contacts;
