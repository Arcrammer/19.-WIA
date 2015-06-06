/*  Main.js
    Saturday, 6 June, 2015
    
    The Project
    Alexander Rhett Crammer
    Full Sail University  */

$(document).ready(function () {
  // Canvas stuff
  if (Modernizr.canvas) {
    // The UA supports the canvas element
    var greeting = document.getElementById("greeting").getContext("2d");
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(368,365);
    greeting.bezierCurveTo(376,361,380,341,383,333);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(383,333);
    greeting.bezierCurveTo(384,345,380,357,377,369);
    greeting.bezierCurveTo(374,382,375,396,375,410);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(375,384);
    greeting.bezierCurveTo(383,384,422,388,422,376);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(404,339);
    greeting.bezierCurveTo(405,348,401,357,400,366);
    greeting.bezierCurveTo(398,375,398,385,396,394);
    greeting.bezierCurveTo(394,412,390,434,392,453);
    greeting.bezierCurveTo(393,455,392,456,393,457);
    greeting.bezierCurveTo(395,457,397,455,396,453);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(405,407);
    greeting.bezierCurveTo(410,408,418,404,415,400);
    greeting.bezierCurveTo(405,393,411,423,421,405);
    greeting.bezierCurveTo(423,400,426,387,426,383);
    greeting.bezierCurveTo(423,389,425,405,423,412);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(433,382);
    greeting.bezierCurveTo(431,392,429,402,430,414);
    greeting.bezierCurveTo(431,410,433,405,437,403);
    greeting.bezierCurveTo(437,406,436,410,439,411);
    greeting.bezierCurveTo(441,413,446,411,447,409);
    greeting.bezierCurveTo(448,404,439,397,438,402);
    greeting.bezierCurveTo(443,404,448,400,450,395);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.346000075340271;
    greeting.beginPath();
    greeting.moveTo(462,403);
    greeting.bezierCurveTo(468,402,478,388,477,382);
    greeting.bezierCurveTo(476,378,472,375,469,378);
    greeting.bezierCurveTo(466,380,467,386,467,389);
    greeting.bezierCurveTo(467,397,470,406,468,413);
    greeting.bezierCurveTo(467,422,455,419,448,421);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.346000075340271;
    greeting.beginPath();
    greeting.moveTo(460,412);
    greeting.bezierCurveTo(463,413,471,411,472,408);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(476,403);
    greeting.bezierCurveTo(479,403,481,401,482,398);
    greeting.bezierCurveTo(480,404,479,407,478,413);
    greeting.bezierCurveTo(479,409,484,396,489,403);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(493,401);
    greeting.bezierCurveTo(480,410,502,415,498,403);
    greeting.bezierCurveTo(496,397,490,403,497,404);
    greeting.bezierCurveTo(501,406,505,403,507,399);
    greeting.bezierCurveTo(507,403,504,406,504,410);
    greeting.bezierCurveTo(504,406,507,402,511,401);
    greeting.bezierCurveTo(512,403,511,406,510,409);
    greeting.bezierCurveTo(512,405,515,403,519,401);
    greeting.bezierCurveTo(521,404,513,412,521,409);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(531,388);
    greeting.bezierCurveTo(538,389,539,384,541,380);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(541,380);
    greeting.bezierCurveTo(539,385,530,403,535,409);
    greeting.bezierCurveTo(546,418,554,384,555,380);
    greeting.bezierCurveTo(553,387,550,393,549,400);
    greeting.bezierCurveTo(549,401,546,409,548,411);
    greeting.bezierCurveTo(551,414,555,401,556,399);
    greeting.bezierCurveTo(557,402,556,410,556,412);
    greeting.bezierCurveTo(556,408,558,399,563,398);
    greeting.bezierCurveTo(565,402,563,408,562,411);
    greeting.bezierCurveTo(569,416,571,400,573,397);
    greeting.bezierCurveTo(573,400,569,412,575,410);
    greeting.bezierCurveTo(579,409,581,399,582,396);
    greeting.bezierCurveTo(582,400,577,410,583,411);
    greeting.bezierCurveTo(589,411,591,402,594,399);
    greeting.bezierCurveTo(596,402,594,406,593,410);
    greeting.bezierCurveTo(594,407,597,394,602,401);
    greeting.bezierCurveTo(604,403,599,406,600,409);
    greeting.bezierCurveTo(601,412,602,411,604,409);
    greeting.stroke();
    
    greeting.lineStyle="rgb(204,204,204)";
    greeting.lineWidth=1.5;
    greeting.beginPath();
    greeting.moveTo(621,373);
    greeting.bezierCurveTo(618,378,614,390,614,395);
    greeting.stroke();
    
    greeting.fillStyle="rgb(50,50,50)";
    greeting.beginPath();
    greeting.arc(582,387,2,0,2*Math.PI);
    greeting.fill();
    greeting.fill();
    
    greeting.fillStyle="rgb(50,50,50)";
    greeting.beginPath();
    greeting.arc(614,408,2,0,2*Math.PI);
    greeting.fill();
    greeting.fill();
    
    greeting.fillStyle="rgb(50,50,50)";
    greeting.beginPath();
    greeting.arc(574,387,2,0,2*Math.PI);
    greeting.fill();
    greeting.fill();
    
    var greetingDark = document.getElementById("greeting-dark").getContext("2d");
    greetingDark.strokeStyle = "white";
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(368,365);
    greetingDark.bezierCurveTo(376,361,380,341,383,333);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(383,333);
    greetingDark.bezierCurveTo(384,345,380,357,377,369);
    greetingDark.bezierCurveTo(374,382,375,396,375,410);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(375,384);
    greetingDark.bezierCurveTo(383,384,422,388,422,376);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(404,339);
    greetingDark.bezierCurveTo(405,348,401,357,400,366);
    greetingDark.bezierCurveTo(398,375,398,385,396,394);
    greetingDark.bezierCurveTo(394,412,390,434,392,453);
    greetingDark.bezierCurveTo(393,455,392,456,393,457);
    greetingDark.bezierCurveTo(395,457,397,455,396,453);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(405,407);
    greetingDark.bezierCurveTo(410,408,418,404,415,400);
    greetingDark.bezierCurveTo(405,393,411,423,421,405);
    greetingDark.bezierCurveTo(423,400,426,387,426,383);
    greetingDark.bezierCurveTo(423,389,425,405,423,412);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(433,382);
    greetingDark.bezierCurveTo(431,392,429,402,430,414);
    greetingDark.bezierCurveTo(431,410,433,405,437,403);
    greetingDark.bezierCurveTo(437,406,436,410,439,411);
    greetingDark.bezierCurveTo(441,413,446,411,447,409);
    greetingDark.bezierCurveTo(448,404,439,397,438,402);
    greetingDark.bezierCurveTo(443,404,448,400,450,395);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.346000075340271;
    greetingDark.beginPath();
    greetingDark.moveTo(462,403);
    greetingDark.bezierCurveTo(468,402,478,388,477,382);
    greetingDark.bezierCurveTo(476,378,472,375,469,378);
    greetingDark.bezierCurveTo(466,380,467,386,467,389);
    greetingDark.bezierCurveTo(467,397,470,406,468,413);
    greetingDark.bezierCurveTo(467,422,455,419,448,421);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.346000075340271;
    greetingDark.beginPath();
    greetingDark.moveTo(460,412);
    greetingDark.bezierCurveTo(463,413,471,411,472,408);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(476,403);
    greetingDark.bezierCurveTo(479,403,481,401,482,398);
    greetingDark.bezierCurveTo(480,404,479,407,478,413);
    greetingDark.bezierCurveTo(479,409,484,396,489,403);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(493,401);
    greetingDark.bezierCurveTo(480,410,502,415,498,403);
    greetingDark.bezierCurveTo(496,397,490,403,497,404);
    greetingDark.bezierCurveTo(501,406,505,403,507,399);
    greetingDark.bezierCurveTo(507,403,504,406,504,410);
    greetingDark.bezierCurveTo(504,406,507,402,511,401);
    greetingDark.bezierCurveTo(512,403,511,406,510,409);
    greetingDark.bezierCurveTo(512,405,515,403,519,401);
    greetingDark.bezierCurveTo(521,404,513,412,521,409);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(531,388);
    greetingDark.bezierCurveTo(538,389,539,384,541,380);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(541,380);
    greetingDark.bezierCurveTo(539,385,530,403,535,409);
    greetingDark.bezierCurveTo(546,418,554,384,555,380);
    greetingDark.bezierCurveTo(553,387,550,393,549,400);
    greetingDark.bezierCurveTo(549,401,546,409,548,411);
    greetingDark.bezierCurveTo(551,414,555,401,556,399);
    greetingDark.bezierCurveTo(557,402,556,410,556,412);
    greetingDark.bezierCurveTo(556,408,558,399,563,398);
    greetingDark.bezierCurveTo(565,402,563,408,562,411);
    greetingDark.bezierCurveTo(569,416,571,400,573,397);
    greetingDark.bezierCurveTo(573,400,569,412,575,410);
    greetingDark.bezierCurveTo(579,409,581,399,582,396);
    greetingDark.bezierCurveTo(582,400,577,410,583,411);
    greetingDark.bezierCurveTo(589,411,591,402,594,399);
    greetingDark.bezierCurveTo(596,402,594,406,593,410);
    greetingDark.bezierCurveTo(594,407,597,394,602,401);
    greetingDark.bezierCurveTo(604,403,599,406,600,409);
    greetingDark.bezierCurveTo(601,412,602,411,604,409);
    greetingDark.stroke();
    
    greetingDark.lineStyle="rgb(204,204,204)";
    greetingDark.lineWidth=1.5;
    greetingDark.beginPath();
    greetingDark.moveTo(621,373);
    greetingDark.bezierCurveTo(618,378,614,390,614,395);
    greetingDark.stroke();
    
    greetingDark.fillStyle="rgb(50,50,50)";
    greetingDark.beginPath();
    greetingDark.arc(582,387,2,0,2*Math.PI);
    greetingDark.fill();
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(50,50,50)";
    greetingDark.beginPath();
    greetingDark.arc(614,408,2,0,2*Math.PI);
    greetingDark.fill();
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(50,50,50)";
    greetingDark.beginPath();
    greetingDark.arc(574,387,2,0,2*Math.PI);
    greetingDark.fill();
    greetingDark.fill();
    
    var meatTheTeam = document.getElementById("meatTheTeem").getContext("2d");
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(317,284);
    meatTheTeam.bezierCurveTo(313,297,313,310,312,322);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(302,300);
    meatTheTeam.bezierCurveTo(312,300,321,298,332,299);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(337,300);
    meatTheTeam.bezierCurveTo(329,309,332,326,345,321);
    meatTheTeam.bezierCurveTo(361,314,351,295,338,299);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(370,302);
    meatTheTeam.bezierCurveTo(373,301,376,298,378,295);
    meatTheTeam.bezierCurveTo(378,304,376,313,376,323);
    meatTheTeam.bezierCurveTo(376,317,380,298,386,294);
    meatTheTeam.bezierCurveTo(396,288,395,304,393,310);
    meatTheTeam.bezierCurveTo(395,306,397,297,403,295);
    meatTheTeam.bezierCurveTo(412,293,409,302,408,308);
    meatTheTeam.bezierCurveTo(408,313,405,322,407,326);
    meatTheTeam.bezierCurveTo(408,331,415,335,418,327);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(420,311);
    meatTheTeam.bezierCurveTo(437,317,431,287,419,301);
    meatTheTeam.bezierCurveTo(409,312,421,327,433,320);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(437,309);
    meatTheTeam.bezierCurveTo(462,313,458,291,444,297);
    meatTheTeam.bezierCurveTo(427,306,443,333,458,321);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(462,302);
    meatTheTeam.bezierCurveTo(468,303,473,302,479,300);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(470,292);
    meatTheTeam.bezierCurveTo(467,301,467,312,466,322);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(501,301);
    meatTheTeam.bezierCurveTo(506,301,509,297,512,294);
    meatTheTeam.bezierCurveTo(509,299,504,317,513,318);
    meatTheTeam.bezierCurveTo(521,319,528,301,529,296);
    meatTheTeam.bezierCurveTo(526,304,526,322,521,329);
    meatTheTeam.bezierCurveTo(512,341,489,316,477,332);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(542,297);
    meatTheTeam.bezierCurveTo(532,299,530,320,543,316);
    meatTheTeam.bezierCurveTo(560,311,546,288,542,299);
    meatTheTeam.bezierCurveTo(548,307,564,309,566,296);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(565,301);
    meatTheTeam.bezierCurveTo(564,307,561,318,572,313);
    meatTheTeam.bezierCurveTo(577,311,579,301,581,295);
    meatTheTeam.bezierCurveTo(576,305,573,325,591,320);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(609,267);
    meatTheTeam.bezierCurveTo(607,279,604,291,603,303);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(604,321);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(189,290);
    meatTheTeam.bezierCurveTo(200,292,207,279,210,271);
    meatTheTeam.bezierCurveTo(209,287,206,303,204,320);
    meatTheTeam.bezierCurveTo(204,314,218,254,229,275);
    meatTheTeam.bezierCurveTo(234,285,213,319,232,320);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(240,292);
    meatTheTeam.bezierCurveTo(239,301,238,309,238,317);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(240,277);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(280,318);
    meatTheTeam.bezierCurveTo(283,316,286,314,287,311);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(266,301);
    meatTheTeam.bezierCurveTo(272,303,285,297,279,290);
    meatTheTeam.bezierCurveTo(273,283,267,295,266,300);
    meatTheTeam.bezierCurveTo(265,304,264,312,267,316);
    meatTheTeam.bezierCurveTo(271,320,276,320,280,318);
    meatTheTeam.stroke();
    
    meatTheTeam.lineStyle="rgb(0,0,0)";
    meatTheTeam.lineWidth=1.5;
    meatTheTeam.beginPath();
    meatTheTeam.moveTo(259,296);
    meatTheTeam.bezierCurveTo(261,291,255,287,250,290);
    meatTheTeam.bezierCurveTo(247,292,247,301,246,304);
    meatTheTeam.bezierCurveTo(246,308,244,313,247,317);
    meatTheTeam.bezierCurveTo(252,322,259,320,260,313);
    meatTheTeam.stroke();
    
    $("#greeting").animate({
      "top":"-155%"
    }, 2000);
    
    $("#meatTheTeem").animate({
      "top":"-136.5%"
    }, 2000);
  } else {
    // The images are displaying, so we'll animate them up
    $('img[alt="Greeting.png"]').animate({
      "top":"-95%"
    }, 2000);
    $('img[alt="MeetTheTeam.png"]').animate({
      "top":"-85%"
    }, 2000);
  }
});