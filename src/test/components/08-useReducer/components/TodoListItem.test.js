import { shallow } from 'enzyme';
import React from 'react';
import TodoListItem from "../../../../components/08-useReducer/components/TodoListItem";
import { demoTodos } from '../../../fixtures/demoTodos';

describe('Pruebas en el <TodoListItem/>', () => {

  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow( <TodoListItem
    todo={ demoTodos[0] }
    index={ 0 }
    handleDelete = { handleDelete }
    handleToggle = { handleToggle }
  />);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar a la handleDelete', () => {
    wrapper.find('button').simulate('click');
    expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('debe de llamar a la handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( `${ 0 + 1}.-${ demoTodos[0].desc }` );
  });

  test('debe de tener la clase complete si el Todo.done = true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow( <TodoListItem
      todo={ todo }
      index={ 0 }
      handleDelete = { handleDelete }
      handleToggle = { handleToggle }
    />);
    
    expect( wrapper.find('p').hasClass('complete')).toBe(true)
  });

})