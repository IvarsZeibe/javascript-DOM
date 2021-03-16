// Your JavaScript goes here.
window.addEventListener("load", function(e){
    const firstField = document.querySelector("#first");
    const secondField = document.querySelector("#second");
    const thirdField = document.querySelector("#third");
    firstField.addEventListener("input", function(e){
        if(firstField.value.length >= firstField.maxLength){
            secondField.select();
        }
    })
    secondField.addEventListener("input", function(e){
        if(secondField.value.length >= secondField.maxLength){
            thirdField.select();
        }
    })
})