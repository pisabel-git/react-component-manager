import React from "react";

import { ComponentManager, Tab, ComponentLink } from "./component-manager";

import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";

function App() {
  return (
    <ComponentManager>
      <nav>
        <ComponentLink to="/">Component 1</ComponentLink>
        <ComponentLink to="/c2">Component 2</ComponentLink>
        <ComponentLink to="/c3">Component 3</ComponentLink>
      </nav>
      <section>
        <Tab link="/">
          <Component1 />
        </Tab>
        <Tab link="/c2">
          <Component2 />
        </Tab>
        <Tab link="/c3">
          <Component3 />
        </Tab>
      </section>
    </ComponentManager>
  );
}

App.propTypes = {};

export default App;
