const divMensagem = document.querySelector('.message');

export function mensagemDeErro(mensagem){
  divMensagem.style.display = 'flex';
  divMensagem.innerHTML = `
    <div>
      <img src="./assets/images/warning.svg" alt="icone de aviso">
      <p>${mensagem}</p>
    </div>
    <img src="./assets/images/exclude.svg" alt="icone de excluir" class='btn-exclude'>
  `
  
  const botaoTirarMensagem = document.querySelector('.btn-exclude');
  botaoTirarMensagem.addEventListener('click', () => {
    divMensagem.style.display = 'none';
  })  
}






