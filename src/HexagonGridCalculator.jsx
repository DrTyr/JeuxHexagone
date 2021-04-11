//import React, { useState, useEffect, useRef } from "react";
import { getRandomColor } from "./library";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;

//Generate all summit coordonate, clockwise, starting with the East one
function getOnehexagonAllSummitCoordinate(hexagon) {
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
            };

            //Testing if drawing odd or even column i
            if (i % 2 === 1) {
                hexagon.coordCenter.x =
                    grid.firsthexagonCenter.x +
                    i * 1.5 * hexagon.size;
                hexagon.coordCenter.y =
                    grid.firsthexagonCenter.y +
                    2 * j * sin((60 * PI) / 180) * hexagon.size +
                    sin((60 * PI) / 180) * hexagon.size;
                //hexagon.color = "red"
            } else {
                hexagon.coordCenter.x =
                    grid.firsthexagonCenter.x +
                    i * 1.5 * hexagon.size;
                hexagon.coordCenter.y = grid.firsthexagonCenter.y +
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

function generatePath(grid) {




    return grid;
}

//Function the generate the Grid as object gridObject of object hexagonObject
export function generateEntireGrid() {

    let grid = {
        firsthexagonCenter: { x: 150, y: 150 },
        hexagons: [],
        numberColumn: 10,
        numberRow: 10,
        hexagonSize: 20
        //numberhexagonInGrid: this.numberhexagonInColumn * this.numberhexagonInRow
    };

    grid = generateAllTheHexagones(grid);

    return grid;

}