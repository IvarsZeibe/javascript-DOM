window.addEventListener("load", function(){

    const hideButton = document.querySelector("#button");
    hideButton.addEventListener("click", function(e){
        const hideableElements  = document.getElementsByClassName("hide_me");
        Array.from(hideableElements).forEach(element => {
            element.style.display = "none";
        });
    })
});