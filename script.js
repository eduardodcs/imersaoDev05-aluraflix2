function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){
      listarFilmeNaTela(filmeFavorito)  
    } else {
      alert("Imagem inválida")
    }
    campoFilmeFavorito.value = ""
}
  
function listarFilmeNaTela(filme){
    var listarFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
}