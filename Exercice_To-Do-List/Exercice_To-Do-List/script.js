'use strict'

let ul = document.getElementById("myList");
class TodoList {
    constructor(element) {
       this.listElement = element;
       this.textList = [];
    }

    static createListItem (text) {
       let li = document.createElement("li");
       li.innerHTML = text;
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
 
let todoApp = new TodoList(ul);
console.log(todoApp);
console.log(todoApp.update());
console.log(todoApp.add("Tache à faire 1"));
console.log(todoApp.add("Tache à faire 2"));
console.log(todoApp.add("Tache à faire 3"));
console.log(todoApp.delete(0));