import React, { useState, useEffect, useRef } from "react";
import { getRandomColor } from "./library";
import "./canvas.css";
import { generateEntireGrid } from "./HexagonGridCalculator";

function Canvas() {
    const hexagonCanvas = useRef(null);

    const [canvasWidth, setCanvasWidth] = useState(800);
    const [canvasHeight, setCanvasHeight] = useState(600);

    useEffect(() => {
        draw();
    }, []);

    function clearCanvas() {
        const canvas = hexagonCanvas.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        clearCanvas();
        drawGrid();
    }

    function drawGrid() {
        const ctx = hexagonCanvas.current.getContext("2d");
        let grid = generateEntireGrid();
        // debugger;

        //console.log(grid);

        for (let i = 0; i <= grid.numberRow; i++) {

            grid.hexagons[i] = [];

            for (let j = 0; j <= grid.numberColumn; j++) {

                ctx.beginPath();
                for (let z = 0; z <= 6; z++) {
                    ctx.lineTo(
                        grid.hexagons[i][j].coordSommit.x[z],
                        grid.hexagons[i][j].coordSommit.y[z]
                    );
                }

                ctx.stroke();
                ctx.fillStyle = getRandomColor();
                //ctx.fillStyle = grid.hexagons[i][j].color;
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    return (
        <div>
            {" "}
            <canvas
                ref={hexagonCanvas}
                width={canvasWidth}
                height={canvasHeight}
            ></canvas>
        </div>
    );
}
export default Canvas;

//A creuser pour afficher les hexagons
//<svg height="210" width="500">
//  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
//</svg>
//
//https://www.w3schools.com/graphics/svg_polygon.asp
