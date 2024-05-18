const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const tituloInput = document.querySelector("#titulo")
const conteudoInput = document.querySelector("#conteudo")
const linksiteInput = document.querySelector("#linksite")
const linkimgInput = document.querySelector("#linkimg")

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(nomeInput.value === ""){
        alert("Preencha o seu nome")
        return;
    }

    if(emailInput.value === "" || !IsEmailValid(emailInput.value)){
        alert("Preencha o seu email")
        return;
    }

    //Validação de email
    function IsEmailValid(email){
        const emailRegex = new RegExp(
            //usuario12@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
        );
    if(emailRegex.test(email)) {
        return true
    }
        return false
    }

    if(tituloInput.value === ""){
         alert("Preencha o título")
        return;
    }

    if(conteudoInput.value === ""){
        alert("Preencha o conteúdo")
        return;
    }
    if(linkimgInput.value === ""){
        alert("Coloque o link da imagem de capa")
        return;
    }
    if(linksiteInput.value === ""){
        alert("Coloque o link da página do artigo")
        return;
    }
    //Se todos os campos estiverem corretamente preenchidos, envie o formulario
    form.submit();
});

function cadastrarConteudo(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var titulo = document.getElementById("titulo");
    var conteudo = document.getElementById("conteudo");
    var linkimg = document.getElementById("linkimg");
    var linksite = document.getElementById("linksite");

    var dados = JSON.parse(localStorage.getItem("dadosConteudo"));

    if(dados == null){
        localStorage.setItem("dadosConteudo","[]");
        dados = [];

    }
    var auxRegistro = {
        nome: nome.value,
        contato: email.value,
        titulo: titulo.value,
        conteudo: conteudo.value,
        imagem: linkimg.value,
        site: linksite.value
    }
    
    dados.push(auxRegistro);

    localStorage.setItem("dadosConteudo", JSON.stringify(dados));
    alert("Conteúdo cadastrado com sucesso!")

    nome.value = "";
    email.value = "";
    titulo.value = "";
    conteudo.value = "";
    linkimg.value = "";
    linksite.value = "";
            
}