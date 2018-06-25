import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  fieldset {
    padding: 0 0 2rem;
  }

  input {
    display: block;
    margin: 0 0 1.6rem;
    padding: 0.75rem;
    width: 80%;
  }

  button {
    background: #f5f5f5;
    border: 2px solid #2a899a;
    border-radius: 8px;
    color: #2a899a;
    display: inline-block;
    font-size: 1.3rem;
    padding: 1rem 2.25rem;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #3a99aa;
      border-color: #3a99aa;
    }
  }
`;

export const HomeForm = () => {
  return (
    <StyledForm>
      <fieldset>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="phone" name="phone" placeholder="Phone Number" />
      </fieldset>

      <button type="submit">Send</button>
    </StyledForm>
  );
};

export default HomeForm;
