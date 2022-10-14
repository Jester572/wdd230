const button = document.querySelector("button").addEventListener('click',button_click);
const list = document.getElementsByClassName("list")[0];
const input = document.getElementById("favchap").value;

console.log("hello");
console.log(add_chapter);

button.addEventListener("click", function() {

   
    let input_value = input.value;

    const list_item = document.createElement("li");
    const list_text = document.createElement("span");
    const list_button = document.createElement("buttton");

    list_item.appendChild(list_text);
    list_text.textContent = input_value;
    list_item.appendChild(list_button);
    list_button.textContent = "❌";

    list.appendChild(list_item);

    input.value = "";

    list_button.addEventListener("click", function () {
        list.removeChild(list_item);
        });
    input.focus();
});
