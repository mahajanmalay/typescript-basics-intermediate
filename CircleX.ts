// Assignment 3 Q3
class Circle
{
    Radius:number;
    PI:number = 3.14;
    constructor(a:number)
    {
        this.Radius = a;
    }
    Area()
    {
        var ans:number;
        ans = this.PI*this.Radius*this.Radius;
        return ans;
    }
}
class CircleX extends Circle
{
    Circumference()
    {
        var ans:number;
        ans = 2*this.PI*this.Radius;
        return ans;
    }
}
var ret:number;
var obj1 = new CircleX(5);
ret = obj1.Area();
console.log("Area of circle is "+ret);
ret = obj1.Circumference();
console.log("Circumference of circle is "+ret);

var obj2 = new CircleX(10);
ret = obj2.Area();
console.log("Area of circle is "+ret);
ret = obj2.Circumference();
console.log("Circumference of circle is "+ret);