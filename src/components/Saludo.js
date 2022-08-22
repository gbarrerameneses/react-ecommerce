// const Saludo = (props) => {
const Saludo = ({name, lastname}) => {

  return (
    // <div>¡Hola {props.name} {props.lastname}!</div>
    <div>¡Hola {name} {lastname}!</div>
  )
}

export default Saludo


// function Saludo () {
//     return <h1>¡Hola a todos!</h1>
// }
// export default Saludo