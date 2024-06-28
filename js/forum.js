// script.js

document.addEventListener('DOMContentLoaded', () => {
    const perguntaForm = document.getElementById('perguntaForm');
    const perguntaInput = document.getElementById('perguntaInput');
    const perguntasList = document.getElementById('perguntasList');
    const perguntaTitulo = document.getElementById('perguntaTitulo');
    const respostaForm = document.getElementById('respostaForm');
    const respostaInput = document.getElementById('respostaInput');
    const respostasList = document.getElementById('respostasList');

    function carregarPerguntas() {
        const perguntas = JSON.parse(localStorage.getItem('perguntas')) || [];
        perguntasList.innerHTML = '';
        perguntas.forEach((pergunta, index) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `respostas.html?pergunta=${index}`;
            link.textContent = pergunta;
            li.appendChild(link);
            perguntasList.appendChild(li);
        });
    }

    function adicionarPergunta(pergunta) {
        const perguntas = JSON.parse(localStorage.getItem('perguntas')) || [];
        perguntas.push(pergunta);
        localStorage.setItem('perguntas', JSON.stringify(perguntas));
        carregarPerguntas();
    }

    function carregarRespostas(perguntaIndex) {
        const perguntas = JSON.parse(localStorage.getItem('perguntas')) || [];
        if (perguntaIndex < perguntas.length) {
            const pergunta = perguntas[perguntaIndex];
            perguntaTitulo.textContent = pergunta;
            const respostas = JSON.parse(localStorage.getItem(`respostas_${perguntaIndex}`)) || [];
            respostasList.innerHTML = '';
            respostas.forEach(resposta => {
                const li = document.createElement('li');
                li.textContent = resposta;
                respostasList.appendChild(li);
            });
        }
    }

    function adicionarResposta(perguntaIndex, resposta) {
        const respostas = JSON.parse(localStorage.getItem(`respostas_${perguntaIndex}`)) || [];
        respostas.push(resposta);
        localStorage.setItem(`respostas_${perguntaIndex}`, JSON.stringify(respostas));
        carregarRespostas(perguntaIndex);
    }

    if (perguntaForm) {
        perguntaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pergunta = perguntaInput.value.trim();
            if (pergunta) {
                adicionarPergunta(pergunta);
                perguntaInput.value = '';
            }
        });

        carregarPerguntas();
    }

    if (respostaForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const perguntaIndex = urlParams.get('pergunta');

        if (perguntaIndex !== null) {
            carregarRespostas(perguntaIndex);

            respostaForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const resposta = respostaInput.value.trim();
                if (resposta) {
                    adicionarResposta(perguntaIndex, resposta);
                    respostaInput.value = '';
                }
            });
        } else {
            window.location.href = "forum.html";
        }
    }
});
