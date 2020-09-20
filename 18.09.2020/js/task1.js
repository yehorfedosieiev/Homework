'use strict';

function Figure (x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
};

function Line (x, y, x1, y1, color, lineWidth = "2"){
    Figure.call(this, x, y, color);
    this.x1 = x1;
    this.y1 = y1;
    this.draw = function (context) {
		context.beginPath();
        context.moveTo(this.x, this.y);
        //thickness of line
		context.lineWidth = lineWidth;
		//line color
		context.strokeStyle = this.color;
        context.lineTo(this.x1, this.y1);
		context.stroke();
	};
};

function Circle (x, y, radius, color, lineWidth = "2"){
    Figure.call(this, x, y, color);
    this.radius = radius;
    this.draw = (context) => {
        context.beginPath();
        context.strokeStyle = this.color; // надо ли говорить this.color?
        context.lineWidth = lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    };
};

function Rect(x, y, width, height, color, lineWidth = "2") {
    Figure.call(this, x, y, color);
    this.width = width;
    this.height = height;

    this.draw = function(context) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.fillStyle = this.color;
        context.lineWidth = lineWidth;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.stroke();
	};   
};

function Canvas (idElement, width = 640, height = 480){
    this.width = width;
    this.height = height;
    let canvas = document.getElementById(idElement);
    let context = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    this.add = function(){
        for (let i = 0; i < arguments.length; i++){
            arguments[i].draw(context);
        }
    };
    // this.add = () => {
    //     arguments.forEach(element => {
    //         element.draw(context);
    //     });
    // };
};

let draw = new Canvas("idcanvas");

var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect1 = new Rect(250, 110, 80, 150, 'rgba(255,255,56, 1)'); // x, y, w, h, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

draw.add (line, circle, rect1, rect);