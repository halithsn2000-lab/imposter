let addplayerbtn = document.getElementById("addplayerbtn");
let continuebtn = document.getElementById("continuebtn");
let players = [];

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
    console.log('asdas');
    
});