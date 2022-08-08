import React from "react";
import "./App.css";
import { Container } from "./components/DesignComponent/Container";
import { HeadingH2 } from "./components/DesignComponent/Heading";
import styled from "styled-components";
import Comment from "./components/DesignComponent/Comment";

import Input from "./components/DesignComponent/input";

import "./components/DesignComponent/global.css";

import { comments } from "./data";

function App() {
  return (
    <div className='App' style={{ marginTop: 32 }}>
      <Container>
        <HeadingH2>Comments</HeadingH2>
        <Input />
        <CommentsBody>
          {comments.map(comment => (
            <Comment {...comment} />
          ))}
        </CommentsBody>
      </Container>
    </div>
  );
}

export default App;
//its can be.. .but its bad practice....
const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
