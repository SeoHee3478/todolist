import React from "react";
import styled from "styled-components";

const TextWrap = styled.div`
  background-color: white;
  border-radius: 3px;
  width: 60%;
  padding: 10px;
`;
const DoneText = styled.span`
  color: #2b3247;
`;

const DoneDeleteButton = styled.button`
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

const DoneItem = ({ todo, onRemove }) => {
  return (
    <>
      <TextWrap>
        <DoneText>{todo.text}</DoneText>
      </TextWrap>
      <DoneDeleteButton onClick={() => onRemove(todo.id)}>
        삭제
      </DoneDeleteButton>
    </>
  );
};

export default DoneItem;
