
var aboutButton = document.getElementById("aboutbutton");
var isActive = false;

aboutButton.onclick = function() {
    isActive = !isActive;

    if(isActive){
        aboutButton.style.backgroundColor = "#DDB649"
        alert("Color should be active")
        aboutButton.style.color = "red"
    }
    else{
        aboutButton.style.backgroundColor = "#352B17"
        alert("Color should be reverted")
    }
}


