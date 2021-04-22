import tardigrade from "../../Assets/tardigrade.jpg";
import empty from "../../Assets/empty.jpg";

export function detectEncounter(randomEncounter) {
  let encounter = {
    picture: { width: 0, heigth: 0, src: empty },
    text: "Personne",
    answer: "Rien a faire",
  };

  console.log("inside detect encounter : ", randomEncounter.encounterType);

  if (randomEncounter === null) {
    return encounter;
  } else if (randomEncounter.encounterType === "bandit") {
    return (encounter = {
      picture: { width: 1000, heigth: 750, src: tardigrade },
      text: "Bonjour mouhahaha",
      answer: "Ho non, un tardigrade, fuyons",
    });
  }

  return encounter;
}

function banditEncounter() {
  let bandit = {
    picture: { width: 1000, heigth: 750, src: "../../Assets/tardigrade.jpg" },
    text: "Bonjour mouhahaha",
    answer: "Ho non, un tardigrade, fuyons",
  };

  return bandit;
}
