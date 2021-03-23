// Your JavaScript goes here.
window.addEventListener("load", function(e){
    const textbox = document.querySelector("#full_name");
    textbox.addEventListener("input", function(e){
        const greeting = document.querySelector("#greeting");
        greeting.innerHTML = "Sveiks, " + textbox.value + "!";
    })
})