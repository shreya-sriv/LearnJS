//even odd place sum
function EvenOdd(num){
    let even=0;
    let odd=0;
    for(let i=0;i<num.length;i++)
    {
        let digit=parseInt(num[i],10);
        if(i%2==0)
        {
            even+=digit;
        }
        else{
            odd+=digit;
        }
    }
    console.log(`Even place sum is ${even}`);
    console.log(`Odd place sum is ${odd}`);
}
EvenOdd("123456789");