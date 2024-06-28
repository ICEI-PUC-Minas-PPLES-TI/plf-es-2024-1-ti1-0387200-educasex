async function buscarDados() {
    try {
        const response = await fetch('../data/quiz3.json');
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const dados = await response.json();
        return dados;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

async function ExibirQuiz() {
    try {
        const dados = await buscarDados();
        if (!dados) {
            console.error('Dados não foram carregados');
            return;
        }

        let exibicao = document.getElementById('quiz');
        let info = '';

        dados.forEach((item, index) => {
            if (item.pergunta) {
                info += `
                <div class="list-group mb-3">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        <h5 class="mb-1">${item.pergunta}</h5>
                    </a>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="pergunta${index}" value="A" id="pergunta${index}A">
                        <label class="form-check-label" for="pergunta${index}A">${item.alternativaA}</label>
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="pergunta${index}" value="B" id="pergunta${index}B">
                        <label class="form-check-label" for="pergunta${index}B">${item.alternativaB}</label>
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="pergunta${index}" value="C" id="pergunta${index}C">
                        <label class="form-check-label" for="pergunta${index}C">${item.alternativaC}</label>
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="pergunta${index}" value="D" id="pergunta${index}D">
                        <label class="form-check-label" for="pergunta${index}D">${item.alternativaD}</label>
                    </li>
                </div>`;
            }
        });

        exibicao.innerHTML = info;
    } catch (error) {
        console.error('Erro ao exibir o quiz:', error);
    }
}

function salvarRespostas() {
    buscarDados().then(dados => {
        if (!dados) {
            console.error('Dados não foram carregados');
            return;
        }

        const respostas = [];
        dados.forEach((item, index) => {
            if (item.pergunta) {
                const name = `pergunta${index}`;
                const checkedOption = document.querySelector(`input[name="${name}"]:checked`);
                if (checkedOption) {
                    const respostaCorreta = item.correta;
                    const respostaUsuario = checkedOption.value;
                    const resultado = respostaUsuario === respostaCorreta ? 1 : 0;

                    // Adiciona a classe correta ou errada ao elemento pai da opção selecionada
                    const listItem = checkedOption.closest('li');
                    if (resultado === 1) {
                        listItem.classList.add('correta');
                    } else {
                        listItem.classList.add('errada');
                    }

                    respostas.push({
                        pergunta: item.pergunta,
                        respostaCorreta: respostaCorreta,
                        respostaUsuario: respostaUsuario,
                        resultado: resultado
                    });
                }
            }
        });

        localStorage.setItem('respostasQuiz', JSON.stringify(respostas));
        alert('Respostas salvas com sucesso!');
    });
}

document.addEventListener('DOMContentLoaded', ExibirQuiz);