filterSelection("all") // Executa 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// mostra os elementos filtrados
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// esconde os elementos uqe não estão sendo utilizados
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// adiciona a classe ativo ao botão que está sendo utilizado
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//Java Script forms
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
