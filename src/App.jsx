import "./App.css";
import React from "react";
import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString, getHexagonColor } from "./SvgGridGenerator";
import { generateEntireGrid } from "./HexagonGridCalculator";

export function App() {

  let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;


  return (
    <div>
      {/* <Canvas /> */}
      <svg width="1000" height="1000">
        {/* <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="red" /> */}
        {/* <polygon points={hexagoneCoordForSvg} fill={hexagonColor} /> */}

        {prepareHexagonesForSVG(grid)}

      </svg>
    </div>


  );

}

export default App;


function prepareHexagonesForSVG(grid) {


  //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
  return grid.hexagons.map((hexagons) => hexagons.map((hexagon) => {

    let hexagonCoordForSvg = getHexagonCoordPointInString(hexagon);

    //let hexagonColor = grid.hexagons[i][j].color;
    let hexagonColor = hexagon.color;

    let hexagoneindiceForBalise = `indice${hexagon.indice}`

    return <polygon onClick={() => { console.log(hexagon) }} key={hexagoneindiceForBalise} points={hexagonCoordForSvg} fill={hexagonColor} />


  }))


}