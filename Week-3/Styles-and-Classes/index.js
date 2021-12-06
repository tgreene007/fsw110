for (let i = 0; i < 5; i ++){
var header = document.createElement("h2");
header.textContent = "This is an h2 header";
header.style.fontSize = "20px";
header.style.fontWeight = "lighter";
header.style.fontFamily = "sans-serif"
header.style.color = "cornflowerblue"
header.classList.toggle("border");
document.body.appendChild(header);
}
