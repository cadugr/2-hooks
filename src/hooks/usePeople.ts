import { useState } from "react";

export default function usePeople() {

    /**Um ponto importante para nos atentarmos é que esse estado do hook passa a ser o estado
     * do componente quando neste utilizamos o hook.  Por esta razão que lá no componente App
     * quando pedimos para renderizar duas listas, ao clicar no botão de cada lista, apenas a lista
     * associada aquele botão, foi alterada.  Ou seja, os hooks possuem estado local, o qual pertence 
     * ao componente que o executa.  Tem como gerenciar estado global em hooks?  Sim.  Veremos isso quando
     * formos falar de redux
     */
    const [people, setPeople] = useState(['Daniel', 'Alex'])

    function addPerson(name: string) {
        setPeople([...people, name])
    }

    /**repare que em nosso hook, podemos retornar um objeto, aonde posso neste objeto ter um estado, uma função, etc. */
    return {
        people,
        addPerson
    }
}