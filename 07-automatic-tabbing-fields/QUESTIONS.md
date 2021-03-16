# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

Var izveidot funkciju, kurai kā parametrus padod 2 laukus, un funkcija piešķir pirmajam laukam EvenetListener, kas aizved uz otro lauku, ja tā pirmā lauka garmus ir sasniedzis maksimumu. Tas uzlabotu koda, lasāmību un nevajadzētu atkārtot līdzīgu kodu. Funkcija izskatītos šādi:
```
var changeFieldWhenFilled = function(field1, field2){
    field1.addEventListener("input", function(e){
        if(field1.value.length >= field1.maxLength){
            field2.select();
        }
    })
}
```