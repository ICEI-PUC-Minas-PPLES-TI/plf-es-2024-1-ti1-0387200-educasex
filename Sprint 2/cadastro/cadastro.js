
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

function salvaPerguntas(perguntas) {
    //salva as novas informações juntamente às anteriores
    localStorage.setItem('db', JSON.stringify(perguntas));
}

function incluirPergunta() {
    //salva as novas perguntas fornecidas pelo usuário
    let objDados = leDados();
    let strPergunta = document.getElementById('pergunta').value;
    let strAlternativa1 = document.getElementById('alternativa1').value;
    let strAlternativa2 = document.getElementById('alternativa2').value;
    let strAlternativa3 = document.getElementById('alternativa3').value;
    let strAlternativa4 = document.getElementById('alternativa4').value;
    let strAlternativaCorreta = document.getElementById('correta').value;
    let NovaPergunta = {
        pergunta: strPergunta,
        alternativaA: strAlternativa1,
        alternativaB: strAlternativa2,
        alternativaC: strAlternativa3, 
        alternativaD: strAlternativa4,
        correta: strAlternativaCorreta, }

        objDados.perguntas.push (NovaPergunta);

        salvaPerguntas(objDados);
        let confirmacao = confirm('sua pergunta foi salva!');
        if (confirmacao) window.location.reload();
    }


//config dos botoes
document.getElementById ('incluirPergunta').addEventListener ('click', incluirPergunta);


