var sphere = function(radius){
    return 4/3*Math.pow(radius,3)
}

var cube = function(length){
    return Math.pow(length,3)
}

var calcVolume = {
    sphere : sphere,
    cube : cube
}

module.exports = calcVolume