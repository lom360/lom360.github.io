var count = 0;
var myList = [];
var newItemForm = document.forms.newItem;
var oldItemForm = document.forms.oldItem;
var wipeItemForm = document.forms.wipeAll;
// var editItemForm = document.getElementsByName('editButton');

newItemForm.addEventListener("submit", function(e){
    insert(e)});
oldItemForm.addEventListener("submit", function(e){
        remove(e)});
wipeItemForm.addEventListener("submit", function(e){
        reset(e)});
// editItemForm.addEventListener("click", function(e){
//         edit(e)});


var toDoList = {
    addItem(newItem){
        if(myList.length < 7) {
            this.pushToList(newItem.item);
            this.print();
        } else {
            alert("Calm Down!!! You are planning too many things.")
        }
    },
    deleteItem(oldItem){
        let temp = myList.length - 1;
        var index = myList.indexOf(oldItem);
        if (index > -1) {
            myList.splice(index, 1);
            console.log(myList);
        }else{
            alert("Please name something that is on the list!!!");
        }
        while(temp >= 0) {
            var el = document.getElementsByTagName('li')[temp];
            el.remove();
            temp--;
        }
        this.printAll();
    },
    pushToList(newItem){
        myList.push(newItem);
        console.log(myList);
    },
    print(){
        var newList = document.createElement('li');
        var newBtn = document.createElement('button');
        var textNode = document.createTextNode((myList.length) + '. ' + myList[myList.length - 1]);
        var btnNode = document.createTextNode('edit');
        newBtn.appendChild(btnNode);
        newList.appendChild(textNode);
        newList.appendChild(newBtn);
        document.getElementById("myList").appendChild(newList);

        // var b = document.querySelector("button");
        // b.setAttribute("name", "editButton");
        // b.setAttribute("disabled", "");
    },
    printAll(){
        if(myList.length == 0){
            alert("Stop it!!! Your List is already empty.");
        }
        for(var i = 0; i < myList.length; i++){
            var newList = document.createElement('li');
            var newBtn = document.createElement('button');
            var textNode = document.createTextNode((i+1) + '. ' + myList[i]);
            var btnNode = document.createTextNode('edit');
            newBtn.appendChild(btnNode);
            newList.appendChild(textNode);
            newList.appendChild(newBtn);
            document.getElementById("myList").appendChild(newList);

            // var b = document.querySelector("button");
            // b.setAttribute("name", "editButton");
            // b.setAttribute("disabled", "");
        }
    },
    wipeAll(){
        let temp = myList.length - 1;
        while(temp >= 0) {
            var el = document.getElementsByTagName('li')[temp];
            el.remove();
            temp--;
        }
        myList = [];
    },
    editItem(){
        alert("What do you want to change to?", "something");
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

function reset(e) {
    e.preventDefault();
    toDoList.wipeAll();
}


// function edit(e) {
//     e.preventDefault();
//     prompt("What do you want to change the item to?",Current Item);
// }
// promptEdit(){
//     function(e) {
//         e.preventDefault();
//         var tempVal = prompt("What would you like to change the item to?", current);
//     }
// }











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
