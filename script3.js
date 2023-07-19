
// Função para fazer a chamada à API de Tradução
function traduzirTexto(texto, idiomaDestino, chaveAssinatura) {
    var endpoint = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to={language}";
    var url = endpoint.replace("{language}", idiomaDestino);
    var headers = new Headers();
    headers.append("Ocp-Apim-Subscription-Key", chaveAssinatura);
    headers.append("Content-Type", "application/json");
    var body = JSON.stringify([{ "Text": texto }]);
  
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
      .then(response => response.json())
      .then(result => {
        var traducao = result[0].translations[0].text;
        console.log("Texto original:", texto);
        console.log("Texto traduzido:", traducao);
        return traducao;
      })
      .catch(error => {
        console.error("Erro na tradução:", error);
        return texto;
      });
  }
  
  // Função para traduzir o conteúdo do site
  function traduzirConteudo() {
    var idiomaDestino = "en"; // Defina o idioma de destino para a tradução
    var chaveAssinatura = "fcae03746342418fb2d31b5eda939722"; // Substitua pela sua chave de assinatura
  
    // Selecione todos os elementos de texto no site
    var elementosDeTexto = $("body").find("*:not(script)").contents().filter(function() {
      return this.nodeType === 3 && $.trim(this.nodeValue) !== "";
    });
  
    // Traduza cada elemento de texto
    elementosDeTexto.each(function() {
      var texto = $(this).text();
      traduzirTexto(texto, idiomaDestino, chaveAssinatura)
        .then(traducao => {
          $(this).text(traducao);
          console.log("Tradução aplicada:", traducao);
        });
    });
  }
  
  // Evento de clique na imagem para traduzir o conteúdo
  $("#traduzir-btn").click(function() {
    console.log("Tradução iniciada...");
    traduzirConteudo();
  });
  
