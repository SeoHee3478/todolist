import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
      <button onClick={() => onToggle(todo.id)}>완료</button>
    </div>
  );
};

const DoneItem = ({ todo, onRemove }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

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
    onInsert(input);
    onChangeInput(""); //등록 후 인풋 초기화
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <section>
        <h1>Todo</h1>
        <div>
          {todos
            .filter((todo) => todo.done == false)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))}
        </div>
        <form onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
      </section>
      <section>
        <h1>Done</h1>
        <div>
          {todos
            .filter((todo) => todo.done == true)
            .map((todo) => (
              <DoneItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Todos;
