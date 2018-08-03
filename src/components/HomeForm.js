import React, { Component } from 'react';
import Recaptcha from 'react-google-recaptcha';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export class HomeForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...this.state
  //     })
  //   })
  //     .then(() => navigateTo(form.getAttribute('action')))
  //     .catch(error => alert(error));
  // };

  render() {
    return (
      <StyledForm
        name="contact"
        method="post"
        data-netlify="true"
        action="/success"
        data-netlify-honeypot="monkey-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <fieldset>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
            required="true"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email"
            required="true"
            onChange={this.handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone"
            required="true"
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            cols="80"
            aria-label="Message"
            required="true"
            onChange={this.handleChange}
          />
        </fieldset>
        {/* <Recaptcha
          ref="recaptcha"
          sitekey={RECAPTCHA_KEY}
          onChange={this.handleRecaptcha}
        /> */}
        <input name="monkey-field" />

        <button type="submit">
          Send <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </StyledForm>
    );
  }
}

export default HomeForm;
