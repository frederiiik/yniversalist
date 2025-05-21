document.addEventListener('DOMContentLoaded', function() {
  const keyboardToggle = document.getElementById('keyboardToggle');
  const virtualKeyboard = document.getElementById('virtualKeyboard');
  const inputText = document.getElementById('inputText');
  const keyboardTabs = document.getElementById('keyboardTabs');
  const russian = [
  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'І', 'Ѣ', 'Ѳ', 'Ѵ'];
  
  const ukrainian = [
  'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я', '\''];

  const belarusian = [
   'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'І', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ў', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '\''];

  const bulgarian = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ю', 'Я', 'І', 'Ѣ', 'Ѳ', 'Ѵ' ];

  const macedonian = [
    'А', 'Б', 'В', 'Г', 'Д', 'Ѓ', 'Е', 'Ж', 'З', 'Ѕ', 'И', 'Ј', 'К', 'Ќ', 'Л', 'Љ', 'М', 'Н', 'Њ', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'];

  const bcms = [
    'А', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'Љ', 'М', 'Н', 'Њ', 'О', 'П', 'Р', 'С', 'С́ ', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'];

  const kazakh = [
    'А', 'Ә', 'Б', 'В', 'Г', 'Ғ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'З́', 'И', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'С', 'С́', 'Т', 'У', 'Ұ', 'Ү', 'Ф', 'Х', 'Һ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'І', 'Ь', 'Э', 'Ю', 'Я'];

  const uzbek = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ў', 'Ғ', 'Җ', 'Қ', 'Ң', 'Ө', 'Ү', 'Һ'];

  const kyrgyz = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ҳ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

  const tajik = [
    'А', 'Б', 'В', 'Г', 'Ғ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Ӣ', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ӯ', 'Ф', 'Х', 'Ҳ', 'Ч', 'Ҷ', 'Ш', 'Ъ', 'Э', 'Ю', 'Я'];

  const rusyn = [
      'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Ё', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й','К', 'Л', 'М', 'Н', 'О', 'Ô', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ѣ'];
  
  const moldovan = [
    'А', 'В', 'Г', 'Д', 'Е', 'Ж', 'Ӂ', 'З', 'И', 'Й', 'І', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ă', 'Â', 'Ḑ', 'Ɣ', 'Î', 'Ï', 'Ĭ', 'Ȣ', 'Ş', 'Ț', 'Б', 'Ԁ', 'Ѐ', 'Ё', 'Ӗ', 'Є', 'Ж', 'Ԑ', 'Ѕ', 'Ꙅ', 'Ї', 'Ꙇ', 'Ј', 'Ꙥ', 'Ӧ', 'Ҫ', 'Ꙋ', 'Џ', 'Ш̩', 'Ꚗ', 'Щ', 'Ꙑ', 'Ꙗ', 'Ѡ', 'Ѣ', 'Ѥ', 'Ѧ', 'Ꙙ', 'Ѩ', 'Ꙝ', 'Ѫ', 'Ѭ', 'Ѯ', 'Ѱ', 'Ѳ', 'Ѷ', 'Ѵ', 'Ꙟ', 'Ѹ', 'Ѻ', 'Ѿ', 'Ҁ', 'Ӡ', 'Ꚁ', 'Ꙁ', 'Ꚏ'];

  const church_slavonic = [
    'ᲀ', 'ᲁ', 'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'Ѕ', 'Ꙅ', 'И', 'Й', 'І', 'Ї', 'Ꙇ', 'Ꙉ', 'К', 'Л', 'Ꙥ', 'М', 'Н', 'Ҥ', 'О', 'Ꙩ', 'Ꙫ', 'Ꙭ', 'ОУ', 'П', 'Р', 'С', 'Т', 'У', 'Ꙋ', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш', 'Щ', 'Ъ', 'ЪИ', 'ЪꙆ', 'Ꙑ', 'Ы', 'Ь', 'ЬИ', 'ЬꙆ', 'Э', 'Ю', 'Ꙕ', 'Ꙗ', 'Ѡ', 'Ѣ', 'Ꙓ', 'Ѥ', 'Ѧ', 'Ꙙ', 'Ѩ', 'Ꙝ', 'Ѫ', 'Ꙛ', 'Ѭ', 'Ѯ', 'Ѱ', 'Ѳ', 'Ѵ', 'Ѷ', 'Ꙟ', 'Ѻ', 'ѺѺ', 'Ѽ', 'Ѿ', 'Ꙍ', 'Ҁ', 'Ꙧ', 'Ꙣ', 'Ꙁ', 'Ꙃ', 'Ꙏ'];

  const all = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'З́ ', 'И', 'Й', 'К', 'Л', 'Л̌', 'М', 'Н', 'О', 'П', 'Р', 'С', 'С́ ', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ѐ', 'Ё', 'Ђ', 'Ѓ', 'Є', 'Ѕ', 'І', 'Ї', 'Ј', 'Љ', 'Њ', 'Ћ', 'Ќ', 'Ѝ', 'Ў', 'Џ', 'Ѡ', 'Ѣ', 'Ѥ', 'Ѧ', 'Ѩ', 'Ѫ', 'Ѭ', 'Ѯ', 'Ѱ', 'Ѳ', 'Ѵ', 'Ѷ', 'Ѹ', 'Ѻ', 'Ѽ', 'Ѿ', 'Ҁ', 'Ҋ', 'Ҍ', 'Ҏ', 'Ґ', 'Ғ', 'Ҕ', 'Җ', 'Ҙ', 'Қ', 'Ҝ', 'Ҟ', 'Ҡ', 'Ң', 'Ҥ', 'Ҧ', 'Ҩ', 'Ҫ', 'Ҭ', 'Ү', 'Ұ', 'Ҳ', 'Ҵ', 'Ҷ', 'Ҹ', 'Һ', 'Ҽ', 'Ҿ', 'Ӏ', 'Ӂ', 'Ӄ', 'Ӆ', 'Ӈ', 'Ӊ', 'Ӌ', 'Ӎ', 'Ӑ', 'Ӓ', 'Ӕ', 'Ӗ', 'Ә', 'Ӛ', 'Ӝ', 'Ӟ', 'Ӡ', 'Ӣ', 'Ӥ', 'Ӧ', 'Ө', 'Ӫ', 'Ӭ', 'Ӯ', 'Ӱ', 'Ӳ', 'Ӵ', 'Ӷ', 'Ӹ', 'Ꙁ', 'Ꙃ', 'Ꙅ', 'Ꙇ', 'Ꙉ', 'Ꙋ', 'Ꙍ', 'Ꙏ', 'Ꙑ', 'Ꙓ', 'Ꙕ', 'Ꙗ', 'Ꙙ', 'Ꙛ', 'Ꙝ', 'Ꙟ', 'Ꙡ', 'Ꙣ', 'Ꙥ', 'Ꙧ', 'Ꙩ', 'Ꙫ', 'Ꙭ', 'ꙮ', 'Ꚙ', 'Ꚛ', 'Ꚏ', 'Ꚗ'];

  const latin_all = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'À', 'Â', 'Ä', 'Ǎ', 'A̋', 'C̆', 'C̨̆', 'Ć', 'Č', 'C̣', 'C̦', 'D̂', 'Đ', 'D︠Z︡', 'D︠Ž︡', 'È', 'Ė', 'Ê', 'Ë', 'Ě', 'Ĕ', 'Ē', 'Ę', 'E̊', 'E`', 'F̀', 'Ḟ', 'Ǵ', 'G̀', 'Ğ', 'Ḥ', 'H̦', 'Í', 'Ì', 'Î', 'Ï', 'Ǐ', 'Ĭ', 'Ī', 'I͡A', 'I︠E︡', 'I︠Ę︡', 'I︠Ǫ︡', 'I︠U︡', 'J́', 'J̌', '`J', 'K̦', 'Ḱ', 'K̀', 'K̂', 'Ǩ', 'K̄', 'Ḳ', 'K︠H︡', 'K︠S︡', 'L̂', 'L̦', 'Ń', 'Ǹ', 'Ṅ', 'N̂', 'Ň', 'N̄', 'Ṇ', 'N̦', 'Ó', 'Ò', 'Ô', 'Ö', 'Ō', 'Ǫ', 'Ő', 'Œ', 'Ō︠T︡', 'P', 'Ṕ', 'P̀', 'P︠S︡', 'S̀', 'Ś', 'Ŝ', 'Š', 'Ș', 'T̀', 'Ț', 'T︠S︡', 'Ú', 'Û', 'Ü', 'Ŭ', 'U̐', 'Ū', 'Ű', 'Û̄', 'Ỳ', 'Ẏ', 'Ÿ', 'Y`', 'Ź', 'Ż', 'Ẑ', 'Z̈', 'Ž', 'Z̆', 'Z̄', 'Ž̧', 'Ž̦', 'Z︠H︡', '’', '\'','ʺ', '`'];
  
  const keyboardSections = {
    bcms: {
      label: "BCMS",
      chars: bcms
    },
    belarusian: {
      label: "Belarusian",
      chars: belarusian
    },
    bulgarian: {
      label: "Bulgarian",
      chars: bulgarian
    },
    kazakh: {
      label: "Kazakh",
      chars: kazakh
    },
    kyrgyz: {
      label: "Kyrgyz",
      chars: kyrgyz
    },
    macedonian: {
      label: "Macedonian",
      chars: macedonian
    },
    moldovan: {
      label: "Romanian",
      chars: moldovan
    },
    rusyn: {
      label: "Rusyn",
      chars: rusyn
    },
    russian: {
      label: "Russian",
      chars: russian
    },
    tajik: {
      label: "Tajik",
      chars: tajik
    },
    ukrainian: {
      label: "Ukrainian",
      chars: ukrainian
    },
    uzbek: {
      label: "Uzbek",
      chars: uzbek
    },
    church_slavonic: {
      label: "Slavonic",
      chars: church_slavonic
    },
    all: {
      label: "Full Cyrillic",
      chars: all
    },
    latin_all: {
      label: "Full Latin",
      chars: latin_all
    }
  };

  let isUpperCase = true;
  let currentSection = 'russian';
  
  if (!keyboardToggle || !virtualKeyboard || !inputText) {
    console.error("Some keyboard elements are missing from the DOM");
    return; 
  }
  
  if (!document.getElementById('keyboardGrid')) {
    console.error(`Required keyboard grid is missing`);
    return; 
  }
  
  keyboardToggle.addEventListener('click', function() {
    if (virtualKeyboard.style.display !== 'block') {
      virtualKeyboard.style.display = 'block';
      renderKeyboard();
      positionKeyboard();
    } else {
      virtualKeyboard.style.display = 'none';
    }
  });
  
  function positionKeyboard() {
    virtualKeyboard.style.top = 'calc(100% + 10px)';
    virtualKeyboard.style.bottom = 'auto';
  }
  
  document.addEventListener('click', function(e) {
    if (virtualKeyboard.style.display === 'block' &&
        !virtualKeyboard.contains(e.target) &&
        e.target !== keyboardToggle &&
        !keyboardToggle.contains(e.target)) {
      virtualKeyboard.style.display = 'none';
    }
  });

  if (keyboardTabs) {
    keyboardTabs.addEventListener('click', function(e) {
      if (e.target.classList.contains('keyboard-tab')) {
        const section = e.target.getAttribute('data-section');
        
        document.querySelectorAll('.keyboard-tab').forEach(tab => {
          tab.classList.remove('active');
        });
        e.target.classList.add('active');
        
        currentSection = section;
        renderKeyboard();
      }
    });
  }
  
  function renderKeyboard() {
    const keyboardGrid = document.getElementById('keyboardGrid');
    keyboardGrid.classList.add('keyboard-grid');    
    keyboardGrid.innerHTML = '';
    
    const uppercaseKey = document.createElement('button');
    uppercaseKey.className = 'keyboard-key uppercase-key';
    uppercaseKey.innerHTML = '<span class="material-symbols-outlined" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">shift_lock</span>';
    
    uppercaseKey.addEventListener('click', function(e) {
      e.stopPropagation();
      isUpperCase = !isUpperCase;
      renderKeyboard();
    });
    keyboardGrid.appendChild(uppercaseKey);
    
    if (currentSection === 'moldovan' || currentSection === 'church_slavonic' || currentSection === 'russian' || currentSection === 'belarusian' || currentSection === 'bulgarian' || currentSection === 'ukrainian' || currentSection === 'all') {
      const fontToggleKey = document.createElement('button');
      fontToggleKey.className = 'keyboard-key uppercase-key';
      fontToggleKey.innerHTML = '<span class="material-symbols-outlined" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">history_edu</span>';;
      fontToggleKey.title = "Toggle Monomakh font";
      
      fontToggleKey.addEventListener('click', (e) => {
        e.stopPropagation();
        keyboardGrid.classList.toggle('monomakh-font');
      });
      keyboardGrid.appendChild(fontToggleKey); 
    }
    
    if (keyboardSections[currentSection]) {
      keyboardSections[currentSection].chars.forEach(char => {
        const key = createKey(char);
        keyboardGrid.appendChild(key);
      });
    }
  }
  
  function createKey(char) {
    const key = document.createElement('button');
    key.className = 'keyboard-key';
    key.textContent = isUpperCase ? char : char.toLowerCase();
    
    key.addEventListener('click', function(e) {
      e.stopPropagation(); 
      insertAtCursor(inputText, key.textContent);
    });
    return key;
  }
  
  function insertAtCursor(textArea, text) {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const textBefore = textArea.value.substring(0, start);
    const textAfter = textArea.value.substring(end);
    
    textArea.value = textBefore + text + textAfter;
    
    textArea.selectionStart = start + text.length;
    textArea.selectionEnd = start + text.length;
    
    textArea.focus();
  }
  
  virtualKeyboard.style.display = 'none';
  
  if (keyboardTabs) {
    keyboardTabs.innerHTML = '';
    
    for (const [id, section] of Object.entries(keyboardSections)) {
      const tab = document.createElement('button');
      tab.className = 'keyboard-tab';
      if (id === currentSection) tab.classList.add('active');
      tab.setAttribute('data-section', id);
      tab.textContent = section.label;
      keyboardTabs.appendChild(tab);
    }
  }
  
  window.addKeyboardSection = function(sectionId, label, characters) {
    keyboardSections[sectionId] = {
      label: label,
      chars: characters
    };
    
    if (!document.querySelector(`.keyboard-tab[data-section="${sectionId}"]`)) {
      const tab = document.createElement('button');
      tab.className = 'keyboard-tab';
      tab.setAttribute('data-section', sectionId);
      tab.textContent = label;
      keyboardTabs.appendChild(tab);
    }
  };
  
  window.updateKeyboardSection = function(sectionId, characters) {
    if (keyboardSections[sectionId]) {
      keyboardSections[sectionId].chars = characters;
      if (currentSection === sectionId && virtualKeyboard.style.display === 'block') {
        renderKeyboard();
      }
    }
  };
});
