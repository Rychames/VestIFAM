var searchTerm = "";

  function pesquisar() {
    var newSearchTerm = document.getElementById("search-input").value.toLowerCase();
    var conteudo = document.getElementById("conteudo");

    if (newSearchTerm.trim().length === 0) {
      clearHighlight(conteudo);
      return;
    }

    if (newSearchTerm === searchTerm) {
      return;
    }

    searchTerm = newSearchTerm;

    clearHighlight(conteudo);

    if (window.find(searchTerm, false, false, true)) {
      var sel = window.getSelection();
      var range = sel.getRangeAt(0);
      var span = document.createElement("span");
      span.className = "highlighted";
      range.surroundContents(span);
    } else {
      alert("A palavra não foi encontrada no conteúdo.");
    }
  }

  function clearHighlight(element) {
    var highlightedElements = element.querySelectorAll('.highlighted');
    for (var i = 0; i < highlightedElements.length; i++) {
      var highlightedElement = highlightedElements[i];
      var parent = highlightedElement.parentNode;
      parent.replaceChild(document.createTextNode(highlightedElement.textContent), highlightedElement);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      pesquisar();
    }
  }

  var searchInput = document.getElementById("search-input");
  searchInput.addEventListener("keydown", handleKeyPress);
