import { forwardRef } from "react"

interface ButtonProps {
    title: string
}

/**Para utilizar o fowardRef não podemos utilizar o export default na declaração do nosso componente
 * funcional.  Devemos fazer separadamente e passar o nosso componente como referencia.  Portanto, o fowardRef
 * é uma forma de passarmos referencias para componentes personalizados.  Ela é muito útil para quando queremos criar componentes
 * personalizados
 */

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    return (
        <button ref={ref} onClick={() => window.alert('oi')}>
        {props.title}
      </button>
    )
})