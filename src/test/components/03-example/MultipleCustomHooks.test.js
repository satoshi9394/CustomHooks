import { shallow } from 'enzyme'
import React from 'react';
import MultipleCustomHooks from '../../../components/03-example/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas de <MultipleCustomHooks/>', () => {

  beforeEach( () => {
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })
  }) 

  test('debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    const wrapper = shallow( <MultipleCustomHooks/>);
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Angel',
        quote: 'hola mundo'
      }],
      loading: false,
      error: null
    });
    const wrapper = shallow( <MultipleCustomHooks/>);
    expect( wrapper.find('.alert').exists() ).toBe(false);
    expect( wrapper.find('.mb-0').text().trim() ).toBe('hola mundo');
    expect( wrapper.find('footer').text().trim() ).toBe('Angel');
  })


})