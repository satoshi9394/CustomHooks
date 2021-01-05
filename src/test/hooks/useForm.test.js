import { renderHook, act } from "@testing-library/react-hooks"
import useForm from "../../hooks/useForm"


describe('pruebas en useForm', () => {

  const initialForm = {
    name: 'Angel',
    email: 'angelsb94@gmail.com'
  }

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm(initialForm) )
    const [ formValues, handleInpuntChange, reset] = result.current;
    expect(formValues).toEqual( initialForm );
    expect( typeof handleInpuntChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  })

  test('debe de cambiar el valor del formulario (cambiar el name)', () => {

    const { result } = renderHook( () => useForm(initialForm) )
    const [ , handleInpuntChange] = result.current;
    act( () => {
      handleInpuntChange({
        target: {
          name: 'name',
          value: 'Pedro'
        }
      })
    })
    const [ formValues ] = result.current;
    expect( formValues ).toEqual({...initialForm, name: 'Pedro'})

  })

  test('debe de re-establecer el formulario con Reset', () => {

    const { result } = renderHook( () => useForm(initialForm) )
    const [ , handleInpuntChange, reset] = result.current;
    act( () => {
      handleInpuntChange({
        target: {
          name: 'name',
          value: 'Pedro'
        }
      })
      reset()
    })
    const [ formValues ] = result.current;
    expect( formValues ).toEqual(initialForm)

  })

})