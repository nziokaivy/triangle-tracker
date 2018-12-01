function asignTriangleType (side) {
var sides = []
sides.push(document.getElementsById("A").value);
sides.push(document.getElementsById("B").value);
sides.push(document.getElementsById("C").value);

var one = parseInt(document.getElementById("A"))sides[0]
var two = parseInt(document.getElementById("B"))sides[1]
var three = parseInt(document.getElementById("C"))sides[2]

if (one !== two && one !== three && two !== three) {
  output.innerHTML = ("This is a scalene triangle.");
}
else if (one === two && one !== three || one !== two && one === three || two === three && two !== one) {
  output.innerHTML = ("This is an isosceles triangle.");
}
else if (one === two && two === three) {
 output.innerHTML = ("This is an equilateral triangle.");
}
else (one >= two+three && two >= one + three && three >= two + one) {
  output.innerHTML = ("This is NOT a triangle.");
}
}




}
