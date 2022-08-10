import React from "react";
import styled from "styled-components";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { titleStyles } from "../collections/styles";
import Container from "../elements/Container";
import StyledSpan from "../elements/StyledSpan";
import CircleImage from "../elements/CircleImage";

const H1Title = styled.h1`
  ${titleStyles}
  margin:0;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

//!img dentro de folder public
const Header = className => {
  return (
    <Container>
      <header className={className}>
        <div>
          <InfoContainer>
            <H1Title>
              Welcome to <StyledSpan> Andres page </StyledSpan>
              Software Engineer
            </H1Title>
            <Row>
              <LinkPrimaryButton>Projects</LinkPrimaryButton>
              <LinkPrimaryButton>Download CV</LinkPrimaryButton>
            </Row>

            <LinkSecondaryButton>read my articles</LinkSecondaryButton>
          </InfoContainer>
        </div>

        <CircleImage width='350' src='/avatar.jpg' alt='Andres Photo' />
      </header>
    </Container>
  );
};

export default styled(Header)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: blue;
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
`;
