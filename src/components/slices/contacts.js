import React from "react";

import Title from '../modules/title';

import styles from "../../assets/css/Contacts.module.scss";
import universal from "../../assets/css/Universal.module.scss";

import data from "../../data/home.json";

class Contacts extends React.Component {
  render() {
    const contacts = data.contacts.options;

    return (
      <section>
        <Title className={universal.yellow}>Contacts</Title>
        <section className={styles.contacts}>
          <img
            src="https://source.unsplash.com/random/1024x1366"
            alt="A headshot of Matteo Carpi"
            key="headshot"
          />

          <div className={styles.contactDetails}>
            {contacts.map((contact, index) => {
              return (
                <a
                  href={contact.link}
                  target={contact.target}
                  className={styles.contactOption}
                >
                  <img
                    src={contact.icon}
                    alt={contact.name + " icon"}
                    key={contact.name}
                  />
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
