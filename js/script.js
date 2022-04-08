// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the Surface Area and Volume of the cylinder.
 */

function calculate () {
  // Variables
  let radius = parseFloat(document.getElementById('radius').value); // Gets user input and makes it a float
  let height = parseFloat(document.getElementById('height').value); // Gets user input and makes it a float
  let units = document.getElementById('units').value;

  let volume = Math.PI * (radius ** 2) * height; // Calculates Volume
	
  let bases = 2 * Math.PI * (radius ** 2); // // Calculates Surface area of the bases
  let lateralSegment = 2 * Math.PI * radius * height; // Calculates Surface area of the Cylindrical Segment
  let surfaceArea = lateralSegment + bases;

  // output
  document.getElementById('surface-area').innerHTML = 'The surface area of the cylinder is ' + surfaceArea.toFixed(2) + units + '²';
	document.getElementById('lateral-segment').innerHTML = 'The volume of the cylinder ' + volume.toFixed(2) + units + '³';
}

