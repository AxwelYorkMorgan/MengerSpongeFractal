function Box(x, y, z, _radius) {
    this.position = new createVector(x, y, z);
    this.radius = _radius;

    this.generate = function () {
        var boxes = [];
        for (var x = -1; x < 2; x++) {
            for (var y = -1; y < 2; y++) {
                for (var z = -1; z < 2; z++) {
                    var sum = abs(x) + abs(y) + abs(z);
                    var newRadius = this.radius / 3;
                    if (sum > 1) {
                        var selfBox = new Box(this.position.x + x * newRadius, this.position.y + y * newRadius, this.position.z + z * newRadius, newRadius);
                        boxes.push(selfBox);
                    }
                }
            }
        }
        return boxes;
    }

    this.show = function () {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        box(this.radius);
        pop();
    }
}