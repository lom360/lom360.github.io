var count = 0;
var newItemForm = document.forms.newItem;
newItemForm.addEventListener("submit", function(e){
    login(e)});

function User(a) {
    this.item = a;
}

function CheckCount() {
    this.total = 0;
}

function login(e) {
    e.preventDefault();
    count++;
    if(count <= 7) {
        var item = document.querySelector('.item').value;
        var newUser = new User(item);


        var newList = document.createElement('li');
        var textNode = document.createTextNode(count + '. ' + newUser.item);
        newList.appendChild(textNode);
        document.getElementById("myList").appendChild(newList);
    } else {
        alert("Calm Down!!! You are planning too many things.")
    }


}
