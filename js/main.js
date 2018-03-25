function myList() {
    let userInput = document.getElementById("input").value;
    let text = document.createTextNode(userInput);
    let li = document.createElement("li");
    li.appendChild(text);
    let ol = document.getElementById("list");
    ol.appendChild(li);
}