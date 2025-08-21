//const unorderedList = document.querySelector("ul");

//stored the reference of the body and stored it in the variable
//created the element ul and appending it to the body
const body = document.querySelector("body");
const unorderedList = document.createElement("ul");
body.appendChild(unorderedList);

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click",response);

function response(){
    // stored the inputted value inside a variable
    const myItem = input.value;
    myItem.value= ""; // the input box will become empty after clicking add item

    //so clicking the button is going to create these three elements
    const list = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    //then we are going to append it to ul element
    unorderedList.append(list);
    list.appendChild(span); // appending the span
    span.textContent = myItem; // span store the item we inputted
    list.appendChild(deleteButton); //appending the delete button
    deleteButton.textContent = "Delete";
    
    // creating an event listener when clicking the delete button,
    // it will remove the child list that we appended previously
    deleteButton.addEventListener("click",() =>{
        unorderedList.removeChild(list);
    });

    //dont know about this yet gonna see this later 
    input.focus();
}

