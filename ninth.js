//validate email
function Email(mail){
    let index=mail.indexOf("@");
    const validate=[".com",".org",".edu"];
    if(index>0)
    {
        const ending=mail.slice(-4);
        return validate.includes(ending); 
    }
    return false;
}
console.log(Email("abc@gmail.com"));
console.log(Email("@abc.com"));
console.log(Email("stfv.com"));