import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

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
      align-items: flex-start;
    }

    div.box {
      width: 100%;

      p {
        margin-bottom: 1rem;
      }

      p.contact-intro {
        font-size: 1.35rem;
        padding-right: 0;
        margin-bottom: 2rem;
        text-align: center;

        @media screen and (min-width: 960px) {
          text-align: left;
          padding-right: 2rem;
        }
      }

      @media screen and (min-width: 1024px) {
        width: 60%;
      }

      &.info {
        padding: 3rem 1rem;
        background: rgba(250, 250, 250, 0.05);

        ${'' /* 
        border: 1px solid rgba(153, 215, 225, 0.25); 
        */} @media screen and (min-width: 1024px) {
          width: 38%;
        }

        h5 {
          font-size: 0.9rem;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 1.5rem;
          color: #3096a7;
        }

        hr {
          border: none;
          height: 1px;
          width: 100%;
          background: linear-gradient(
            90deg,
            rgba(153, 215, 225, 0),
            rgba(153, 215, 225, 0.66),
            rgba(153, 215, 225, 0)
          );
          margin: 2.33rem 0;
        }

        p {
          font-size: 1.2rem;
          text-align: center;
          margin: 0 0 1rem;

          &:last-child {
            margin: 0;
          }

          svg {
            margin-right: 6px;
          }
        }

        a {
          transition: transform 150ms ease-out, color 150ms ease-out;
          display: inline-block;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
`;

export default () => {
  return (
    <ContactSection className="contact" id="contact">
      <h3>Let's Talk!</h3>

      <div className="contact-inner">
        <div className="box form">
          <p className="contact-intro">
            Have a question or comment, or want to discuss a project/job? I
            would love to hear from you!
          </p>

          <HomeForm />
        </div>

        <div className="box info">
          <h5>Contact Info:</h5>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <a href="tel:+14233434274">423.343.4274</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <a href="mailto:daniel@stoutlabs.com">daniel@stoutlabs.com</a>
          </p>
          <hr />
          <h5>Location:</h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
            <a
              href="https://goo.gl/maps/oK1sSMfLCnT2"
              rel="noopener noreferrer"
              target="_blank"
            >
              Kingsport, TN
            </a>
          </p>
        </div>
      </div>
    </ContactSection>
  );
};
