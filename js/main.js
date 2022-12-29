const colors = [
    'crimson',
    'deeppink',
    'deepskyblue',
    'gold',
    'lightgrey',
    'pink',
    'orange',
    'mediumturquoise',
    'lemonchiffon',
    'indigo',
];  

colors.forEach(color =>{
    const button = document.createElement("button");
    button.style.backgroundColor = color;

    button.onclick = function (){
        document.body.style.backgroundColor = color;
        document.querySelector("#current-color").innerHTML = color;
    }

    document.querySelector("div.colors").appendChild(button);
});

document.body.onload = function (){
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    console.log(randomIndex);
}