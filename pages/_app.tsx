import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

import { Cars } from "../src/components/Cars/Cars";
import "../public/css/styles.css";

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <div className="cars-corousel-container">
          <Cars />
        </div>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
