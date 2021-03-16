# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

Var izveidot funkciju, kurai kā parametrus padod 2 laukus, un ta piešķirt pirmajam laukam EvenetListener, kas aizved uz otro lauku, ja tā garmus ir sasniedzis maksimumu. Šādi:
```
var changeFieldWhenFilled = function(field1, field2){
    field1.addEventListener("input", function(e){
        if(field1.value.length >= field1.maxLength){
            field2.select();
        }
    })
}
```