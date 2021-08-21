
const url = new URL(window.location.href);
const score = url.searchParams.get("pontuacao");

const showFim = document.getElementById('scorefinal')
showFim.innerHTML =  `Parabéns, você completou o desafio e acumulou ${score} pontos. Agora você é um Capitão!`