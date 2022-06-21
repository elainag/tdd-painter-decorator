const Paint = function (volume, empty = true) {
    this.volume = volume;
    this.empty = empty;
};

Paint.prototype.removeVolume = function (amount) {
    this.volume -= amount
}

module.exports = Paint