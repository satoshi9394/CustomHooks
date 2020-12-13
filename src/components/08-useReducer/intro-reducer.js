// no usar el push en react ya que muta el objeto
console.group(['Estado inicial']);
const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = ( state = initialState, action) => {

  if (action?.type === 'agregar') {
    return [ ...state, action.payload ]
  }

  return state;
}

let todos = todoReducer();

console.table(todos);
console.groupEnd();

console.group(['Estado despues de la action']);

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
};

const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

todos =  todoReducer( todos , agregarTodoAction )
console.table(todos)
console.groupEnd();