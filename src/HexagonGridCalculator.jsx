//import React, { useState, useEffect, useRef } from "react";

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
        firsthexagonCenter: { x: 50, y: 50 },
        hexagons: [],
        numberColumn: 10,
        numberRow: 10,
        hexagonSize: 20
        //numberhexagonInGrid: this.numberhexagonInColumn * this.numberhexagonInRow
    };

    grid = generateAllTheHexagones(grid);

    return grid;

}



/**
 * Performs the even-odd-rule Algorithm (a raycasting algorithm) to find out whether a point is in a given polygon.
 * This runs in O(n) where n is the number of edges of the polygon.
 *
 * @param {Array} polygon an array representation of the polygon where polygon[i][0] is the x Value of the i-th point and polygon[i][1] is the y Value.
 * @param {Array} point   an array representation of the point where point[0] is its x Value and point[1] is its y Value
 * @return {boolean} whether the point is in the polygon (not on the edge, just turn < into <= and > into >= for that)
 */

function pointInPolygon(polygon, point) {
    //A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
    let odd = false;
    //For each edge (In this case for each point of the polygon and the previous one)
    for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
        //If a line from the point into infinity crosses this edge
        if (((polygon[i][1] > point[1]) !== (polygon[j][1] > point[1])) // One point needs to be above, one below our y coordinate
            // ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
            && (point[0] < ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]))) {
            // Invert odd
            odd = !odd;
        }
        j = i;

    }
    //If the number of crossings was odd, the point is in the polygon
    return odd;

}