const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionbutton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionbutton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0



function startGame () {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion (){
 while($answersContainer.firstChild){
    $answersContainer.removeChild($answersContainer.firstChild)
 }

 
 document.body.removeAttribute("class")
 $nextQuestionbutton.classList.add("hide")
 
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

function selectanswer(event){
const answerclicked = event.target;
if (answerclicked.dataset.correct){
    document.body.classList.add("correct")
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





const questions = [
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
        { text: "Resposta 1" , correct: false},
        { text: "Resposta 2" , correct: false},
        { text: "Resposta 3" , correct: true},
        { text: "Resposta 4" , correct: false}
    ]
},
{
    question: "Terceira Pergunta",
    answers: [
        { text: "Resposta 1" , correct: false},
        { text: "Resposta 2" , correct: false},
        { text: "Resposta 3" , correct: true},
        { text: "Resposta 4" , correct: false}
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