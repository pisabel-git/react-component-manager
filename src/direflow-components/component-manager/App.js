import React from "react";
import { Styled } from "direflow-component";
import styles from "./App.css";

import ComponentManager, { Tab } from "./component-manager";

import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";

export default function App() {
  return (
    <Styled styles={styles}>
      <ComponentManager>
        <Tab link="/">
          <Component1 />
        </Tab>
        <Tab link="/c2">
          <Component2 />
        </Tab>
        <Tab link="/c3">
          <Component3 />
        </Tab>
      </ComponentManager>
    </Styled>
  );
}

App.defaultProps = {};

App.propTypes = {};
