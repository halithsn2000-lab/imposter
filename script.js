let addplayerbtn = document.getElementById("addplayerbtn");
let continuebtn = document.getElementById("continuebtn");
let players = [];
let topicspage = document.getElementById("gamesettings")
let navbar = document.getElementById("navbar")
let inputshtml = document.getElementById("inputs")
let bottomnav = document.getElementById("bottomnav")
let width = window.innerWidth;
let backbtn = document.getElementById("backbtn")
let categories = document.querySelectorAll(".categories")
let parameters = document.getElementById("gameparameters")
let backbtn2 = document.getElementById("parametersbackbtn")
let startbtn = document.getElementById("startbtn")
let game = document.getElementById("game")
let impnum1 = document.getElementById("impnum1")
let impnum2 = document.getElementById("impnum2")
let imposters = 1;
let hints ; 
let plottwist ; 
let gamecategorie;





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
    let inputs = document.querySelectorAll("#inputs input");
    inputs.forEach(function(input){
        console.log(input.type , input.value , input);
        
        if(input.value.trim() !== ""){
            players.push(input.value)
        }
        
    })
     if(players.length >= 3){
      
        

    console.log(players);

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
    categories.forEach(function(allcat){
        allcat.classList.remove("selected")
    })
   })
    }
    else{
        console.log("more players needed");
        
    }

    
    
});


categories.forEach(function(category ,) {
    category.addEventListener("click" , function(){
        gamecategorie = category.querySelector("h1").textContent;

        console.log(gamecategorie);
        topicspage.style = "display : none ;"
        parameters.style = "display: flex;"

        
  
    
})
});

backbtn2.addEventListener("click" , function(){
    parameters.style = "display : none;"
     topicspage.style = "display : flex;"
    console.log("asdasd");
    
})

startbtn.addEventListener("click" , function () {
    if  (document.getElementById("hints").checked ){
        hints = 1;
        console.log(hints);
        
    }
    else{
        hints = 0;
        console.log(hints);
        
    }
    if (document.getElementById("plottwist").checked){
        plottwist = 1 ;
        console.log(plottwist);
        
    
    }
    else{
        plottwist = 0;
        console.log(plottwist);
        
    }
    game.style = "display : flex;"
    parameters.style = "display : none;"
    topicspage.style = "display : none;"
    navbar.style = "display : none;";
    inputshtml.style = "display : none;"
    bottomnav.style  = "display : none;"
    
})

document.querySelectorAll(".parametersdiv2 button").forEach(function (btn) {
    btn.addEventListener("click" , function(){
        if (btn.value == 1 & Number(impnum1.textContent) > 1){
            impnum1.textContent = Number(impnum1.textContent) -1;
            imposters --;
            console.log(imposters);
            
            
        }
        else if (btn.value == 2){
            impnum1.textContent = Number(impnum1.textContent) +1;
            imposters ++;
            console.log(imposters);
            

            

        }
        else if (btn.value == 3 & Number(impnum2.textContent) > 1){
            impnum2.textContent = Number(impnum2.textContent) -1;

            

        }
        else if(btn.value == 4){
            impnum2.textContent = Number(impnum2.textContent) +1;
        }
    })
})