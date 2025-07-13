console.log("Circle:")     //Formula: A = π*r**2 where π=22/7, r = radius of the circle
radius = 7
areaOfCircle = (22 / 7) * ((radius) ** 2)
console.log("Area of circle = " + areaOfCircle + " square units")

console.log("Square:")     //Formula: A=a**2 where a = sides of the square (or) A=side*side sq. units 
side = 8
areaOfSquare = side * side
console.log("Area of Square = " + areaOfSquare + " square units")

console.log("Rectangle:") //Formula: A = l * b where l=Length of rectangle, b=Breadth of rectangle
length = 9
breadth = 6
areaOfRectangle = length * breadth
console.log("Area of Rectangle = " + areaOfRectangle + " square units")

console.log("Triangle: ") //Formula: A =(1/2)*(b*h) where b = base, h = height
base = 4
height = 7
areaOfTriangle = (1 / 2) * (base * height)
console.log("Area of Triangle = " + areaOfTriangle + " square units")

console.log("Trapezoid: ") //Formula: A=(1/2)*[(a+b)*h] where a =base 1, b = base 2, h = vertical height
a = 6
b = 7
h = 8
areaOfTrapezoid = (1 / 2) * ((a + b) * h)
console.log("Area of Trapezoid = " + areaOfTrapezoid + " square units")

console.log("Ellipse: ") //Formula: A=π*a*b where π=22/7, a = radius of the major axis, b = radius of the minor axis
radiusMajorAxis = 7
radiusMinorAxis = 5
areaOfEllipse = Math.PI * (radiusMajorAxis * radiusMinorAxis)
console.log("Area of Ellipse = " + areaOfEllipse.toFixed() + " square units")

























