const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id ==="AC"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id ==="remove"){
            if (pantalla.textContent.length ===1 || pantalla.textContent=== "Syntax Error" ){
                pantalla.textContent="0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id ==="equal"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent ="Syntax Error";
            }
            return;
        }

        if(boton.id ==="percent"){

            if (pantalla.textContent === "0"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent += "/100";
            }
            return;
        }


        if(pantalla.textContent ==="0" || pantalla.textContent=== "Syntax Error"){
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
    
    })

})

