//rotate string
function rotate(input){
    const rotated=input.charAt(input.length-1)+input.slice(0,-1);
    console.log(rotated);
    alert(rotated);
}
const inp=prompt("enter string");
rotate(inp);