// Your JavaScript goes here.
window.addEventListener("load", function(e){
    const button = document.querySelector("#button");
    button.addEventListener("click", function(e){

        const togglableElements = document.getElementsByClassName("toggle_me");
        Array.from(togglableElements).forEach(element => {
            if(element.style.display == "none"){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
        })
    })
})