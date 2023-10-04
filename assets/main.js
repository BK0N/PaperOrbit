
document.querySelector("#aboutbutton").onclick = function(){
    
    alert("Active color changing")

    const button = document.querySelector("#aboutbutton");

    console.log(button.style);

    button.style.backgroundColor = "blue";

}


