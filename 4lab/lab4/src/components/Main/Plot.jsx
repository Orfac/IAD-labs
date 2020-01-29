import React, { Component } from 'react'
import "../../css/Plot.css";
import {checkPoint} from "../../api/point-api";
import store from "../../stores/store"

export class Plot extends Component {


  constructor(props){
    super(props);
    this.state = {
      plotHeight: this.props.height,
      plotWidth: this.props.width

    };
    this.state.emptyRadiusMsg = "";
    this.drawPlot = this.drawPlot.bind(this);
    this.fillwhite = this.fillwhite.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
    this.drawTriangle = this.drawTriangle.bind(this);
    this.drawOX = this.drawOX.bind(this);
    this.drawOY = this.drawOY.bind(this);
    this.drawPoint = this.drawPoint.bind(this);
    this.onPlotClick = this.onPlotClick.bind(this);
    this.updatePoint = this.updatePoint.bind(this);
    this.redrawPoints = this.redrawPoints.bind(this);

  }

  componentDidMount = () => {
    this.state.canvas = document.getElementById("plot");
    this.state.context =this.state.canvas.getContext("2d");
    this.drawPlot();

  };

  onPlotClick = (e) =>{

    if (this.props.r === 0){
      this.setState({emptyRadiusMsg: "Radius isn't set"});
      return;
    }

    this.setState({emptyRadiusMsg: ""});


    let x;
    let y;
    if (e.pageX || e.pageY) { 
      x = e.pageX;
      y = e.pageY;
    }
    else { 
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
    x -= this.state.canvas.offsetLeft;
    y -= this.state.canvas.offsetTop;
    x -= 150;
    y -= 150;

    let realX = x * this.props.r / 100;
    let realY = y * this.props.r / 100;

    this.updatePoint(realX,realY, this.props.r);
  };

  async updatePoint(x,y,r){
    await checkPoint(x,y,r);
    this.redrawPoints();
  }

  redrawPoints(){
    this.drawPlot();
    let points = store.getState().plotState.points;
    for (let i = 0; i < points.length; i++) {
      if (points[i].r === this.props.r){
        this.drawPoint(points[i].x,points[i].y,points[i].r,points[i].result);
      }
    }
  }
  render() {
    return (
      <div className="main-elem">
        <div className="error">
          {this.state.emptyRadiusMsg}
        </div>
        <div className="canvas-div">
          <canvas 
            onClick={this.onPlotClick}
            className="graph-elem"
            id="plot" 
            width={this.state.plotWidth} 
            height={this.state.plotHeight}>
            Your browser doesn't support canvas
          </canvas>
        </div>
      </div>   
    )
  }

  drawPlot() {
    this.fillwhite();
    this.state.context.beginPath();
    this.drawCircle();
    this.drawSquare();
    this.drawTriangle();
    this.state.context.closePath();
    this.state.context.beginPath();
    this.drawOX();
    this.drawOY();
    this.state.context.closePath();
    this.state.context.stroke();
    
  }

  drawOY(){
    this.state.context.moveTo(150, 30);
    this.state.context.lineTo(140, 40);
    this.state.context.moveTo(150, 30);
    this.state.context.lineTo(160, 40);
    this.state.context.moveTo(150, 30);
    this.state.context.lineTo(150, 270);
    this.state.context.moveTo(30, 150);
  }

  drawOX(){
    this.state.context.moveTo(30, 150);
    this.state.context.lineTo(270, 150);
    this.state.context.lineTo(260, 140);
    this.state.context.moveTo(270, 150);
    this.state.context.lineTo(260, 160);
  }

  drawTriangle(){
    this.state.context.moveTo(150, 150);
    this.state.context.lineTo(100, 150);
    this.state.context.lineTo(150, 200);
    this.state.context.lineTo(150, 150);
    this.state.context.fillStyle = '#3399ff';
    this.state.context.fill();
  }

  drawSquare(){
    this.state.context.rect(150, 50, 100, 100);
    this.state.context.fillStyle = '#3399ff';
    this.state.context.fill();
  }

  drawCircle(){
    this.state.context.arc(150, 150, 100, 0, Math.PI/2);
    this.state.context.lineTo(150, 150);
    this.state.context.fillStyle = '#3399ff';
    this.state.context.fill();
  }

  fillwhite() {
    this.state.context.beginPath();
    this.state.context.fillStyle = "white";
    this.state.context.fillRect(0, 0, 
      this.state.plotWidth, 
      this.state.plotHeight
    );
  }

  drawPoint(x, y, r, result){
    let color = result ? "lightgreen" : "red";
    this.state.context.beginPath();
    let x2 = x / r * 100 +150;
    let y2 = y / r * 100 + 150;

    this.state.context.arc(x2, y2, 3, 0, 2 * Math.PI);


    this.state.context.fillStyle = color;
    this.state.context.fill();
    this.state.context.closePath();
  }
}

export default Plot
