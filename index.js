const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionbutton = document.querySelector(".next-question")



let currentQuestionIndex = 0
let totalcorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionbutton.addEventListener("click", displayNextQuestion)

function startGame (){
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


const questions = [
    {
        question: "A sífilis é uma doença transmitida pela bactéria Treponema pallidum. Essa doença é caracterizada por:",
        answers: [
            { text: "Feridas nos órgãos sexuais, conhecidas por cancro duro." , correct: true},
            { text: "Inflamação no canal da uretra" , correct: false},
            { text: "Baixa na imunidade do portador." , correct: false},
            { text: "Lesões dolorosas." , correct: false}
        ]
    },
{
    question: "O HIV é o vírus causador da AIDS. Essa doença ataca o sistema imunológico, deixando a pessoa mais suscetível a doenças chamadas de oportunistas. As células mais atingidas por esse vírus são:",
    answers: [
        { text: "Hemácias." , correct: false},
        { text: "Plaquetas" , correct: false},
        { text: " Linfócitos T." , correct: true},
        { text: "Linfócitos B." , correct: false}
    ]
},
{
    question: "As doenças sexualmente transmissíveis podem ser causadas por diferentes agentes, tais como fungos, vírus, bactérias e protozoários. Entre as doenças abaixo, marque a única causada por um protozoário.",
    answers: [
        { text: "Aids." , correct: false},
        { text: "Tricomoníase." , correct: true},
        { text: "Hepatite." , correct: false},
        { text: "Candidíase." , correct: false}
    ]
},
{
    question: "A Aids é uma doença que se caracteriza pelo enfraquecimento do sistema imunológico, o que desencadeia o surgimento de doenças oportunistas. Sobre a Aids, marque a alternativa correta:",
    answers: [
        { text: " A Aids é causada por um vírus chamado de HPV." , correct: true},
        { text: "A Aids é transmitida exclusivamente por via sexual" , correct: false},
        { text: " A Aids, se tratada precocemente, apresenta 100% de chances de cura." , correct: false},
        { text: "O exame para detectar o vírus da Aids é feito por meio da coleta de sangue e não é disponível gratuitamente." , correct: false}
    ]
},

]
