//Library imports//////////////////////////////////////////
import React, { useState, useEffect } from "react";
///////////////////////////////////////////////////////////
//CSS imports/////////////////////////////////////////////
import "./App.css";
///////////////////////////////////////////////////////////
//Functions imports////////////////////////////////////////
import GridDisplay from "./Components/GridDisplay/SvgGridDisplay";
import DisplayCurrentHexagon from "./Components/CurrentHexagonDisplay/CurrentHexagonDisplay";
import EncounterDisplay from "./Components/Encounter/EncounterDisplay";
import { generateOneHexagone } from "./Components/GridGenerator/HexagonGridCalculator";
///////////////////////////////////////////////////////////
//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

export function App() {
  //Hack too automatic resize svg inside topRight-hexagonDisplay <div> the size of this <div>
  //This 2 variables will be upadte after the first render with the usage of UseEffect()
  const [topRightHexagonDisplaySize, setTopRightHexagonDisplaySize] = useState({
    width: 0,
    height: 0,
  });
  const [subLeftHexagonGrigSize, setSubLeftHexagonGrigSize] = useState({
    width: 0,
    height: 0,
  });
  //////////////////////////////

  const [currentHexagon, setCurrentHexagon] = useState(generateOneHexagone());

  useEffect(() => {
    setTopRightHexagonDisplaySize({
      width: document.getElementById("topRight-hexagonDisplay").clientWidth,
      height: document.getElementById("topRight-hexagonDisplay").clientHeight,
    });
    setSubLeftHexagonGrigSize({
      width: document.getElementById("subLeft-hexagonGrig").clientWidth,
      height: document.getElementById("subLeft-hexagonGrig").clientHeight,
    });
    //To resize displayCurrentHexagon, create it a as react component with his own useEffect ?
    //displayCurrentHexagon();
  }, []);

  console.log("Dans app :", currentHexagon);

  return (
    <div className="mainDivFullScreen">
      <div className="subLeft-hexagonGrig" id="subLeft-hexagonGrig">
        <GridDisplay
          subLeftHexagonGrigSize={subLeftHexagonGrigSize}
          setCurrentHexagon={setCurrentHexagon}
        />
      </div>
      <div className="subRight-hexagonDisplay-encounter">
        <div className="topRight-hexagonDisplay" id="topRight-hexagonDisplay">
          <DisplayCurrentHexagon
            topRightHexagonDisplaySize={topRightHexagonDisplaySize}
            currentHexagon={currentHexagon}
          />
        </div>
        <div className="downRight-encounter">
          <EncounterDisplay encounterType={currentHexagon.encounterType} />
        </div>
      </div>
    </div>
  );
}

export default App;
