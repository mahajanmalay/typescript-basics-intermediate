// 2. Write a typescript program which contains one function named as Area. That function should
// calculate area of circle. Accept value of radius from user and return its area. Default value of PI
// should be 3.14 if it is not provided by the caller.
// Input:5   // Output: Area of circle is 78.5

const PI:number = 3.14;
var Ret2:number;
function Area(value:number):number
{
    var ans:number;
    ans = PI*value*value;
    return ans;
}
Ret2 = Area(5);
console.log("Area of circle is "+Ret2);