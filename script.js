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
let maximps = 0;
let landingpage = document.getElementById("landingpage");
let backupplayers = []; 
let randomnum ;
let randomnums  = [];
let numslist = [];
let currentplot = 0;
let nextplayerbtn = document.getElementById("nextplayer");
let view = document.getElementById("view")
let firstplayer = document.getElementById("firstPlayer")
let count = 0;
let sportstopic = ["football", "basketball", "tennis", "volleyball", "swimming", "boxing", "cricket", "rugby", "cycling", "athletics"];
let sportshints = ["Offside","Dunk","Deuce","Rotation","Laps","Knockout","Wicket","Scrum","Pedals","Decathlon"];
let foodtopic = ["pizza", "burger", "pasta", "sushi", "tacos", "sandwich", "salad", "pancakes", "ice cream", "chocolate"];
let foodhints = ["Crust","Patty","Sauce","Wasabi","Salsa","Filling","Dressing","Syrup","Scoop","Cocoa"];
let countriestopic = ["Algeria", "Japan", "Brazil", "Canada", "Egypt", "France", "Germany", "Italy", "Australia", "Spain"];
let countrieshints = ["Sahara","Shinkansen","Carnival","Maple","Pharaoh","Baguette","Autobahn","Colosseum","Outback","Flamenco"];
let randomtopic = [
    "football", "basketball", "tennis", "volleyball", "swimming",
    "boxing", "cricket", "rugby", "cycling", "athletics",
    "pizza", "burger", "pasta", "sushi", "tacos",
    "sandwich", "salad", "pancakes", "ice cream", "chocolate",
    "Algeria", "Japan", "Brazil", "Canada", "Egypt",
    "France", "Germany", "Italy", "Australia", "Spain"
];
let randomhints = [
    // Sports
    "Offside",     // football
    "Dunk",        // basketball
    "Deuce",       // tennis
    "Rotation",    // volleyball
    "Laps",        // swimming
    "Knockout",    // boxing
    "Wicket",      // cricket
    "Scrum",       // rugby
    "Pedals",      // cycling
    "Decathlon",   // athletics

    // Food
    "Crust",       // pizza
    "Patty",       // burger
    "Sauce",       // pasta
    "Wasabi",      // sushi
    "Salsa",       // tacos
    "Filling",     // sandwich
    "Dressing",    // salad
    "Syrup",       // pancakes
    "Scoop",       // ice cream
    "Cocoa",       // chocolate

    // Countries
    "Sahara",      // Algeria
    "Shinkansen",  // Japan
    "Carnival",    // Brazil
    "Maple",       // Canada
    "Pharaoh",     // Egypt
    "Baguette",    // France
    "Autobahn",    // Germany
    "Colosseum",   // Italy
    "Outback",     // Australia
    "Flamenco"     // Spain
];
let animalstopic = [
    "Lion", "Elephant", "Penguin", "Dolphin", "Eagle",
    "Snake", "Giraffe", "Shark", "Kangaroo", "Owl",
    "Turtle", "Monkey", "Cheetah", "Octopus", "Camel"
];

let animalhints = [
    "King", "Memory", "Cold", "Intelligent", "Sky",
    "Slither", "Tall", "Danger", "Jump", "Night",
    "Shell", "Banana", "Speed", "Eight", "Desert"
];
let techtopic = [
    "Computer", "Keyboard", "Mouse", "Smartphone", "Headphones",
    "Camera", "Drone", "Robot", "Printer", "WiFi",
    "Battery", "Microphone", "Projector", "Satellite", "VR headset"
];

let techhints = [
    "Desktop", "Typing", "Click", "Pocket", "Music",
    "Capture", "Flying", "Automatic", "Paper", "Wireless",
    "Energy", "Voice", "Screen", "Orbit", "Immersion"
];
let schooltopic = [
    "Mathematics", "History", "Geography", "Chemistry", "Physics",
    "Biology", "Pencil", "Backpack", "Exam", "Homework",
    "Teacher", "Library", "Calculator", "Notebook", "Graduation"
];

let schoolhints = [
    "Numbers", "Past", "Maps", "Reactions", "Forces",
    "Living", "Eraser", "Carry", "Stress", "Deadline",
    "Explain", "Quiet", "Solve", "Pages", "Achievement"
];
let gamestopic = [
    "Minecraft", "Fortnite", "Roblox", "Among Us", "GTA",
    "FIFA", "Mario", "Pokemon", "Tetris", "Pac-Man",
    "Call of Duty", "Rocket League", "Clash Royale",
    "Subway Surfers", "Terraria"
];

let gameshints = [
    "Blocks", "Battle", "Create", "Suspicion", "Crime",
    "Football", "Plumber", "Capture", "Shapes", "Maze",
    "Soldiers", "Cars", "Cards", "Chase", "Underground"
];
let objectstopic = [
    "Mirror", "Umbrella", "Clock", "Scissors", "Pillow",
    "Refrigerator", "Toothbrush", "Wallet", "Suitcase", "Candle",
    "Key", "Elevator", "Flashlight", "Alarm clock", "Fan"
];

let objectshints = [
    "Reflection", "Rain", "Time", "Cut", "Sleep",
    "Cold", "Morning", "Money", "Travel", "Flame",
    "Lock", "Floors", "Darkness", "Wake up", "Breeze"
];
let clothingtopic = [
    "Sneakers", "Hoodie", "Sunglasses", "Suit", "Jeans",
    "Scarf", "Helmet", "Watch", "Ring", "Backpack",
    "Sandals", "Tie", "Gloves", "Raincoat", "Crown"
];

let clothinghints = [
    "Laces", "Comfort", "Shade", "Formal", "Denim",
    "Neck", "Protection", "Wrist", "Finger", "Shoulders",
    "Summer", "Knot", "Fingers", "Waterproof", "Royalty"
];
let votecount = 0;
let currentword;
let popup = document.getElementById("popup")
let popupclose = document.getElementById("popupclose")
let popuph1 = document.getElementById("popuph1")
let gameback = document.getElementById("gameback");
let popupcontainer = document.getElementById("popupcontainer");
let htmltimer = document.getElementById("timer")
let time  = 0;
let currenthint ; 
let timeleft = 0;
let timeintroval ;
let votebtn = document.getElementById("votebtn")
let voteplayer;
let votetxt = document.getElementById("votetxt")
let votes = []
let submit = document.getElementById("submit")
let imps = []




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
    players = []
    let inputs = document.querySelectorAll("#inputs input");
    inputs.forEach(function(input){
        if(input.value.trim() !== ""){
            players.push(input.value)
            backupplayers.push(input.value)
        }
        
    })
     if(players.length >= 3){
      
        

    console.log(players);
    landingpage.style = "display : none;"
    topicspage.style  = "display : flex; flex-direction : column;";
    navbar.style = "display : none;";
    inputshtml.style = "display : none;"
    bottomnav.style  = "display : none;"
    
   

categories.forEach(function(category ,) {
    category.addEventListener("click" , function(){
        gamecategorie = category.querySelector("h1").textContent;

        console.log(gamecategorie);
        topicspage.style = "display : none ;"
        parameters.style = "display: flex;"

        
  
    
})
});



startbtn.addEventListener("click" , function () {
    nextplayerbtn.textContent = "Next player"
     document.getElementById("voteoptions").style = "display: none;"
    document.getElementById("votetxt").style = "display : none;"

    time = Number(impnum2.textContent)
    console.log(time);
    
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
    if (gamecategorie == "Sports"){
        let ran = Math.floor(Math.random() * sportstopic.length)
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(sportstopic[ran])
        currenthint = sportshints[ran];
    }}else if (gamecategorie == "Random"){
        let ran = Math.floor(Math.random() * randomtopic.length)
         currenthint = randomhints[ran]
        for(let i = 0 ; i < players.length ; i++){
         numslist.push(randomtopic[ran]);
         console.log("Random");
         
    }}else if (gamecategorie == "Food"){
        let ran = Math.floor(Math.random() * foodtopic.length)
         currenthint = foodhints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(foodtopic[ran]);
        console.log("Food");
        
    }}else if (gamecategorie == "Countries"){
        let ran = Math.floor(Math.random() * countriestopic.length)
         currenthint = countrieshints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(countriestopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "Animals"){
        let ran = Math.floor(Math.random() * animalstopic.length)
         currenthint = animalhints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(animalstopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "Technology"){
        let ran = Math.floor(Math.random() * techtopic.length)
         currenthint = techhints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(techtopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "School"){
        let ran = Math.floor(Math.random() * schooltopic.length)
         currenthint = schoolhints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(schooltopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "Video Games"){
        let ran = Math.floor(Math.random() * gamestopic.length)
         currenthint = gameshints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(gamestopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "Everyday Objects"){
        let ran = Math.floor(Math.random() * objectstopic.length)
         currenthint = objectshints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(objectstopic[ran]);
        console.log("countirs");
        
    }}else if (gamecategorie == "Clothing and Fashion"){
        let ran = Math.floor(Math.random() * clothingtopic.length)
         currenthint = clothinghints[ran]
        for(let i = 0 ; i < players.length ; i++){
        numslist.push(clothingtopic[ran]);
        console.log("countirs");
        
    }}
    for (let i = 0; i < imposters ; i++){
        do{
            randomnum = Math.floor(Math.random()*players.length)
        }while(randomnums.includes(randomnum))
            randomnums.push(randomnum)
            console.log(randomnums);
            numslist[randomnum] = "Imposter";
            imps.push(players[randomnum])
            votes.push(players[randomnum])
            console.log(numslist);
            
       
            
    }
     if(plottwist == 1){

            if(Math.random()>0.85){
                currentplot = 1; console.log(currentplot);
                 for(let i = 0 ; i < numslist.length ; i++){
                    numslist[i] = "imposter";
                    console.log(numslist);

                    
                 }                
            }else{currentplot = 0 ;
                 console.log(currentplot);


            }
        }

    firstplayer.innerHTML = players[count];

    firstplayer.style = "display : flex;"
    view.style =  "display : flex;"
    nextplayerbtn.style = "display : flex;"

    htmltimer.style = "displat:none;"
    game.style = "display : flex;"
    parameters.style = "display : none;"
    topicspage.style = "display : none;"
    navbar.style = "display : none;";
    inputshtml.style = "display : none;"
    bottomnav.style  = "display : none;"
        
    


})

    view.addEventListener("click" , function(){
        
        popup.style = "display : flex;"
        popuph1.textContent = numslist[count];
        console.log(popuph1);
        game.style="display :none;"
        popupcontainer.style = "display : flex;"
        if (popup.querySelector("h1").textContent == "Imposter" && hints == 1){
            popup.querySelector("h3").textContent = currenthint;
            
        }
        else{
            popup.querySelector("h3").textContent = "";
        }
        if(currentplot == 1 && hints == 1){
            let i = Math.floor(Math.random() * randomhints.length)
            currenthint = randomhints[i]
            popup.querySelector("h3").textContent = currenthint;
        }

    })

document.querySelectorAll(".parametersdiv2 button").forEach(function (btn) {

    btn.addEventListener("click" , function(){
         maximps = Math.round(players.length / 3);

        if (btn.value == 1 && Number(impnum1.textContent) > 1){
            impnum1.textContent = Number(impnum1.textContent) -1;
            imposters --;
            console.log(imposters);
            
            
        }
        
        else if (btn.value == 2 && Number(impnum1.textContent) < maximps){
            impnum1.textContent = Number(impnum1.textContent) +1;
            imposters ++;
            console.log(imposters);
            

            

        }
        else if (btn.value == 3 && Number(impnum2.textContent) > 1){
            impnum2.textContent = Number(impnum2.textContent) -1;


            

        }
        else if(btn.value == 4){
            impnum2.textContent = Number(impnum2.textContent) +1;

            
        }
    })
})


    nextplayerbtn.addEventListener("click" , function(){
       count++;     
        firstplayer.innerHTML = players[count];
        console.log(count);
        if (count == players.length - 1 ){
            nextplayerbtn.innerHTML = "Start"
        }else if (count == players.length){
            document.getElementById("timeleft").style = "display : flex"
            nextplayerbtn.innerHTML = "Next player"

            firstplayer.style = "display : none;"
            nextplayerbtn.style = "display : none;"
            view.style = "display : none;"
            htmltimer.style = "display: flex;"
            timeleft = time*60;
            console.log("fuck me with these bugs");
             
           timeintroval = setInterval(function(){
                timeleft --;
                let mins = Math.floor(timeleft /60)
                let secs = timeleft % 60
                document.getElementById("timeleft").textContent = mins +" : "+secs;
                console.log(timeleft);
                if(timeleft == 0){
                    clearInterval(timeintroval)
                    document.getElementById("timeleft").style = "display : none"
                }
                


            } ,1000)
        }
        

    })
    popupclose.addEventListener("click" , function(){
            popup.style = "display : none;"
            game.style = "display : flex"
            popupcontainer.style = "display :none"
        })

        


        gameback.addEventListener("click" , function(){


        currentplot = 0;
        clearInterval(timeintroval)
        game.style = "display :none";
        parameters.style = "display : flex;"
        count = 0;
        numslist = [];
        randomnums = [];
        time = 0;    
    })


    backbtn.addEventListener("click" , function () {

   currentplot = 0;
    clearInterval(timeintroval)
    players = [];
    topicspage.style = "display : none;"
    navbar.style = "display : flex;";
    inputshtml.style = "display : flex;"
    bottomnav.style  = "display : flex;"
    landingpage.style = "display : flex;"
 document.querySelectorAll("#game .voteplayers").forEach(function(element){
        element.style = "display : none;"
    })
    categories.forEach(function(allcat){
        allcat.classList.remove("selected")
    })
   })
    }
    else{
        console.log("more players needed");
        
    }
 
    
    
});
backbtn2.addEventListener("click" , function(){
    
    clearInterval(timeintroval)
    parameters.style = "display : none;"
     topicspage.style = "display : flex;"
    console.log("asdasd");
    document.querySelectorAll("#game .voteplayers").forEach(function(element){
        element.style = "display : none;"
    })
})
let countt = 0;
let choosen = []
votebtn.addEventListener("click" ,function(){
    clearInterval(timeintroval)
    votetxt.style = "display : flex;"
    document.getElementById("voteoptions").style= "display : flex"
    htmltimer.style = "display : none;";
    document.getElementById("voteoptions").querySelectorAll(".voteplayers").forEach(function(element){
        element.remove()
    })
    players.forEach(function(player){

        votepalyer = document.createElement("button")
        votepalyer.innerHTML = player;
        votepalyer.classList.add("voteplayers")
        document.getElementById("voteoptions").appendChild(votepalyer);

    })



     document.querySelectorAll("#game .voteplayers").forEach(function(element){
        element.addEventListener("click" , function(){
        
            if(countt < imposters ){
            choosen.push(element.innerHTML)
            element.style = "border: red solid 2mm;"
                    countt ++;
                
            }else if(countt == imposters){
                document.querySelectorAll("#game .voteplayers").forEach(function(som){
                    som.style = "border : none;"
                    countt = 0;
                    choosen = [];
                })
            }

            
            

        })
    })

})
submit.addEventListener("click" , function(){

    votetxt.style = "display: none;"
    document.getElementById("voteoptions").style = "display: none;"
    let h = document.createElement("h1")
    h.classList.add("winorloose")
    game.appendChild(h)

    for(let i = 0 ; i < choosen.length ; i++){
        if(choosen[i] == imps[i]){
            votecount++
        
        }
        
  
    }
    if(currentplot == 1 ){
            
            console.log("Plot twost , you all are IMPOSTERS");
            h.innerHTML = "Plot twist , you all are IMPOSTERS !!!"
            h.style = "color : purple;"

            
        }
        else if(currentplot ==0){
        if(votecount == imposters){

            h.innerHTML = "Crew wins !"
            h.style = "color : green;"
            console.log("Crew wins");

            
        }else{

            console.log("Imps win");
            h.innerHTML = "Imps win !"
            h.style = "color : red;"
            
        }


        }
    gameback.addEventListener("click" , function(){
        currentplot == 0;
                h.style = "display : none;"
        b.style = "display : none;"
        game.style = "display :none";
        parameters.style = "display : flex;"
        count = 0;
        numslist = [];
        randomnums = [];
        time = 0;
        countt = 0;
        choosen = [];
        currentplot = 0
        votecount = 0
        imps = []
    })
    let b = document.createElement("button")
    game.appendChild(b)
    b.innerHTML = "Play again"
    b.addEventListener("click" , function(){
        currentplot = 0;
        h.style = "display : none;"
        b.style = "display : none;"
        game.style = "display :none";
        parameters.style = "display : flex;"
        count = 0;
        numslist = [];
        randomnums = [];
        time = 0;
        countt = 0;
        choosen = [];
        currentplot = 0;
        votecount = 0
        imps = []

    })


})