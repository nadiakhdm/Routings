import React from "react";
import Header from "./Components/Header";

import { Routes } from "./Routes";
import { Privaitroute } from "./App";

export default function Layoute({ children }) {
  return (
    <div>
   
    <Header/>

        {Routes?.map(({ name, path, componentPath }) => {
          let Components = require(`${componentPath}`).default;
          return (
            <Privaitroute key={name} exact path={path}>
              <Components />
            </Privaitroute>
          );
        })}
  
    </div>
  );
}
