console.log ('Lesson day 21');

const myFavouriteColors= ['red', 'green', 'blue', 'yellow', 'orange'];
let contentOneHeader = document.createElement('h2');
contentOneHeader.textContent = 'My Favourite Colors';

let contentOne = document.getElementById('contentOne');
contentOne.appendChild(contentOneHeader);
let ulTag = document.createElement('ul');

for (let i =0; i < myFavouriteColors.length; i++ ){
    let liTag = document.createElement('li');
    liTag.textContent = myFavouriteColors[i];
    ulTag.appendChild(liTag);
}
contentOne.appendChild(ulTag);

function changeColor(element){
    console.log(element);
    element.target.style.backgroundColor = element.target.textContent;
}