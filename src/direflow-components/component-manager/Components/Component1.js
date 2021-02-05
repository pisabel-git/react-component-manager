import React from "react";
import { ComponentLink } from "../react-c-manager";

export default function Component1() {
  return (
    <>
      <div>Composant 1</div>
      <ComponentLink to="/c3">Vers le composant 3</ComponentLink>
    </>
  );
}
