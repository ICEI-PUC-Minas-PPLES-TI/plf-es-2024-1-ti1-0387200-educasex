const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionbutton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionbutton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalcorrect = 0

let questions;

function startGame (){
 questions = leDados()
 console.log(questions)
    if (questions === undefined){
        window.alert ("Não possui quiz")
        return}
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
 
    displayNextQuestion()
}


function displayNextQuestion (){
 resetstate()

if (questions.length === currentQuestionIndex){
   return finishgame ()
}
 
 $questionText.textContent = questions[currentQuestionIndex].question
 questions[currentQuestionIndex].answers.forEach(answers => {
    const newanswer = document.createElement("button")
    newanswer.classList.add("button", "answer")
    newanswer.textContent = answers.text
    if (answers.correct) {
        newanswer.dataset.correct = answers.correct
    }
    $answersContainer.appendChild(newanswer)
    newanswer.addEventListener("click", selectanswer)
 })
}

function resetstate() {
     while($answersContainer.firstChild){
    $answersContainer.removeChild($answersContainer.firstChild)
 }

 
 document.body.removeAttribute("class")
 $nextQuestionbutton.classList.add("hide")
}

function selectanswer(event){
const answerclicked = event.target;
if (answerclicked.dataset.correct){
    document.body.classList.add("correct")
 totalcorrect++ 
} else{
    document.body.classList.add("incorrect")
}
document.querySelectorAll(".answer").forEach(button =>{
    if(button.dataset.correct){
       button.classList.add("correct") 
    } else{
        button.classList.add("incorrect")
    }
button.disabled = true   
})
 $nextQuestionbutton.classList.remove("hide")
 currentQuestionIndex++
}

function finishgame(){
 const totalquestions = questions.length
 const performance = Math.floor(totalcorrect *100 / totalquestions)
 let message = ""
 switch (true){
    case(performance >= 90):
    message = "Parabéns, você acertou todas as questões"
    break
    case(performance>= 70):
    message = "Muito bom"
    break
    case(performance >= 50):
    message = "Bom"
    break
    default:
        message = "Podemos estudar mais para melhorar"
}

$questionsContainer.innerHTML = 
`
 <p class="final-message">Você acertou ${totalcorrect} de ${totalquestions} questões
 <span>Resultado: ${message}</span>
 </p>
 <button onclick=window.location.reload() class="button">Refazer o teste</button>
`

}


const aaaaa = [
    {
        question: "Primeira Pergunta",
        answers: [
            { text: "Resposta 1" , correct: false},
            { text: "Resposta 2" , correct: false},
            { text: "Resposta 3" , correct: true},
            { text: "Resposta 4" , correct: false}
        ]
    },
{
    question: "Segunda Pergunta",
    answers: [
        { text: "Resposta 1" , correct: true},
        { text: "Resposta 2" , correct: false},
        { text: "Resposta 3" , correct: false},
        { text: "Resposta 4" , correct: false}
    ]
},
{
    question: "Terceira Pergunta",
    answers: [
        { text: "Resposta 1" , correct: false},
        { text: "Resposta 2" , correct: false},
        { text: "Resposta 3" , correct: false},
        { text: "Resposta 4" , correct: true}
    ]
},
{
    question: "Quarta Pergunta",
    answers: [
        { text: "Resposta 1" , correct: false},
        { text: "Resposta 2" , correct: false},
        { text: "Resposta 3" , correct: true},
        { text: "Resposta 4" , correct: false}
    ]
},

]


function leDados() {
    //le os dados já existentes, cadastrados por aquele usuário
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = { perguntas: [{}] }
    }

    return objDados;
}