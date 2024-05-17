fetch('../data/educador.json')
  .then(response => response.json())
  .then(data => {
    // Atualiza os elementos HTML com os dados do JSON
    document.querySelector('.profile h1').textContent = data.username;
    document.querySelector('.profile p').textContent = `Localização: ${data.location}`;
    document.querySelector('.quiz').textContent = `${data.QuizzesSent}`;
    document.querySelector('.alunos').textContent = `${data.StudentsServed}`;
    document.querySelector('.nota').textContent = `${data.score}`;
    document.querySelector('.bio').textContent = `${data.bio}`;
  })
  .catch(error => console.error('Erro ao carregar dados:', error));