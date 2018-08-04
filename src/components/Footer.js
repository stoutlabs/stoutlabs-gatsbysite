import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <p
        style={{
          margin: '0 0 0.3rem',
          fontSize: '1rem'
        }}
      >
        &copy; {new Date().getFullYear()} StoutLabs
      </p>
    </footer>
  );
};

export default Footer;
