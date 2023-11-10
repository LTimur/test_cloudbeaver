import React from "react";
import { Provider } from "inversify-react";
import { container } from "./Container";
import { AppRoutes } from "./AppRoutes";

export function App() {
  return (
    <Provider container={container}>
      <AppRoutes/>
    </Provider>
  );
  }