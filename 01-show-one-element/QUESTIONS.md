# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Teksts atkal ir paslēpts, jo mājaslapa ir atjauninājusies un skripts vēl nav izpildījies.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Ja tā izdara, tad links tekstu vairs neatklāj. Šī koda jēga ir, lai mājaslapa būtu ielādējusies pirms skripta izpildes.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

`addEventListener` metode uzstāda funkciju, kas tiks izpildīta, kad notiks norādītas atgadījums. Parametri ir notikuma tips, klausītājs, un neobgligāti iestatījumi.
