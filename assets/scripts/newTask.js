import { mensagemDeErro } from "./messageError.js";
import { excluir } from "./excludeTask.js";

document.getElementById('btn-add-item').addEventListener('click', () => {
  const input = document.getElementById('input');
  const tarefa = input.value.trim();
  const id = new Date().getTime();
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if(tarefa == ''){
    mensagemDeErro('Necessário colocar tarefa!');
    return
  }

  tasks.push({id: id, tarefa: tarefa});
  localStorage.setItem('tasks', JSON.stringify(tasks));

  criarTasks(tarefa, id);
  excluir();

  input.value = '';
})

export function criarTasks(value, id){
  const lista = document.getElementById('list');

  const novaTarefa = document.createElement('li');
  novaTarefa.classList.add('list-item');
  novaTarefa.id = id;
  
  const div = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');

  const tarefa = document.createElement('p');
  tarefa.innerText = value;

  const excluir = document.createElement('img');
  excluir.classList.add('btn-exclude-item')
  excluir.src = './assets/images/garbage.svg';
  excluir.alt = 'icone de lixeira'

  div.append(checkbox, tarefa);
  novaTarefa.append(div, excluir)
  lista.appendChild(novaTarefa)
}