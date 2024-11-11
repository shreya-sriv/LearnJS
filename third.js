//area and perimeter of rectangle
function rectangle(){
    const height=parseFloat(prompt("enter height of rectangle"));
    const width=parseFloat(prompt("enter width of rectangle"));
    const area=height*width;
    const perimeter=2*(width+height);
    console.log(`Area is ${area}`);
    console.log(`perimeter is ${perimeter}`);
}
rectangle();