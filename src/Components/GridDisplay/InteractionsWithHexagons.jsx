//Functions imports////////////////////////////////////////
import { getNeighbourCoordinateOfOneHexagone } from "../GridGenerator/HexagonGridCalculator.jsx";
///////////////////////////////////////////////////////////

export function onLongClick(hexagon, grid) {
  let neighbourCoordinate = getNeighbourCoordinateOfOneHexagone(
    hexagon.coordInGrid.x,
    hexagon.coordInGrid.y,
    grid.numberColumn,
    grid.numberRow,
  );

  //Set the opacity of every hexagon of the grid to 0.3
  grid.hexagons.map(hexagons =>
    hexagons.map(hexagon => (hexagon.opacity = 0.3)),
  );

  //Set back the opacity of the neighbours to 1
  for (let i = 0; i < neighbourCoordinate.length; i++) {
    grid.hexagons[neighbourCoordinate[i].x][
      neighbourCoordinate[i].y
    ].opacity = 1;
  }

  return grid;
}
