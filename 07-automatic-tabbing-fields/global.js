// Your JavaScript goes here.
var i = function(field1, field2){
    field1.addEventListener("input", function(e){
        if(field1.value.length >= field1.maxLength){
            field2.select();
        }
    })
}
window.addEventListener("load", function(e){
    const firstField = document.querySelector("#first");
    const secondField = document.querySelector("#second");
    const thirdField = document.querySelector("#third");
    i(firstField, secondField);
    i(secondField, thirdField);
    // firstField.addEventListener("input", function(e){
    //     if(firstField.value.length >= firstField.maxLength){
    //         secondField.select();
    //     }
    // })
    // secondField.addEventListener("input", function(e){
    //     if(secondField.value.length >= secondField.maxLength){
    //         thirdField.select();
    //     }
    // })
})