const a= document.querySelector("#basket-heading");
a.style.color="brown";



const b=document.querySelectorAll(".fruit:nth-child(even)");
for (let i=0;i<b.length;i++)
{
    b[i].style.backgroundColor="red";
    b[i].style.color="white";
}