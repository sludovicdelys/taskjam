export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

// type Actions = {
//     type: 'add';
//     payload: Todo;
// } | {
//     type: 'remove';
//     payload: number;
// } | {
//     type: 'done';
//     payload: {id: number, todo: string};
// }

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch(action.type) {
//         case 'add':
//             return [...state, {id: Date.now(), todo: action.payload, isDone: false}];
//         case 'remove':
//             return state.filter((todo) => todo.id !== action.payload);
//         case 'done':
//             return state.map((todo) => todo.id === action.payload.id ? {...todo, todo: action.payload.todo} : todo);
//         default:
//             return state;
// }

// import { useReducer } from 'react';

// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, []);

//     return (
//         <div></div>
//     )
// }