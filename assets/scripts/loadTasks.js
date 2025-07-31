import { criarTasks } from './newTask.js'
import { excluir } from './excludeTask.js'

export function carregarTasks(){
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

  tasksFromLocalStorage.forEach((task) => {
    let tarefa = task.tarefa;
    let id = task.id
    criarTasks(tarefa, id);
    excluir();
  })
}

carregarTasks()