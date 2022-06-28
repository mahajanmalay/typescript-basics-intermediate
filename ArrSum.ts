// 2. Write a typescript program which contains one function named as Summation. That function
//  accepts array of numbers and returns the summation of each number from array.
// Input: 23 6 7 4 5 7
// Output:Addition is 52

var arr:number[]=[23,6,7,4,5,7];

function Summation():number{
    var sum:number = 0;
    var i:number=0;

    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}

var ret:number = Summation();
console.log("Addition is "+ret);