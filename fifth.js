//to check if first jan is sunday
function JanuarySunday(){
    for(let year=2020;year<=2030;year++)
    {
        const date=new Date(year,0,1);
        if(date.getDay()==0)
        {
            console.log(`1st January ${year} is Sunday`);
        }
    }
}
JanuarySunday();