import React from 'react';
import styled from 'styled-components';

import HomeForm from './HomeForm';
//import HelloImg from '../assets/images/undraw_hello.svg';

const ContactSection = styled.section`
  p {
    width: 80%;
  }

  background-image: url('../assets/images/undraw_hello.svg');

  div.contact-inner {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 960px) {
      flex-direction: row;
    }

    div.box {
      width: 100%;

      @media screen and (min-width: 960px) {
        width: 50%;
      }
    }
  }
`;

export default () => {
  return (
    <ContactSection>
      <h3>Let's Talk!</h3>
      <p>
        Have a question? Want an estimate? Or maybe you just want to discuss an
        idea, and see what's involved? I would love to hear from you!
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
