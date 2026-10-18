let addplayerbtn = document.getElementById("addplayerbtn")

addplayerbtn.addEventListener("click" , function(){
    let newdiv = document.createElement("div");
    newdiv.classList.add("newdivs");
    let newinput = document.createElement("input");
    newinput.placeholder = "Enter new player's name";
    newdiv.appendChild(newinput)
    let newbtn = document.createElement("button")
    newbtn.classList.add("deletebtns")
    newdiv.appendChild(newbtn)
newbtn.addEventListener("click" , function(){
    newbtn.parentElement.remove();
    console.log("asdas");
    

})


    document.getElementById("inputs").appendChild(newdiv)
})
