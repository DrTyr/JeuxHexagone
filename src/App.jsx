import "./App.css";
import _ from "lodash";
import React, { useState, Fragment, useEffect } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import {
  generateEntireGrid,
  getOnehexagonAllSummitCoordinate,
  generateOneHexagone,
} from "./HexagonGridCalculator";
import { getRandomColor } from "./library";
import { onLongClick } from "./InteractionsWithHexagons";
import banditCamp from "./BanditCamp.jpg";
import grass from "./Grass.png";
import knight from "./knight.jpg";

export function App() {
  const [grid, setGrid] = useState(generateEntireGrid());
  const [currentHexagon, setCurrentHexagon] = useState();
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [hexagonKnightOn, setHexagonKnightOn] = useState();
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
    //let red = "#ff0000";

    if (hexagon.fill === "") {
      return hexagon.color;
    } else {
      return `${hexagon.fill}`;
    }

    // "url(#img1)"
  }

  function DisplayGridWithSvg() {
    var downTimer = 0;

    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map(hexagons =>
      hexagons.map(hexagon => (
        <g
          key={`indice${hexagon.indice}`}
          onMouseDown={() => {
            clearTimeout(downTimer);
            let grid2 = { ...grid };
            //Trigger function onLongClick after a 1000ms long click
            // setTimeout(function () {
            //   setGrid(onLongClick(hexagon, grid2));
            // }, 2000);
            downTimer = setTimeout(function () {
              setPreviousGrid(_.cloneDeep(grid));
              setGrid(onLongClick(hexagon, grid2));
            }, 1000);
          }}
          onMouseUp={() => {
            clearTimeout(downTimer);
            setGrid(previousgrid);
          }}
          onClick={() => {
            if (downTimer < 1000) {
              //let grid2 = { ...grid };
              //setGrid(grid2)
              setCurrentHexagon(hexagon);
              //setmousePassedOnHexagon(true);
              //displayOnMouseHexagon()
              // MoveKnight(hexagon.coordInGrid);
            }
          }}
          onMouseEnter={() => {
            //need to declare a new grid to refresh memory
            let grid2 = { ...grid };
            hexagon.color = getRandomColor();
            //setCurrentHexagon(grid2.hexagons[hexagon.coordInGrid.x][hexagon.coordInGrid.y]);
            setGrid(grid2);
          }}
          onMouseLeave={() => {
            //setCurrentHexagon(null);
          }}
        >
          <polygon
            points={getHexagonCoordPointInString(hexagon)}
            fill={hexagonFillTest(hexagon)}
            opacity={hexagon.opacity}
            //fill="url(#grass)"
          />

          <text
            x={hexagon.coordCenter.x}
            y={hexagon.coordCenter.y}
            fontFamily="Verdana"
            fontSize="10"
            fill="white"
            textAnchor="middle"
            //key={`text${hexagon.indice}`}
          >
            {`${hexagon.coordInGrid.x}, ${hexagon.coordInGrid.y}`}
          </text>

          {/* <svg width="400" height="400"> */}
          <defs>
            <pattern
              id="grass"
              x="0"
              y="0"
              width="1"
              height="1"
              viewBox="0 0 320 320"
              preserveAspectRatio="xMidYMid slice"
            >
              <image width="320" height="320" href={grass} />
            </pattern>
            <pattern
              id="banditCamp"
              // patternUnits="objectBoundingBox"
              x="0"
              y="0"
              width="1"
              height="1"
              //view Box 0 0 and size of the img
              viewBox="0 0 700 310"
              preserveAspectRatio="xMidYMid slice"
            >
              <image
                href={banditCamp}
                //size of the img
                width="700"
                height="310"
              />
            </pattern>
            {/* <image
              id="knighImg"
              href={knight}
              //size of the img
              width="900"
              height="900"
              x={hexagon.coordCenter.x}
              y={hexagon.coordCenter.y}
            /> */}
          </defs>
        </g>
      )),
    );
  }

  function displayCurrentHexagon() {
    //Get out of the function if currentHexagon don't exist
    if (!currentHexagon) {
      return;
    }

    let hexagonDisplayed = _.cloneDeep(currentHexagon);

    hexagonDisplayed = {
      ...hexagonDisplayed,
      coordCenter: { x: 130, y: 100 },
      size: 100,
    };
    // hexagonDisplayed.coordCenter = { x: 100, y: 100 };
    // hexagonDisplayed.size = 100;
    hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(
      hexagonDisplayed,
    );

    // setmousePassedOnHexagon(false);

    return (
      <polygon
        points={getHexagonCoordPointInString(hexagonDisplayed)}
        fill={hexagonDisplayed.color}
        stroke="black"
      />
    );
  }

  // function MoveKnight(pos) {
  //   setHexagonKnightOn(pos);

  //   <img src={knight} alt="knight"></img>;
  // }

  return (
    <div className="mainDivFullScreen">
      <div className="subLeft-hexagonGrig">
        <svg
          width={grid.hexagonSize * 2 * grid.numberColumn}
          height={grid.hexagonSize * 2 * grid.numberRow}
        >
          {DisplayGridWithSvg()}
        </svg>
      </div>

      <div className="subRight-hexagonDisplay-encounter">
        <div className="topRight-hexagonDisplay">
          <svg width="500" height="200">
            {displayCurrentHexagon()}
          </svg>
        </div>
        <div className="downRight-encounter">BIP BOUP BOUP BIP</div>
      </div>
    </div>
  );
}

export default App;
