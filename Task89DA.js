const form = document.querySelector("form");
const fruits= document.querySelector('.fruits');


function createEditButton()
{
const edit= document.createElement("button");
const editText= document.createTextNode("Edit");
edit.className='edit-btn';
edit.appendChild(editText);

return edit;
}//creating a single "Edit" button and trying to append it to multiple list items (li), but since a DOM element can only be added once


//fetch value or name of fruit when clicked
form.addEventListener('submit',function(event){
    event.preventDefault();

//when pressed add li and fruits list get added
//control over add
const fruitToAdd= document.querySelector('#fruit-to-add');
//process to cretae li
const newLi= document.createElement("li");
const newLiText= document.createTextNode(fruitToAdd.value);
newLi.appendChild(newLiText);
//banana added
//now part1 class="fruit"
//now part 2 <button class="delete-btn"><x>
newLi.className='fruit'
const deleteBtn= document.createElement("button");
const deleteBtnText=document.createTextNode ("x");
deleteBtn.appendChild(deleteBtnText);
deleteBtn.className='delete-btn';
newLi.appendChild(deleteBtn);
fruits.appendChild(newLi);

//const newLi= document.createElement("li");
//newLi.innerHTML=fruitToAdd.value+<button class="delete-btn">x</button>;


const fruitItems = document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++) {
    fruitItems[i].appendChild(createEditButton());
};

    }
)
//Add Edit button

//Delete Functionality
fruits.addEventListener('click',function (event){
    if (event.target.classList.contains('delete-btn')){
       // console.log(event);//key-values
       // console.log(event.target);//<button class="delete-btn">
       // console.log (event.target.parentElement);//<li class="fruit"
    const fruitToDelete= event.target.parentElement;
    fruits.removeChild(fruitToDelete);}})



    //Filter functionality
    const filter=document.getElementById("filter");
    filter.addEventListener("keyup",function(event){

//grab text
const textEntered= event.target.value.toLowerCase();
const fruitItems= document.getElementsByClassName("fruit");
for (let i=0;i<fruitItems.length;i++)
{
    const currentFruitText= fruitItems[i].firstChild.textContent.toLowerCase();
    if (currentFruitText.indexOf(textEntered)==-1)
        fruitItems[i].style.display="none";
    else
    fruitItems[i].style.display="flex";
}



    })





