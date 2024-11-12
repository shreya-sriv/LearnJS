// characetr occurence
function CharOccur(str)
{
    const charMap={};
    let newStr="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=" ")
        {
            newStr+=str[i];
        }
    }
    str=newStr.toUpperCase();
    for(let i=0;i<str.length;i++)
    {
        const char=str[i];
        charMap[char]=(charMap[char]|| 0)+1;
    }
    for(let char in charMap)
    {
        console.log(`${char} ${charMap[char]}`);
    }

}
CharOccur("shreya srivastava");