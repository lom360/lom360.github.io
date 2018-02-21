var newItemForm = document.forms.newItem;
newItemForm.addEventListener("submit", function(e){
    login(e)});

function User(a) {
    this.item = a;
}


function login(e) {
    e.preventDefault();

    var item = document.querySelector('.item').value;
    var newUser = new User(item);

    var newList = document.createElement('li');
    var textNode = document.createTextNode(newUser.item);
    newList.appendChild(textNode);
    document.getElementById("myList").appendChild(newList);
}
