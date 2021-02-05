import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ContexteManager = createContext();

export function Tab({ children, link }) {
  const manager = useContext(ContexteManager);
  return link === manager.pseudoRoute && <>{children}</>;
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string,
};

export function ComponentLink({ children, to }) {
  const manager = useContext(ContexteManager);
  const handleGoTo = () => {
    manager.setPseudoRoute(to);
  };
  return <button onClick={handleGoTo}>{children}</button>;
}

ComponentLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};

export function ComponentManager({ children }) {
  const [pseudoRoute, setPseudoRoute] = useState("/");
  return (
    <ContexteManager.Provider value={{ pseudoRoute, setPseudoRoute }}>
      {children}
    </ContexteManager.Provider>
  );
}

ComponentManager.propTypes = {
  children: PropTypes.any.isRequired,
};
