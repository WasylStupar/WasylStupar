function createTriangular(a = 3, b = 4, c = 5) {
  return {
    getDimensions: function() {
      return { a, b, c };
    }
  };
}

function createPiMultiplier(number) {
  return function() {
    return Math.PI * number;
  };
}

function createPainter(color) {
  return function(obj) {
    const type = obj.type ? obj.type : "No 'type' property occurred!";
    console.log(`${color}, type: ${type}`);
  };
}

const defaultTriangular = createTriangular();
const customTriangular1 = createTriangular(2, 4, 6);
const multiplyPiBy2 = createPiMultiplier(2)();
const multiplyPiBy2Over3 = createPiMultiplier(2 / 3)();
const dividePiBy2 = createPiMultiplier(0.5)();
const PaintBlue = createPainter("blue");
const PaintRed = createPainter("red");
const PaintYellow = createPainter("yellow");

console.log(defaultTriangular.getDimensions());
console.log(customTriangular1.getDimensions());
console.log(multiplyPiBy2);
console.log(multiplyPiBy2Over3);
console.log(dividePiBy2);

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true, loadCapacity: 2400 };

PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);
PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);
PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);