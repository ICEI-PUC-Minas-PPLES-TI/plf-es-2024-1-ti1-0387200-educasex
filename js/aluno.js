fetch('../data/aluno.json')
  .then(response => response.json())
  .then(data => {
    // Atualiza os elementos HTML com os dados do JSON
    document.querySelector('.profile h1').textContent = data.username;
    document.querySelector('.profile p').textContent = `Localização: ${data.location}`;
    document.querySelector('.quiz').textContent = `${data.QuizzesSolved}`;
    document.querySelector('.aula').textContent = `${data.ClassesWatched}`;
    document.querySelector('.AulaSemana0').textContent = `${data.ClasseWeek0}`;
    document.querySelector('.AulaHorario0').textContent = `${data.ClasseTime0}`;
    document.querySelector('.AulaTema0').textContent = `${data.ClasseTopic0}`;
    document.querySelector('.AulaSemana1').textContent = `${data.ClasseWeek1}`;
    document.querySelector('.AulaHorario1').textContent = `${data.ClasseTime1}`;
    document.querySelector('.AulaTema1').textContent = `${data.ClasseTopic1}`;
  })
  .catch(error => console.error('Erro ao carregar dados:', error));