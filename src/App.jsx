import logo from './logo.svg';
import './App.css';
import './canvas.css';
import { calc_coord_hexa } from './library'
import React from 'react';
import Canvas from './Canvas.jsx'

export default class App extends React.Component {
  render() {
    return (
      < div >
        <Canvas />
      </div >
    )
  }
}