import { useEffect, useRef } from 'react';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './PeopleList';

function App() {

  const number = useCounter()
  /**Quando chamamos o hook useRef, podemos passar um valor inicial para o mesmo.
   * Qual a diferença desse hook para um estado?  É que ele é mutável.  Se eu desejar alterar o valor
   * dele diretamente, eu posso.  Porém , como não é um estado, não causa re-renderização do nosso 
   * componente.  Este hook retorna um objeto.  Na prática, dificilmente vamos fazer uso do useRef.
   * No entanto, um uso muito comum deste hook, é quando queremos recuperar elementos do DOM.  Porém,
   * não é nada comum trabalharmos diretamente com o DOM dentro do React
   */
  const counter = useRef(2)
  const div = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(div.current) {
      div.current.style.backgroundColor = 'green'
    }
  }, [])

  return (
    <div className="App" ref={div}>
      { number }
      <div style={{ background: 'peachpuff'}}>
        { counter.current }
      </div>
      <PeopleList/>
      <PeopleList/>
    </div>
  );
}

export default App;
