function translateToEnglish() {
    var textToTranslate = $('html').html(); // Obtém todo o conteúdo do site para tradução

    // Configurações da API de Tradução Texto do Azure
    var subscriptionKey = 'fcae03746342418fb2d31b5eda939722';
    var endpoint = 'https://api.cognitive.microsofttranslator.com/';
    var location = 'brazilsouth';

    var url = endpoint + 'translate?api-version=3.0&from=auto&to=en';

    $.ajax({
        url: url,
        type: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify([{ 'text': textToTranslate }]),
        success: function (data) {
            var translatedText = data[0].translations[0].text;
            $('html').html(translatedText); // Atualiza o conteúdo traduzido no site
        },
        error: function (error) {
            console.error('Erro na tradução:', error);
        }
    });
}
