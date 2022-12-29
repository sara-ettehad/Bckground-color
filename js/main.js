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

    document.querySelector("div.colors").appendChild(button);
})