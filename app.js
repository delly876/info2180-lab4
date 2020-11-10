"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    
    let btn = document.querySelector('.btn');  
    
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log("Search button clicked");       
    })
})


function addState(){
    
    //code to get entered value
    let entry = document.querySelector('#entry').value;

   //code to update search params
    const params = new URLSearchParams({superhero: entry});

    //code to define url with params in String format
    const url = `http://localhost/info2180-lab4/superheroes.php?${params.toString()}`;
    
    //code to update browser url
    let stateObj = {id:"100"};
    window.history.pushState(stateObj, "Superhero Query", url);

    //code to fetch data

    fetch(url, {method: 'GET',})
        .then(response => {
            console.log(response);
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Something went wrong")
                }
        })
        .then(data => {
                let results = document.querySelector('.result');
                results.innerHTML = data;       
        })
        .catch(error => console.log(error));
}