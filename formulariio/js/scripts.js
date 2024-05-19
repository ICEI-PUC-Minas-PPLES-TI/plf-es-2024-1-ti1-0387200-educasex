const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const tituloInput = document.querySelector("#titulo")
const conteudoInput = document.querySelector("#conteudo")
const linksiteInput = document.querySelector("#linksite")
const linkimgInput = document.querySelector("#linkimg")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nomeInput.value === "") {
        alert("Preencha o seu nome")
        return;
    }

    if (emailInput.value === "" || !IsEmailValid(emailInput.value)) {
        alert("Preencha o seu email")
        return;
    }

    function IsEmailValid(email) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
        );
        return emailRegex.test(email);
    }

    if (tituloInput.value === "") {
        alert("Preencha o título")
        return;
    }

    if (conteudoInput.value === "") {
        alert("Preencha o conteúdo")
        return;
    }
    if (linkimgInput.value === "") {
        alert("Coloque o link da imagem de capa")
        return;
    }
    if (linksiteInput.value === "") {
        alert("Coloque o link da página do artigo")
        return;
    }

    cadastrarConteudo();
    form.submit();
});

function cadastrarConteudo() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var titulo = document.getElementById("titulo").value;
    var conteudo = document.getElementById("conteudo").value;
    var linkimg = document.getElementById("linkimg").value;
    var linksite = document.getElementById("linksite").value;

    var auxRegistro = {
        nome: nome,
        contato: email,
        titulo: titulo,
        conteudo: conteudo,
        imagem: linkimg,
        site: linksite
    }

    // Use a timestamp como chave única para cada registro
    var timestamp = new Date().getTime();

    localStorage.setItem("conteudo_" + timestamp, JSON.stringify(auxRegistro));
    alert("Conteúdo cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("linkimg").value = "";
    document.getElementById("linksite").value = "";
}
