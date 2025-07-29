function excluir(lixeira){
  const li = lixeira.closest('.list-item')
  const task = li.querySelector('p').textContent;
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter((ts) => ts != task)
  
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}