//Library imports//////////////////////////////////////////
import React, { useState, useEffect } from "react";
///////////////////////////////////////////////////////////
//CSS imports/////////////////////////////////////////////
import "./App.css";
///////////////////////////////////////////////////////////
//Functions imports////////////////////////////////////////
import GridDisplay from "./Components/GridDisplay/SvgGridDisplay";
import DisplayCurrentHexagon from "./Components/CurrentHexagonDisplay/CurrentHexagonDisplay";

import Parent from "./Parent";
///////////////////////////////////////////////////////////
//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

export function AppOld() {
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

  return (
    <div className="mainDivFullScreen">
      <div className="subLeft-hexagonGrig" id="subLeft-hexagonGrig">
        <GridDisplay {...subLeftHexagonGrigSize} />
      </div>
      <div className="subRight-hexagonDisplay-encounter">
        <div className="topRight-hexagonDisplay" id="topRight-hexagonDisplay">
          {/* <DisplayCurrentHexagon {...topRightHexagonDisplaySize} /> */}
        </div>
        <div className="downRight-encounter">TEST</div>
      </div>
    </div>
  );
}

function App() {
  return <Parent />;
}

export default App;
