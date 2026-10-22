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
let nextbtn = document.getElementById("nextbtn")
let parameters = document.getElementById("gameparameters")
let backbtn2 = document.getElementById("parametersbackbtn")
let startbtn = document.getElementById("startbtn")
let game = document.getElementById("game")
let impnum1 = document.getElementById("impnum1")
let impnum2 = document.getElementById("impnum2")
let imposters = 1;
let hints ; 
let plottwist ; 





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
        if(input.value.trim() !== ""){
            players.push(input.value)
        }
        
    })
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
    
    
});


categories.forEach(function(category) {
    category.addEventListener("click" , function(){
        if (category.classList.contains("selected")){
            category.classList.remove("selected")
            nextbtn.style = "opacity : 0.9;"

            document.querySelectorAll(".categories").forEach(function(cat){
                cat.classList.remove("selected")

            })


        }else{

            document.querySelectorAll(".categories").forEach(function(cat){
                cat.classList.remove("selected")

            })            
            category.classList.add("selected")
            nextbtn.style = "opacity : 1;"


        }
  
    })
        
    
    
});
nextbtn.addEventListener("click" , function () {
    if(Number(getComputedStyle(nextbtn).opacity == 1)){
        parameters.style = "display : flex;"
        topicspage.style = "display : none;"        

    }
})
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