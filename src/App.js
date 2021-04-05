import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect } from 'react';

function App() {

  return <Canvas />

}


const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2 * Math.PI)
    ctx.fill()
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    //Our draw come here
    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...props} />
}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHILDREN OF PROUT
        </p>
        <p>
          {display()}
          //{ Commande pour afficher result foncton display dans le HTML, mettre des {} pour signifier que c'est du JS}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

*/

/* const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2 * Math.PI)
    ctx.fill()
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    //Our draw come here
    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...props} />
} */

function display(prout) {

  let week = ["caca", "caca2"];

  let week2 = week.map((day) => {
    return (<li>{day}</li>)
  })

  return (week2)


}

/* const gestion_week = (nbjour) => { } */

/* test */




export default App;
