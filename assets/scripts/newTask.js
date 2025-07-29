document.getElementById('btn-add-item').addEventListener('click', () => {
  const input = document.getElementById('input');
  const tarefa = input.value.trim();
  criarTasks(input);

  input.value = '';

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(tarefa);
  localStorage.setItem('tasks', JSON.stringify(tasks));
})

export function criarTasks(input){
  const novaTarefaInput = input.value.trim();
  const lista = document.getElementById('list');

  const novoTarefa = document.createElement('li');
  novoTarefa.classList.add('list-item');
  
  const div = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');

  const tarefa = document.createElement('p');
  tarefa.innerText = novaTarefaInput;

  const excluir = document.createElement('img');
  excluir.src = './assets/images/garbage.svg';
  excluir.alt = 'icone de lixeira'
  excluir.setAttribute('onclick', 'excluir(this)')

  div.append(checkbox, tarefa);
  novoTarefa.append(div, excluir)
  lista.appendChild(novoTarefa)
}