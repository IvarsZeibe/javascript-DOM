// Your JavaScript goes here.
window.addEventListener("load", function(e){
    const button = document.querySelector("#toggle_button");
    button.addEventListener("click", function(e){
        const list = document.querySelectorAll(".second_five li");
        list.forEach(element => {
            if(element.style.display == "none"){
                element.style.display = "list-item";
            }
            else{
                element.style.display = "none";
            }
        });
    })
})