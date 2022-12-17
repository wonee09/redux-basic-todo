import React from "react";
import styled from "styled-components";

function RightMarginBox({ margin, children }) {
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
}

export default RightMarginBox;

const StyledDiv = styled.div`
  margin-right: ${(props) => props.margin}px;
`;
