// program to display date and time
function display(){
    const date= new Date();
    const days=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day=days[date.getDay()];
    const hours=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();
    const time=`${hours}:${min}:${sec}`
    console .log(`day : ${day}`);
    console.log(`Time : ${time}`);

}
display();