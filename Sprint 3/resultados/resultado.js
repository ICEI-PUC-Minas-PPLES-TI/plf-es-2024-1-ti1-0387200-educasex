
async function buscarDados() {
    try {
        const response = await fetch('quiz.json');

       
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

      
        const dados = await response.json();
        return dados;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}
//funcao para ver quantos quizes foram concluídos
async function ContarQuiz() {
    try {
        const dados = await buscarDados();

        if (!dados) {
            console.error('Dados não foram carregados');
            return;
        }

        let exibicao = document.getElementById('exibicao');
        let info = '';
        const totalQuizzes = dados.length / 4;
        const porcentagem = (totalQuizzes / 9) * 100; 
        info += `<div class="progress" style="height: 30px;">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${porcentagem}%" aria-valuenow="${porcentagem}" aria-valuemin="0" aria-valuemax="100">${porcentagem.toFixed(2)}%</div>
                 </div>`;

        exibicao.innerHTML = info;
    } catch (error) {
        console.error('Erro ao contar quizzes concluídos:', error);
    }
}



async function ContarAcertos() {

    try {
        const dados = await buscarDados();

        if (!dados) {
            console.error('Dados não foram carregados');
            return;
        }
        let exibir = document.getElementById('exibir');
        let info = '';
        const vezes =  dados.length / 4;
        

        for (let j = 0; j < vezes; j++) {
            let contagem = 0;

            for (let i = 0; i < 4; i++) {
                const perguntas = j * 4 + i;
                if (dados[perguntas].acertos === 1) {
                    contagem++;
                }
            }

      
        let porcentagem = contagem * 25; 

        
        info += ` <h6> Quiz ${j + 1}</h6>
            <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-danger" role="progressbar" style="width: ${porcentagem}%" aria-valuenow="${porcentagem}" aria-valuemin="0" aria-valuemax="100">${porcentagem}%</div>
            </div>
        `;

        exibir.innerHTML = info;
        
}
    } catch (error) {
        console.error('Erro ao contar acertos:', error);
    }
}

document.addEventListener('DOMContentLoaded', ContarQuiz);
document.addEventListener('DOMContentLoaded', ContarAcertos);
document.getElementById('carregaresultados').addEventListener('click', ContarAcertos);


