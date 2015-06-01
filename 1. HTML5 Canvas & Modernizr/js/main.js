/*
     Name: Alexander Rhett Crammer
     Date: Monday, 1 June, 2015
     Class & Section:  WIA-1
     Comments: "HTML5 Canvas Drawing"
 */

window.onload = function () {
  /*******************************************
  HTML5 Shape Drawing Activity
      1.  Setup the canvas and 2d context
      2.  Draw out each shape in the sections below
       
  ********************************************/
  
  var rectangle = document.getElementById("rectangleCanvas").getContext("2d");
  var circle = document.getElementById("circleCanvas").getContext("2d");
  var path = document.getElementById("pathCanvas").getContext("2d");
  var bezier = document.getElementById("bezierCanvas").getContext("2d");
  var text = document.getElementById("textCanvas").getContext("2d");
  var image = document.getElementById("imageCanvas").getContext("2d");
  var melange = document.getElementById("melangeCanvas").getContext("2d");
  
  /*******************************************
  FILE SETUP
  
  // Setup up 7 different Canvases in index.html one for each problem.
  //Link Modernizr.js
  // Link the main.js file
  // Setup the call to that canvas and get it's 2d context
  //Use Modernizr to verify that your browser supports canvas, include a fallback message
  
  /*******************************************
  PART 1
  
  Draw a rectangle starting at point (0 ,0)
  That has a width of 50 px and a heigh of 100px
  Set the color of the rectangle to a shade of blue.
  Set the stroke color to black and the dimension of the stroke are the same as the rectangle.
  
  Reminder - set the style first then draw.
  ********************************************/
  
  //Draw Rectangle here
  rectangle.fillStyle = "#007aff";
  rectangle.strokeStyle = "black";
  rectangle.fillRect(0, 0, 50, 100);
  rectangle.strokeRect(0, 0, 50, 100);
  
  /*******************************************
  PART 2
  
  Draw a circle starting at point (50 ,50)
  That has a radius of 20 px 
  Set the color of the circle to a shade of red and set the alpha to .5
  Set the stroke color to black and use a radius of 30px for this circle.
  
  Reminder - set the style first then draw.
  Use the arc method
  ********************************************/
  
  //Draw Circle here
  circle.fillStyle = "rgba(255, 0, 0, 0.5)";
  circle.arc(50, 50, 20, 0, 2 * Math.PI);
  circle.fill();
  circle.strokeStyle = "black";
  circle.arc(50, 50, 30, 0, 2 * Math.PI);
  circle.stroke();
  
  /*******************************************
  PART 3
  
  Practice using Path drawing.
  Create a 5-point star shaped pattern using the lineTo method.
  Begin this shape at (100, 100)
  
  Height and width and color are up to you.
  
  ********************************************/
  
  
  //Draw Star here
  path.fillStyle = "gold";
  path.strokeStyle = "#555";
  path.beginPath();
  path.moveTo(100, 100);
  path.lineTo(115, 150);
  path.lineTo(175, 150);
  path.lineTo(125, 180);
  path.lineTo(150, 235);
  path.lineTo(100, 200);
  path.lineTo(50, 235);
  path.lineTo(75, 180);
  path.lineTo(25, 150);
  path.lineTo(85, 150);
  path.closePath();
  path.fill();
  path.stroke();
  
  /*******************************************
  PART 4
  
  Practice drawing with Bezier curves.
  Try drawing the top to an umbrella.
  This should have one large arc (a half circle) on the top and scalloped edges on the bottom.
  
  Position, height, width and color are your choice.
  Do not overlap any other object.
  
  ********************************************/
  
  //Draw Umbrella top here
  bezier.strokeStyle = "#5856d6";
  bezier.lineWidth = 5;
  bezier.beginPath();
  bezier.moveTo(100, 100);
  bezier.bezierCurveTo(100, 10, 300, 10, 300, 100);
  bezier.bezierCurveTo(120, 80, 140, 90, 100, 100);
  bezier.closePath();
  bezier.stroke();
  
  /*******************************************
  PART 5
  
  Practice using text.
  Draw text into your canvas.  It can said whatever you would like in any color.
  
  ********************************************/
  
  //Draw text here
  text.fillStyle = "deeppink";
  text.font = "100 16pt Avenir, Helvetica Neue, sans-serif";
  text.fillText("Hello! My name is Alexander and I am not Italian.", 50, 50);
  
  /*******************************************
  PART 6
  
  Pixel manipulation.
  Draw the image logo.png into the canvas in the following 3 ways.
  1. The image exactly as it is.
  2. Shrink the image by 50%
  3. Slice a section of the logo out and draw that onto the canvas.
  
  Reminder to use the drawImage method for all 3 of the ways.
  
  ********************************************/
  
  //Draw images here
  var imageElement = document.getElementById("logoImage");
  image.drawImage(imageElement, 0, 0);
  image.drawImage(imageElement, 0, 0, imageElement.width / 2, imageElement.height / 2);
  image.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height, 0, 0, 100, 100);
  
  /*******************************************
  PART 7
  
  Putting it all together. 
  
  Using a combination of all the methods. 
  Create a complex scene.
  You must use at least 3 different methods.
  
  ********************************************/
  
  // Draw scene here
  

};