import { Cars } from "../src/components/Cars/Cars";
import "../public/css/styles.css";
import React from "react";
import { Block, Button } from 'vcc-ui';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { createRenderer } from 'fela'

function HomePage() {
  return (
<StyleProvider>
    <ThemePicker variant="light">
      <Cars/>
    </ThemePicker>
  </StyleProvider>
  );

}

export default HomePage;
