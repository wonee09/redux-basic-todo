import React from "react";
import { useDispatch } from "react-redux";
import HeightBox from "../common/HeightBox";
import { removeTodo, switchTodo } from "../../modules/todos";
import { useNavigate } from "react-router-dom";
import {
  StyledDiv,
  StyledTitle,
  StyledContents,
  TodoButton,
  FlexButtonBox,
  LinkedP,
  FlexTitleBox,
} from "./styles";

/**
 * 컴포넌트 개요 : 메인 > TODOLIST > TODO. 할 일의 단위 컴포넌트
 * 2022.12.16 : 최초 작성
 *
 * @returns Todo 컴포넌트
 */
function Todo({ todo, isActive }) {
  // 삭제 확인 용 메시지 관리
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 완료, 취소를 handling하는 함수
  const handleSwitchButton = () => dispatch(switchTodo(todo.id));

  // [삭제] 버튼 선택 시 호출되는 함수(user의 confirmation 필요)
  const handleRemoveButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(removeTodo(todo.id));
  };

  // [상세보기]를 선택하는 경우 이동하는 함수
  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StyledDiv>
      <FlexTitleBox>
        <StyledTitle>{todo.title}</StyledTitle>
        <LinkedP onClick={handleDetailPageLinkClick}>[상세보기]</LinkedP>
      </FlexTitleBox>
      <HeightBox height={10} />
      <StyledContents>{todo.contents}</StyledContents>
      <HeightBox height={20} />
      <FlexButtonBox>
        <TodoButton onClick={handleSwitchButton}>
          {isActive ? "완료" : "취소"}
        </TodoButton>
        <TodoButton onClick={handleRemoveButton}>삭제</TodoButton>
      </FlexButtonBox>
    </StyledDiv>
  );
}

export default Todo;
