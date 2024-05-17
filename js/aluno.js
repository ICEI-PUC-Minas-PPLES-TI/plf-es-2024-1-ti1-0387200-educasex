fetch('../data/aluno.json')
  .then(response => response.json())
  .then(data => {
    // Atualiza os elementos HTML com os dados do JSON
    document.querySelector('.profile h1').textContent = data.username;
    document.querySelector('.profile p').textContent = `Localização: ${data.location}`;
    document.querySelector('.quiz').textContent = `${data.QuizzesSolved}`;
    document.querySelector('.aula').textContent = `${data.ClassesWatched}`;
  })
  .catch(error => console.error('Erro ao carregar dados:', error));