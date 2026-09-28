console.log("funciona");

// ejercicio 1 - async await
// cojo datos de la api con fetch y async await
async function getPost() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const datos = await respuesta.json();
    console.log("async await:");
    console.log(datos);
}

getPost();

// ejercicio 2 - callback clasico
// le paso una funcion como parametro para que la ejecute cuando tenga los datos
function getPostCallback(callback) {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            callback(datos);
        });
}

getPostCallback(function (datos) {
    console.log("callback:");
    console.log(datos);
});