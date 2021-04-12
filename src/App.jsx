import "./App.css";
import React, { useState, Fragment } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import { generateEntireGrid, getOnehexagonAllSummitCoordinate, generateOneHexagone } from "./HexagonGridCalculator";
import { getRandomColor } from "./library";
//import {} from "./InteractionsWithHexagons"

export function App() {

  const [grid, setGrid] = useState(generateEntireGrid());
  const [currentHexagon, setCurrentHexagon] = useState(generateOneHexagone());
  const [mousePassedOnHexagon, setmousePassedOnHexagon] = useState(false);
  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  // useEffect(() => {

  //   DisplayClickedHexagon();

  // }, [grid, currentHexagon]);

  function hexagonFillTest(hexagon) {

    let blue = "#0000ff";
    let red = "#ff0000";

    if (hexagon.fill === "") { return hexagon.color }
    else { return red }

  }


  function DisplayGridWithSvg() {


    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map((hexagons) => hexagons.map((hexagon) =>

      <Fragment>

        <polygon onClick={() => {
          //need to declare a new grid to refresh memory
          let grid2 = { ...grid };
          grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y].color = getRandomColor();
          //setCurrentHexagon(grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y]);
          setGrid(grid2);
        }}
          onMouseEnter={() => {
            let grid2 = { ...grid };
            //setGrid(grid2)
            setCurrentHexagon(grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y]);
            DisplayOnMouseHexagon()
            // if (mousePassedOnHexagon === false) {
            //   setmousePassedOnHexagon(true);
            // }
            // else { setmousePassedOnHexagon(false) }
          }}
          key={`indice${hexagon.indice}`}
          points={getHexagonCoordPointInString(hexagon)}
          fill={hexagonFillTest(hexagon)}
        />

        <text x={hexagon.coordCenter.x} y={hexagon.coordCenter.y}
          fontFamily="Verdana"
          fontSize="10"
          fill="black"
          textAnchor="middle"
          key={`text${hexagon.indice}`}>

          {`${hexagon.coordInGrid.x}, ${hexagon.coordInGrid.y}`}

        </text>

      </Fragment>

    ))

  }


  function DisplayOnMouseHexagon() {

    //if (mousePassedOnHexagon === true) {
    let hexagonDisplayed = generateOneHexagone();

    hexagonDisplayed = currentHexagon;
    hexagonDisplayed.coordCenter = { x: 250, y: 250 };
    hexagonDisplayed.size = 100;
    hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(hexagonDisplayed);

    return (<polygon
      points={getHexagonCoordPointInString(hexagonDisplayed)}
      fill={hexagonDisplayed.color}
      stroke="black" />)
    //}


  }


  return (

    <Fragment>
      <svg width="500" height="500">
        {DisplayGridWithSvg()}
      </svg>

      <svg width="500" height="500">
        {DisplayOnMouseHexagon()}
      </svg>

      {/* <Canvas /> */}

    </Fragment>

  );



}

export default App;

