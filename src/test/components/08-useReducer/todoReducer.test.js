import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
  
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect( state ).toEqual(demoTodos);
  });

  test('debe de agregar un Todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender js',
      done: false
    };
    const action =  {
      type: 'add',
      payload: newTodo
    };
    const newDemoTodos = [...demoTodos, newTodo]
    const state = todoReducer(demoTodos, action);
    expect( state.length ).toBe(3);
    expect( state ).toEqual(newDemoTodos);
  });

  test('debe de borrar un Todo', () => {
    const action =  {
      type: 'delete',
      payload: 1
    };
    const newDemoTodos = demoTodos.filter( todo => todo.id !== action.payload );
    const state = todoReducer(demoTodos, action);
    expect( state.length ).toBe(1);
    expect( state ).toEqual(newDemoTodos);
  });

  test('debe de hacer el toggle Todo', () => {
    const action =  {
      type: 'toggle',
      payload: 1
    };
    const newDemoTodos = demoTodos.map( todo => ( todo.id === action.payload ? { ...todo, done: !todo.done } : todo))
    const state = todoReducer(demoTodos, action);
    expect( state ).toEqual(newDemoTodos);
  });

})