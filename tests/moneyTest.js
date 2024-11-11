import fromatCurrency from "../scripts/utils/money.js";

if (fromatCurrency(2095)  === '20.95')
{
console.log("passsed");
}

else
{
    console.log("failed");
}


if (fromatCurrency(0)  === '0.00')
    {
    console.log("passsed");
    }
    
    else
    {
        console.log("failed");
    }

if(fromatCurrency(2000.5)=== '20.005')
{
    console.log("passed");
}
else
{
    console.log("failed");
}