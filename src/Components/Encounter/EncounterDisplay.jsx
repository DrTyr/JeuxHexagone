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
  const [scene, setscene] = useState(detectEncounter(encounterType));

  useEffect(() => {
    setEncounterImageSize({
      width: document.getElementById("Encounter-Image").clientWidth,
      height: document.getElementById("Encounter-Image").clientHeight,
    });
    setscene(detectEncounter(encounterType));
  }, [encounterType]);

  console.log("Scene =", scene);

  function detectSceneToDisplay() {}

  function answersToDisplay() {
    if (scene.answers.length === 0) {
      return null;
    }

    return scene.answers.map(answer => (
      <button
        onClick={() => {
          setscene(detectEncounter(encounterType, answer.goto));
        }}
      >
        {answer.text}
      </button>
    ));
  }

  //let encounter = { text: "testtext", answer: "testanswer" };

  return (
    <Fragment>
      <div className="Encounter-Image-Text">
        <div className="Encounter-Image" id="Encounter-Image">
          <img
            src={scene.picture}
            alt=""
            width={encounterImageSize.width}
            height={encounterImageSize.height}
          />
        </div>
        <div className="Encounter-Text">{scene.text}</div>
      </div>
      <div className="Encounter-Answers">{answersToDisplay()}</div>
    </Fragment>
  );
}

export default EncounterDisplay;
