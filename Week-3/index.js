for (let i = 0; i < 10; i ++){
var h1 = document.createElement("h1");
h1.textContent = "Hello World";
document.body.appendChild(h1);
h1.style.color = "blue"
}

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

for (let i = 0; i < names.length; i ++){
    var h1 = document.createElement("h1");
    h1.textContent = names[i];
    document.body.appendChild(h1);
    h1.style.color = "green"
}
