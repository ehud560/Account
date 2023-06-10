import Action from "./classes/Action.js";
import Actionmanager from "./classes/Actionmanager.js";

let manager = new Actionmanager();
let food = new Action("expense", "fruits", 200);
manager.addAction(food);
manager.addAction(new Action("income", "salary", 10000));
console.log(manager.actions);
// manager.deleteAction(food.id);
// console.log(manager.actions);
manager.updateAction(food.id, 350);
manager.calcBalance();
console.log(manager.balance);


// a function that shows all the actions according to manager.actions array
function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById(
            "actions"
        ).innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"
        }> <td>${action.description} </td> <td>${action.amount} </td><td><i class="fa-regular fa-pen-to-square" onclick="updateAction(${action.id
            })"></i> </td> <td><i class="fa-regular fa-trash-can" onclick="deleteAction(${action.id
            })"></i> </td></tr>`;
    }
}

showActionsInTable();

window.addNewAction = () => {
    // take the form values
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount").value;

    // create action object
    let newAction = new Action(type, description, amount);

    // add newAction to manager actions array
    manager.addAction(newAction);
    console.log(manager.actions);
    document.getElementById("type").value = "income";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    showActionsInTable();
};

window.updateAction = (id) => {
    // prompt
    let newAmount = prompt("Enter new amount:");
    if (newAmount == null || newAmount == "" || newAmount != +newAmount)
        alert("Sorry! Something went wrong");
    else {
        // update action
        manager.updateAction(id, +newAmount);

        showActionsInTable();
    }
};

window.deleteAction = (id) => {
    // confirm
    if (confirm("Are you sure?")) {
        manager.deleteAction(id);
        showActionsInTable();
    }
};