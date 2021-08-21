let questaoAtual = 0

let score = 0

let showScore = document.getElementById('Score');
let scoreAtual = score 
showScore.innerHTML = `${scoreAtual}`

let contadorQuestao = 0 

class Questao{
    constructor(pergunta, alternativas, imagemPergunta, imagemResposta, correct, explicacao){ 
       
        this.pergunta= pergunta;
        this.alternativas = alternativas;
        this.imagemPergunta = imagemPergunta;
        this.imagemResposta = imagemResposta;
        this.correct = correct;
        this.explicacao = explicacao;
    }
    getCorrectAnswer() {
        return this.respostas[this.correct];
        
    }
   
     
}


const questao1 = new Questao ('Somos brasileiros e abençoados pela natureza abundante em nosso país. Nosso litoral é enorme e temos praias que agradam de Gregos a Troianos, mas....Sim, sempre tem a praia que é considerada por viajantes a praia mais bonita no Brasil. Essa praia é?' , ['Baía do Sancho' , 'Maragogi' , 'Praia dos Carneiros' , 'Praia da Pipa' ], "../Imagens/praiagenerica.jpg" , "../Imagens/baiadosancho.jpg", 0, 'A Baia do Sancho, que fica em Fernando de Noronha é considerada pelo Travellers Choice Awards a praia mais bonita do Brasil. Esse ranking existe desde 2002 e é divuldado anualmente. Nele há também a escolha do melhor hotel do mundo, melhor restaurante e muito mais ')

const questao2 = new Questao ('Somos viajantes profissionais, então nos limitamos apenas as nossas belissimas aguas. Que tal descermos um pouco e chegarmos ao nosso querido vizinho, Uruguai. Vai falar de Punta del Leste.Nada! Vamos falar sobre a capital mesmo, Montevideu. O que me diz das afirmações abaixo:' , ['Montevideu não tem orla, assim como a cidade de Sao Paulo.' , 'Montevideu tem uma orla linda e suas praias de água doce acompanham um grande calcadão que é chamado de Rambla.' , 'A praia da capital não é apropriada para turismo, serve apenas como porto para navios' , 'Por conta do clima é impossível curtir praias mo Uruguai.'] , "../Imagens/Montevideu.jpg" , "../Imagens/Rambla.jpg", 1, 'A Rambla é um dos grandes atrativos da capital uruguaia. Com mais de 20Km de extensão é o maior calcadão do mundo. Suas praias são de agua doce são banhadas pelo Rio Prata. A extensão é tão grande que não dá para enxergar a margem oposta, trazendo assim ainda mais uma sensacão de oceano!')

const questao3 = new Questao ('3) Rapa Nui ou Ilha de Páscoa: um dos destinos mais distantes, mas também mais fascinantes do mundo. Uma magia que fica a meio caminho entre a Polinésia Francesa e o Chile. Para conhecer esse destino tão UAU....' , ['O unico jeito é pegar um voo a partir de Santiago e ficar hospedado em hotel bem luxuoso' , 'Além do aviao, a outra única forma de conhecer lá é com cias maritimas especializadas em roteiros exoticos' , 'Alternativa B é correta, mas também é possível chegar lá com MSC e Costa Cruzeiros.' , 'Somente é possível chegar com voo fretado.'] , "../Imagens/IlhadePascoa.jpg" , "../Imagens/MSC.jpg", 2, 'Sim....da para chegar a bela Ilha de Páscoa com roteiros de grandes cias marítimas como MSC e Costa. Mas atenção, essa rota está apenas nos cruzeiros de volta ao mundo')

const questao4 = new Questao ('4) Patagonia, Terra do Fogo, Ushuaia e Cabo Horn compoem uma lista de destinos exóticos na América do Sul. Operado pela cia Australis, esse é sem duvida um roteiro para que deseja conhecer lugares que poucas pessoas já estivereram. Tantos detalhes e em terras e águas tao pouco conhecidos, a organização para essa viagem é fundamental. Sabendo disso, eu posso:' , ['Indicar que essa viagem seja feita em qualuqer mês do ano' , 'Não pode ser feito no verão (novembro a março) pois numa região fria, viajar nessa época não terá atrativos' , 'Os roteiros existem para o ano todo, mas não recomendamos setembro por conta dos furacões' , 'Esse roteiro só existe de setembro a abril.'] , "../Imagens/Patagonia.jpg" , "../Imagens/australis.jpg", 3, 'Sim, a época do ano é fator determinante para fazer cruzeiros pela Terra do Fogo. No auge do inverno, não é possível a navegação e por isso esses cruzeiros estão disponíveis somente de setembro a abril!')

const questao5 = new Questao ('5) Chega de frio...vamos para o Caribe onde o sol reina o ano todo! ABC Island é o apelido dado para Aruba, Bonaire e Curaçao...Dessas 3 belas ilhas podemos dizer que:' , ['Aruba e Curaçao são indicadas para viagens a lazer para pessoas de todas as idades e o ideal é escolher apenas uma pois as duas são bem parecidas' , 'Aruba é tranquila, Bonaire é rustica e Curaçao é mais badalado, assim eu planejo esse roteiro baseado no perfil do viajante' , 'Aruba é super agitada e Curaçao bem tranquila com poucos pontos turisticos' , 'Bonaire é pouco conhecida, mas possui resorts de luxo exclusivos!' ], "../Imagens/aruba.jpg" , "../Imagens/curacao.jpg", 1, 'As 3 ilhas são belíssimas e muito diferentes, por isso é importante entender o que o viajante deseja para então fazer a recomendação de quantidade de dias em cada ilha')

const questao6 = new Questao ('6) Bem vindo ao Velho Continente! O canal da Mancha é um braço de mar que faz parte do oceano Atlântico e que separa a ilha da Grã-Bretanha do norte da França e une o mar do Norte ao Atlântico. Sabendo disso, qual alternativa é correta:' , ['Uma das formas de ir de Londres a Paris, é de trem e esse trem passa por baixo do Canal da Mancha' , 'Para ir de Londres a Paris, a melhor forma é cruzar o Canal da Mancha de barco' , 'Não é possível cruzar de um país a outro via Canal da Mancha, a única alternativa é pegar um voo e esse sim vai sobrevoar o Canal' , ' O Canal da Mancha liga separa as duas capitais, e para ir de uma a outra basta pegar um Ferry Boat' ], "../Imagens/Londres.jpg" , "../Imagens/Eurotunel.jpg", 0, 'O Eurotúnel foi construído pelos por França e Inglaterra e levou 7 anos para isso. Considerada uma das maiores obras de engenharia, ele é composto por 3 túneis, sendo 2 deles para os trens que ligam os dois países e 1 de emergência.')

const questao7 = new Questao ('7) Poucos países na Europa não recebem cruzeiros maritimos. Sao eles:' , ['Alemanhã e Croacia' , 'Hungria e Austria' , 'Italia e Austria' , 'França e Bélgica' ], "../Imagens/Hungria.jpg" , "../Imagens/Fluviais.jpg", 1, 'Dessa lista, apenas Hungria e Austria não são banhadas por oceanos e por isso não recebem cruzeiros maritimos, apenas fluviais')

const questao8 = new Questao ('8) Da lista a seguir, quais países estão abertos ao turismo desde que o viajante apresente um certificado válido de vacinaçao contra COVID' , ['Itália e Grecia' , 'Fraça e Suiça' , 'Portugal, França e Suiça' , 'França, Suiça e Alemanha' ], "../Imagens/Vacina.jpg" , "../Imagens/paisesabertos.jpg", 3, 'A França, a Suiça e a Alemanhã estão abertas aos viajantes desde que apresentem o certificado de vacina contra COVID. Para Alemanhã, é necessário também um teste PCR negativo')

const questao9 = new Questao ('9) Um dos grandes atrativos da Suiça são os hotéis de montanha nos Alpes. É correto afirmar que:' , ['Os hotéis dos Alpes funcionam normalmente o ano todo' , 'Do fim de outubro até o inicio de dezembro a maioria dos hotéis de montanha ficam fechados' , 'Os hotéis de montanha fecham de abril a setembro' , 'Os hotéis de montanha fecham em janeiro e fevereiro' ], "../Imagens/hotelmontanha.jpg" , "../Imagens/tremsuica.jpg", 1, 'Muitos hotéis de montanha assim como trens panorâmicos nao funcionam do fim de outubro até inicio de janeiro')

const questao10 = new Questao ('10) Para viajar para Europa - desconsiderando pandemia - além de passaporte válido é preciso:' , ['Visto e Seguro de Viagem' , 'Nada, apenas passaporte' , 'Para os países que estão fora da UE, é preciso visto' , 'Apenas seguro viagem' ], "../Imagens/idaEuropa.jpg" , "../Imagens/seguroViagem.jpg", 3, 'Para viajar para Europa, apenas o Seguro Viagem é obrigatório e com cobertura de EUR30.000')
let arrayQuestoes = [];

let arrayAmericas = [questao1, questao2, questao3, questao4, questao5];
let arrayEuropa = [questao6, questao7, questao8, questao9, questao10];

arrayQuestoes = arrayAmericas

//EVENTOS A OCORREREM DURANTE O JOGO

//evento1 - colocar o nome do jogador

const url = new URL(window.location.href);
const playerName = url.searchParams.get("input");


//evento 2 - boas vidnas + aparecer a primiera questao 
const header = document.getElementById('header');

const primInt = document.createElement('h1');
primInt.innerText = `Tudo pronto, marujo ${playerName}?`;
header.appendChild(primInt);


//evento 3 - aparecer a primeira pergunta
const body = document.body
// console.log(body);
const firstQuestion = document.querySelector('#question');
//console.log(firstQuestion);

function showQuestion (questao) {
    document.getElementById('question').innerHTML =  
    `<img src="${questao.imagemPergunta}" class="card-img-top" alt="praia">
    <div class="card-body">
          <p id="card-text">${questao.pergunta}</p>
    <div id="opcoes" class="alternativas row p-2">
      <button id = "altA" onclick= "checaResposta(0,${questao.correct}, '${questao.explicacao}', '${questao.imagemResposta}')" class="btn btn-primary col-6">${questao.alternativas[0]}</button>
      <button id = "altB"  onclick="checaResposta(1,${questao.correct}, '${questao.explicacao}', '${questao.imagemResposta}')" class="btn btn-secondary col-6">${questao.alternativas[1]}</button>
      <button id = "altC"  onclick="checaResposta(2,${questao.correct}, '${questao.explicacao}', '${questao.imagemResposta}')" class="btn btn-info col-6">${questao.alternativas[2]}</button>
      <button id = "altD"  onclick="checaResposta(3,${questao.correct}, '${questao.explicacao}', '${questao.imagemResposta}')" class="btn btn-warning col-6">${questao.alternativas[3]}</button>  
      </div>       
     </div>`

    
}



//evento4 - clica no botao para responder - se acertou = socore +1 score + 1 // document.getElementById('Score').innerHTML = `Sua pontuação é: ${score}`
// ELSE - nao marca ponto, mantem o score, mostra foto e a explicaçao
// let newScore = 0


function checaResposta (resposta, correct, explicacao, imagemResposta) {    
    

    let textoResposta = "";
    
    if(resposta == correct) {
        
        textoResposta = `Parabéns ${playerName}! Você acertou a resposta!`

        score = score + 1
        showScore.innerHTML = `${score}`

        document.getElementById('cardResposta').className = "alert alert-success";

                       

    } else {
        //alert("errou")
        if(questaoAtual == 2 & score == 0) {
            window.location.href="gameover.html"
        }

        
        textoResposta = `Que pena ${playerName}! Você errou a resposta`;
        document.getElementById('cardResposta').className = "alert alert-danger";
        //copiar essa linha pro btn do final
                
    }
    var element = document.getElementById('altA');
    element.classList.add("hide");
    

    var element = document.getElementById('altB');
    element.classList.add("hide");
    

    var element = document.getElementById('altC');
    element.classList.add("hide");
    

    var element = document.getElementById('altD');
    element.classList.add("hide");
       
    
    let printResultadoCerto = document.getElementById('resposta');
    printResultadoCerto.innerHTML = textoResposta;

    let elemExplicacao = document.getElementById('descResposta');
    elemExplicacao.innerHTML = explicacao;  

    questaoAtual += 1

    let fotoExplicacao = document.getElementById('imagemResposta')
    fotoExplicacao.src  = imagemResposta    

    if (questaoAtual == 5) {
        document.getElementById('nextQuestion').innerHTML = "PROXIMO CONTINENTE"
    }

    contadorQuestao += 1

    if (contadorQuestao == 10) {
        window.location.href="fim.html?pontuacao="+score
        const showFim = document.getElementById('scorefinal')
        const printFim = document.createElement('h3');
        printFim.innerText =  `Parabéns, ${playerName}, você completou o desafio e acumulou ${score} pontos. Agora você é um Capitão!`
        showFim.appendChild(printFim) 
    }

}




showQuestion(arrayQuestoes[0]);


// evento 5 - clica no botao proxima pergunta


let nextQuestion = document.getElementById('nextQuestion')




nextQuestion.onclick = function() {
    if(questaoAtual == 5) {
        questaoAtual = 0
        arrayQuestoes = arrayEuropa
        document.getElementById('nextQuestion').innerHTML = "Proxima pergunta"
        
        
        primInt.innerText = `Parabéns, você já é almirante ${playerName}!`;
        header.appendChild(primInt);
    }
    
    

    document.getElementById('cardResposta').classList.add("hide")

    document.getElementById('imagemResposta').src  = ""
      
    document.getElementById('resposta').innerHTML = ""
    
    document.getElementById('descResposta').innerHTML = "";  
    
    

    
    
    showQuestion(arrayQuestoes[questaoAtual])
   
}


// evento 6 - aparece a segunda pergunta e repete a partir do evento 3, mudando apenas o contador do score

