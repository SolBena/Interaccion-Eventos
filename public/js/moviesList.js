window.onload = function () {

    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector('figure');

    /*     let modo = confirm('Desea modo oscuro');
        if(modo){
            body.style.backgroundColor = '#7f7f7f'
            body.classList.add('fondoMoviesList');
        } */

    //Microdesafio - Paso 1    
    //Se aplica el modo oscuro si el usuario pasa el mouse sobre el logo
    logo.addEventListener("mouseover", () => {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

    

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color = 'white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}