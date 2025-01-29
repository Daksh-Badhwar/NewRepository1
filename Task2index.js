const fruits= document.getElementsByClassName("fruit");
if (fruits.length>=3)
fruits[2].style.backgroundColor="yellow";
for (let i=0;i<fruits.length;i++)
{
    fruits[i].style.fontWeight="bold";
}