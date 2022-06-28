// 5. Write a typescript program which contains one function named as ChkString. That function acceptone string and check whether that string contains "Marvellous" word or not
// Input  Pune Kothrud Marvellous Infosystems
// Output: String contains Marvellous in it.

var str1:string = "Pune Kothrud Marvellous Infosystems";
var str2:string = "Marvellous";

function ChkString(s1:string,s2:string):boolean
{
    if(s1.indexOf(s2) !== -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var ret:boolean;
ret = ChkString(str1,str2);

if(ret)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contains Marvellous in it");
}