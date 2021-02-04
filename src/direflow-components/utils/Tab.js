import React from "react";
import PropTypes from "prop-types";

export default function Tab({ children, link }) {
  return link && <>{children}</>;
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};
