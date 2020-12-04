import React from "react";
import styled from "styled-components";

const LogoTitle = styled.h1`
  @media (max-width: 464px) {
    display: none;
  }
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Logo() {
  return <LogoTitle>Flix</LogoTitle>;
}
