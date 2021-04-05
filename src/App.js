import logo from './logo.svg';
import './App.css';
import './canvas.css';
import React, { useRef, useEffect } from 'react';
import { flat_hex_corner } from './library'


function App() {

  return <Canvas />

}
/*

export default class Canvas extends React.Component {

  state = { hexSize: 50, hexOrigin: (x: 100, y: 130)}

  componentWillMount() {

    this.state({
      canvasSize: { canvasWidth: 800, canvasHigh: 600 }
    })
  }

}

*/



function flat_hex_total(point) {


  let coordtt = test.map((coord) => { flat_hex_corner() })

  let week = ["caca", "caca2"];

  let week2 = week.map((day) => {
    return (<li>{day}</li>)
  })

}

/*

const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = ctx => {
    ctx.fillStyle = '#548659'
    ctx.beginPath();
    ctx.moveTo(50, 75);
    ctx.lineTo(0, 50);
    ctx.lineTo(100, 25);
    ctx.fill();

    ctx.fillStyle = '#005485'
    ctx.beginPath()
    ctx.arc(200, 100, 20, 0, 2 * PI)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(flat_hex_corner(200, 50, 1)[0], flat_hex_corner(200, 50, 1)[1])
    ctx.lineTo(flat_hex_corner(200, 50, 2)[0], flat_hex_corner(200, 50, 2)[2])
    ctx.lineTo(flat_hex_corner(200, 50, 3)[0], flat_hex_corner(200, 50, 3)[2])
    ctx.fill();
    //ctx.lineTo(flat_hex_corner(200, 50, 1))
  }




  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    //Our draw come here
    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...props} />
}

*/

export default App;
