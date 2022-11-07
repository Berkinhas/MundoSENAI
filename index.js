const showDatas = async () => {
    await fetch("http://localhost:3000/focos")
        .then((response) => response.json())
        .then((data) => {
            
            const cards = data.reduce((acc, el) => {

                if (el.risco_fogo == null) {
                    el.risco_fogo = "Nenhum"
                }
                if (el.sem_chuva_dias == null) {
                    el.sem_chuva_dias = "Sem registro de falta de chuva sguidas"
                }

                acc += `<div id="card_focos" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${el.pais}</h5>
                  <p class="card-text">Estado: ${el.estado} <br> Municipio: ${el.municipio} <br> Risco de foco: ${el.risco_fogo} <br> dias sem chuva: ${el.sem_chuva_dias} <br> latitude: ${el.latitude} <br> longitude: ${el.longitude} <br> satelite: ${el.satelite}.</a>
                </div>
              </div>
              <br>`

              const select = document.querySelector(".data")
              switch(el.risco_fogo) {
                case 0:
                  select.getElementsByClassName.color = "green"
                  break;

              }

                console.log(el);
              return acc
            }, '')

           
        
            const div = document.querySelector(".data")
            div.innerHTML = cards
        }).catch((err) => {
            console.log(err);
        })
}

showDatas()