import "./lista-suspensa.estilos.css"

export function ListaSuspensa(props) {
    return (
        <select {...props} className="lista-suspensa-form">
            <option value="" disabled selected hidden>Selecione uma opção</option>
            <option value="test">Test</option>
        </select>
    )
}