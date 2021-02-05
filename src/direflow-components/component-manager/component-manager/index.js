import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const Manager = createContext("/");

export function Tab({ children, link }) {
  const semiRoute = useContext(Manager);
  return link === semiRoute && <>{children}</>;
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default function ComponentManager({ children }) {
  return <Manager.Provider>{children}</Manager.Provider>;
}

ComponentManager.propTypes = {
  children: PropTypes.array.isRequired,
};
