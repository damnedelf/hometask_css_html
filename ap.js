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
let menuClickHandler = function(button, buttonName, pathToImage, pathToText){
    button.addEventListener("click",function(){
        btnToChange.innerHTML = buttonName;
        imgToChange.setAttribute(`src`, pathToImage);
      
    setTimeout(()=>  imgToChange.setAttribute(`src`, 'img/enemy_uknown.jpg') ,1000);
    setTimeout(()=>imgToChange.setAttribute('src', pathToImage),2000);
    fetch(pathToText)
    .then(response => response.text())
    .then(text => textToChange.innerHTML=text)
    });
     
 
    

}
//execute handlers
menuClickHandler(cartmanBtn, 'KILL Cartman','img/cartman.gif' ,`text/cartman.txt`);
menuClickHandler(kennyBtn, 'KILL Kenny','img/kenny.jpg',`text/kenny.txt` );
menuClickHandler(stanBtn, 'KILL Stan','img/stan.png',`text/stan.txt` );
menuClickHandler(kayleBtn, 'KILL Kayle','img/Kyle-broflovski.png',`text/kyle.txt` );
menuClickHandler(buttersBtn, 'KILL Butters','img/ButtersStotch.png' ,`text/butters.txt`);


