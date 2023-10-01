import { add } from "./calculator.js";

const allTodos = ["todo1", "todo2", "todo3"];

// add New Todo
function addNewTodo() {
  const newTodo = "";
  if (newTodo.length > 0) {
    console.log("'New Todo is created'");
    console.log(newTodo);
  } else {
    console.log("please make sure you give some value for new Todo");
  }
}

// display all todos
function printAllTodos() {
  console.log(
    "'There are " + allTodos.length + " todos. All todos are listed.'"
  );
  for (let index = 0; index < allTodos.length; index++) {
    console.log(allTodos[index]);
  }
}

function deleteTodo(index) {
  allTodos.splice(index, 1);
}

printAllTodos();
deleteTodo(1);
printAllTodos();
// console.log("'Todo is deleted'");
// console.log("'Todo is updated'");
add();
