//Library imports//////////////////////////////////////////
import React, { useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
import "./SvgGridDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import {
  generateEntireGrid,
  getHexagonCoordPointInString,
} from "../GridGenerator/HexagonGridCalculator";
import { getRandomColor } from "../../library";
import { hexagonFillTest } from "./InteractionsWithHexagons";
import DisplayCaracter from "../PlayableCaracterDisplay/CaracterDisplay";
//import "./GridFill";
import { getNeighbourCoordinateOfOneHexagone } from "../GridGenerator/HexagonGridCalculator.jsx";
import { getCoordListOfOutsidesHexagones } from "../GridGenerator/mapgenerator";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import banditCamp from "../../Assets/BanditCamp.jpg";
import grass from "../../Assets/Grass.png";
import beach from "../../Assets/Beach.png";
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function GridDisplay({
  subLeftHexagonGrigSize,
  setCurrentHexagon,
  currentHexagon,
}) {
  const [grid, setGrid] = useState(generateEntireGrid());
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [posCaracterInSvg, setPosCaracterInSvg] = useState(
    grid.hexagons[0][0].coordCenter,
  );
  const [posCaracterInGrid, setPosCaracterInGrid] = useState(
    grid.hexagons[0][0].coordInGrid,
  );

  //setCurrentHexagon(grid.hexagons[posCaracterInGrid.x][posCaracterInGrid.y]);

  const [neighboursAreDisplay, setNeighboursAreDisplay] = useState(false);

  const [neighbourCoordinates, setNeighbourCoordinates] = useState(
    getNeighbourCoordinateOfOneHexagone(
      currentHexagon.coordInGrid.x,
      currentHexagon.coordInGrid.y,
      grid.numberColumn,
      grid.numberRow,
    ),
  );
  //const [currentHexagon, setCurrentHexagon] = useState();

  // const [subLeftHexagonGrigSize, setSubLeftHexagonGrigSize] = useState({
  //   width: 0,
  //   height: 0,
  // });

  // useEffect(() => {
  //   setSubLeftHexagonGrigSize({
  //     width: document.getElementById("subLeft-hexagonGrig").clientWidth,
  //     height: document.getElementById("subLeft-hexagonGrig").clientHeight,
  //   });

  //   //To resize displayCurrentHexagon, create it a as react component with his own useEffect ?
  //   //displayCurrentHexagon();
  // }, []);

  // console.log(
  //   "getCoordListOfOutsidesHexagones :",
  //   getCoordListOfOutsidesHexagones(grid),
  // );

  function testIfNeighbour(hexagon, neighbourCoordinates) {
    let isneighbours = false;

    for (let i = 0; i < neighbourCoordinates.length; i++) {
      if (
        neighbourCoordinates[i].x === hexagon.coordInGrid.x &&
        neighbourCoordinates[i].y === hexagon.coordInGrid.y
      ) {
        isneighbours = true;
      }
    }

    return isneighbours;
  }

  function displayGridWithSvg() {
    //var downTimer = 0;

    //return grid.hexagons.map((hexagons, i) => hexagons.map((hexagon, j) => {
    return grid.hexagons.map(hexagons =>
      hexagons.map(hexagon => (
        <g
          key={`indice${hexagon.indice}`}
          onMouseOver={() => {}}
          onMouseDown={() => {
            // clearTimeout(downTimer);
            // let grid2 = { ...grid };
            // //Trigger function onLongClick after a 1000ms long click
            // // setTimeout(function () {
            // //   setGrid(onLongClick(hexagon, grid2));
            // // }, 2000);
            // downTimer = setTimeout(function () {
            //   setPreviousGrid(_.cloneDeep(grid));
            //   setGrid(onLongClick(hexagon, grid2));
            // }, 1000);
          }}
          onMouseUp={() => {
            //clearTimeout(downTimer);
            //setGrid(previousgrid);
          }}
          onClick={() => {
            //let hexagontest = hexagon;
            if (testIfNeighbour(hexagon, neighbourCoordinates) === true) {
              setCurrentHexagon(hexagon);
              setPosCaracterInSvg(hexagon.coordCenter);
              setPosCaracterInGrid(hexagon.coordInGrid);
              let neighbours = getNeighbourCoordinateOfOneHexagone(
                hexagon.coordInGrid.x,
                hexagon.coordInGrid.y,
                grid.numberColumn,
                grid.numberRow,
              );
              setNeighbourCoordinates(neighbours);
            }
          }}
          onMouseEnter={() => {
            //need to declare a new grid to refresh memory
            // let grid2 = { ...grid };
            // hexagon.color = getRandomColor();
            // setGrid(grid2);
          }}
          onMouseLeave={() => {}}
        >
          <polygon
            points={getHexagonCoordPointInString(hexagon)}
            fill={hexagonFillTest(hexagon)}
            opacity={hexagon.opacity}
            stroke={hexagon.stroke}
            strokeWidth={hexagon.strokeWidth}
          />

          <text
            x={hexagon.coordCenter.x}
            y={hexagon.coordCenter.y}
            fontFamily="Verdana"
            fontSize="10"
            fill="white"
            textAnchor="middle"
          >
            {`${hexagon.coordInGrid.x}, ${hexagon.coordInGrid.y}`}
          </text>

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
            <pattern
              id="beach"
              // patternUnits="objectBoundingBox"
              x="0"
              y="0"
              width="1"
              height="1"
              //view Box 0 0 and size of the img
              viewBox="0 0 314 314"
              preserveAspectRatio="xMidYMid slice"
            >
              <image
                //rotate="90deg"
                transform={`rotate(${hexagon.rotateAngle} 157 157)`}
                href={beach}
                //size of the img
                width="314"
                height="314"
              />
            </pattern>
          </defs>
        </g>
      )),
    );
  }

  return (
    <svg
      // width={subLeftHexagonGrigSize.width}
      // height={subLeftHexagonGrigSize.height}
      viewBox={`0 0 ${subLeftHexagonGrigSize.width * 1.5} ${
        subLeftHexagonGrigSize.height * 1.5
      }`}
      preserveAspectRatio="xMidYMid meet"
    >
      {displayGridWithSvg()}
      <DisplayCaracter
        grid={grid}
        setGrid={setGrid}
        previousgrid={previousgrid}
        setPreviousGrid={setPreviousGrid}
        posCaracterInGrid={posCaracterInGrid}
        setPosCaracterInGrid={setPosCaracterInGrid}
        posCaracterInSvg={posCaracterInSvg}
        setPosCaracterInSvg={setPosCaracterInSvg}
        neighboursAreDisplay={neighboursAreDisplay}
        setNeighboursAreDisplay={setNeighboursAreDisplay}
      />
    </svg>
  );
}

export default GridDisplay;
