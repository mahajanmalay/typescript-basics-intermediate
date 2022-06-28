// 5. Write a typescript program which contains one function named as Fibonacci. That function accept
// one number from user and print Fibonacci series till that number.
// Input: 21
// Output: 1 1 2 3 5 8 13 21 

function Fibonacci(value:number):void
{
    var fab:number[]=[1,1];
    var i:number;
    for(i=2;fab[i-1]!=value;i++)
    {
        fab[i]=fab[i-2]+fab[i-1];
    }
    console.log(fab);
    
}
Fibonacci(21);
