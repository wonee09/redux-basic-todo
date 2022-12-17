import React from "react";
import { StyledDiv, StyledAnchor } from "./styles";

/**
 * 컴포넌트 개요 : 앱 전체에서 Footer의 역할을 하는 영역
 * 2022.12.16 : 최초 작성
 *
 * @returns Footer 컴포넌트
 */
function Footer() {
  return (
    <StyledDiv>
      <StyledAnchor>개인정보처리방침</StyledAnchor>
      <StyledAnchor>서비스 이용약관</StyledAnchor>
      <StyledAnchor>환불 규정</StyledAnchor>
      <StyledAnchor>고객센터</StyledAnchor>
    </StyledDiv>
  );
}

export default Footer;
