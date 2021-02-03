let cartmanBtn = document.querySelector('#cartman');
let kennyBtn = document.querySelector('#kenny');
let stanBtn = document.querySelector('#stan');
let kayleBtn = document.querySelector('#kayle');
let buttersBtn = document.querySelector('#butters');
let imgToChange = document.querySelector(`#img-to-change`);
let btnToChange= document.querySelector("#name");
cartmanBtn.addEventListener('click',function(){
   btnToChange.innerHTML = 'KILL CARTMAN';
   imgToChange.setAttribute('src','img/cartman.gif')
})
kennyBtn.addEventListener('click',function(){
    btnToChange.innerHTML = 'KILL KENNY';
    imgToChange.setAttribute('src','img/kenny.jpg')
 })
 stanBtn.addEventListener('click',function(){
    btnToChange.innerHTML = 'KILL STAN';
    imgToChange.setAttribute('src','img/stan.png')
 })
 kayleBtn.addEventListener('click',function(){
    btnToChange.innerHTML = 'KILL KAYLE';
    imgToChange.setAttribute('src','img/Kyle-broflovski.png')
 })
 buttersBtn.addEventListener('click',function(){
    btnToChange.innerHTML = 'KILL BUTTERS';
    imgToChange.setAttribute('src','img/ButtersStotch.png')
 })