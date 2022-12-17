import React, { useEffect } from "react";
import { StyledDiv, StyledTable, StyledTh, StyledButton } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * 컴포넌트 개요 : Todo 메인 컴포넌트에서 각 todo item의 [상세보기]를 선택했을 경우 보이는 컴포넌트 영역
 * 2022.12.16 : 최초 작성
 *
 * @returns DetailBox 컴포넌트
 */
function DetailBox() {
  // 다른 컴포넌트로 이동하기 위한 useNavigate
  const navigate = useNavigate();

  // 이전 컴포넌트에서 넘어온 parameter를 조회
  const params = useParams();

  // 이 컴포넌트에서 아이템을 사용하기 위해, params로 전달받은 id를 이용-todo를 filtering
  const filteredTodos = useSelector((state) => {
    return state.todos.filter((item) => item.id === params.id);
  });

  // 화면이 최초 렌더링 되는 시점에 올바르지 않은 접근을 차단
  // 지금은 uuidv4()를 사용해서 새로고침할 때 마다 변경 -> DB 또는 Cookie 등 사용하면 해결
  useEffect(() => {
    if (filteredTodos.length <= 0 || filteredTodos.length > 1) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  // todo 객체를 얻어옴(filteredTodos는 무조건 요소가 1개여야 함)
  const todo = filteredTodos[0];

  // 이전 페이지로 가기 버튼을 선택했을 때, 컴포넌트 이동하는 함수
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledDiv>
      <h3>TODO 상세페이지</h3>
      <StyledTable>
        <tr>
          <StyledTh>KEY</StyledTh>
          <StyledTh>VALUE</StyledTh>
        </tr>
        <tr>
          <StyledTh>ID</StyledTh>
          <StyledTh>{todo?.id}</StyledTh>
        </tr>
        <tr>
          <StyledTh>TITLE</StyledTh>
          <StyledTh>{todo?.title}</StyledTh>
        </tr>
        <tr>
          <StyledTh>CONTENTS</StyledTh>
          <StyledTh></StyledTh>
        </tr>
        <tr>
          <StyledTh>완료여부</StyledTh>
          <StyledTh>{todo?.isDone ? "완료" : "미완료"}</StyledTh>
        </tr>
      </StyledTable>
      <StyledButton onClick={handleButtonClick}>
        이전 페이지로 가기
      </StyledButton>
    </StyledDiv>
  );
}

export default DetailBox;
