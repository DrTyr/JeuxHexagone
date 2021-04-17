import { getNeighbourCoordinateOfOneHexagone } from "./HexagonGridCalculator";

export function onLongClick(hexagon, grid) {
  let neighbourCoordinate = getNeighbourCoordinateOfOneHexagone(
    hexagon.coordInGrid.x,
    hexagon.coordInGrid.y,
    grid.numberColumn,
    grid.numberRow,
  );

  // console.log("voisins dans interactions :", neighbourCoordinate);

  let red = "#ff0000";

  for (let i = 0; i < neighbourCoordinate.length; i++) {
    grid.hexagons[neighbourCoordinate[i].x][
      neighbourCoordinate[i].y
    ].color = red;
  }

  return grid;
}
