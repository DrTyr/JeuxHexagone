//import React, { useState, useEffect, useRef } from "react";
import { getRandomColor } from "./library";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const hexagonSizes = 60;
const numberColumn = 8;
const numberRow = 8;
const xFirstHesagonCenter = 50;
const yFirstHesagonCenter = 50;

export function generateOneHexagone() {
  // if (typeof (definedSize) == 'undefined') {
  //     definedSize = hexagonSizes;
  // }

  // if (typeof (defineColor) == 'undefined') {
  //     defineColor = getRandomColor();
  // }

  let hexagon = {
    indice: 0,
    coordInGrid: { x: 0, y: 0 },
    coordSommit: { x: [], y: [] },
    coordCenter: { x: 0, y: 0 },
    size: hexagonSizes,
    color: "black",
  };

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

  for (let i = 0; i < grid.numberRow; i++) {
    grid.hexagons[i] = [];

    for (let j = 0; j < grid.numberColumn; j++) {
      let hexagon = {
        indice: 0,
        coordInGrid: { x: 0, y: 0 },
        coordSommit: { x: [], y: [] },
        coordCenter: { x: 0, y: 0 },
        size: grid.hexagonSize,
        color: "",
        fill: "",
      };

      //Testing if drawing odd or even column i
      if (i % 2 === 1) {
        hexagon.coordCenter.x =
          grid.firsthexagonCenter.x + i * 1.5 * hexagon.size;
        hexagon.coordCenter.y =
          grid.firsthexagonCenter.y +
          2 * j * sin((60 * PI) / 180) * hexagon.size +
          sin((60 * PI) / 180) * hexagon.size;
        //hexagon.color = "red"
      } else {
        hexagon.coordCenter.x =
          grid.firsthexagonCenter.x + i * 1.5 * hexagon.size;
        hexagon.coordCenter.y =
          grid.firsthexagonCenter.y +
          j * 2 * sin((60 * PI) / 180) * hexagon.size;
        //hexagon.color = "green"
      }

      hexagon.coordSommit = getOnehexagonAllSummitCoordinate(hexagon);

      hexagon.coordInGrid = { x: i, y: j };

      hexagon.indice = hexagonIndice++;

      hexagon.color = getRandomColor();

      grid.numberhexagonInGrid++;
      grid.hexagons[i][j] = hexagon;
    }
  }

  return grid;
}

//WIP randomly fill on hexagone.fill with adress of IMG (currently not working)
function randomlyFillhexagoneWithBanditCampImg(grid) {
  //return objet coordinate with x and y of a random hexagon
  let coordonate = getCoordonateRandomHexagoneInGrid(grid);
  let coordonate2 = getCoordonateRandomHexagoneInGrid(grid);
  //

  grid.hexagons[coordonate.x][coordonate.y].fill = "url(#banditCamp)";
  grid.hexagons[coordonate2.x][coordonate2.y].fill = "url(#grass)";

  return grid;
}

//Function the generate the Grid as object gridObject of object hexagonObject
export function generateEntireGrid() {
  let grid = {
    firsthexagonCenter: { x: xFirstHesagonCenter, y: yFirstHesagonCenter },
    hexagons: [],
    numberColumn: numberColumn,
    numberRow: numberRow,
    hexagonSize: hexagonSizes,
    //numberhexagonInGrid: this.numberhexagonInColumn * this.numberhexagonInRow
  };

  grid = generateAllTheHexagones(grid);
  //grid.hexagons[1][1].fill = "test";
  grid = randomlyFillhexagoneWithBanditCampImg(grid);

  return grid;
}

//Get the grid and return the coordonate, on the grid, of a random hexagon
function getCoordonateRandomHexagoneInGrid(grid) {
  //Generate a random whole number between 0 and grid.numberColumn
  let randomColumn = Math.floor(Math.random() * grid.numberColumn);
  let randomRow = Math.floor(Math.random() * grid.numberRow);

  let coordonate = { x: randomRow, y: randomColumn };

  return coordonate;
}

//take the coordinates of one hexagone and return coordinate of the direct neighbours
function getNeidhbourCoordinateOfOneHexagone(
  xstart,
  ystart,
  nbRowInGrid,
  nbColumnInGrid,
) {
  //start coordinate (x,y)
  //neighbour are : (x-1,y) (x-1,y+1) (x,y-1) (x, y+1) (x+1,y) (x+1,y+1)
  // x : row, y : column

  let neighbourCoordinate = [{ x: 0, y: 0, pos: "" }];

  neighbourCoordinate[0] = { x: xstart - 1, y: ystart, pos: "northWest" };
  neighbourCoordinate[1] = { x: xstart - 1, y: ystart + 1, pos: "southWest" };
  neighbourCoordinate[2] = { x: xstart, y: ystart - 1, pos: "north" };
  neighbourCoordinate[3] = { x: xstart, y: ystart + 1, pos: "south" };
  neighbourCoordinate[4] = { x: xstart + 1, y: ystart, pos: "northEast" };
  neighbourCoordinate[5] = { x: xstart + 1, y: ystart + 1, pos: "southEast" };

  //Test if some neighbours are outside the grid and remove them
  for (let i = 0; i < 6; i++) {
    if (neighbourCoordinate[i].x < 0) {
      neighbourCoordinate.splice(i, 1);
    } else if (neighbourCoordinate[i].x > nbRowInGrid) {
      neighbourCoordinate.splice(i, 1);
    } else if (neighbourCoordinate[i].y < 0) {
      neighbourCoordinate.splice(i, 1);
    } else if (neighbourCoordinate[i].y > nbColumnInGrid) {
      neighbourCoordinate.splice(i, 1);
    }
  }

  //var list = ["bar", "baz", "foo", "qux"];
  // list.splice(0, 2);
  // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

  return neighbourCoordinate;
}

//(WIP) function to generate the coordondate of a path and affect selected points inside the
//hexagon object so it can be get to draw the part of the path that go through a specific hexagon
function generatePath(grid, lengthPath) {
  //Define the starting hexagone at random
  let startcoordinate = getCoordonateRandomHexagoneInGrid(grid);

  for (let i = 0; i <= lengthPath; i++) {
    //Define coord in grid of it's neighbour
    let neighbourCoordinate = getNeidhbourCoordinateOfOneHexagone(
      startcoordinate.x,
      startcoordinate.y,
    );
    //Chose a random neighbour in the remaing ones
    let chosenNeighbourCoordonate =
      neighbourCoordinate[
        Math.floor(Math.random() * neighbourCoordinate.length)
      ];
  }
}
