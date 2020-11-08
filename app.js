"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    
    let btn = document.querySelector('button');
    
    btn.addEventListener('click', (e)=>{
        console.log("Search button clicked");
        e.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Something went wrong")
                }
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });
        
    })
})