var calcArea = require('./calcArea')
var calcVolume = require('./calcVolume')

//this is calc area and calc volume combined

var sphere = calcVolume.sphere
var cube = calcVolume.cube
var circle = calcArea.circle
var rectangle = calcArea.rectangle
var triangle = calcArea.triangle
var geometry = {
    sphere : sphere,
    cube : cube,
    circle : circle,
    rectangle : rectangle,
    triangle : triangle,
}
module.exports = geometry