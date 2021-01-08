import { shallow } from 'enzyme';
import React from 'react';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas del componente <RealExampleRef/>', () => {

  const wrapper = shallow( <RealExampleRef/>);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  
  test('debe mostrarse el compoenente de <MultipleCustomHooks', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  })

})