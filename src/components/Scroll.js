import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import PropTypes from "prop-types";

const Element = props => props.children;

class Scroll extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    smoothscroll.polyfill();
  }

  handleClick = e => {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const { type, element, offset, timeout } = this.props;
    if (type && element) {
      switch (type) {
        case "class":
          [elem] = document.getElementsByClassName(element);
          scroll = !!elem;
          break;
        case "id":
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }
    scroll ? this.scrollTo(elem, offset, timeout) : console.log(`Element not found: ${element}`); // eslint-disable-line
  };

  scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
    }
  };

  render() {
    const { children } = this.props;

    return (
      <Element>
        {typeof children === "object" ? (
          React.cloneElement(children, { onClick: this.handleClick })
        ) : (
          <span onClick={this.handleClick} role="presentation">
            {children}
          </span>
        )}
      </Element>
    );
  }
}

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Scroll;
