import "./App.css";
import React, { useState, useEffect } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import { generateEntireGrid } from "./HexagonGridCalculator";
import { getRandomColor } from "./library";

export function App() {

  const [grid, setGrid] = useState(generateEntireGrid());

  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  // useEffect(() => {



  // }, [grid]);

  function prepareHexagonesForSVG() {


    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map((hexagons) => hexagons.map((hexagon) =>

      <polygon onClick={() => {
        let grid2 = { ...grid };
        grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y].color = getRandomColor();
        setGrid(grid2);
      }} key={`indice${hexagon.indice}`} points={getHexagonCoordPointInString(hexagon)} fill={hexagon.color} />

    ))

  }

  //Exercie


  return (
    <div>
      {/* <Canvas /> */}
      <svg width="1000" height="1000">
        {/* <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="red" /> */}
        {/* <polygon points={hexagoneCoordForSvg} fill={hexagonColor} /> */}

        {prepareHexagonesForSVG()}

      </svg>
    </div>


  );

}

export default App;

