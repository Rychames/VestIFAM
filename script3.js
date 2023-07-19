
  function translateToEnglish() {
    var elementsToTranslate = document.querySelectorAll('body *');

    var params = {
      to: 'en'
    };

    var translator = new Microsoft.Translator.Widget.TranslateWidget(params);
    translator.showWidget(elementsToTranslate);
  }

