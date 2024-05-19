function lerDados() {
    const metodos = document.getElementById("metodos");
    fetch("./assets/json/anatomia.json")
      .then((response) => response.json())
      .then((data) => {
        data.metodos.forEach((item) => {
          const cartaoMetodos = `
            
              
                    <div class="card-group">
                        <div class="card">
                            <img src=${item.img} class="card-img-top" alt="vagina-pic" height="350px">
                            <div class="card-body">
    
                                <h3 class="card-title" style="color: black;">${item.titulo}</h3>
                                <p class="card-text">${item.descricao}</p>
                            </div>
                        </div>
                    </div>
                
            `;
          metodos.innerHTML += cartaoMetodos;
        });
      });
  }
  document.addEventListener("DOMContentLoaded", lerDados);
  