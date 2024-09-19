import react from 'react'

// function Greet(){
//     return <h1>Hello Tesfay</h1>
// }
const Greet = (props) => {
console.log(props)
return <h1>Hello {props.name} also known as  {props.heroName}</h1>
}
export default Greet;