// VARIABLES

const datosObjArray = [];
console.log(datosObjArray);
const noticiasContainer = document.querySelector('.noticias');

// FUNCIONES

// Función para crear fetch con async y await.
const crearFetch = async () => {
    try {
        // Retorna promesa. await para que no continúe ejecutándose el programa.
        let res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        // true entre 200 y 299. Si no es exitosa saltará al else
        if (res.ok) {
            // await para que de tiempo a que se ejecute el programa. json método para devolver los datos.
            res = await res.json()
            console.log(res)
            /* spread operator para desccomponer el array en elementos individuales.En este caso, se utiliza para descomponer el array res y pasar cada elemento como argumento separado al push(). Esto permite agregar cada elemento individual del array res al array datosObjArray */
            datosObjArray.push(...res)
        } else {
            throw('Ha ocurrido un error')
        }
    } catch (error) {
        console.log(error)
    }
}

// Función pra pintar blog
const pintarBlog = async () => {
    // Esperar a que se ejecute la función crearFetch con await.
    await crearFetch();
    

    datosObjArray.forEach(obj => {
        const noticiaCaja = document.createElement('div');
        noticiaCaja.classList.add('caja-container')
        noticiaCaja.innerHTML = `<h2>${obj.title}</h2> <p>${obj.body}</p>`;
        
        noticiasContainer.append(noticiaCaja);
    });
};

// INVOCACIÖN DE FUNCIONES
pintarBlog();





