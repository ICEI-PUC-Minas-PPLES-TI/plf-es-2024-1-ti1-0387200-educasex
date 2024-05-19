function lerDados() {
  const doencas = document.getElementById("doencas");
  fetch("./assets/json/anatomia.json")
    .then((response) => response.json())
    .then((data) => {
      data.doencas.forEach((item) => {
        const cartaoDoencas = `
          
            
                  <div class="card-group">
                      <div class="card">
                          <img src=${item.img} class="card-img-top" alt="vagina-pic" height="350px">
                          <div class="card-body">
  
                              <h3 class="card-title" style="color: #02ba46;">${item.titulo}</h3>
                              <p class="card-text">${item.descricao}</p>
                          </div>
                      </div>
                  </div>
              
          `;
        doencas.innerHTML += cartaoDoencas;
      });
    });
}
document.addEventListener("DOMContentLoaded", lerDados);
