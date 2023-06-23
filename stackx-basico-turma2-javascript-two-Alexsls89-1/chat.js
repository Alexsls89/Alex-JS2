
/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
console.log('chat jsII')
let listaMensagens =[];

function adicionarMensagem(apelido,mensagem)
{
    listaMensagens.push({
        apelido: apelido,
        mensagem: mensagem
    });
}
function formatarMensagens ()
{
  let htmlData = '';

      for (let i = 0; i < listaMensagens.length; i++)
      {
        let mensagem = listaMensagens[i];

        htmlData += `<div class="chat-message">
        `;
        htmlData +=`<span class="chat-message-apelido">` + mensagem.apelido + `</span>`
        ;

        htmlData +=`<span class="chat-message-item">` + mensagem.mensagem + `</span>`
        ;
        htmlData += `</div>`
        ;
      }

      return htmlData;
}
function atualizarHTML ()
{
  let chatMessages = document.getElementById('chat-messages').innerHTML = formatarMensagens();
 

  }
 
function commitMessageClickHandler()
{
let message = document.getElementById('message-input').value;
adicionarMensagem('stackx',message);
atualizarHTML();
document.getElementById('message-input').value = '';


}




 //Exemplo: function minhaFuncao() { }
// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
}
// --------------------------
