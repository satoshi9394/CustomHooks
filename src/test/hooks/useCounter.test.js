import { renderHook, act } from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter"

describe('pruebas en <HookApp/>', () => {

  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook( () => useCounter() )
    expect( result.current.counter ).toBe(10);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');

  })

  test('debe tener el counter en x valor', () => {
    const valorOfCounter = 100
    const { result } = renderHook( () => useCounter(valorOfCounter) )
    expect( result.current.counter ).toBe(valorOfCounter);

  })

  test('debe de incremetar el counter en x', () => {
    const valorOfCounter = 100
    const valorOfIncrement = 2
    const { result } = renderHook( () => useCounter(valorOfCounter) );
    const { increment } =  result.current;
    
    act( () => {
      increment(valorOfIncrement)
    })
    const { counter } =  result.current;
    expect( counter ).toBe(valorOfCounter + valorOfIncrement)

  })

  test('debe de decrementar el counter en x', () => {
    const valorOfCounter = 100;
    const valorOfDecrementar = 2;
    const { result } = renderHook( () => useCounter(valorOfCounter) );
    const { decrement } =  result.current;
    
    act( () => {
      decrement(valorOfDecrementar);
    })
    const { counter } =  result.current;
    expect( counter ).toBe(valorOfCounter - valorOfDecrementar);

  })

  test('debe de resetear el valor', () => {
    const valorOfCounter = 100;
    const valorOfDecrementar = 2;
    const { result } = renderHook( () => useCounter(valorOfCounter) );
    const { decrement } =  result.current;
    const { reset } =  result.current;
    
    act( () => {
      decrement(valorOfDecrementar);
      reset();
    })
    const { counter } =  result.current;
    expect( counter ).toBe( valorOfCounter );

  })

})