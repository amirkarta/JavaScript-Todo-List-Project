
//when loading the page, load from localStorage.
const todolist = JSON.parse(localStorage.getItem('todolist')) || [{
   name: 'make dinner',
   dueDate: '2022-12-22'
},{
   name: 'run',
   dueDate: '2023-12-22'
}];

renderTodoList()


function renderTodoList(){
   let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++) {
      const todoObject = todolist[i];
      //const name = todoObject.name
      //const dueDate = todoObject.dueDate
      const {name, dueDate} = todoObject;

      const html = `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick = "todolist.splice(${i}, 1);
         renderTodoList();
         //whenever we update the todolist, save in localStorage
         saveToStorage();
         " class="delete-button">Delete</button> 
      
      `;

      todolistHTML += html
    }

    console.log(todolistHTML);

    document.querySelector('.js-todo-list').innerHTML = todolistHTML
}


function addTodo(){
   const inputElement = document.querySelector('.js-Tododata')
   const name = inputElement.value

   const dueDateinputElement = document.querySelector('.js-due-date-input');
   const dueDate = dueDateinputElement.value

   todolist.push({
      name: name,
      dueDate: dueDate
      //name, dueDate
   });
   console.log(todolist);

   inputElement.value = '';

   renderTodoList()

   // whenever we update the todoList, save in localstorage
   saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todolist', JSON.stringify(todolist));
}
