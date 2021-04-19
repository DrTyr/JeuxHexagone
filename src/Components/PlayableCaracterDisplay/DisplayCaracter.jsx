//Library imports//////////////////////////////////////////
import React, { useState } from "react";
import _ from "lodash";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { displayNeighbours } from "../GridDisplay/InteractionsWithHexagons";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import knight from "../../Assets/knight.jpg";
///////////////////////////////////////////////////////////

export function DisplayCaracter({
  grid,
  setGrid,
  previousgrid,
  setPreviousGrid,
  posCaracterInGrid,
  setPosCaracterInGrid,
  posCaracterInSvg,
  setPosCaracterInSvg,
}) {
  const [isPushedDown, setIsPushedDown] = useState(false);

  console.log("inside child", posCaracterInSvg);

  return (
    <g
      key="Caracter"
      onMouseDown={() => {
        setIsPushedDown(true);
        let grid2 = { ...grid };
        setPreviousGrid(_.cloneDeep(grid));
        setGrid(
          displayNeighbours(
            grid.hexagons[posCaracterInGrid.x][posCaracterInGrid.y],
            grid2,
          ),
        );
      }}
      //   onMouseMove={e => {
      //     //Get the coordinates of the mouse inside the element
      //     if (isPushedDown === true) {
      //       setPosCaracterInSvg({
      //         x: e.nativeEvent.offsetX,
      //         y: e.nativeEvent.offsetY,
      //       });
      //     }
      //   }}
      onMouseUp={() => {
        setGrid(previousgrid);
        setIsPushedDown(false);
      }}
      onMouseLeave={() => {
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

export default DisplayCaracter;
