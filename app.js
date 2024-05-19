function lerDados() {
  const anatomia = document.getElementById("anatomia");
  fetch("./assets/json/anatomia.json")
    .then((response) => response.json())
    .then((data) => {
        data.feminino.forEach((item) => {
        const cartaoFeminino = `
        
          
                <div class="card-group">
                    <div class="card">
                        <img src=${item.img} class="card-img-top" alt="vagina-pic" height="350px">
                        <div class="card-body">

                            <h3 class="card-title" style="color: rgb(252, 68, 163);">${item.titulo}</h3>
                            <p class="card-text">${item.descricao}</p>
                        </div>
                    </div>
                </div>
            
        `;
        anatomia.innerHTML += cartaoFeminino;
         
      },
    );
    data.masculino.forEach((item) => {
        const cartaoMasculino = `
        
            
                <div class="card-group">
                    <div class="card">
                        <img src=${item.img} class="card-img-top" alt="vagina-pic" height="350px">
                        <div class="card-body">

                            <h3 class="card-title" style="color:blue;">${item.titulo}</h3>
                            <p class="card-text">${item.descricao}</p>
                        </div>
                    </div>
                </div>
           
        `;
        anatomia.innerHTML += cartaoMasculino;
         
      },
    );
    });


}


document.addEventListener("DOMContentLoaded", lerDados);
