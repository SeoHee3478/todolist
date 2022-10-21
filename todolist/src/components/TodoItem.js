import React from "react";
import styled from "styled-components";

const TextWrap = styled.div`
  background-color: white;
  border-radius: 3px;
  width: 60%;
  padding: 10px;
`;
const TodoText = styled.span`
  color: #2b3247;
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const TodoDeleteButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px 15px;
  color: #cb454a;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-color: #cb454a;
    color: white;
  }
`;
const TodoDoneButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: blue;
  padding: 10px 15px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <>
      <TextWrap>
        <TodoText>{todo.text}</TodoText>
      </TextWrap>
      <ButtonWrap>
        <TodoDeleteButton onClick={() => onRemove(todo.id)}>
          삭제
        </TodoDeleteButton>
        <TodoDoneButton onClick={() => onToggle(todo.id)}>완료</TodoDoneButton>
      </ButtonWrap>
    </>
  );
};

export default TodoItem;
