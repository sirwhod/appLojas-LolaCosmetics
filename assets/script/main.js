//busca o switch Compra realizada na DOM
let checkbox = document.getElementById('purchaseMade')
//Busca o botão da página
let buttonNext = document.getElementById('buttonNext')
//Busca o input de inserir código de cupom
let cupomCode = document.getElementById('sectionCupomCode')

//executa a função de remover o input do cupom
removeCupomCode()

//executa a lógica do switch quando ele é clicado
function onClick() {
  redirect()
}

/* Se o switch está marcado (verde) ele deve adicionar a sessão de inserir o código de cupom e enviar os dados direto pro BD */
/* Se o switch está desmarcado (vermelho) ele deve remover a sessão de inserir o código de cupom e redirecionar para a página de "Motivo de desistência"*/
function redirect() {
  if (checkbox.checked) {
    addCupomCode()
    buttonNext.href = './send.html'
    console.log('checked')
  } else {
    removeCupomCode()
    buttonNext.href = './giveup.html'
    console.log('unchecked')
  }
}

// Classe cupomCode remove o elemento da página

// Adiciona a classe cupomCode na sectionCupomCode

function removeCupomCode() {
  cupomCode.classList.add('cupomCode')
}

// Remove a classe cupomCode na sectionCupomCode

function addCupomCode() {
  cupomCode.classList.remove('cupomCode')
}
