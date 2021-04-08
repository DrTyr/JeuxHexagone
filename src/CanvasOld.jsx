import React from "react";
import "./canvas.css";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hexSize: 20,
      firstHexCenter: { x: 150, y: 150 },
      nbHexInGrid: 50,
      nbHexInColumn: 8,
      nbColumn: 8,
      canvasSize: { canvasWidth: 800, canvasHeight: 600 },
    };
  }

  componentWillMount() {
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 600 },
    });
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    // Method to draw one hexagone at the intials coordinates
    //this.drawHex2(this.canvasHex, { x: this.state.firstHexCenter.x, y: this.state.firstHexCenter.y });
    // Method to draw a column of hexagone (WIP)
    //this.drawGridColumn(this.canvasHex, { x: this.state.firstHexCenter.x, y: this.state.firstHexCenter.y });

    this.drawGridOddColumn(this.canvasHex, {
      x: this.state.firstHexCenter.x,
      y: this.state.firstHexCenter.y,
    });
    this.drawGridEvenColumn(this.canvasHex, {
      x: this.state.firstHexCenter.x,
      y: this.state.firstHexCenter.y,
    });
  }

  //Method to draw ood columns
  drawGridOddColumn(canvasID, center) {
    for (let i = 0; i <= this.state.nbColumn / 2; i++) {
      this.drawGridColumn(this.canvasHex, {
        x: this.state.firstHexCenter.x +
          i * 3 * this.state.hexSize,
        y: this.state.firstHexCenter.y,
      });
    }
  }

  //Method to draw even columns
  drawGridEvenColumn(ncanvasID, center) {
    for (let i = 0; i <= this.state.nbColumn / 2 - 1; i++) {
      this.drawGridColumn(this.canvasHex, {
        x:
          this.state.firstHexCenter.x +
          i * 3 * this.state.hexSize +
          1.5 * this.state.hexSize,
        y:
          this.state.firstHexCenter.y +
          sin((60 * PI) / 180) * this.state.hexSize,
      });
    }
  }
  /*
        //Method to draw grid (WIP)
        drawGrid(canvasID, center) {
            for (let i = 0, i<= )
        }
    */

  //Method to draw a column
  drawGridColumn(canvasID, center) {
    for (let i = 0; i <= this.state.nbHexInColumn; i++) {
      this.drawHex(this.canvasHex, {
        x: center.x,
        y: i * 2 * sin((60 * PI) / 180) * this.state.hexSize + center.y,
      });
    }
  }

  //Method to draw the hexagone
  drawHex(canvasID, center) {
    let coordHexSummitTt = this.getAllSumitCoordOfOneHex(center);
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    for (let i = 0; i <= 6; i++) {
      //let point = this.Point(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
      //ctx.moveTo(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
      //ctx.lineTo(coordHexSummitTt[i + 1][0], coordHexSummitTt[i][1]);
      ctx.lineTo(coordHexSummitTt[i][0], coordHexSummitTt[i][1]);
    }
    ctx.stroke();
    ctx.fillStyle = this.getRandomColor();
    ctx.fill();
    ctx.closePath();
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //New Method to calculate all hex point coordonate and draw (WIP) -> as to be tested
  getAllSumitCoordOfOneHex(center) {
    let coordHexSummitTt = [];

    for (let i = 0; i <= 6; i++) {
      coordHexSummitTt[i] = [
        this.getHexCornerCoord(center, i).x,
        this.getHexCornerCoord(center, i).y,
      ];
    }
    //this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
    return coordHexSummitTt;
  }

  //Method to calculate the coordinate of  a sommit from the center
  getHexCornerCoord(center, i) {
    let angle_deg = 60 * i;
    let angle_rad = (PI / 180) * angle_deg;
    let x = center.x + this.state.hexSize * cos(angle_rad);
    let y = center.y + this.state.hexSize * sin(angle_rad);
    return this.Point(x, y);
  }

  //Generate coordinate in a variable so other methods can use it (?)
  Point(x, y) {
    return { x, y };
  }

  // //Method to draw between two point (start{x,y} and end{x,y})
  // drawLine(canvasID, start, end) {
  //     const ctx = canvasID.getContext("2d");
  //     ctx.beginPath();
  //     ctx.moveTo(start.x, start.y);
  //     ctx.lineTo(end.x, end.y);
  //     ctx.stroke();
  //     ctx.closePath();
  // }

  render() {
    return (
      <div>
        <canvas ref={(canvasHex) => (this.canvasHex = canvasHex)}></canvas>
      </div>
    );
  }
}
