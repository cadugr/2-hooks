import { useEffect, useState } from "react"

export default function useCounter(initialNumber = 1) {

    /**Podemos criar estados dentro de hooks.  Porém, é importante lembrar que não podemos
     * gerar efeito colateral na raiz do nosso componente.  Podemos tranquilamente utilizar um
     * hook, dentro de outro
     */

    const [number, setNumber] = useState(initialNumber)

    /**Não podemos utilizar então, métodos como este setTimeout dentro de um hook, pois gera efeito colateral.
     * Neste caso, podemos usar o useEffect.
     */
    // setTimeout(() => {
    //     number = 2
    // }, 5000)

    useEffect(() => {
        setTimeout(() => {
            setNumber(number + 1)
        }, 5000)
    }, [ ])

    return number

}