
  function pesquisar() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var conteudo = document.getElementById("conteudo");
    var regex = new RegExp(searchTerm, "gi");

    var conteudoHTML = conteudo.innerHTML;
    var conteudoDestacado = conteudoHTML.replace(regex, '<span class="highlighted">$&</span>');

    if (conteudoHTML !== conteudoDestacado) {
      conteudo.innerHTML = conteudoDestacado;

      var elementosDestacados = document.querySelectorAll('.highlighted');
      if (elementosDestacados.length > 0) {
        var primeiroElemento = elementosDestacados[0];
        primeiroElemento.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert("A palavra não foi encontrada no conteúdo.");
    }
  }

