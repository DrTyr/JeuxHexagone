import "./App.css";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import { generateEntireGrid, getOnehexagonAllSummitCoordinate, generateOneHexagone } from "./HexagonGridCalculator";
import { getRandomColor, inverseBoolean } from "./library";

export function App() {

  const [grid, setGrid] = useState(generateEntireGrid());
  const [currentHexagon, setCurrentHexagon] = useState(generateOneHexagone());
  const [HexagonIsClicked, setHexagonIsClicked] = useState(false);
  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  // useEffect(() => {

  //   DisplayClickedHexagon();

  // }, [grid, currentHexagon]);


  function DisplayGridWithSvg() {


    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map((hexagons) => hexagons.map((hexagon) =>

      <polygon onClick={() => {
        //need to declare a new grid to refresh memory
        let grid2 = { ...grid };
        grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y].color = getRandomColor();
        setCurrentHexagon(grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y]);
        setGrid(grid2);
        if (HexagonIsClicked === false) {
          setHexagonIsClicked(true);
        }
        else { setHexagonIsClicked(false) }
      }}
        key={`indice${hexagon.indice}`}
        points={getHexagonCoordPointInString(hexagon)}
        fill={hexagon.color}
      />

    ))

  }


  function DisplayClickedHexagon() {

    if (HexagonIsClicked === true) {

      console.log("grid avant")
      console.log(grid)
      let hexagonDisplayed = generateOneHexagone();

      console.log("Initialisation");
      console.log(hexagonDisplayed);

      hexagonDisplayed = { ...currentHexagon };

      console.log("Recup current");

      console.log(hexagonDisplayed);

      hexagonDisplayed.coordCenter = { x: 250, y: 250 };





      hexagonDisplayed.size = 100;
      hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(hexagonDisplayed);

      console.log("changes  ");

      console.log(hexagonDisplayed);

      console.log("grid après ");

      console.log(grid);


      //console.log("Test fonction click sur un hexagone");

      return (<polygon
        points={getHexagonCoordPointInString(hexagonDisplayed)}
        fill={hexagonDisplayed.color}
        stroke="black" />)
    }


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

