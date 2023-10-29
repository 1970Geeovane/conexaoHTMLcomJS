let logo = document.getElementById("logo")
//console.log(logo)

let postAutor = document.getElementsByClassName("post-autor")
//console.log(postAutor)

let texto02 = document.querySelector("#post02 .post-texto")
//console.log(texto02)

let listaRedesFooter = document.querySelectorAll("footer .lista_redes")
//console.log(listaRedesFooter)

function percorrerArray(lista){
    for(let i = 0; i< lista.length; i++){
        console.log(lista[i]);
    }
}
percorrerArray(listaRedesFooter)
