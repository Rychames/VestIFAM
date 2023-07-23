// Função para traduzir para inglês
function translateToEnglish() {
    const textToTranslate = document.querySelector('.image-text').innerText;
    const apiKey = '6f4d0b92dd5940868af1cfed82ed7cd2'; // Substitua 'SUA_CHAVE_AQUI' pela sua chave de API da Microsoft Translator

    fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=pt&to=en`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey,
        'Ocp-Apim-Subscription-Region': 'brazilsouth', // Substitua pela região da sua chave de API
      },
      body: JSON.stringify([{ text: textToTranslate }]),
    })
    .then(response => response.json())
    .then(data => {
      const translatedText = data[0].translations[0].text;
      document.querySelector('.image-text').innerText = translatedText;
    })
    .catch(error => {
      console.error('Erro ao traduzir para inglês:', error);
    });
  }

  // Função para traduzir para português
  function translateToPortuguese() {
    const textToTranslate = document.querySelector('.image-text').innerText;
    const apiKey = '6f4d0b92dd5940868af1cfed82ed7cd2s'; // Substitua 'SUA_CHAVE_AQUI' pela sua chave de API da Microsoft Translator

    fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=pt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey,
        'Ocp-Apim-Subscription-Region': 'brazilsouth', // Substitua pela região da sua chave de API
      },
      body: JSON.stringify([{ text: textToTranslate }]),
    })
    .then(response => response.json())
    .then(data => {
      const translatedText = data[0].translations[0].text;
      document.querySelector('.image-text').innerText = translatedText;
    })
    .catch(error => {
      console.error('Erro ao traduzir para português:', error);
    });
  }
