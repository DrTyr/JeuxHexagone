//Library imports//////////////////////////////////////////
import React, { useState } from "react";
import _ from "lodash";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
import "./SvgGridDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import {
  generateEntireGrid,
  getOnehexagonAllSummitCoordinate,
  getHexagonCoordPointInString,
} from "../GridGenerator/HexagonGridCalculator";
import { getRandomColor } from "../../library";
import { onLongClick, hexagonFillTest } from "./InteractionsWithHexagons";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import banditCamp from "../Assets/BanditCamp.jpg";
import grass from "../Assets/Grass.png";
import knight from "../Assets/knight.jpg";
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function GridDisplay(subLeftHexagonGrigSize) {
  const [grid, setGrid] = useState(generateEntireGrid());
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [posCaracterInGrid, setPosCaracterInGrid] = useState(
    grid.hexagons[0][0].coordInGrid,
  );
  const [posCaracterInSvg, setPosCaracterInSvg] = useState(
    grid.hexagons[0][0].coordCenter,
  );
  const [isPushedDown, setIsPushedDown] = useState(false);

  const [currentHexagon, setCurrentHexagon] = useState();

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

  function DisplayGridWithSvg() {
    var downTimer = 0;

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
            clearTimeout(downTimer);
            setGrid(previousgrid);
          }}
          onClick={() => {
            setCurrentHexagon(hexagon);
            setPosCaracterInSvg(hexagon.coordCenter);
            setPosCaracterInGrid(hexagon.coordInGrid);
          }}
          onMouseEnter={() => {
            //need to declare a new grid to refresh memory
            let grid2 = { ...grid };
            hexagon.color = getRandomColor();
            setGrid(grid2);
          }}
          onMouseLeave={() => {}}
        >
          <polygon
            points={getHexagonCoordPointInString(hexagon)}
            fill={hexagonFillTest(hexagon)}
            opacity={hexagon.opacity}
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
          </defs>
        </g>
      )),
    );
  }

  function displayCaracter() {
    var downTimer = 0;

    return (
      <g
        key="Caracter"
        onMouseDown={() => {
          setIsPushedDown(true);
          clearTimeout(downTimer);
          let grid2 = { ...grid };
          downTimer = setTimeout(function () {
            setPreviousGrid(_.cloneDeep(grid));
            setGrid(
              onLongClick(
                grid.hexagons[posCaracterInGrid.x][posCaracterInGrid.y],
                grid2,
              ),
            );
          }, 1000);
        }}
        onMouseMove={e => {
          //Get the coordinates of the mouse inside the element
          if (isPushedDown === true) {
            setPosCaracterInSvg({
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            });
          }
        }}
        onMouseUp={() => {
          clearTimeout(downTimer);
          setGrid(previousgrid);
          setIsPushedDown(false);
        }}
      >
        <rect
          width="60"
          height="60"
          //x and y pos are x = pos - width/2 and  y = pos-height/2
          x={posCaracterInSvg.x - 30}
          y={posCaracterInSvg.y - 30}
          fill="url(#knight)"
        />

        <defs>
          <pattern
            id="knight"
            x="0"
            y="0"
            width="1"
            height="1"
            viewBox="0 0 900 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <image width="900" height="900" href={knight} />
          </pattern>
        </defs>
      </g>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${subLeftHexagonGrigSize.width} ${subLeftHexagonGrigSize.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {DisplayGridWithSvg()}
      {displayCaracter()}
    </svg>
  );
}

export default GridDisplay;
