var box = document.getElementById("div1")
onload = function(){
    box.style.backgroundColor = "black";

}
//mouseover, mousedown, mouseup, dblclick, wheel
function handleMouseOver(){
    box.style.backgroundColor = "green";
}

function handleMouseDown(){
    box.style.backgroundColor = "yellow";
}

function handleMouseUp(){
    box.style.backgroundColor = "blue";
}

function handleDblClick(){
    box.style.backgroundColor = "red";
}

function handleWheel(){
    box.style.backgroundColor = "purple";
}
function handleKeyDownGreen(){
    if (event.key === "g")
    box.style.backgroundColor = "green";
}
function handleKeyDownYellow(){
    if (event.key === "y")
    box.style.backgroundColor = "yellow";
}
function handleKeyDownBlue(){
    if (event.key === "b")
    box.style.backgroundColor = "blue";
}
function handleKeyDownRed(){
    if (event.key === "r")
    box.style.backgroundColor = "red";
}
function handleKeyDownPurple(){
    if (event.key === "p")
    box.style.backgroundColor = "purple";
}
box.addEventListener("mouseover", handleMouseOver);
box.addEventListener("mousedown", handleMouseDown);
box.addEventListener("mouseup", handleMouseUp);
box.addEventListener("dblclick", handleDblClick);
document.body.addEventListener("wheel", handleWheel)

document.body.addEventListener("keydown", handleKeyDownGreen);
document.body.addEventListener("keydown", handleKeyDownYellow);
document.body.addEventListener("keydown", handleKeyDownBlue);
document.body.addEventListener("keydown", handleKeyDownRed);
document.body.addEventListener("keydown", handleKeyDownPurple);
