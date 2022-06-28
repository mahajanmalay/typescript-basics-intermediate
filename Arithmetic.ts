// Assignment 3 Q1

class Arithmetic
{
    Number1:number;
    Number2:number;

    constructor(a:number,b:number)
    {
        this.Number1=a;
        this.Number2=b;
    }

    Addition()
    {
        var ans:number = 0;
        ans = this.Number1+this.Number2;
        return ans;
    }

    Substraction()
    {
        var ans:number = 0;
        ans = this.Number1-this.Number2;
        return ans;
    }

    Multiplication()
    {
        var ans:number = 0;
        ans = this.Number1*this.Number2;
        return ans;
    }

    Divition()
    {
        var ans:number = 0;
        ans = this.Number1/this.Number2;
        return ans;
    }

}

var obj1 = new Arithmetic(110,11);
var obj2 = new Arithmetic(20,2);
var ret:number;
ret = obj1.Addition();
console.log("Addition is "+ret);
ret = obj1.Substraction();
console.log("Substraction is "+ret);
ret = obj1.Multiplication();
console.log("Multiplication is "+ret);
ret = obj1.Divition();
console.log("Division is "+ret);

ret = obj2.Addition();
console.log("Addition is "+ret);
ret = obj2.Substraction();
console.log("Substraction is "+ret);
ret = obj2.Multiplication();
console.log("Multiplication is "+ret);
ret = obj2.Divition();
console.log("Division is "+ret);