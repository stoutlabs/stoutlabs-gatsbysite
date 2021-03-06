import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { FaEnvelope } from "react-icons/fa";

const StyledForm = styled.form`
  margin-bottom: 2rem;

  fieldset {
    padding: 0 0 1rem;
  }

  div.nope-holder {
    display: none;
    position: absolute;
    height: 1px;
    width: 1px;
  }

  label {
    color: #e5ca8f;
    padding: 0 0 0.33rem;
    display: block;
  }

  input,
  textarea {
    background: #fff;
    display: block;
    margin: 0 0 1.6rem;
    padding: 0.75rem;
    width: 100%;
    font-family: "Merriweather", sans-serif;
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
`;

const StyledSubmit = styled.button`
  background: #971640;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: "Merriweather", sans-serif;
  line-height: 1;
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
    background-color: #e95c54;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const spamQuestion = () => {
  const vals = [3, 5, 2, 6, 1];
  const val1 = vals[Math.floor(Math.random() * 5)];
  const val2 = vals[Math.floor(Math.random() * 5)];
  const question = `What is ${val1} + ${val2}?`;
  const answer = val1 + val2;
  return { question, answer };
};

const HomeForm = props => {
  // this.state = {
  //   isSpammer: true,
  //   spamvals: spamQuestion(),
  // };

  const [formVals, setFormVals] = useState({});
  const [gCaptchaResponse, setGCaptcha] = useState();
  const [isSpammer, setSpammer] = useState(true);
  const [spamvals, setSpamvals] = useState(spamQuestion());

  const handleChange = e => {
    const val = e.target.value.trim();
    const { name } = e.target;

    if (name === "idiotremover") {
      if (parseInt(val) === parseInt(spamvals.answer)) {
        setFormVals({ ...formVals, [`${name}`]: val });
        setSpammer(false);
      } else {
        setSpammer(true);
      }
    } else {
      setFormVals({ ...formVals, [`${name}`]: val });
    }
  };

  const handleSpammer = () => {
    const newQuestion = spamQuestion();
    setSpamvals(newQuestion);
  };

  // const handleRecaptcha = value => {
  //   // this.setState({ "g-recaptcha-response": value });
  //   setGCaptcha(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    // const { isSpammer } = this.state;

    if (!isSpammer) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...formVals,
          // "g-recaptcha-response": gCaptchaResponse,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error));
    } else {
      handleSpammer();
    }
  };

  return (
    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      action="/success"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          aria-label="Phone"
          required
          onChange={handleChange}
        />
        <div>
          <label htmlFor="idiotremover">{spamvals.question}</label>
          <input
            type="text"
            name="idiotremover"
            aria-label="idiotremover"
            required
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          cols="80"
          aria-label="Message"
          required
          onChange={handleChange}
        />
      </fieldset>

      <div className="nope-holder">
        <input name="bot-field" aria-label="Must leave blank" />
      </div>

      <StyledSubmit>
        Send <FaEnvelope />
      </StyledSubmit>
    </StyledForm>
  );
};

export default HomeForm;
