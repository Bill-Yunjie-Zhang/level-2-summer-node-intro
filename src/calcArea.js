// var calcArea = {
//     triangle : function(base, height){
//         return base * (height / 2)
//     },
//     rectangle : function(width, length){
//         return width * length
//     },
//     circle : function(radius){
//         return 3.14 * radius * radius
//     }
// }

var triangle = function(base, height){
    return base * (height / 2)
}
var rectangle = function(width, length){
    return width * length
}
var circle = function(radius){
    // return 3.14 * radius * radius
    return 3.14 * Math.pow(radius, 2)
}
var calcArea = {
    triangle : triangle,
    rectangle : rectangle,
    circle : circle,
}

// var calcArea = function(width, length){
//     var area = width * length
//     return area
// }

module.exports = calcArea