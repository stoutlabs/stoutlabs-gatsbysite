import React from 'react';
import styled from 'styled-components';

import HomeForm from './HomeForm';

const ContactSection = styled.section`
  p {
    width: 100%;
    line-height: 1.75;
  }

  div.contact-inner {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }

    div.box {
      width: 100%;

      p {
        margin-bottom: 1rem;
      }

      @media screen and (min-width: 1024px) {
        width: 66%;
      }

      &.info {
        @media screen and (min-width: 1024px) {
          width: 33%;
        }
      }
    }
  }
`;

export default () => {
  return (
    <ContactSection className="contact" id="contact">
      <h3>Contact Me</h3>

      <p>
        Have a question or comment? Want to discuss your next website or app?
        Want to hire me for your next project?
      </p>

      <div className="contact-inner">
        <div className="box form">
          <HomeForm />
        </div>

        <div className="box info">
          <p>Phone: 423.343.4274</p>
          <p>Email: daniel@stoutlabs.com</p>
        </div>
      </div>
    </ContactSection>
  );
};
