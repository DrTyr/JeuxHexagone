//Library imports//////////////////////////////////////////
import React, { Fragment, useEffect, useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
//import "./SvgGridDisplay.css";
import "./EncounterDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { detectEncounter } from "./EncounterPossibilities";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function EncounterDisplay(encounterType) {
  const [encounterImageSize, setEncounterImageSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setEncounterImageSize({
      width: document.getElementById("Encounter-Image").clientWidth,
      height: document.getElementById("Encounter-Image").clientHeight,
    });
  }, []);

  //let encounter = { text: "testtext", answer: "testanswer" };

  let encounter = detectEncounter(encounterType);

  return (
    <Fragment>
      <div className="Encounter-Image-Text">
        <div className="Encounter-Image" id="Encounter-Image">
          <img
            src={encounter.picture.src}
            alt=""
            width={encounterImageSize.width}
            height={encounterImageSize.height}
          />
        </div>
        <div className="Encounter-Text">{encounter.text}</div>
      </div>
      <div className="Encounter-Answers">
        <button>{encounter.answer}</button>
      </div>
    </Fragment>
  );
}

export default EncounterDisplay;
