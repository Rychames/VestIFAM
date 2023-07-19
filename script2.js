var highlightedElements = [];

  function pesquisar() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var conteudo = document.getElementById("conteudo");
    var regex = new RegExp(searchTerm, "gi");

    resetHighlight();

    if (searchTerm.trim() === "") {
      clearHighlight(conteudo);
      return;
    }

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
    clearHighlight(conteudo);
    highlightedElements = [];
  }

  function clearHighlight(element) {
    var highlightedElements = element.querySelectorAll('.highlighted');
    for (var i = 0; i < highlightedElements.length; i++) {
      var highlightedElement = highlightedElements[i];
      var textNode = document.createTextNode(highlightedElement.textContent);
      highlightedElement.parentNode.replaceChild(textNode, highlightedElement);
    }
  }
