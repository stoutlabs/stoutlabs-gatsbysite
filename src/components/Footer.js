import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <p
        style={{
          margin: '0 0 0.3rem',
          fontSize: '0.95rem',
          textAlign: 'center',
          fontStyle: 'italic',
          opacity: '0.9'
        }}
      >
        &copy; {new Date().getFullYear()} StoutLabs
      </p>
    </footer>
  );
};

export default Footer;
