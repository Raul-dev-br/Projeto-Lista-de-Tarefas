import { criarTasks } from './newTask.js'

function carregarTasks(){
  const input = document.getElementById('input');
  criarTasks(input)
}