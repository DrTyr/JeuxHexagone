//Functions imports////////////////////////////////////////
import { getRandomColor } from "../../library";
import { generateMap } from "./mapgenerator";
///////////////////////////////////////////////////////////

//Global variables////////////////////////////////////////
const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
///grid[numberColumn][numberRow]
const numberColumn = 6;
const numberRow = 10;
const hexagonSizes = 60;
const xFirstHexagonCenter = hexagonSizes;
const yFirstHexagonCenter = hexagonSizes;
///////////////////////////////////////////////////////////
let hexagon = {
  indice: -1,
  coordInGrid: { x: 0, y: 0 },
  coordSommit: { x: [], y: [] },
  coordCenter: { x: 0, y: 0 },
  size: hexagonSizes,
  color: null,
  fill: null,
  opacity: 1,
  encounterType: null,
};

export function getHexagonCoordPointInString(hexagon) {
  let coordList = hexagon.coordSommit;

  let coordInString = `${coordList.x[0]},${coordList.y[0]} ${coordList.x[1]},${coordList.y[1]} ${coordList.x[2]},${coordList.y[2]} ${coordList.x[3]},${coordList.y[3]}  ${coordList.x[4]},${coordList.y[4]} ${coordList.x[5]},${coordList.y[5]}`;

  return coordInString;
}

export function generateOneHexagone() {
  return hexagon;
}

//Generate all summit coordonate, clockwise, starting with the East one
export function getOnehexagonAllSummitCoordinate(hexagon) {
  for (let i = 0; i <= 6; i++) {
    let angle = (PI / 180) * 60 * i;
    hexagon.coordSommit.x[i] =
      hexagon.coordCenter.x + hexagon.size * cos(angle);
    hexagon.coordSommit.y[i] =
      hexagon.coordCenter.y + hexagon.size * sin(angle);
  }
  return hexagon.coordSommit;
}

function generateAllTheHexagones(grid) {
  let hexagonIndice = 0;

  for (let i = 0; i < grid.numberColumn; i++) {
    grid.hexagons[i] = [];

    for (let j = 0; j < grid.numberRow; j++) {
      let hexagon = {
        indice: 0,
        coordInGrid: { x: 0, y: 0 },
        coordSommit: { x: [], y: [] },
        coordCenter: { x: 0, y: 0 },
        size: grid.hexagonSize,
        color: "",
        fill: "",
        opacity: 1,
        stroke: null,
        strokeWidth: 5,
        encounterType: null,
        rotateAngle: 0,
      };

      //Testing if drawing odd or even column i
      if (i % 2 === 1) {
        hexagon.coordCenter.x =
          grid.firsthexagonCenter.x + i * 1.5 * hexagon.size;
        hexagon.coordCenter.y =
          grid.firsthexagonCenter.y +
          2 * j * sin((60 * PI) / 180) * hexagon.size +
          sin((60 * PI) / 180) * hexagon.size;
      } else {
        hexagon.coordCenter.x =
          grid.firsthexagonCenter.x + i * 1.5 * hexagon.size;
        hexagon.coordCenter.y =
          grid.firsthexagonCenter.y +
          j * 2 * sin((60 * PI) / 180) * hexagon.size;
      }

      hexagon.coordSommit = getOnehexagonAllSummitCoordinate(hexagon);

      hexagon.coordInGrid = { x: i, y: j };

      hexagon.indice = hexagonIndice++;

      hexagon.color = getRandomColor();

      grid.numberhexagonInGrid++;
      grid.hexagons[i][j] = hexagon;
    }
  }

  console.log("grid : ", grid);

  return grid;
}

//WIP randomly fill on hexagone.fill with adress of IMG (currently not working)
function randomlyFillhexagoneWithEncounter(grid) {
  //return objet coordinate with x and y of a random hexagon
  let coordonate = getCoordonateRandomHexagoneInGrid(grid);
  let coordonate2 = getCoordonateRandomHexagoneInGrid(grid);
  //let coordonate3 = getCoordonateRandomHexagoneInGrid(grid);
  //

  //grid.hexagons[coordonate2.x][coordonate2.y].fill = "url(#grass)";
  grid.hexagons[coordonate.x][coordonate.y].fill = "url(#banditCamp)";
  grid.hexagons[coordonate.x][coordonate.y].encounterType = "bandit";

  grid.hexagons[coordonate2.x][coordonate2.y].fill = "url(#grass)";
  grid.hexagons[coordonate2.x][coordonate2.y].encounterType = "mage";

  return grid;
}

//Function the generate the Grid as object gridObject of object hexagonObject
export function generateEntireGrid() {
  let grid = {
    firsthexagonCenter: { x: xFirstHexagonCenter, y: yFirstHexagonCenter },
    hexagons: [],
    numberColumn: numberColumn,
    numberRow: numberRow,
    hexagonSize: hexagonSizes,
  };

  grid = generateAllTheHexagones(grid);
  grid = randomlyFillhexagoneWithEncounter(grid);
  grid = generateMap(grid);

  return grid;
}

//Get the grid and return the coordonate, on the grid, of a random hexagon
export function getCoordonateRandomHexagoneInGrid(grid) {
  //Generate a random whole number between 0 and grid.numberColumn
  let randomColumn = Math.floor(Math.random() * grid.numberColumn);
  let randomRow = Math.floor(Math.random() * grid.numberRow);

  let coordonate = { x: randomColumn, y: randomRow };

  return coordonate;
}

//take the coordinates of one hexagone and return coordinate of the direct neighbours
export function getNeighbourCoordinateOfOneHexagone(
  xstart,
  ystart,
  nbRowInGrid,
  nbColumnInGrid,
) {
  //start coordinate (x,y) x and y are the coordinate of the hexagon inside the grid
  //neighbour are : (x-1,y) (x-1,y+1) (x,y-1) (x, y+1) (x+1,y) (x+1,y+1)
  // x : row, y : column

  let neighbourCoordinate = [{ x: 0, y: 0, pos: "" }];

  //Generate list of coord in grid of all the neighbours, different for odd and even column
  if (xstart % 2 === 0) {
    neighbourCoordinate[0] = { x: xstart - 1, y: ystart - 1, pos: "northWest" };
    neighbourCoordinate[1] = { x: xstart - 1, y: ystart, pos: "southWest" };
    neighbourCoordinate[2] = { x: xstart, y: ystart - 1, pos: "north" };
    neighbourCoordinate[3] = { x: xstart, y: ystart + 1, pos: "south" };
    neighbourCoordinate[4] = { x: xstart + 1, y: ystart - 1, pos: "northEast" };
    neighbourCoordinate[5] = { x: xstart + 1, y: ystart, pos: "southEast" };
  } else {
    neighbourCoordinate[0] = { x: xstart - 1, y: ystart, pos: "northWest" };
    neighbourCoordinate[1] = { x: xstart - 1, y: ystart + 1, pos: "southWest" };
    neighbourCoordinate[2] = { x: xstart, y: ystart - 1, pos: "north" };
    neighbourCoordinate[3] = { x: xstart, y: ystart + 1, pos: "south" };
    neighbourCoordinate[4] = { x: xstart + 1, y: ystart, pos: "northEast" };
    neighbourCoordinate[5] = { x: xstart + 1, y: ystart + 1, pos: "southEast" };
  }

  //Test if some neighbours are outside the grid and remove them

  neighbourCoordinate.slice(0).forEach(function (coordNeighbours) {
    if (
      coordNeighbours.x < 0 ||
      coordNeighbours.y > nbRowInGrid - 1 ||
      coordNeighbours.y < 0 ||
      coordNeighbours.x > nbColumnInGrid - 1
    ) {
      neighbourCoordinate.splice(
        neighbourCoordinate.indexOf(coordNeighbours),
        1,
      );
    }
  });

  console.log("neighbourCoordinate : ", neighbourCoordinate);

  return neighbourCoordinate;
}

//(WIP) function to generate the coordondate of a path and affect selected points inside the
//hexagon object so it can be get to draw the part of the path that go through a specific hexagon
// function generatePath(grid, lengthPath) {
//   //Define the starting hexagone at random
//   let startcoordinate = getCoordonateRandomHexagoneInGrid(grid);

//   for (let i = 0; i <= lengthPath; i++) {
//     //Define coord in grid of it's neighbour
//     let neighbourCoordinate = getNeighbourCoordinateOfOneHexagone(
//       startcoordinate.x,
//       startcoordinate.y,
//     );
//     //Chose a random neighbour in the remaing ones
//     let chosenNeighbourCoordonate =
//       neighbourCoordinate[
//         Math.floor(Math.random() * neighbourCoordinate.length)
//       ];
//   }
// }
