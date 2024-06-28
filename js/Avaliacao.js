const btn = document.querySelector("button[type='submit']");
const evaluateLaterBtn = document.querySelector(".evaluate-later");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const textarea = document.querySelector("textarea");
const ratingInputs = document.querySelectorAll('input[name="rate"]');
const editBtn = document.querySelector(".edit");

btn.onclick = () => {
  let selectedRating;
  ratingInputs.forEach((input) => {
    if (input.checked) {
      selectedRating = input.value;
    }
  });

  const comment = textarea.value.trim();

  if (selectedRating && comment) {
    let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
    
    const newRating = {
      rating: selectedRating,
      comment: comment,
      date: new Date().toISOString()
    };
    
    ratings.push(newRating);
    
    localStorage.setItem("ratings", JSON.stringify(ratings));
    
    widget.style.display = "none";
    post.style.display = "block";
  } else {
    alert("Por favor, selecione uma avaliação e adicione um comentário.");
  }

  return false;
}

evaluateLaterBtn.onclick = () => {
  // Redirecionar para outra página
  window.location.href = "paginaInicial.html";
}

editBtn.onclick = () => {
  widget.style.display = "block";
  post.style.display = "none";
}
