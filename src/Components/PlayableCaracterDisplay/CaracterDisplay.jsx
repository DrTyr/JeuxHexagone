//Library imports//////////////////////////////////////////
//import react from "react";
import _ from "lodash";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
import "./CaracterDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { displayNeighbours } from "../GridDisplay/InteractionsWithHexagons";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
// import knight from "../../Assets/knight.jpg";
import player from "../../Assets/Pirate.png";
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
  neighboursAreDisplay,
  setNeighboursAreDisplay,
}) {
  //const [neighboursAreDisplay, setNeighboursAreDisplay] = useState(false);

  return (
    <g
      className="caracter"
      key="Caracter"
      // onMouseDown={() => {
      //   setIsPushedDown(true);
      //   let grid2 = { ...grid };
      //   setPreviousGrid(_.cloneDeep(grid));
      //   setGrid(
      //     displayNeighbours(
      //       grid.hexagons[posCaracterInGrid.x][posCaracterInGrid.y],
      //       grid2,
      //     ),
      //   );
      // }}
      onMouseEnter={() => {
        if (neighboursAreDisplay === false) {
          setNeighboursAreDisplay(true);
          let grid2 = { ...grid };
          setPreviousGrid(_.cloneDeep(grid));
          setGrid(
            displayNeighbours(
              grid.hexagons[posCaracterInGrid.x][posCaracterInGrid.y],
              grid2,
            ),
          );
        }
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
      // onMouseUp={() => {
      //   setGrid(previousgrid);
      //   // setIsPushedDown(false);
      // }}
      onMouseLeave={() => {
        if (neighboursAreDisplay === true) {
          setNeighboursAreDisplay(false);
          setGrid(previousgrid);
        }
      }}
      //   setGrid(previousgrid);
      // setIsPushedDown(false);
      // }}
    >
      <rect
        width="60"
        height="60"
        //x and y pos are x = pos - width/2 and  y = pos-height/2
        x={posCaracterInSvg.x - 30}
        y={posCaracterInSvg.y - 30}
        fill="url(#player)"
        //fillOpacity="0.3"
      />

      <defs>
        <pattern
          id="player"
          x="0"
          y="0"
          width="1"
          height="1"
          viewBox="0 0 382 412"
          //preserveAspectRatio="xMidYMid slice"
        >
          <image width="382" height="412" href={player} />
        </pattern>
      </defs>
    </g>
  );
}

export default DisplayCaracter;
