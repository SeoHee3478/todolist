import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import DoneItem from "./DoneItem";

const TodoWrap = styled.main`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListWrap = styled.section`
  min-width: 350px;
  padding: 10px;
`;

const TodoHeader = styled.h1`
  color: #141923;
`;
const DoneHeader = styled.h1`
  color: #0d58eb;
`;

const ListUl = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListLi = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  gap: 25px;
`;

const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: 3px;
  width: 60%;
  padding: 10px;
`;
const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  background: gray;
  color: white;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Todos = ({
  input, //인풋에 입력되는 텍스트
  todos, //할 일 목록이 를어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    {
      if (input.length == 0) {
        return alert("할 일을 입력하세요.");
      } else if (todos.length >= 5) {
        return alert("할 일 목록은 최대 5개까지만 생성이 가능합니다.");
      } else {
        onInsert(input);
      }
    }
    onChangeInput(""); //등록 후 인풋 초기화
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <TodoWrap>
      <ListWrap>
        <TodoHeader>Todo</TodoHeader>
        <ListUl>
          {todos
            .filter((todo) => todo.done == false)
            .map((todo) => (
              <ListLi key={todo.id}>
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  onToggle={onToggle}
                  onRemove={onRemove}
                />
              </ListLi>
            ))}
        </ListUl>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="할 일을 입력해주세요."
            value={input}
            onChange={onChange}
          />
          <AddButton type="submit">등록</AddButton>
        </Form>
      </ListWrap>
      <ListWrap>
        <DoneHeader>Done</DoneHeader>
        <ListUl>
          {todos
            .filter((todo) => todo.done == true)
            .map((todo) => (
              <ListLi key={todo.id}>
                <DoneItem todo={todo} key={todo.id} onRemove={onRemove} />
              </ListLi>
            ))}
        </ListUl>
      </ListWrap>
    </TodoWrap>
  );
};

export default Todos;
