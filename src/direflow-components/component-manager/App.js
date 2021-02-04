import React, { createContext } from "react";
import { Styled } from "direflow-component";
import styles from "./App.css";

import Tab from "./utils/Tab";

import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";

export default function App() {
  const Contexte = createContext("/");
  return (
    <Styled styles={styles}>
      <Contexte.Provider>
        <Tab link="/c1">
          <Component1 />
        </Tab>
        <Tab link="/c2">
          <Component2 />
        </Tab>
        <Tab link="/c3">
          <Component3 />
        </Tab>
      </Contexte.Provider>
    </Styled>
  );
}

App.defaultProps = {};

App.propTypes = {};
