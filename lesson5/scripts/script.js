const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");


button.addEventListener("click", function() {

   if (input.value != "") {

    const list_item = document.createElement("li");
    const list_text = document.createElement("span");
    const list_button = document.createElement("buttton");

    list_item.appendChild(list_text);
    list_text.textContent = input.value;
    list_item.appendChild(list_button);
    list_button.textContent = "❌";

    list.appendChild(list_item);

    input.value = "";

    list_button.addEventListener("click", function () {
        list.removeChild(list_item);
        });
    }
});
