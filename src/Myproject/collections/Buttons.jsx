import styled, { css } from "styled-components";
export const PrimaryButtonStyle = css`
  display: block;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  background-color: navy;
  color: #fff;
  cursor: pointer;
`;

export const SecondaryButtonStyle = css`
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  text-decoration-thickness: 3px;
  background: transparent;
  color: inherit;
  border: 0;
  font-size: 1.2em;
  display: inline-block;
`;

export const LinkPrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`;
export const PrimaryButton = styled.a`
  ${PrimaryButtonStyle}
`;
export const LinkSecondaryButton = styled.a`
  ${SecondaryButtonStyle}
`;
export const SecondaryButton = styled.button`
  ${SecondaryButtonStyle}
`;
