/*1. Inside the first Div, after the main heading add a 
sub-heading (h3 tag) "Buy high quality organic fruits online".

2. Make the sub-heading text italic.

3. Inside the second Div, before the unordered list add 
a paragraph tag showing "Total fruits: 4".

4. On this paragraph tag set an id of "fruits-total".*/
const mainHeading = document.querySelector('#header');
const subheading = document.createElement("h3");
subheading.textContent= "Buy high quality organic fruits online";
subheading.style.fontStyle="italic";
mainHeading.appendChild(subheading);

const seconddiv = document.querySelector('#basket-heading').parentNode; //second div? is parent of basket heading id
const para= document.createElement("p");
para.id="fruits-total";
para.textContent = 'Total fruits: 4';
seconddiv.insertBefore(para,seconddiv.querySelector('ul')); //para to insert //before ul
