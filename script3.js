$(document).ready(function() {
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
                return result[0].translations[0].text;
            })
            .catch(error => {
                console.error("Erro na tradução:", error);
                return texto;
            });
    }

    // Função para traduzir o conteúdo do site
    function traduzirSite() {
        var idiomaDestino = "en"; // Defina o idioma de destino para a tradução
        var chaveAssinatura = "fcae03746342418fb2d31b5eda939722"; // Substitua pela sua chave de assinatura

        // Selecione todos os elementos de texto no site
        var elementosDeTexto = $("body").find("*:not(script)")
            .contents()
            .filter(function() {
                return this.nodeType === 3 && $.trim(this.nodeValue) !== "";
            });

        // Traduza cada elemento de texto
        elementosDeTexto.each(function() {
            var texto = $(this).text();
            traduzirTexto(texto, idiomaDestino, chaveAssinatura)
                .then(traducao => $(this).text(traducao));
        });
    }

    // Evento de clique no botão para traduzir o site
    $("#traduzir-btn").click(function() {
        traduzirSite();
    });
});

  
