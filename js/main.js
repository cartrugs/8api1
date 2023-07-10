// VARIABLES

const datosObjArray = [];

// FUNCIONES

// Función para crear fetch con async y await
const crearFetch = async () => {
    try {
        // Retorna promesa. await para que no continúe ejecutándose el programa.
        let res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')

        if (res.ok) {
            // await para que de tiempo a que se ejecute el programa
            res = await res.json()
            console.log(res)
        } else {
            throw('Ha ocurrido un error')
        }
    } catch (error) {
        console.log(error)
    }
}

// Función pra pintar blog

const pintarBlog = async () => {
    let datos = await crearFetch()
}

// INVOCACIÖN DE FUNCIONES

pintarBlog()



            


// const pintarBlog = () => {
    
// }
