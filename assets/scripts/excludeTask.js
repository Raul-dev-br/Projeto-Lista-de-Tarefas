import { carregarTasks } from './loadTasks.js'

export function excluir(){
  const lista = document.getElementById('list');
  let buttons = document.querySelectorAll('.btn-exclude-item');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const li = btn.closest('.list-item')
      const taskId = li.getAttribute('id');
      
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const newTasks = tasks.filter((ts) => ts.id != taskId)
      
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      
      lista.innerHTML = ''
      carregarTasks();
      excluir();
      buttons = document.querySelectorAll('.btn-exclude-item');
    })
  })
}

