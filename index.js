let personArray = [];


function formSubmitEvent() {
    let Person = {
        name:  document.getElementById("custname").value,
        city: document.getElementById("city").value,
        payment: document.getElementById("payment").value
    }

    personArray.push(Person);
    makeList();
    // console.log("Added person " + personArray[0].name + personArray[0].city + personArray[0].payment + " to array");
}

function makeList() {

    let myUI = document.getElementById("list");
    myUI.innerHTML = "";

    let ul = document.createElement('ul');
    document.getElementById('list').appendChild(ul);
    for (let i = 0; i < personArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let tempStr = personArray[i].name + " " + personArray[i].city + " " + personArray[i].payment;
        li.innerHTML = tempStr;
    };
}