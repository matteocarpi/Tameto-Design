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

    return (
      <section className={styles.wrap} id={this.props.id}>
        <Title color="yellow">Contacts</Title>
        <img
          className={styles.avatar}
          src={avatar}
          alt="A headshot of Matteo Carpi"
          key="headshot"
        />
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
      </section>
    );
  }
}

export default Contacts;
