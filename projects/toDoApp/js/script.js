var count = 0;
var myList = [];
var newItemForm = document.forms.newItem;
var oldItemForm = document.forms.oldItem;
newItemForm.addEventListener("submit", function(e){
    insert(e)});
oldItemForm.addEventListener("submit", function(e){
        remove(e)});

var toDoList = {
    addItem(newItem){
        this.incrementCount();
        if(count <= 7) {
            this.pushToList(newItem.item);
            this.printAll();
            // var newList = document.createElement('li');
            // var textNode = document.createTextNode(count + '. ' + newItem.item);
            // newList.appendChild(textNode);
            // document.getElementById("myList").appendChild(newList);
        } else {
            alert("Calm Down!!! You are planning too many things.")
        }
    },
    deleteItem(oldItem){
        this.decrementCount();
        var el = document.getElementsByTagName('li')[myList.indexOf(oldItem)];
        el.remove();
    },
    pushToList(newItem){
        myList.push(newItem);
        console.log(myList);
    },
    incrementCount(){
        count++;
    },
    decrementCount(){
        count--;
    },
    printAll(){
        for(var i = 0; i < myList.length; i++){
            var newList = document.createElement('li');
            var textNode = document.createTextNode((i+1) + '. ' + myList[i]);
            newList.appendChild(textNode);
            document.getElementById("myList").appendChild(newList);
        }
    }
}

function CreateItem(newItem){ // Constructor function
    this.item = newItem;
}

function insert(e) { // Creates new item and calls method to add item to DOM
    e.preventDefault();
    var item = document.querySelector('.item').value;
    var newItem = new CreateItem(item);
    toDoList.addItem(newItem);
}

function remove(e) {
    e.preventDefault();
    var trash = document.querySelector('.trash').value;
    toDoList.deleteItem(trash);
}

// var el = document.getElementsByTagName("li:nth-child(${})");
// el.remove(); // Removes the div with the 'div-02' id












// var count = 0;
// var newItemForm = document.forms.newItem;
// newItemForm.addEventListener("submit", function(e){
//     login(e)});
//
// function User(a) {
//     this.item = a;
// }
//
// function CheckCount() {
//     this.total = 0;
// }
//
// function login(e) {
//     e.preventDefault();
//     count++;
//     if(count <= 7) {
//         var item = document.querySelector('.item').value;
//         var newUser = new User(item);
//
//
//         var newList = document.createElement('li');
//         var textNode = document.createTextNode(count + '. ' + newUser.item);
//         newList.appendChild(textNode);
//         document.getElementById("myList").appendChild(newList);
//     } else {
//         alert("Calm Down!!! You are planning too many things.")
//     }
//
//
// }
