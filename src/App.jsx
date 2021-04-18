import "./App.css";
import _ from "lodash";
import React, { useState, Fragment, useEffect } from "react";
//import Canvas from "./CanvasGridGenerator";
import { getHexagonCoordPointInString } from "./SvgGridGenerator";
import {
  generateEntireGrid,
  getOnehexagonAllSummitCoordinate,
  generateOneHexagone,
  getCoordonateRandomHexagoneInGrid,
} from "./HexagonGridCalculator";
import { getRandomColor, convertAsCaracterChain } from "./library";
import { onLongClick } from "./InteractionsWithHexagons";
import banditCamp from "./BanditCamp.jpg";
import grass from "./Grass.png";
import knight from "./knight.jpg";
//import { gridRender } from "./SvgGridDisplay";

export function App() {
  const [grid, setGrid] = useState(generateEntireGrid());
  const [currentHexagon, setCurrentHexagon] = useState();
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [hexagonKnightOn, setHexagonKnightOn] = useState();
  const [posCaracterInGrid, setPosCaracterInGrid] = useState(
    grid.hexagons[0][0].coordInGrid,
  );
  const [posCaracterInSvg, setPosCaracterInSvg] = useState(
    grid.hexagons[0][0].coordCenter,
  );
  const [isPushedDown, setIsPushedDown] = useState(false);

  //Hack too automatic resize svg inside topRight-hexagonDisplay <div> the size of this <div>
  //This 2 variables will be upadte after the first render with the usage of UseEffect()
  const [
    topRightHexagonDisplayWidth,
    setTopRightHexagonDisplayWidth,
  ] = useState();
  const [
    topRightHexagonDisplayHeight,
    setTopRightHexagonDisplayHeight,
  ] = useState();

  // let grid = generateEntireGrid();
  // let hexagonCoordForSvg = getHexagonCoordPointInString(grid, 0, 0);
  // let hexagonColor = grid.hexagons[0][0].color;

  useEffect(() => {
    setTopRightHexagonDisplayWidth(
      document.getElementById("topRight-hexagonDisplay").clientWidth,
    );
    setTopRightHexagonDisplayHeight(
      document.getElementById("topRight-hexagonDisplay").clientHeight,
    );
  }, []);

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
          onMouseOver={() => {
            // if (isPushedDown === true) {
            //setPosCaracterInSvg(hexagon.coordCenter);
            // }
          }}
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
            //let grid2 = { ...grid };
            //setGrid(grid2)
            setCurrentHexagon(hexagon);
            setPosCaracterInSvg(hexagon.coordCenter);
            setPosCaracterInGrid(hexagon.coordInGrid);
            //setmousePassedOnHexagon(true);
            //displayOnMouseHexagon()
            // MoveKnight(hexagon.coordInGrid);
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

          {/* <circle
            cx={hexagon.coordCenter.x}
            cy={hexagon.coordCenter.y}
            r="40"
            stroke="black"
            stroke-width="3"
            fill="red"
          /> */}

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

    //Use _.cloneDeep to create a new memory space for hexagonDisplayed
    //otherwise currentHexagon and hexagonDisplayed are the same hexagon in the memory
    let hexagonDisplayed = _.cloneDeep(currentHexagon);

    hexagonDisplayed = {
      ...hexagonDisplayed,
      //coordCenter: { x: 130, y: 100 },
      size: 100,
      // coordCenter: {
      //   x:
      //     document.getElementById("topRight-hexagonDisplay").clientWidth -
      //     (document.getElementById("topRight-hexagonDisplay").clientWidth -
      //       hexagonDisplayed.size * 2),
      //   y:
      //     document.getElementById("topRight-hexagonDisplay").clientHeight -
      //     (document.getElementById("topRight-hexagonDisplay").clientHeight -
      //       hexagonDisplayed.size * 2),
      // },
      // coordCenter: {
      //   x: topRightHexagonDisplayWidth - hexagonDisplayed.size,
      //   y: topRightHexagonDisplayHeight / 2,
      // },
    };

    hexagonDisplayed.coordCenter = {
      x:
        topRightHexagonDisplayWidth -
        (topRightHexagonDisplayWidth - hexagonDisplayed.size) +
        10,
      y: topRightHexagonDisplayHeight / 2,
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
        fill={hexagonFillTest(hexagonDisplayed)}
        stroke="black"
      />
    );
  }

  function displayCaracter() {
    var downTimer = 0;

    // console.log("kinght heigt =", document.getElementById(knight).height);
    // console.log(`width: ${knight.naturalWidth}, height:${knight.height}`);

    return (
      <g
        key="Caracter"
        //draggable="true"
        //onDragStart=
        onMouseDown={() => {
          setIsPushedDown(true);
          clearTimeout(downTimer);
          let grid2 = { ...grid };
          //Trigger function onLongClick after a 1000ms long click
          // setTimeout(function () {
          //   setGrid(onLongClick(hexagon, grid2));
          // }, 2000);
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
        {/* <circle
          cx={posCaracterInSvg.x}
          cy={posCaracterInSvg.y}
          r="20"
          //stroke="black"
          //stroke-width="3"
          fill="red"
        /> */}
      </g>
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
          width={grid.hexagonSize * 2 * (grid.numberRow - 1)}
          height={grid.hexagonSize * 2 * grid.numberColumn}
        >
          {DisplayGridWithSvg()}
          {displayCaracter()}
        </svg>
      </div>

      <div className="subRight-hexagonDisplay-encounter">
        <div className="topRight-hexagonDisplay" id="topRight-hexagonDisplay">
          <svg
            //viewBox="0 0 100 100"
            //preserveAspectRatio="xMidYMid meet"
            width={topRightHexagonDisplayWidth}
            height={topRightHexagonDisplayHeight}
          >
            {displayCurrentHexagon()}
          </svg>
        </div>
        <div className="downRight-encounter"></div>
      </div>
    </div>
  );
}

export default App;
