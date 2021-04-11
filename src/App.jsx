import "./App.css";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import { generateEntireGrid, getOnehexagonAllSummitCoordinate, generateOneHexagone } from "./HexagonGridCalculator";
import { getRandomColor } from "./library";

export function App() {

  const [grid, setGrid] = useState(generateEntireGrid());

  const [currentHexagon, setCurrentHexagon] = useState(generateOneHexagone({ defineColor: "white" }));

  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  // useEffect(() => {

  //   DisplayGridWithSvg();

  // }, [grid]);

  function DisplayGridWithSvg() {


    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map((hexagons) => hexagons.map((hexagon) =>

      <polygon onClick={() => {
        //need to declare a new grid to refresh memory
        let grid2 = { ...grid };
        grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y].color = getRandomColor();
        setCurrentHexagon(grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y]);
        setGrid(grid2);
      }}
        key={`indice${hexagon.indice}`}
        points={getHexagonCoordPointInString(hexagon)}
        fill={hexagon.color}
      />

    ))

  }


  function DisplayClickedHexagon() {

    let hexagonDisplayed = { ...currentHexagon };
    hexagonDisplayed.coordCenter = { x: 250, y: 250 };
    hexagonDisplayed.size = 100;
    hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(hexagonDisplayed);
    console.log("Test fonction click sur un hexagone");

    return (<polygon
      points={getHexagonCoordPointInString(hexagonDisplayed)}
      fill={hexagonDisplayed.color}
      stroke="black" />
    )

  }

  function DisplayClickedHexagonData() {

    let hexagonDisplayed = { ...currentHexagon };

    return (<text x={hexagonDisplayed.x[0]}
      y={hexagonDisplayed.y[0]}
      text-anchor="middle"
      fill="black"
      font-size="30">
      TEST
    </text>)


  }





  return (

    <Fragment>
      <svg width="500" height="500">
        {DisplayGridWithSvg()}
      </svg>

      <svg width="500" height="500">
        {DisplayClickedHexagon()}
      </svg>


      {/* <Canvas /> */}

    </Fragment>

  );



}

export default App;

