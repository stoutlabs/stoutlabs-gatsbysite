import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  fieldset {
    padding: 0 0 2rem;
  }

  input,
  textarea {
    background: #fff;
    display: block;
    margin: 0 0 1.6rem;
    padding: 0.75rem;
    width: 90%;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    color: #999;
    outline: none;
    border: 2px solid #ccc;
    transition: border 250ms ease-out, background-color 250ms ease-out;

    &:focus {
      border: 2px solid #61a9b3;
      background: #fdfdfd;
    }
  }

  textarea {
    min-height: 200px;
  }

  button {
    background: #fff;
    border: 2px solid #2a899a;
    border-radius: 8px;
    color: #2a899a;
    display: inline-block;
    font-size: 1.3rem;
    padding: 1rem 2.25rem;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #fbfbfb;
      border-color: #fff;
      background: #2a899a;
    }
  }
`;

export const HomeForm = () => {
  return (
    <StyledForm
      onSubmit={() => {
        console.log('submitted form here');
      }}
    >
      <fieldset>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="phone" name="phone" placeholder="Phone Number" />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          cols="80"
        />
      </fieldset>

      <button type="submit">Send</button>
    </StyledForm>
  );
};

export default HomeForm;
