import { getRandomColor } from "../../library";

export function generateMap(grid) {
  generateBeachs(grid);

  return grid;
}

//fill all the outsides hexagons with beach assets
function generateBeachs(grid) {
  ///grid[numberColumn][numberRow]

  //Left column
  // for (let i = 0; i < grid.numberRow; i++) {
  //   grid.hexagons[0][i].fill = "url(#beach)";
  //   grid.hexagons[0][i].rotateAngle = -90;
  // }
  //top row
  // for (let i = 0; i < grid.numberColumn; i++) {
  //   grid.hexagons[i][0].fill = "url(#beach)";
  //   grid.hexagons[i][0].rotateAngle = 0;
  // }
  //bottom column
  // for (let i = 0; i < grid.numberColumn; i++) {
  //   grid.hexagons[i][grid.numberRow - 1].fill = "url(#beach)";
  //   grid.hexagons[i][grid.numberRow - 1].rotateAngle = 90;
  // }
  //bottom row
  // for (let i = 0; i < grid.numberRow; i++) {
  //   grid.hexagons[grid.numberColumn - 1][i].fill = "url(#beach)";
  //   grid.hexagons[grid.numberColumn - 1][i].rotateAngle = 180;
  // }

  // for (let i = 0; i < listOfOutsideshexagons.length; i++) {
  //   ///grid[numberColumn][numberRow]

  //   grid.hexagons[listOfOutsideshexagons[i].x][
  //     listOfOutsideshexagons[i].y
  //   ].fill = "url(#beach)";
  // }
  return grid;
}

//Retourne un tableau des hexgaones de la bodure de la grille
function getCoordListOfOutsidesHexagones(grid) {
  let listOfOutsideshexagons = [];

  ///grid[numberColumn][numberRow]

  //Left column
  for (let i = 0; i < grid.numberRow; i++) {
    listOfOutsideshexagons.push(grid.hexagons[0][i].coordInGrid);
  }
  //top row
  for (let i = 0; i < grid.numberColumn; i++) {
    listOfOutsideshexagons.push(grid.hexagons[i][0].coordInGrid);
  }
  //bottom column
  for (let i = 0; i < grid.numberColumn; i++) {
    listOfOutsideshexagons.push(
      grid.hexagons[i][grid.numberRow - 1].coordInGrid,
    );
  }
  //bottomrow
  for (let i = 0; i < grid.numberRow; i++) {
    listOfOutsideshexagons.push(
      grid.hexagons[grid.numberColumn - 1][i].coordInGrid,
    );
  }

  return listOfOutsideshexagons;
}
