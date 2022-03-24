const initialState = [
  {
    id: 1,
    todo: "Learn Hooks",
    done: false,
  },
  {
    id: 2,
    todo: "Learn React",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 3,
  todo: "Learn Redux",
  done: false,
};

const addTodoAction = {
  type: "ADD_TODO",
  payload: newTodo,
};

todos = todoReducer([...todos], addTodoAction);

console.log(todos);
