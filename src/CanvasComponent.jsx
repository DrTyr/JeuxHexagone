import React, { useState, useEffect, useRef } from "react";
import { getRandomColor } from "./library";

import "./canvas.css";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;

function Canvas() {
  const hexagoneCanvas = useRef(null);

  const [hexagoneSize, setHexagoneSize] = useState(20);
  const [firstHexagoneCenter, setFirstHexagoneCenter] = useState({
    x: 150,
    y: 150,
  });
  const [hexagoneNumberInGrid, setHexagoneNumberInGrid] = useState(50);
  const [hexagoneNumberInColumn, setHexagoneNumberInColumn] = useState(8);
  const [columnNumber, setcolumnNumber] = useState(8);

  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);

  //   const [hexagoneCanvas, setHexagoneCanvas] = useState({
  //     canvasWidth,
  //     canvasHeight,
  //   });

  useEffect(() => {
    // Method to draw one hexagone at the intials coordinates
    //this.drawHex2(this.canvasHex, { x: this.state.firstHexCenter.x, y: this.state.firstHexCenter.y });
    // Method to draw a column of hexagone (WIP)
    //this.drawGridColumn(this.canvasHex, { x: this.state.firstHexCenter.x, y: this.state.firstHexCenter.y });

    drawHexagones();
  }, [hexagoneSize, columnNumber]);

  function clearCanvas() {
    const canvas = hexagoneCanvas.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawHexagones() {
    clearCanvas();
    drawGridOddColumn(firstHexagoneCenter);
    drawGridEvenColumn(firstHexagoneCenter);
  }

  //Method to draw odd columns
  function drawGridOddColumn(canvasID, center) {
    for (let i = 0; i <= columnNumber / 2; i++) {
      drawGridColumn({
        x: firstHexagoneCenter.x + i * 3 * hexagoneSize,
        y: firstHexagoneCenter.y,
      });
    }
  }

  //Method to draw even columns
  function drawGridEvenColumn() {
    for (let i = 0; i <= columnNumber / 2 - 1; i++) {
      drawGridColumn({
        x: firstHexagoneCenter.x + i * 3 * hexagoneSize + 1.5 * hexagoneSize,
        y: firstHexagoneCenter.y + sin((60 * PI) / 180) * hexagoneSize,
      });
    }
  }
  //Method to draw a column
  function drawGridColumn(center) {
    for (let i = 0; i <= hexagoneNumberInColumn; i++) {
      drawHex({
        x: center.x,
        y: i * 2 * sin((60 * PI) / 180) * hexagoneSize + center.y,
      });
    }
  }

  //Method to draw the hexagone
  function drawHex(center) {
    let coordHexSummitTt = getAllSumitCoordOfOneHex(center);
    const ctx = hexagoneCanvas.current.getContext("2d");
    ctx.beginPath();
    for (let i = 0; i <= 6; i++) {
      //let point = this.Point(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
      //ctx.moveTo(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
      //ctx.lineTo(coordHexSummitTt[i + 1][0], coordHexSummitTt[i][1]);
      ctx.lineTo(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
    }
    ctx.stroke();
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    ctx.closePath();
  }

  //New Method to calculate all hex point coordonate and draw (WIP) -> as to be tested
  function getAllSumitCoordOfOneHex(center) {
    let coordHexSummitTt = [];

    for (let i = 0; i <= 6; i++) {
      coordHexSummitTt[i] = [
        getHexCornerCoord(center, i).x,
        getHexCornerCoord(center, i).y,
      ];
    }
    //this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
    return coordHexSummitTt;
  }

  //Method to calculate the coordinate of a sommit from the center
  function getHexCornerCoord(center, i) {
    let angle_deg = 60 * i;
    let angle_rad = (PI / 180) * angle_deg;
    let x = center.x + hexagoneSize * cos(angle_rad);
    let y = center.y + hexagoneSize * sin(angle_rad);
    return { x, y };
  }

  return (
    <div>
      <canvas
        ref={hexagoneCanvas}
        width={canvasWidth}
        height={canvasHeight}
      ></canvas>
      <input
        type="number"
        value={columnNumber}
        onChange={(event) => {
          setcolumnNumber(event.target.value);
        }}
      />
      <input
        type="number"
        value={hexagoneSize}
        onChange={(event) => {
          setHexagoneSize(event.target.value);
        }}
      />
      <button onClick={drawHexagones}>Redraw</button>
    </div>
  );
}

export default Canvas;

function getOneHexagoneSummitCoordinate(hexagoneObject, hexagoneSize) {
  for (let i = 0; i <= 6; i++) {
    let angle = (PI / 180) * 60 * i;
    hexagoneObject.CoordSommit.x[i] = hexagoneObject.Coordcenter.x + hexagoneSize * cos(angle);
    hexagoneObject.CoordSommit.y[i] = hexagoneObject.Coordcenter.y + hexagoneSize * sin(angle);
  }
  return;
}


let hexagoneObject = {
  indice: 0,
  indiceInGrid: { x: 0, y: 0 },
  coordSommit: { x: [], y: [] },
  coordCenter: { x: 0, y: 0 },
  size: 0,
};

function generateEntireGrid(firstHexagoneCenter, hexagoneSize) {

  for (let i = 0; i <= numberHexagoneInRow; i++) {
    for (let j = 0; j <= numberHexagoneInColumn; j++) {
      Hexagone.CoordCenter.x = center.x + j * 3 * hexagoneSize,
        Hexagone.CoordCenter.y = j * 2 * sin((60 * PI) / 180) * hexagoneSize + center.y
    }
  }

}