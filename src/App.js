import React from "react";
import Card from "./components/Card";
import { Container, Developer } from "./styled/Card.styled";

function App() {
  return (
    <Container>
      <Card />
      <Developer>
        <div>
          <h5>Developed by </h5>
          <h5>Kevin Brian</h5>
          <span>&hearts;</span>
          <small>2022</small>
        </div>
      </Developer>
    </Container>
  );
}

export default App;
