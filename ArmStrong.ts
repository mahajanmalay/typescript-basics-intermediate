// 4. Write a typescript program which contains one arrow function named as ChkArmstrong. That function accepts one numbers and check whether number is Armstrong number or not.
// Input:153 // Output:It is Armstrong number
var ret:boolean;
var ChkArmstrong = (num:number):boolean =>
{
    var Temp:number=0; var Cnt:number=0; var Mult:number=1; var DigCnt:number=0; var Digit:number=0; var sum:number=0;
    Temp=num;
    while(num!=0)
    {
        DigCnt++;
        num=num/10;
        num=Math.floor(num);
    }
    
    num=Temp;
    while(num!=0)
    {
        Mult=1;
        Digit=num%10;
        
        for(Cnt=0;Cnt<DigCnt;Cnt++)
        {
            Mult=Mult*Digit;
        }
        sum=sum+Mult;
        num=num/10;
        num=Math.floor(num);
    }   
    if(sum==Temp)
    {
        return true;
    }
    else
    {
        return false;
    }
}
ret = ChkArmstrong(153);
if(ret)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not an Armstrong number");
}