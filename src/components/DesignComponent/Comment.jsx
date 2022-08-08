import React from "react";
import styled from "styled-components";
import { HeadingH4 } from "../DesignComponent/Heading";
const Comment = props => {
  return (
    <StyledCommentWrapper>
      <HeadingH4>{props.name}</HeadingH4>
      <CommentBody>{props.body}</CommentBody>
      <span style={{ color: "#c3c3c3" }}>replies</span>
    </StyledCommentWrapper>
  );
};

export default Comment;
const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CommentBody = styled.p`
  line-height: 24px;
  color: #626262;
`;
