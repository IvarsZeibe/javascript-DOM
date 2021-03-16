window.addEventListener("load", function(){

    const hide = document.querySelector("#button");
    hide.addEventListener("click", function(e){

        const hiddenElements = document.getElementsByClassName("hide_me");
        Array.from(hiddenElements).forEach(element => {
            element.style.display = "none";
        });
    })
});