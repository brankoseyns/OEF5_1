"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const vegetables = [ "tomato", "cucumber", "lettuce" ];

    const target = document.querySelector ("ul");

    display(target, vegetables);
}

function display(target, data) {
    for (let i = 0; i < data.length; i++ ) 
    {
        target.innerHTML += "<li>" + data[i] + "</li>";
    }
}