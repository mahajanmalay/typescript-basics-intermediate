// Assignment 3 Q2
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
var obj1 = new Circle(5);
var ret:number;
ret = obj1.Area();
console.log("Area of circle is "+ret);

var obj2 = new Circle(10);
ret = obj2.Area();
console.log("Area of circle is "+ret);
