function capital(str){
    let words=str.split(" ");
    for(let i=0;i<words.length;i++)
    {
        words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    
    console.log(words.join(" "));
}
capital("hi shreya this side.");