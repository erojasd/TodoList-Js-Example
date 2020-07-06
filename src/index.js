//  import { saludar } from './js/componentes' //por defecto busca un archivo con extensión .js
import './styles.css';
import { Todo, TodoList } from './classes'; // al no indicar nada, entiendo que estamos buscando el archivo index.js
import { crearTodoHtml } from './js/componentes';
const tarea = new Todo("Aprender JavaScript");
export const todoList = new TodoList();
// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); //esto es lo mismo que lo de arriba
// todoList.nuevoTodo(tarea);

// console.log(todoList);
/*
--localStorage
localStorage.setItem('mi-key', 'test');
localStorage.removeItem('mi-key');
--sessionStorage
sessionStorage.setItem('mi-key', 'test');
sessionStorage.removeItem('mi-key');
*/