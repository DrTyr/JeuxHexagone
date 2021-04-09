//import React, { useState, useEffect, useRef } from "react";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const hexagonSize = 20;
const numberhexagonInColumn = 10;
const numberhexagonInRow = 10;

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

//Function the generate the Grid as object gridObject of object hexagonObject
export function generateEntireGrid() {
    let grid = {
        firsthexagonCenter: { x: 150, y: 150 },
        hexagons: [],
        numberColumn: numberhexagonInColumn,
        numberRow: numberhexagonInRow
        //numberhexagonInGrid: this.numberhexagonInColumn * this.numberhexagonInRow
    };

    let hexagonIndice = 0;

    for (let i = 0; i < grid.numberRow; i++) {

        grid.hexagons[i] = [];

        for (let j = 0; j < grid.numberColumn; j++) {

            let hexagon = {
                indice: 0,
                coordInGrid: { x: 0, y: 0 },
                coordSommit: { x: [], y: [] },
                coordCenter: { x: 0, y: 0 },
                size: hexagonSize,
                color: "",
            };

            //Testing if drawing odd or even column i
            if (i % 2 === 1) {
                hexagon.coordCenter.x =
                    grid.firsthexagonCenter.x +
                    i * 1.5 * hexagonSize;
                hexagon.coordCenter.y =
                    grid.firsthexagonCenter.y +
                    2 * j * sin((60 * PI) / 180) * hexagonSize +
                    sin((60 * PI) / 180) * hexagonSize;
                //hexagon.color = "red"
            } else {
                hexagon.coordCenter.x =
                    grid.firsthexagonCenter.x +
                    i * 1.5 * hexagonSize;
                hexagon.coordCenter.y = grid.firsthexagonCenter.y +
                    j * 2 * sin((60 * PI) / 180) * hexagonSize;
                //hexagon.color = "green"

            }

            hexagon.coordSommit = getOnehexagonAllSummitCoordinate(hexagon);

            //How to change both value at once ?
            //hexagon.coordInGrid = {i,j};
            hexagon.coordInGrid.x = i;
            hexagon.coordInGrid.y = j;

            hexagon.indice = hexagonIndice++;

            grid.numberhexagonInGrid++;
            grid.hexagons[i][j] = hexagon;
        }
    }

    return grid;
}
