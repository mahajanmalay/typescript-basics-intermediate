// 3. Write a typescript program which contains one function named as Maximum. That function accepts
// array of numbers and returns the second largest number from array.
// Input .// 23 89 6 29 56 45 77 32
// Output:// Second Maximum number is 77

var arr:number[]=[23,89,6,29,56,45,77,32];

function Maximum():number
{
    var max:number=0;
    var SecondMax:number=0;
    var i:number;

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
        if(arr[i]>SecondMax && arr[i]<max)
        {
            SecondMax=arr[i];
        }
    }
    return SecondMax;
}

var ret:number = Maximum();
console.log("Second MAximum number is "+ret);