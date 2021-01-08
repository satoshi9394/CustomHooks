import { shallow } from "enzyme"
import React from 'react'
import TodoAdd from "../../../../components/08-useReducer/components/TodoAdd";


describe('hacer pruebas en <TodoAdd/>', () => {

  const handleAddTodo = jest.fn()

  const wrapper = shallow(<TodoAdd
    handleAddTodo = { handleAddTodo }
  />)

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('no debe de llamar handleAddTodo', () => {
    const formSumit = wrapper.find('form').prop('onSubmit');
    formSumit({ preventDefault(){} })
    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
  })

  test('debe de llamar la funcion handleAddTodo', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    })
    const formSumit = wrapper.find('form').prop('onSubmit');
    formSumit({ preventDefault(){} })
    expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object));
    expect( handleAddTodo ).toHaveBeenCalledWith({ 
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect( wrapper.find('input').prop('value') ).toBe('')
  })

})