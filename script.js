let addplayerbtn = document.getElementById("addplayerbtn");
let continuebtn = document.getElementById("continuebtn");
let players = [];
let topicspage = document.getElementById("gamesettings")
let navbar = document.getElementById("navbar")
let inputshtml = document.getElementById("inputs")
let bottomnav = document.getElementById("bottomnav")
let width = window.innerWidth;
let backbtn = document.getElementById("backbtn")



addplayerbtn.addEventListener("click" , function(){

    let newdiv = document.createElement("div");
    newdiv.classList.add("newdivs");
    let newinput = document.createElement("input");
    newinput.placeholder = "Enter new player's name";
    newdiv.appendChild(newinput)
    let newbtn = document.createElement("button")
    newbtn.classList.add("deletebtns")
    newbtn.textContent = "X";
    newbtn.style.color = "red";

    newdiv.appendChild(newbtn)
    newbtn.addEventListener("click" , function(){
    newbtn.parentElement.remove();


})


    document.getElementById("inputs").appendChild(newdiv)
});


continuebtn.addEventListener("click" , function(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function(input){
        players.push(input.value)
        console.log(players);
        
    })
    topicspage.style  = "display : flex; flex-direction : column;";
    navbar.style = "display : none;";
    inputshtml.style = "display : none;"
    bottomnav.style  = "display : none;"
    
   backbtn.addEventListener("click" , function () {
    players = [];
    topicspage.style = "display : none;"
    navbar.style = "display : flex;";
    inputshtml.style = "display : flex;"
    bottomnav.style  = "display : flex;"
   })
    
    
});