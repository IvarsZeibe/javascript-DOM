window.addEventListener("load", function(){

    const show = document.querySelector("#button");
    show.addEventListener("click", function(e){

        const hiddenElements = document.getElementsByClassName("hidden");
        Array.from(hiddenElements).forEach(element => {
            element.style.display = "block";
        });
    })
});