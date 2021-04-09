//import React, { useState, useEffect, useRef } from "react";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const hexagoneSize = 20;
const numberHexagoneInColumn = 10;
const numberHexagoneInRow = 10;

//Generate all summit coordonate, clockwise, starting with the East one
function getOneHexagoneAllSummitCoordinate(hexagone) {
    for (let i = 0; i <= 6; i++) {
        let angle = (PI / 180) * -60 * i;
        hexagone.coordSommit.x[i] =
            hexagone.coordCenter.x + hexagone.size * cos(angle);
        hexagone.coordSommit.y[i] =
            hexagone.coordCenter.y + hexagone.size * sin(angle);
    }
    return hexagone.coordSommit;
}

//Function the generate the Grid as object gridObject of object hexagoneObject
export function generateEntireGrid() {
    let grid = {
        firstHexagoneCenter: { x: 150, y: 150 },
        hexagones: [],
        numberHexagoneInColumn: numberHexagoneInColumn,
        numberHexagoneInRow: numberHexagoneInRow,
        //numberHexagoneInGrid: this.numberHexagoneInColumn * this.numberHexagoneInRow
    };

    let hexagoneIndice = 0;

    for (let i = 0; i <= grid.numberHexagoneInRow; i++) {
        grid.hexagones[i] = [];

        for (let j = 0; j <= grid.numberHexagoneInColumn; j++) {
            let hexagone = {
                indice: 0,
                coordInGrid: { x: 0, y: 0 },
                coordSommit: { x: [], y: [] },
                coordCenter: { x: 0, y: 0 },
                size: hexagoneSize,
            };

            //Testing if drawing odd or even column i
            if (i % 2 === 0) {
                hexagone.coordCenter.x =
                    grid.firstHexagoneCenter.x +
                    i * 3 * hexagoneSize +
                    1.5 * hexagoneSize;
                hexagone.coordCenter.y =
                    grid.firstHexagoneCenter.y + sin((60 * PI) / 180) * hexagoneSize;
            } else {
                hexagone.coordCenter.x =
                    grid.firstHexagoneCenter.x +
                    i * 3 * hexagoneSize;
                hexagone.coordCenter.y = grid.firstHexagoneCenter.y;
            }

            // WTF tu écrases les valeurs hexagone.coordCenter.x et hexagone.coordCenter.y
            //   hexagone.coordCenter.x =
            //     grid.firstHexagoneCenter.x + j * 3 * hexagoneSize;
            //   hexagone.coordCenter.y =
            //     grid.firstHexagoneCenter.y +
            //     j * 2 * sin((60 * PI) / 180) * hexagoneSize;

            hexagone.coordSommit = getOneHexagoneAllSummitCoordinate(hexagone);

            //How to change both value at once ?
            hexagone.coordInGrid.x = i;
            hexagone.coordInGrid.y = j;

            hexagone.indice = hexagoneIndice++;

            grid.numberHexagoneInGrid++;
            grid.hexagones[i][j] = hexagone;
        }
    }

    return grid;
}