import React from "react";
import { ImSpinner2 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  color: white;
  animation: ${rotate} 2s linear infinite;
`;

export default function Loading() {
  return (
    <Rotate>
      <ImSpinner2 fontSize="2em" />
    </Rotate>
  );
}
