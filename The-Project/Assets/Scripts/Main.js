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
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(349,378);
    greeting.bezierCurveTo(357,374,363,367,365,358);
    greeting.bezierCurveTo(364,358,363,357,362,357);
    greeting.bezierCurveTo(360,374,359,391,358,408);
    greeting.bezierCurveTo(358,410,360,410,360,408);
    greeting.bezierCurveTo(362,391,362,375,365,358);
    greeting.bezierCurveTo(365,356,363,356,362,357);
    greeting.bezierCurveTo(361,366,355,372,348,376);
    greeting.bezierCurveTo(346,376,348,378,349,378);
    greeting.lineTo(349,378);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(382,356);
    greeting.bezierCurveTo(380,373,379,390,378,407);
    greeting.bezierCurveTo(378,409,380,409,380,407);
    greeting.bezierCurveTo(382,390,382,374,385,357);
    greeting.bezierCurveTo(385,355,383,355,382,356);
    greeting.lineTo(382,356);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(354,386);
    greeting.bezierCurveTo(364,386,375,387,385,385);
    greeting.bezierCurveTo(386,384,386,382,384,382);
    greeting.bezierCurveTo(374,385,364,384,354,384);
    greeting.bezierCurveTo(352,384,352,386,354,386);
    greeting.lineTo(354,386);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(391,395);
    greeting.bezierCurveTo(394,396,397,396,400,396);
    greeting.bezierCurveTo(402,396,405,396,407,395);
    greeting.bezierCurveTo(410,394,409,391,409,389);
    greeting.bezierCurveTo(407,382,398,383,394,386);
    greeting.bezierCurveTo(389,391,388,401,392,406);
    greeting.bezierCurveTo(395,409,399,410,402,409);
    greeting.bezierCurveTo(406,408,407,403,408,400);
    greeting.bezierCurveTo(408,399,406,398,405,400);
    greeting.bezierCurveTo(405,402,404,405,402,406);
    greeting.bezierCurveTo(399,408,395,406,393,403);
    greeting.bezierCurveTo(391,399,393,393,395,389);
    greeting.bezierCurveTo(397,385,405,384,406,389);
    greeting.bezierCurveTo(408,394,403,393,400,393);
    greeting.bezierCurveTo(397,393,394,393,391,393);
    greeting.bezierCurveTo(390,393,390,395,391,395);
    greeting.lineTo(391,395);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(417,361);
    greeting.bezierCurveTo(417,374,415,386,415,399);
    greeting.bezierCurveTo(414,404,415,412,422,409);
    greeting.bezierCurveTo(424,409,423,407,422,407);
    greeting.bezierCurveTo(415,409,417,397,417,394);
    greeting.bezierCurveTo(418,383,419,372,419,361);
    greeting.bezierCurveTo(419,360,416,360,417,361);
    greeting.lineTo(417,361);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(432,361);
    greeting.bezierCurveTo(433,374,431,386,430,399);
    greeting.bezierCurveTo(430,404,431,412,438,409);
    greeting.bezierCurveTo(440,409,439,407,438,407);
    greeting.bezierCurveTo(431,409,433,397,433,394);
    greeting.bezierCurveTo(434,383,435,372,435,361);
    greeting.bezierCurveTo(435,360,432,360,432,361);
    greeting.lineTo(432,361);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(458,388);
    greeting.bezierCurveTo(452,387,446,387,444,394);
    greeting.bezierCurveTo(442,400,442,407,448,409);
    greeting.bezierCurveTo(461,414,465,395,458,388);
    greeting.bezierCurveTo(457,387,456,389,457,390);
    greeting.bezierCurveTo(461,395,460,407,452,407);
    greeting.bezierCurveTo(446,407,445,401,446,396);
    greeting.bezierCurveTo(446,394,448,391,450,390);
    greeting.bezierCurveTo(453,389,456,390,458,390);
    greeting.bezierCurveTo(459,391,460,388,458,388);
    greeting.lineTo(458,388);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(482,411);
    greeting.bezierCurveTo(487,411,491,412,494,407);
    greeting.bezierCurveTo(497,401,495,392,495,386);
    greeting.bezierCurveTo(495,378,493,370,496,363);
    greeting.bezierCurveTo(498,359,505,359,507,363);
    greeting.bezierCurveTo(509,366,509,370,508,373);
    greeting.bezierCurveTo(508,375,510,376,510,374);
    greeting.bezierCurveTo(512,369,512,362,507,359);
    greeting.bezierCurveTo(501,356,495,359,493,364);
    greeting.bezierCurveTo(491,372,492,381,493,389);
    greeting.bezierCurveTo(493,394,494,399,493,404);
    greeting.bezierCurveTo(491,410,487,409,482,408);
    greeting.bezierCurveTo(481,408,481,411,482,411);
    greeting.lineTo(482,411);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(491,400);
    greeting.bezierCurveTo(491,400,496,400,499,399);
    greeting.bezierCurveTo(501,399,501,397,499,397);
    greeting.bezierCurveTo(496,397,494,397,491,397);
    greeting.bezierCurveTo(490,397,490,400,491,400);
    greeting.bezierCurveTo(491,400,490,400,491,400);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(506,388);
    greeting.bezierCurveTo(507,395,506,402,506,409);
    greeting.bezierCurveTo(506,410,508,410,508,409);
    greeting.bezierCurveTo(508,401,509,394,508,387);
    greeting.bezierCurveTo(508,385,506,386,506,388);
    greeting.lineTo(506,388);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(508,392);
    greeting.bezierCurveTo(511,390,515,389,517,391);
    greeting.bezierCurveTo(518,393,520,391,519,390);
    greeting.bezierCurveTo(515,386,510,388,506,390);
    greeting.bezierCurveTo(505,391,507,393,508,392);
    greeting.lineTo(508,392);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(537,388);
    greeting.bezierCurveTo(530,387,525,387,522,394);
    greeting.bezierCurveTo(520,400,521,407,527,409);
    greeting.bezierCurveTo(539,414,543,395,536,388);
    greeting.bezierCurveTo(535,387,534,389,535,390);
    greeting.bezierCurveTo(539,395,538,407,530,407);
    greeting.bezierCurveTo(524,407,523,401,524,396);
    greeting.bezierCurveTo(524,394,526,391,529,390);
    greeting.bezierCurveTo(531,389,534,390,536,390);
    greeting.bezierCurveTo(537,391,538,388,537,388);
    greeting.lineTo(537,388);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(544,393);
    greeting.bezierCurveTo(546,392,547,391,549,388);
    greeting.bezierCurveTo(548,388,547,388,546,388);
    greeting.bezierCurveTo(547,394,546,401,546,408);
    greeting.bezierCurveTo(546,410,548,410,548,408);
    greeting.bezierCurveTo(549,401,549,394,549,388);
    greeting.bezierCurveTo(549,386,547,386,547,387);
    greeting.bezierCurveTo(546,389,545,390,543,391);
    greeting.bezierCurveTo(542,391,542,393,544,393);
    greeting.lineTo(544,393);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(549,395);
    greeting.bezierCurveTo(549,393,555,385,557,390);
    greeting.bezierCurveTo(558,392,557,395,556,397);
    greeting.bezierCurveTo(556,399,555,401,555,404);
    greeting.bezierCurveTo(555,405,557,405,557,404);
    greeting.bezierCurveTo(558,400,559,396,559,392);
    greeting.bezierCurveTo(560,390,558,387,556,386);
    greeting.bezierCurveTo(552,385,547,391,546,395);
    greeting.bezierCurveTo(546,396,548,397,549,395);
    greeting.lineTo(549,395);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(559,394);
    greeting.bezierCurveTo(560,393,564,384,566,389);
    greeting.bezierCurveTo(567,391,566,392,566,393);
    greeting.bezierCurveTo(566,397,565,399,565,402);
    greeting.bezierCurveTo(564,407,566,411,571,409);
    greeting.bezierCurveTo(572,408,572,406,570,406);
    greeting.bezierCurveTo(566,408,567,404,567,401);
    greeting.bezierCurveTo(568,398,569,394,569,391);
    greeting.bezierCurveTo(569,388,567,386,565,386);
    greeting.bezierCurveTo(561,385,558,390,557,393);
    greeting.bezierCurveTo(557,395,559,395,559,394);
    greeting.lineTo(559,394);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(582,373);
    greeting.bezierCurveTo(585,373,587,371,589,368);
    greeting.bezierCurveTo(588,367,587,367,587,367);
    greeting.bezierCurveTo(587,374,585,382,585,389);
    greeting.bezierCurveTo(584,395,583,404,589,408);
    greeting.bezierCurveTo(591,410,595,409,598,408);
    greeting.bezierCurveTo(601,406,603,402,603,399);
    greeting.bezierCurveTo(605,394,605,389,605,385);
    greeting.bezierCurveTo(605,378,605,371,605,364);
    greeting.bezierCurveTo(605,362,602,362,602,364);
    greeting.bezierCurveTo(603,370,602,376,602,382);
    greeting.bezierCurveTo(602,386,602,389,602,393);
    greeting.bezierCurveTo(602,397,601,402,598,405);
    greeting.bezierCurveTo(596,407,591,408,589,405);
    greeting.bezierCurveTo(585,400,587,391,587,385);
    greeting.bezierCurveTo(588,379,590,373,589,367);
    greeting.bezierCurveTo(589,366,587,365,587,366);
    greeting.bezierCurveTo(586,369,585,370,582,370);
    greeting.bezierCurveTo(580,370,580,373,582,373);
    greeting.lineTo(582,373);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(602,395);
    greeting.bezierCurveTo(602,398,601,401,603,404);
    greeting.bezierCurveTo(604,406,607,406,609,404);
    greeting.bezierCurveTo(609,403,607,401,606,403);
    greeting.bezierCurveTo(605,404,604,402,604,401);
    greeting.bezierCurveTo(603,399,604,397,604,395);
    greeting.bezierCurveTo(604,394,602,394,602,395);
    greeting.lineTo(602,395);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(612,390);
    greeting.bezierCurveTo(612,396,611,401,612,407);
    greeting.bezierCurveTo(612,409,614,409,614,407);
    greeting.bezierCurveTo(614,402,614,390,620,389);
    greeting.bezierCurveTo(625,387,622,403,622,406);
    greeting.bezierCurveTo(622,407,624,407,624,406);
    greeting.bezierCurveTo(625,402,628,387,621,386);
    greeting.bezierCurveTo(612,386,612,401,612,408);
    greeting.bezierCurveTo(613,408,613,408,614,408);
    greeting.bezierCurveTo(614,402,614,396,615,390);
    greeting.bezierCurveTo(615,389,613,389,612,390);
    greeting.lineTo(612,390);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(630,407);
    greeting.bezierCurveTo(630,402,630,390,636,389);
    greeting.bezierCurveTo(641,387,638,403,638,406);
    greeting.bezierCurveTo(638,407,640,407,640,406);
    greeting.bezierCurveTo(641,402,644,386,637,386);
    greeting.bezierCurveTo(628,386,628,401,628,407);
    greeting.bezierCurveTo(628,409,630,409,630,407);
    greeting.lineTo(630,407);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(628,390);
    greeting.bezierCurveTo(628,396,627,401,628,407);
    greeting.bezierCurveTo(628,409,630,409,630,407);
    greeting.bezierCurveTo(630,401,630,396,631,390);
    greeting.bezierCurveTo(631,389,629,389,628,390);
    greeting.lineTo(628,390);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(646,378);
    greeting.bezierCurveTo(646,378,648,376,646,376);
    greeting.bezierCurveTo(644,376,644,378,646,378);
    greeting.bezierCurveTo(646,378,644,378,646,378);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(645,387);
    greeting.bezierCurveTo(646,394,646,401,646,408);
    greeting.bezierCurveTo(646,409,648,409,648,408);
    greeting.bezierCurveTo(648,401,648,394,648,387);
    greeting.bezierCurveTo(648,385,645,385,645,387);
    greeting.lineTo(645,387);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(652,390);
    greeting.bezierCurveTo(652,396,651,401,652,407);
    greeting.bezierCurveTo(652,409,654,409,654,407);
    greeting.bezierCurveTo(654,402,654,390,660,389);
    greeting.bezierCurveTo(665,387,662,403,662,406);
    greeting.bezierCurveTo(662,407,664,407,664,406);
    greeting.bezierCurveTo(665,402,668,387,661,386);
    greeting.bezierCurveTo(652,386,651,401,652,408);
    greeting.bezierCurveTo(653,408,653,408,654,408);
    greeting.bezierCurveTo(654,402,654,396,655,390);
    greeting.bezierCurveTo(655,389,652,389,652,390);
    greeting.lineTo(652,390);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(673,375);
    greeting.bezierCurveTo(671,382,671,389,671,397);
    greeting.bezierCurveTo(671,398,673,398,673,397);
    greeting.bezierCurveTo(673,390,674,383,676,376);
    greeting.bezierCurveTo(676,374,674,374,673,375);
    greeting.lineTo(673,375);
    greeting.fill();
    
    greeting.fillStyle="rgb(204,204,204)";
    greeting.beginPath();
    greeting.moveTo(674,409);
    greeting.bezierCurveTo(674,409,675,406,674,406);
    greeting.bezierCurveTo(672,406,672,409,674,409);
    greeting.bezierCurveTo(674,409,672,409,674,409);
    greeting.fill();
    
    var greetingDark = document.getElementById("greeting-dark").getContext("2d");
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(349,378);
    greetingDark.bezierCurveTo(357,374,363,367,365,358);
    greetingDark.bezierCurveTo(364,358,363,357,362,357);
    greetingDark.bezierCurveTo(360,374,359,391,358,408);
    greetingDark.bezierCurveTo(358,410,360,410,360,408);
    greetingDark.bezierCurveTo(362,391,362,375,365,358);
    greetingDark.bezierCurveTo(365,356,363,356,362,357);
    greetingDark.bezierCurveTo(361,366,355,372,348,376);
    greetingDark.bezierCurveTo(346,376,348,378,349,378);
    greetingDark.lineTo(349,378);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(382,356);
    greetingDark.bezierCurveTo(380,373,379,390,378,407);
    greetingDark.bezierCurveTo(378,409,380,409,380,407);
    greetingDark.bezierCurveTo(382,390,382,374,385,357);
    greetingDark.bezierCurveTo(385,355,383,355,382,356);
    greetingDark.lineTo(382,356);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(354,386);
    greetingDark.bezierCurveTo(364,386,375,387,385,385);
    greetingDark.bezierCurveTo(386,384,386,382,384,382);
    greetingDark.bezierCurveTo(374,385,364,384,354,384);
    greetingDark.bezierCurveTo(352,384,352,386,354,386);
    greetingDark.lineTo(354,386);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(391,395);
    greetingDark.bezierCurveTo(394,396,397,396,400,396);
    greetingDark.bezierCurveTo(402,396,405,396,407,395);
    greetingDark.bezierCurveTo(410,394,409,391,409,389);
    greetingDark.bezierCurveTo(407,382,398,383,394,386);
    greetingDark.bezierCurveTo(389,391,388,401,392,406);
    greetingDark.bezierCurveTo(395,409,399,410,402,409);
    greetingDark.bezierCurveTo(406,408,407,403,408,400);
    greetingDark.bezierCurveTo(408,399,406,398,405,400);
    greetingDark.bezierCurveTo(405,402,404,405,402,406);
    greetingDark.bezierCurveTo(399,408,395,406,393,403);
    greetingDark.bezierCurveTo(391,399,393,393,395,389);
    greetingDark.bezierCurveTo(397,385,405,384,406,389);
    greetingDark.bezierCurveTo(408,394,403,393,400,393);
    greetingDark.bezierCurveTo(397,393,394,393,391,393);
    greetingDark.bezierCurveTo(390,393,390,395,391,395);
    greetingDark.lineTo(391,395);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(417,361);
    greetingDark.bezierCurveTo(417,374,415,386,415,399);
    greetingDark.bezierCurveTo(414,404,415,412,422,409);
    greetingDark.bezierCurveTo(424,409,423,407,422,407);
    greetingDark.bezierCurveTo(415,409,417,397,417,394);
    greetingDark.bezierCurveTo(418,383,419,372,419,361);
    greetingDark.bezierCurveTo(419,360,416,360,417,361);
    greetingDark.lineTo(417,361);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(432,361);
    greetingDark.bezierCurveTo(433,374,431,386,430,399);
    greetingDark.bezierCurveTo(430,404,431,412,438,409);
    greetingDark.bezierCurveTo(440,409,439,407,438,407);
    greetingDark.bezierCurveTo(431,409,433,397,433,394);
    greetingDark.bezierCurveTo(434,383,435,372,435,361);
    greetingDark.bezierCurveTo(435,360,432,360,432,361);
    greetingDark.lineTo(432,361);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(458,388);
    greetingDark.bezierCurveTo(452,387,446,387,444,394);
    greetingDark.bezierCurveTo(442,400,442,407,448,409);
    greetingDark.bezierCurveTo(461,414,465,395,458,388);
    greetingDark.bezierCurveTo(457,387,456,389,457,390);
    greetingDark.bezierCurveTo(461,395,460,407,452,407);
    greetingDark.bezierCurveTo(446,407,445,401,446,396);
    greetingDark.bezierCurveTo(446,394,448,391,450,390);
    greetingDark.bezierCurveTo(453,389,456,390,458,390);
    greetingDark.bezierCurveTo(459,391,460,388,458,388);
    greetingDark.lineTo(458,388);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(482,411);
    greetingDark.bezierCurveTo(487,411,491,412,494,407);
    greetingDark.bezierCurveTo(497,401,495,392,495,386);
    greetingDark.bezierCurveTo(495,378,493,370,496,363);
    greetingDark.bezierCurveTo(498,359,505,359,507,363);
    greetingDark.bezierCurveTo(509,366,509,370,508,373);
    greetingDark.bezierCurveTo(508,375,510,376,510,374);
    greetingDark.bezierCurveTo(512,369,512,362,507,359);
    greetingDark.bezierCurveTo(501,356,495,359,493,364);
    greetingDark.bezierCurveTo(491,372,492,381,493,389);
    greetingDark.bezierCurveTo(493,394,494,399,493,404);
    greetingDark.bezierCurveTo(491,410,487,409,482,408);
    greetingDark.bezierCurveTo(481,408,481,411,482,411);
    greetingDark.lineTo(482,411);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(491,400);
    greetingDark.bezierCurveTo(491,400,496,400,499,399);
    greetingDark.bezierCurveTo(501,399,501,397,499,397);
    greetingDark.bezierCurveTo(496,397,494,397,491,397);
    greetingDark.bezierCurveTo(490,397,490,400,491,400);
    greetingDark.bezierCurveTo(491,400,490,400,491,400);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(506,388);
    greetingDark.bezierCurveTo(507,395,506,402,506,409);
    greetingDark.bezierCurveTo(506,410,508,410,508,409);
    greetingDark.bezierCurveTo(508,401,509,394,508,387);
    greetingDark.bezierCurveTo(508,385,506,386,506,388);
    greetingDark.lineTo(506,388);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(508,392);
    greetingDark.bezierCurveTo(511,390,515,389,517,391);
    greetingDark.bezierCurveTo(518,393,520,391,519,390);
    greetingDark.bezierCurveTo(515,386,510,388,506,390);
    greetingDark.bezierCurveTo(505,391,507,393,508,392);
    greetingDark.lineTo(508,392);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(537,388);
    greetingDark.bezierCurveTo(530,387,525,387,522,394);
    greetingDark.bezierCurveTo(520,400,521,407,527,409);
    greetingDark.bezierCurveTo(539,414,543,395,536,388);
    greetingDark.bezierCurveTo(535,387,534,389,535,390);
    greetingDark.bezierCurveTo(539,395,538,407,530,407);
    greetingDark.bezierCurveTo(524,407,523,401,524,396);
    greetingDark.bezierCurveTo(524,394,526,391,529,390);
    greetingDark.bezierCurveTo(531,389,534,390,536,390);
    greetingDark.bezierCurveTo(537,391,538,388,537,388);
    greetingDark.lineTo(537,388);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(544,393);
    greetingDark.bezierCurveTo(546,392,547,391,549,388);
    greetingDark.bezierCurveTo(548,388,547,388,546,388);
    greetingDark.bezierCurveTo(547,394,546,401,546,408);
    greetingDark.bezierCurveTo(546,410,548,410,548,408);
    greetingDark.bezierCurveTo(549,401,549,394,549,388);
    greetingDark.bezierCurveTo(549,386,547,386,547,387);
    greetingDark.bezierCurveTo(546,389,545,390,543,391);
    greetingDark.bezierCurveTo(542,391,542,393,544,393);
    greetingDark.lineTo(544,393);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(549,395);
    greetingDark.bezierCurveTo(549,393,555,385,557,390);
    greetingDark.bezierCurveTo(558,392,557,395,556,397);
    greetingDark.bezierCurveTo(556,399,555,401,555,404);
    greetingDark.bezierCurveTo(555,405,557,405,557,404);
    greetingDark.bezierCurveTo(558,400,559,396,559,392);
    greetingDark.bezierCurveTo(560,390,558,387,556,386);
    greetingDark.bezierCurveTo(552,385,547,391,546,395);
    greetingDark.bezierCurveTo(546,396,548,397,549,395);
    greetingDark.lineTo(549,395);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(559,394);
    greetingDark.bezierCurveTo(560,393,564,384,566,389);
    greetingDark.bezierCurveTo(567,391,566,392,566,393);
    greetingDark.bezierCurveTo(566,397,565,399,565,402);
    greetingDark.bezierCurveTo(564,407,566,411,571,409);
    greetingDark.bezierCurveTo(572,408,572,406,570,406);
    greetingDark.bezierCurveTo(566,408,567,404,567,401);
    greetingDark.bezierCurveTo(568,398,569,394,569,391);
    greetingDark.bezierCurveTo(569,388,567,386,565,386);
    greetingDark.bezierCurveTo(561,385,558,390,557,393);
    greetingDark.bezierCurveTo(557,395,559,395,559,394);
    greetingDark.lineTo(559,394);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(582,373);
    greetingDark.bezierCurveTo(585,373,587,371,589,368);
    greetingDark.bezierCurveTo(588,367,587,367,587,367);
    greetingDark.bezierCurveTo(587,374,585,382,585,389);
    greetingDark.bezierCurveTo(584,395,583,404,589,408);
    greetingDark.bezierCurveTo(591,410,595,409,598,408);
    greetingDark.bezierCurveTo(601,406,603,402,603,399);
    greetingDark.bezierCurveTo(605,394,605,389,605,385);
    greetingDark.bezierCurveTo(605,378,605,371,605,364);
    greetingDark.bezierCurveTo(605,362,602,362,602,364);
    greetingDark.bezierCurveTo(603,370,602,376,602,382);
    greetingDark.bezierCurveTo(602,386,602,389,602,393);
    greetingDark.bezierCurveTo(602,397,601,402,598,405);
    greetingDark.bezierCurveTo(596,407,591,408,589,405);
    greetingDark.bezierCurveTo(585,400,587,391,587,385);
    greetingDark.bezierCurveTo(588,379,590,373,589,367);
    greetingDark.bezierCurveTo(589,366,587,365,587,366);
    greetingDark.bezierCurveTo(586,369,585,370,582,370);
    greetingDark.bezierCurveTo(580,370,580,373,582,373);
    greetingDark.lineTo(582,373);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(602,395);
    greetingDark.bezierCurveTo(602,398,601,401,603,404);
    greetingDark.bezierCurveTo(604,406,607,406,609,404);
    greetingDark.bezierCurveTo(609,403,607,401,606,403);
    greetingDark.bezierCurveTo(605,404,604,402,604,401);
    greetingDark.bezierCurveTo(603,399,604,397,604,395);
    greetingDark.bezierCurveTo(604,394,602,394,602,395);
    greetingDark.lineTo(602,395);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(612,390);
    greetingDark.bezierCurveTo(612,396,611,401,612,407);
    greetingDark.bezierCurveTo(612,409,614,409,614,407);
    greetingDark.bezierCurveTo(614,402,614,390,620,389);
    greetingDark.bezierCurveTo(625,387,622,403,622,406);
    greetingDark.bezierCurveTo(622,407,624,407,624,406);
    greetingDark.bezierCurveTo(625,402,628,387,621,386);
    greetingDark.bezierCurveTo(612,386,612,401,612,408);
    greetingDark.bezierCurveTo(613,408,613,408,614,408);
    greetingDark.bezierCurveTo(614,402,614,396,615,390);
    greetingDark.bezierCurveTo(615,389,613,389,612,390);
    greetingDark.lineTo(612,390);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(630,407);
    greetingDark.bezierCurveTo(630,402,630,390,636,389);
    greetingDark.bezierCurveTo(641,387,638,403,638,406);
    greetingDark.bezierCurveTo(638,407,640,407,640,406);
    greetingDark.bezierCurveTo(641,402,644,386,637,386);
    greetingDark.bezierCurveTo(628,386,628,401,628,407);
    greetingDark.bezierCurveTo(628,409,630,409,630,407);
    greetingDark.lineTo(630,407);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(628,390);
    greetingDark.bezierCurveTo(628,396,627,401,628,407);
    greetingDark.bezierCurveTo(628,409,630,409,630,407);
    greetingDark.bezierCurveTo(630,401,630,396,631,390);
    greetingDark.bezierCurveTo(631,389,629,389,628,390);
    greetingDark.lineTo(628,390);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(646,378);
    greetingDark.bezierCurveTo(646,378,648,376,646,376);
    greetingDark.bezierCurveTo(644,376,644,378,646,378);
    greetingDark.bezierCurveTo(646,378,644,378,646,378);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(645,387);
    greetingDark.bezierCurveTo(646,394,646,401,646,408);
    greetingDark.bezierCurveTo(646,409,648,409,648,408);
    greetingDark.bezierCurveTo(648,401,648,394,648,387);
    greetingDark.bezierCurveTo(648,385,645,385,645,387);
    greetingDark.lineTo(645,387);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(652,390);
    greetingDark.bezierCurveTo(652,396,651,401,652,407);
    greetingDark.bezierCurveTo(652,409,654,409,654,407);
    greetingDark.bezierCurveTo(654,402,654,390,660,389);
    greetingDark.bezierCurveTo(665,387,662,403,662,406);
    greetingDark.bezierCurveTo(662,407,664,407,664,406);
    greetingDark.bezierCurveTo(665,402,668,387,661,386);
    greetingDark.bezierCurveTo(652,386,651,401,652,408);
    greetingDark.bezierCurveTo(653,408,653,408,654,408);
    greetingDark.bezierCurveTo(654,402,654,396,655,390);
    greetingDark.bezierCurveTo(655,389,652,389,652,390);
    greetingDark.lineTo(652,390);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(673,375);
    greetingDark.bezierCurveTo(671,382,671,389,671,397);
    greetingDark.bezierCurveTo(671,398,673,398,673,397);
    greetingDark.bezierCurveTo(673,390,674,383,676,376);
    greetingDark.bezierCurveTo(676,374,674,374,673,375);
    greetingDark.lineTo(673,375);
    greetingDark.fill();
    
    greetingDark.fillStyle="rgb(204,204,204)";
    greetingDark.beginPath();
    greetingDark.moveTo(674,409);
    greetingDark.bezierCurveTo(674,409,675,406,674,406);
    greetingDark.bezierCurveTo(672,406,672,409,674,409);
    greetingDark.bezierCurveTo(674,409,672,409,674,409);
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