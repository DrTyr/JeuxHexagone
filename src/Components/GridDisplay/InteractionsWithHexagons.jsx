//Functions imports////////////////////////////////////////
import { getNeighbourCoordinateOfOneHexagone } from "../GridGenerator/HexagonGridCalculator.jsx";
///////////////////////////////////////////////////////////

export function displayNeighbours(hexagon, grid) {
  let neighbourCoordinate = getNeighbourCoordinateOfOneHexagone(
    hexagon.coordInGrid.x,
    hexagon.coordInGrid.y,
    grid.numberColumn,
    grid.numberRow,
  );

  //Set the opacity of every hexagon of the grid to 0.2
  grid.hexagons.map(hexagons =>
    hexagons.map(hexagon => (hexagon.opacity = 0.2)),
  );

  //Set back the opacity of the neighbours to 1
  for (let i = 0; i < neighbourCoordinate.length; i++) {
    grid.hexagons[neighbourCoordinate[i].x][
      neighbourCoordinate[i].y
    ].opacity = 1;
    grid.hexagons[neighbourCoordinate[i].x][neighbourCoordinate[i].y].stroke =
      "black";
    grid.hexagons[neighbourCoordinate[i].x][
      neighbourCoordinate[i].y
    ].strokeWidth = 3;
  }

  return grid;
}

//Test if hexagon as a .fill paramater
export function hexagonFillTest(hexagon) {
  if (hexagon.fill === "") {
    return hexagon.color;
  } else {
    return `${hexagon.fill}`;
  }
}
