'use strict'

let ul = document.getElementById("myList");
class TodoList {
    constructor(element) {
        this.listElement = element;
        this.textList = [];
    }
    
    static createListItem (text) {
        let li = document.createElement("li");
        li.setAttribute("class", "li");
        let delBtn = document.createElement("button");
        delBtn.textContent = "delete"
        delBtn.className = "delete";
        li.append(text, delBtn);
        return li;
     }

    update() {
        let allLi = document.querySelectorAll("li");
        allLi.forEach(tagLi => tagLi.remove());
        this.textList.forEach(el => this.listElement.append(TodoList.createListItem(el)));
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    delete(index) {
        this.textList.splice(index, 1);
        this.update();
    }
}
 

document.addEventListener('DOMContentLoaded', function(){
    
    let submit = document.querySelector(".submit")
    let inputs = document.querySelector("input[data-personal]");
    let text;
    let todoApp = new TodoList(ul);

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        text = inputs.value;
        todoApp.add(text);
        inputs.value = " ";
    })
    
    
    document.addEventListener("click", function(e) {
        console.log(e.target);
        let text = e.target.parentElement.innerHTML;
        let arr = text.split('<');
        let litext = arr[0];
        console.log(litext);
    })

})