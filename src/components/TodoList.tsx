import React from "react";
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  CompletedTodos: Todo[];
}

const TodoList: React.FC<Props> = ({ 
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div 
          className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
          >
            <span className="todos__heading">
              Active Tasks
            </span>
            {todos?.map((todo, index) => (
            <SingleTodo
              index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
            ))}
            {provided.placeholder}
          </div>
        )} 
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {
          (provided, snapshot) => (
            <div className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
              <span className="todos__heading completed">
                Completed Tasks
              </span>
              {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
              ))}
              {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;