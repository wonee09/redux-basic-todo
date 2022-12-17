import React from "react";
import styled from "styled-components";

function HeightBox({ height }) {
  return <StyledDiv height={height} />;
}

export default HeightBox;

const StyledDiv = styled.div`
  height: ${(props) => props.height}px;
`;
