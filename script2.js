var searchTerm = "";
  var highlightedElements = [];

  function pesquisar() {
    var newSearchTerm = document.getElementById("search-input").value.toLowerCase();
    var conteudo = document.getElementById("conteudo");
    var regex = new RegExp(searchTerm, "gi");

    resetHighlight();

    if (newSearchTerm.trim() === "") {
      return;
    }

    searchTerm = newSearchTerm;

    var conteudoHTML = conteudo.innerHTML;
    var conteudoDestacado = conteudoHTML.replace(regex, function(matchedWord) {
      var uniqueId = 'highlight-' + Math.random().toString(36).substr(2, 9);
      highlightedElements.push(uniqueId);
      return '<span id="' + uniqueId + '" class="highlighted">' + matchedWord + '</span>';
    });

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

  function resetHighlight() {
    var conteudo = document.getElementById("conteudo");

    for (var i = 0; i < highlightedElements.length; i++) {
      var element = document.getElementById(highlightedElements[i]);
      if (element) {
        element.outerHTML = element.innerHTML;
      }
    }
    highlightedElements = [];
  }

  function limparPesquisa() {
    document.getElementById("search-input").value = "";
    resetHighlight();
  }
