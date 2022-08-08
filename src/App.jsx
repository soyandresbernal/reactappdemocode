import React from "react";
import "./App.css";

import { Container } from "./components/DesignComponent/Container";
import { Heading } from "./components/DesignComponent/Heading";
import "./components/DesignComponent/global.css";
function App() {
  return (
    <div className='App' style={{ marginTop: 32 }}>
      <Container>
        <Heading>Comments</Heading>
      </Container>
    </div>
  );
}

export default App;
