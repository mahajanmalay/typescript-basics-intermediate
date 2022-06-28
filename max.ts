//1) Write a typescript program which contains one function named as Maximum. That function accepts
// three parameters and it should returns largest value from three input parameters
// Input:      // Output
// 23 89 6    // Maximum number is 89

var Ret:number;
function Maximum(no1:number,no2:number,no3:number):number
{
    if(no1>no2 && no1> no3)
    {
        return no1;
    }
    else if(no2>no1 && no2>no3)
    {
        return no2;
    }
    else 
    {
        return no3;
    }
}
Ret = Maximum(23,89,6);
console.log("Maximum number is "+Ret);