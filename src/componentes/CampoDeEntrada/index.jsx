import "./campo-entrada.estilos.css"

//function CampoDeEntrada({type, id, placeholder, name}) {
export function CampoDeEntrada(props) {
  return <input {...props}
    className="campo-entrada-form" />
}
