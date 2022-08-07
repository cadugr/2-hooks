import { useReducer } from 'react';
import './App.css';

interface InitialState {
  count: number
}

type Action = 
{type: 'DECREMENT'} |
{type: 'INCREMENT', payload: number}

const initialState: InitialState = {
  count: 1
}
/**Essa função reducer, obrigatoriamente recebe o estado e uma ação.  Obrigatoriamente ela precisa 
 * retornar um estado.
 */
function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }  
      default:
        return state  
  } 
}

function App() {

  /**O useReducer, espera dois parametros: uma função e o estado inicial*/
  const [state, dispatch] = useReducer(reducer, initialState)

  /**A idéia para utilizarmos o hook useReducer é para gerenciarmos estados locais de forma mais complexa.
   * Funciona de forma muito parecida com o redux.  O método dispatch, faz com que a função reducer seja executada.
   * O ideal para utilizar um reducer é quando temos muita lógica para gerenciar o nosso estado.
   */
  return (
    <div className="App">
      <div style={{backgroundColor: 'peachpuff'}}>
        { state.count }
      </div>
      <button onClick={() => {
        dispatch({ type: 'INCREMENT', payload: 2 })
      }}>
        acrescer
      </button>
      <button onClick={() => {
        dispatch({ type: 'DECREMENT' })
      }}>
        diminuir
      </button>
    </div>
  );
}

export default App;
