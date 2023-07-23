// Inicialize a API Translator da Microsoft com sua chave (API key)
const translatorConfig = {
    apiKey: 'fcae03746342418fb2d31b5eda939722', // Substitua 'SUA_CHAVE_AQUI' pela sua chave de API da Microsoft Translator
  };
  const translator = new window.MicrosoftTranslator.Translator(translatorConfig);

  // Função para traduzir para inglês
  function translateToEnglish() {
    translator.translateArray({
      texts: ['.image-text'],
      from: 'pt', // Português
      to: 'en',  // Inglês
    }, (err, result) => {
      if (err) {
        console.error('Erro ao traduzir para inglês:', err);
        return;
      }
      // Atualizar o texto com a tradução
      const englishText = result[0].translations[0].text;
      document.querySelector('.image-text').innerText = englishText;
    });
  }

  // Função para traduzir para português
  function translateToPortuguese() {
    translator.translateArray({
      texts: ['.image-text'],
      from: 'en', // Inglês
      to: 'pt',  // Português
    }, (err, result) => {
      if (err) {
        console.error('Erro ao traduzir para português:', err);
        return;
      }
      // Atualizar o texto com a tradução
      const portugueseText = result[0].translations[0].text;
      document.querySelector('.image-text').innerText = portugueseText;
    });
  }