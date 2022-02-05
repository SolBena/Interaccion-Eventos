window.onload = function () {

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //Microdesafio - Paso 1    
    //Capturo el evento para cambiar el color del titulo cada vez que el usuario pasa el mouse sobre el elemento
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#E51B3E'
    })

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = '#000000'
    })


    //Microdesafio - Paso 2
    let input = document.querySelector('#titulo');
    let estadoSecreto = 0

    let key = (key) => {
        switch (true) {
            case estadoSecreto === 0 && key.toLowerCase() === "s":
                estadoSecreto++
                break;

            case estadoSecreto === 1 && key.toLowerCase() === "e":
                estadoSecreto++
                break;

            case estadoSecreto === 2 && key.toLowerCase() === "c":
                estadoSecreto++
                break;

            case estadoSecreto === 3 && key.toLowerCase() === "r":
                estadoSecreto++
                break;

            case estadoSecreto === 4 && key.toLowerCase() === "e":
                estadoSecreto++
                break;

            case estadoSecreto === 5 && key.toLowerCase() === "t":
                estadoSecreto++
                break;

            case estadoSecreto === 6 && key.toLowerCase() === "o":
                alert("SECTRO MAGICO")
                estadoSecreto = 0
                break;

            default:
                estadoSecreto = 0

        }
    }

    input.addEventListener('keypress', (evento) => {
        key(evento.key);
    }

    )


}