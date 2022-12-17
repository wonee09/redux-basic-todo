import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 30px 20px 30px 20px;
  width: 200px;
  margin: 10px;
  background-color: #f2e8ff;
  border-radius: 20px;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
`;

const StyledContents = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
`;

const LinkedP = styled.p`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const TodoButton = styled.button`
  background-color: #7684b8;
  width: 49%;
  height: 15px;
  color: white;
  font-weight: 500;
  height: 30px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const FlexButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  StyledDiv,
  StyledTitle,
  StyledContents,
  TodoButton,
  FlexButtonBox,
  LinkedP,
  FlexTitleBox,
};
