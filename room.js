const Room = function (area, painted = false) {
    this.area = area;
    this.painted = painted;
}


Room.prototype.canPaint = function () {
    return this.painted = true;
}

module.exports = Room;