// 4. Write a typescript program which contains one function named as ChkPrime. That function should
// accept one number and it should return true if the given number is prime and otherwise return false.
// Input:11 // Output: It is prime number

var Ret1:boolean;
function ChkPrime(value:number):boolean
{
    if(value==0 || value==1)
    {
        return false;
    }
    var i:number;
    for(i=2;i<value;i++)
    {
        if(value%i==0)
        {
            return false;
        }
        else
        return true;
    }
}

Ret1 = ChkPrime(11);
if(Ret1)
{
    console.log("It is prime number");
}
else
console.log("It is not a prime number");