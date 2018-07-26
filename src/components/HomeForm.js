import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StyledForm = styled.form`
  margin-bottom: 2rem;

  fieldset {
    padding: 0 0 1rem;
  }

  input,
  textarea {
    background: #fff;
    display: block;
    margin: 0 0 1.6rem;
    padding: 0.75rem;
    width: 100%;
    font-family: 'Merriweather', sans-serif;
    font-size: 1.25rem;
    color: #141313;
    outline: none;
    border: 2px solid rgba(48, 150, 167, 0.1);
    transition: border 250ms ease-out, background-color 250ms ease-out;

    &:focus {
      border: 2px solid rgba(48, 150, 167, 1);
      background: #e8f6f8;
      color: #141313;
    }

    @media screen and (min-width: 960px) {
      width: 90%;
    }
  }

  textarea {
    min-height: 200px;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.75;
  }

  button[type='submit'] {
    border: 2px solid #febcb8;
    background: #971640;
    border-radius: 8px;
    color: #fff;
    display: block;
    font-size: 1.3rem;
    font-family: 'Merriweather', sans-serif;
    padding: 1.1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    width: auto;
    margin: 0 auto;
    transition: background-color 200ms ease-out;

    @media screen and (min-width: 960px) {
      margin: 0;
    }

    &:hover {
      color: #fef1f1;
      border-color: #fef1f1;
      background-color: #e95c54;
    }
  }
`;

export const HomeForm = () => {
  return (
    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Name"
          required="true"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email"
          required="true"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone Number"
          aria-label="Phone"
          required="true"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          cols="80"
          aria-label="Message"
          required="true"
        />
      </fieldset>
      <input type="hidden" name="bot-field" />

      <button type="submit">
        Send <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </StyledForm>
  );
};

export default HomeForm;
