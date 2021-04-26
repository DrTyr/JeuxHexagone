//Library imports//////////////////////////////////////////
import React from "react";
import _ from "lodash";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
//import "./SvgGridDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import {
  getOnehexagonAllSummitCoordinate,
  getHexagonCoordPointInString,
} from "../GridGenerator/HexagonGridCalculator";
import { hexagonFillTest } from "../GridDisplay/InteractionsWithHexagons";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
// import banditCamp from "./BanditCamp.jpg";
// import grass from "./Grass.png";
// import knight from "../CaracterDisplay/knight.jpg";
///////////////////////////////////////////////////////////

export function DisplayCurrentHexagon({
  currentHexagon,
  topRightHexagonDisplaySize,
}) {
  //const [currentHexagon, setCurrentHexagon] = useState();

  //Get out of the function if currentHexagon don't exist
  if (!currentHexagon) {
    return null;
  }

  if (currentHexagon.indice === -1) {
    return null;
  }

  //Use _.cloneDeep to create a new memory space for hexagonDisplayed
  //otherwise currentHexagon and hexagonDisplayed are the same hexagon in the memory
  let hexagonDisplayed = _.cloneDeep(currentHexagon);

  hexagonDisplayed = {
    ...hexagonDisplayed,
    size: (45 / 100) * topRightHexagonDisplaySize.height,
    stroke: "black",
    strokeWidth: 5,
  };

  //Change coordCenter after for hexagonDisplayed.size to be update

  hexagonDisplayed.coordCenter = {
    x:
      topRightHexagonDisplaySize.width -
      (topRightHexagonDisplaySize.width - hexagonDisplayed.size) +
      10,
    y: topRightHexagonDisplaySize.height / 2,
  };

  hexagonDisplayed.coordSommit = getOnehexagonAllSummitCoordinate(
    hexagonDisplayed,
  );

  return (
    <svg
      viewBox={`0 0 ${topRightHexagonDisplaySize.width} ${topRightHexagonDisplaySize.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <polygon
        points={getHexagonCoordPointInString(hexagonDisplayed)}
        fill={hexagonFillTest(hexagonDisplayed)}
        stroke={hexagonDisplayed.stroke}
        strokeWidth={hexagonDisplayed.strokeWidth}
      />
    </svg>
  );
}

export default DisplayCurrentHexagon;
