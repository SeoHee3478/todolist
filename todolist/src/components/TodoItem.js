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
  font-size: 0.8rem;
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
  font-size: 0.8rem;
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
        {/* 삭제 버튼 클릭 시 onRemove함수 실행하여 해당 할 일 목록 삭제하기 */}
        <TodoDeleteButton onClick={() => onRemove(todo.id)}>
          삭제
        </TodoDeleteButton>
        {/* 완료 버튼 클릭 시 onTooggle함수 실행하여 해당 할 일 목록의 done을 true로 만들어 Donelist에서 보여주기 */}
        <TodoDoneButton onClick={() => onToggle(todo.id)}>완료</TodoDoneButton>
      </ButtonWrap>
    </>
  );
};

export default TodoItem;
