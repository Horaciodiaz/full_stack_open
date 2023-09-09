import React from 'react'
import ReactDOM from 'react-dom'
import imagen from './fototeta.jpg'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  )
}

const App = () => {
  const date = new Date();
  const a = 2;
  const b = 3;

  console.log("Hello from component")
  return(
  <>
    <Hello name="pedro"/>
    <p>Hello world today is {date.toString()}</p>
    <p>{a} + {b} = {a+b}</p>
    <img src={imagen}></img>
  </>
  )
  

}
ReactDOM.render(<App />, document.getElementById('root')) 