import "./App.css";
import React, { useState, Fragment, useEffect } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import { generateEntireGrid, getOnehexagonAllSummitCoordinate, generateOneHexagone } from "./HexagonGridCalculator";
import { getRandomColor } from "./library";
//import {} from "./InteractionsWithHexagons"
import banditCamp from './BanditCamp.jpg';
import grass from "./Grass.png";


export function App() {

  const [grid, setGrid] = useState(generateEntireGrid());
  const [currentHexagon, setCurrentHexagon] = useState(generateOneHexagone());
  const [mousePassedOnHexagon, setmousePassedOnHexagon] = useState(false);
  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  // useEffect(() => {

  //   DisplayOnMouseHexagon();
  //   DisplayGridWithSvg();

  // }, [grid, currentHexagon, mousePassedOnHexagon]);

  //Test if hexagon as a .fill paramater, of not return blue as default fill color
  function hexagonFillTest(hexagon) {

    let blue = "#00BFFF";
    let red = "#ff0000";

    if (hexagon.fill === "") { return blue }
    else {
      return `${hexagon.fill}`
    }

    // "url(#img1)"


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
            setmousePassedOnHexagon(true);
            DisplayOnMouseHexagon()
          }}
          key={`indice${hexagon.indice}`}
          points={getHexagonCoordPointInString(hexagon)}
          fill={hexagonFillTest(hexagon)}
        //fill="#img1"
        />

        <text x={hexagon.coordCenter.x} y={hexagon.coordCenter.y}
          fontFamily="Verdana"
          fontSize="10"
          fill="white"
          textAnchor="middle"
          key={`text${hexagon.indice}`}>

          {`${hexagon.coordInGrid.x}, ${hexagon.coordInGrid.y}`}

        </text>

        <defs>
          <pattern id="banditCamp" patternUnits="objectBoundingBox" x="0" y="0" width={hexagon.size} height={hexagon.size}>
            <image href={banditCamp} x="0" y="0" width={hexagon.size * 4} height={hexagon.size * 2} />
          </pattern>
        </defs>


      </Fragment>

    ))

  }


  function DisplayOnMouseHexagon() {

    if (mousePassedOnHexagon === true) {
      let hexagonDisplayed = generateOneHexagone();

      hexagonDisplayed = currentHexagon;
      hexagonDisplayed.coordCenter = { x: 100, y: 100 };
      hexagonDisplayed.size = 100;
      hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(hexagonDisplayed);

      // setmousePassedOnHexagon(false);

      return (<polygon
        points={getHexagonCoordPointInString(hexagonDisplayed)}
        fill={hexagonDisplayed.color}
        stroke="black" />)
    }


  }


  return (

    <Fragment>

      <svg width={grid.hexagonSize * 2 * grid.numberRow} height={grid.hexagonSize * 2 * grid.numberColumn}>
        {DisplayGridWithSvg()}
      </svg>

      <svg width="500" height="200">
        {DisplayOnMouseHexagon()}
      </svg>

      {/* <Canvas /> */}

    </Fragment>

  );



}

export default App;

