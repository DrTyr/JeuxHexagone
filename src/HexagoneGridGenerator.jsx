import React, { useState, useEffect, useRef } from "react";
import { getRandomColor } from "./library";
import "./canvas.css";
import { generateEntireGrid } from "./HexagoneCalculator";


function Canvas() {

    const hexagoneCanvas = useRef(null);

    const [canvasWidth, setCanvasWidth] = useState(800);
    const [canvasHeight, setCanvasHeight] = useState(600);

    useEffect(() => {

        draw();

    }, []);

    function clearCanvas() {
        const canvas = hexagoneCanvas.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        clearCanvas();
        drawGrid();
    }

    function drawGrid() {

        const ctx = hexagoneCanvas.current.getContext("2d");
        ctx.fillStyle = getRandomColor();
        let grid = generateEntireGrid();

        for (let i = 0; i <= grid.numberHexagoneInRow; i++) {
            for (let j = 0; j <= grid.numberHexagoneInColumn; j++) {
                ctx.beginPath();
                for (let z = 0; z <= 6; z++) {

                    ctx.lineTo(grid.hexagone[i][j].coordSommit.x[z], grid.hexagone[i][j].coordSommit.x[z]);

                }

                ctx.stroke();
                ctx.fill();
                ctx.closePath();

            }

        }
    }

    return (<div>   <canvas
        ref={hexagoneCanvas}
        width={canvasWidth}
        height={canvasHeight}
    ></canvas></div>)

}
export default Canvas;