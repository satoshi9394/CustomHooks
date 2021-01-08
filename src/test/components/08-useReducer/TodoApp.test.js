import { mount, shallow } from "enzyme"
import React from 'react'
import { act } from "@testing-library/react"
import TodoApp from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos"


describe('Pruebas en el componente <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp/>);

  Storage.prototype.setItem = jest.fn(() => {})

  test('debe mostrarse correctamente:', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe agregar un todo', () => {
    const wrapper = mount( <TodoApp/> );
    
    act( () => {
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
    })

    expect( wrapper.find('h1').text().trim()).toBe(`TodoApp ( ${demoTodos.length} )`)
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)

  })

})