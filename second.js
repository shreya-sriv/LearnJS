//to display current date
function currentDate(){
    const now=new Date();
    const date=now.getDate();
    const month=now.getDate();
    const year=now.getFullYear();
    const today=`${date}/${month}/${year}`;
    console.log(`${today}`);
}
currentDate();