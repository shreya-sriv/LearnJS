//validate phn number
function phone(num){
    let number=parseInt(num,10);
    return num.length===10 && !isNaN(number) && num[0]!='0';
}
console.log(phone("1256789000"));
console.log(phone("6387520014"));
console.log(phone("0123456789"));