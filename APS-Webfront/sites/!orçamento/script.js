function validarForm() {
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var mensagem = document.getElementById("mensagem").value;
var nomeErro = document.getElementById("nomeErro");
var emailErro = document.getElementById("emailErro");
var mensagemErro = document.getElementById("mensagemErro");

// Limpar mensagens de erro anteriores
nomeErro.innerHTML = "";
emailErro.innerHTML = "";
mensagemErro.innerHTML = "";

if (nome === "" || email === "" || mensagem === "") {
  if (nome === "") {
    nomeErro.innerHTML = 'Por favor, preencha o campo "Nome".';
  }
  if (email === "") {
    emailErro.innerHTML = 'Por favor, preencha o campo "Email".';
  }
  if (mensagem === "") {
    mensagemErro.innerHTML = 'Por favor, preencha o campo "Mensagem".';
  }
}

else {
  // Simular envio do formulário
  alert("Formulário enviado com sucesso!");
}

}