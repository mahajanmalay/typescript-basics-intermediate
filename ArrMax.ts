// Write a typescript program which contains one function named as Maximum. That function accepts
// array of numbers and returns the largest number from array.
//input 23 56 45 77 32 89 6 29
// Output:// Maximum number is 89

var arr:number[]=[23,56,45,77,32,89,6,29];

function Maximum():number{
    var max:number = 0;
    var i:number=0;

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}

var ret:number = Maximum();
console.log("Maximum number is "+ret);

