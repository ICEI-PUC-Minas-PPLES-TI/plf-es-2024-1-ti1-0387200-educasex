// Seleciona os elementos do formulário
let form = document.querySelector("#form");
let firstNameInput = document.querySelector("#firstname");
let lastNameInput = document.querySelector("#lastname");
let ageInput = document.querySelector("#age");
let birthdateInput = document.querySelector("#birthdate");
let emailInput = document.querySelector("#email");
let numberInput = document.querySelector("#Number");
let locationInput = document.querySelector("#location");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#Confirmpassword");
let genderInputs = document.querySelectorAll('input[name="gender"]');
let preferenceInputs = document.querySelectorAll('input[name="preference"]');
let successMessage = document.querySelector("#sucesso-message");

// Adiciona um evento de envio ao formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!firstNameInput.value || !lastNameInput.value || !ageInput.value || !birthdateInput.value || 
        !emailInput.value || !numberInput.value || !locationInput.value || !passwordInput.value || 
        !confirmPasswordInput.value || !getSelectedValue(genderInputs)) {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return;
    }

    // Validações
    if (!validateName(firstNameInput.value) || !validateName(lastNameInput.value)) {
        alert("Nome e sobrenome não podem conter números.");
        return;
    }

    if (!validateAge(ageInput.value)) {
        alert("Idade menor que o permitido.");
        return;
    }

    if (!validateBirthdate(birthdateInput.value)) {
        alert("Data de nascimento menor que o permitido.");
        return;
    }

    if (!validateEmail(emailInput.value)) {
        alert("Email inválido!");
        return;
    }

    if (!validatePhoneNumber(numberInput.value)) {
        alert("Número de telefone inválido!");
        return;
    }

    const passwordValidationResult = validatePassword(passwordInput.value, confirmPasswordInput.value);
    if (passwordValidationResult !== true) {
        alert(passwordValidationResult);
        return;
    }

    // Cria um objeto para armazenar os dados do formulário
    let formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        age: ageInput.value,
        birthdate: birthdateInput.value,
        email: emailInput.value,
        number: numberInput.value,
        location: locationInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        gender: getSelectedValue(genderInputs),
        preference: getSelectedValues(preferenceInputs)
    };

    // Armazena os dados do formulário no Local Storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Exibe a mensagem de sucesso
    successMessage.style.display = "block";

    // Redireciona para a página inicial após 3 segundos
    setTimeout(() => {
        window.location.href = "index.html"; // Substitua "index.html" pela URL da sua página inicial
    }, 3000);
});

// Obter o valor selecionado do radio
function getSelectedValue(inputs) {
    for (let input of inputs) {
        if (input.checked) {
            return input.value;
        }
    }
    return null;
}

// Obter os valores selecionados do checkbox
function getSelectedValues(inputs) {
    let selectedValues = [];
    for (let input of inputs) {
        if (input.checked) {
            selectedValues.push(input.value);
        }
    }
    return selectedValues;
}

// Funções de validação

function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validateAge(age) {
    const ageNumber = parseInt(age, 10);
    return !isNaN(ageNumber) && ageNumber > 17;
}

function validateBirthdate(birthdate) {
    const birthdateYear = new Date(birthdate).getFullYear();
    return !isNaN(birthdateYear) && birthdateYear < 2006;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(number) {
    const phoneRegex = /^(\(\d{2}\)\s?9?\d{8}|\(\d{2}\)\s?\d{8}|\d{2}\s?9?\d{8}|\d{2}\s?\d{8})$/;
    return phoneRegex.test(number);
}

function validatePassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return "As senhas devem ser iguais.";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.";
    }

    return true;
}
