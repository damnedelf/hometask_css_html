//buttons ==> got caught from DOM
let cartmanBtn = document.querySelector('#cartman');
let kennyBtn = document.querySelector('#kenny');
let stanBtn = document.querySelector('#stan');
let kayleBtn = document.querySelector('#kayle');
let buttersBtn = document.querySelector('#butters');
let imgToChange = document.querySelector(`#img-to-change`);
let btnToChange= document.querySelector("#name");
let textToChange = document.querySelector('.description')

//button on click handler
let menuClickHandler = function(button,  pathToImage, pathToText){
    button.addEventListener("click",function(){
        btnToChange.innerHTML = button.dataset.name;
        imgToChange.setAttribute(`src`, pathToImage);
      
    setTimeout(()=>  imgToChange.setAttribute(`src`, 'img/enemy_uknown.jpg') ,1000);
    setTimeout(()=>imgToChange.setAttribute('src', pathToImage),2000);
    fetch(pathToText)
    .then(response => response.text())
    .then(text => textToChange.innerHTML=text)
    });
     
 
    

}
//execute handlers
menuClickHandler(cartmanBtn, 'img/cartman.gif' ,`text/cartman.txt`);
menuClickHandler(kennyBtn, 'img/kenny.jpg',`text/kenny.txt` );
menuClickHandler(stanBtn, 'img/stan.png',`text/stan.txt` );
menuClickHandler(kayleBtn, 'img/Kyle-broflovski.png',`text/kyle.txt` );
menuClickHandler(buttersBtn, 'img/ButtersStotch.png' ,`text/butters.txt
`);


