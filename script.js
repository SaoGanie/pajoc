var e_a = 1;
var c_a = 1;
var p_a = 1;
var o_a = 1;

var e_2 = 2;
var c_2 = 2;
var p_2 = 2;
var o_2 = 2;

var e_3 = 3;
var c_3 = 3;
var p_3 = 3;
var o_3 = 3;

var e_4 = 4;
var c_4 = 4;
var p_4 = 4;
var o_4 = 4;

var e_5 = 5;
var c_5 = 5;
var p_5 = 5;
var o_5 = 5;

var e_6 = 6;
var c_6 = 6;
var p_6 = 6;
var o_6 = 6;

var e_7 = 7;
var c_7 = 7;
var p_7 = 7;
var o_7 = 7;

var e_8 = 8;
var c_8 = 8;
var p_8 = 8;
var o_8 = 8;

var e_9 = 9;
var c_9 = 9;
var p_9 = 9;
var o_9 = 9;

var e_10 = 10;
var c_10 = 10;
var p_10 = 10;
var o_10 = 10;

var e_j = 11;
var c_j = 11;
var p_j = 11;
var o_j = 11;

var e_q = 12;
var c_q = 12;
var p_q = 12;
var o_q = 12;

var e_k = 13;
var c_k = 13;
var p_k = 13;
var o_k = 13;

var baralhoJog1 = [
  e_a,
  c_a,
  p_a,
  o_a,
  e_2,
  c_2,
  p_2,
  o_2,
  e_3,
  c_3,
  p_3,
  o_3,
  e_4,
  c_4,
  p_4,
  o_4,
  e_5,
  c_5,
  p_5,
  o_5,
  e_6,
  c_6,
  p_6,
  o_6,
  e_7,
  c_7,
  p_7,
  o_7,
  e_8,
  c_8,
  p_8,
  o_8,
  e_9,
  c_9,
  p_9,
  o_9,
  e_10,
  c_10,
  p_10,
  o_10,
  e_j,
  c_j,
  p_j,
  o_j,
  e_q,
  c_q,
  p_q,
  o_q,
  e_k,
  c_k,
  p_k,
  o_k
];

var baralhoJog2 = [
  e_a,
  c_a,
  p_a,
  o_a,
  e_2,
  c_2,
  p_2,
  o_2,
  e_3,
  c_3,
  p_3,
  o_3,
  e_4,
  c_4,
  p_4,
  o_4,
  e_5,
  c_5,
  p_5,
  o_5,
  e_6,
  c_6,
  p_6,
  o_6,
  e_7,
  c_7,
  p_7,
  o_7,
  e_8,
  c_8,
  p_8,
  o_8,
  e_9,
  c_9,
  p_9,
  o_9,
  e_10,
  c_10,
  p_10,
  o_10,
  e_j,
  c_j,
  p_j,
  o_j,
  e_q,
  c_q,
  p_q,
  o_q,
  e_k,
  c_k,
  p_k,
  o_k
];

// A função embaralha os itens da lista
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Embaralha o baralho
embaralhar(baralhoJog1);
embaralhar(baralhoJog2);

console.log(baralhoJog1);
console.log(baralhoJog2);

function sorteio() {
 document.getElementById("nomes").innerHTML = "";
 
  
  
  document.getElementById("cartaSorteio1").innerHTML =
    "Carta do jogador 1 = " + baralhoJog1[0];
  document.getElementById("cartaSorteio2").innerHTML =
    "Carta do jogador 2 = " + baralhoJog2[0];

  if (baralhoJog1[0] > baralhoJog2[0]) {
    document.getElementById("resultadoSorteio").innerHTML =
      document.getElementById("p1").innerHTML + " começa";
  } else {
    document.getElementById("resultadoSorteio").innerHTML =
      document.getElementById("p2").innerHTML + " começa";
  }
  document.getElementById("sorteio").disabled = true;
  document.getElementById("start").disabled = false;

  sorteio1 = baralhoJog1[0];
  sorteio2 = baralhoJog2[0];
  
  if(sorteio1>sorteio2){
  vez=1;
  
};

if (sorteio2>sorteio1){
  vez=2;
};

  baralhoJog1.shift();
  baralhoJog2.shift();
}

function iniciar() {
  document.getElementById("cartaSorteio1").innerHTML = "";

  document.getElementById("cartaSorteio2").innerHTML = "";

  document.getElementById("resultadoSorteio").innerHTML = "";

  document.getElementById("ban1").innerHTML = baralhoJog1[0];
  document.getElementById("ban2").innerHTML = baralhoJog2[0];

  document.getElementById("card1").innerHTML = "X";
  document.getElementById("card2").innerHTML = "X";
  document.getElementById("card3").innerHTML = "X";
  document.getElementById("card4").innerHTML = "X";
  document.getElementById("card11").innerHTML = "X";
  document.getElementById("card22").innerHTML = "X";
  document.getElementById("card33").innerHTML = "X";
  document.getElementById("card44").innerHTML = "X";
  document.getElementById("start").disabled = true;

  var ban1 = String(baralhoJog1[0]);

  document.getElementById(ban1).disabled = true;

  var ban2 = String(baralhoJog2[0] * 100);

  document.getElementById(ban2).disabled = true;

  document.getElementById("rodada").innerHTML = "Rodada " + String(contRodada);
}





var vez=0;
var contRodada = 1;
var contVezGeral = 0;
var contVez1 = 0;
var contVez2 = 0;
var pontos1 = 0;
var pontos2 = 0;
var clickedButtons = [];
var sorteio1=0;
var sorteio2=0;









function buttonClicked(button, player) {
  
  
  if(vez==1){
  if (button.classList.contains("num-button2")){
    alert("Não é sua vez!");
    correspondingButton.disabled = false;
    vez=1;
    
  }
}
  
  if(vez==2){
  if (button.classList.contains("num-button1")){
    alert("Não é sua vez!");
    correspondingButton.disabled = false;
    vez=2;
    
  }
}
  
  
  
  
  
  if (button.classList.contains("num-button1")) {
    contVez1++;
    vez=2;
    
  } 
  
  if(button.classList.contains("num-button2")) {
    contVez2++;
    vez=1;
  }
  

  
  
  
  
  
  atualizarContVezGeral();
  

  
 
  
   

  document.getElementById("cartaSorteio2").innerHTML = "";
  // Desabilitar o botão clicado
  button.disabled = true;

  // Encontrar o botão correspondente do outro jogador
  let correspondingButtonId;
  if (player === 1) {
    // Player 1: Adiciona 99 ao ID para encontrar o botão correspondente do Player 2
    correspondingButtonId = parseInt(button.id) * 100;
  } else {
    // Player 2: Subtrai 99 do ID para encontrar o botão correspondente do Player 1
    correspondingButtonId = parseInt(button.id) / 100;
  }

  // Verificar se o botão correspondente existe e desabilitá-lo
  const correspondingButton = document.getElementById(
    correspondingButtonId.toString()
  );
  if (correspondingButton) {
    correspondingButton.disabled = true;
  }

  // Adicionar o botão clicado e o correspondente à fila de botões clicados
  clickedButtons.push(button);
  if (correspondingButton) {
    clickedButtons.push(correspondingButton);
  }

  // Se houver mais de 6 botões na fila, reabilitar os mais antigos e removê-los da fila
  if (clickedButtons.length > 4) {
    let oldestButton1 = clickedButtons.shift();
    let oldestButton2 = clickedButtons.shift();
    oldestButton1.disabled = false;
    if (oldestButton2) {
      oldestButton2.disabled = false;
    }
  }
  //Mostra as cartas a partir da quantidade de cliques no teclado2

  if (contVez2 == 1) {
    document.getElementById("card11").innerHTML = baralhoJog2[1];
  }

  if (contVez2 == 2) {
    document.getElementById("card22").innerHTML = baralhoJog2[2];
  }

  if (contVez2 == 3) {
    document.getElementById("card33").innerHTML = baralhoJog2[3];
  }

  if (contVez2 == 4) {
    document.getElementById("card44").innerHTML = baralhoJog2[4];
  }

  if (contVez1 == 1) {
    document.getElementById("card1").innerHTML = baralhoJog1[1];
  }

  if (contVez1 == 2) {
    document.getElementById("card2").innerHTML = baralhoJog1[2];
  }

  if (contVez1 == 3) {
    document.getElementById("card3").innerHTML = baralhoJog1[3];
  }

  if (contVez1 == 4) {
    document.getElementById("card4").innerHTML = baralhoJog1[4];
  }
  if (contVezGeral == 8) {
    document.getElementById("nxtRound").disabled = false;
  }

  if (contVez1 == 1) {
    if (button.id === String(baralhoJog1[1])) {
      pontos1 = pontos1 + baralhoJog1[1];

      document.getElementById("pontos1").innerHTML = String(pontos1);
    }
  }

  if (contVez1 == 2) {
    if (button.id === String(baralhoJog1[2])) {
      pontos1 = pontos1 + baralhoJog1[2];

      document.getElementById("pontos1").innerHTML = String(pontos1);
    }
  }

  if (contVez1 == 3) {
    if (button.id === String(baralhoJog1[3])) {
      pontos1 = pontos1 + baralhoJog1[3];

      document.getElementById("pontos1").innerHTML = String(pontos1);
    }
  }

  if (contVez1 == 4) {
    if (button.id === String(baralhoJog1[4])) {
      pontos1 = pontos1 + baralhoJog1[4];

      document.getElementById("pontos1").innerHTML = String(pontos1);
    }
  }

  if (contVez2 == 1) {
    if (button.id === String(baralhoJog2[1] * 100)) {
      pontos2 = pontos2 + baralhoJog2[1];

      document.getElementById("pontos2").innerHTML = String(pontos2);
    }
  }

  if (contVez2 == 2) {
    if (button.id === String(baralhoJog2[2] * 100)) {
      pontos2 = pontos2 + baralhoJog2[2];

      document.getElementById("pontos2").innerHTML = String(pontos2);
    }
  }

  if (contVez2 == 3) {
    if (button.id === String(baralhoJog2[3] * 100)) {
      pontos2 = pontos2 + baralhoJog2[3];

      document.getElementById("pontos2").innerHTML = String(pontos2);
    }
  }

  if (contVez2 == 4) {
    if (button.id === String(baralhoJog2[4] * 100)) {
      pontos2 = pontos2 + baralhoJog2[4];

      document.getElementById("pontos2").innerHTML = String(pontos2);
    }
  }

  if (contVezGeral == 8) {
    let elements = document.querySelectorAll(".num-button1");
    elements.forEach((element) => {
      element.disabled = true;
    });

    let elements2 = document.querySelectorAll(".num-button2");
    elements2.forEach((element2) => {
      element2.disabled = true;
    });
  }
}

function proximaRodada() {
  if (contVezGeral == 8) {
    let elements = document.querySelectorAll(".num-button1");
    elements.forEach((element) => {
      element.disabled = false;
    });

    let elements2 = document.querySelectorAll(".num-button2");
    elements2.forEach((element2) => {
      element2.disabled = false;
    });
  }

  if (contVezGeral == 8) {
    document.getElementById(String(baralhoJog1[0])).disabled = false;
    document.getElementById(String(baralhoJog2[0] * 100)).disabled = false;
  }

  contRodada++;

  baralhoJog1.shift();
  baralhoJog2.shift();
  baralhoJog1.shift();
  baralhoJog2.shift();
  baralhoJog1.shift();
  baralhoJog2.shift();
  baralhoJog1.shift();
  baralhoJog2.shift();
  baralhoJog1.shift();
  baralhoJog2.shift();

  contVez1 = 0;
  contVez2 = 0;
  contVezGeral = 0;

  iniciar();

  document.getElementById("start").disabled = false;

  document.getElementById("nxtRound").disabled = true;
  if (contRodada == 11) {
    if (pontos1 > pontos2) {
      document.getElementById("resultadoFinal").innerHTML =
        document.getElementById("p1").innerHTML + " Ganhou!";
    }
    if (pontos2 > pontos1) {
      document.getElementById("resultadoFinal").innerHTML =
        document.getElementById("p2").innerHTML + " Ganhou!";
    }

    if (pontos1 == pontos2) {
      if (baralhoJog1[0] > baralhoJog2[0]) {
        document.getElementById("resultadoFinal").innerHTML =
          document.getElementById("p1").innerHTML + " Ganhou!";
      } else {
        document.getElementById("resultadoFinal").innerHTML =
          document.getElementById("p2").innerHTML + " Ganhou!";
      }
    }
  }
  if (contRodada == 11) {
    document.getElementById("rodada").innerHTML = "Fim de Jogo";
    document.getElementById("start").disabled = true;
    
  }
}

function atualizarContVezGeral() {
  contVezGeral = contVez1 + contVez2;
}


function colocaNome(){
  
 
  var valor1 = document.getElementById("j1").value;
  var valor2 = document.getElementById("j2").value;
  
  document.getElementById("p1").innerHTML= valor1;
   document.getElementById("p2").innerHTML= valor2;
  
 
}