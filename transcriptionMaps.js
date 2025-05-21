const transcriptionMaps = {
  russian: {
    din_1460: {'і': 'ï', 'ѣ': 'ê', 'ѳ': 'f', 'ѵ': 'ẏ','а': 'a', 
      'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë', 'ж': 'ž', 
      'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's','т': 't', 'у': 'u', 'ф': 'f', 
      'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'šč', 'ъ': 'ʺ', 'ы': 'y', 
      'ь': 'ʹ', 'э': 'ė', 'ю': 'ju', 'я': 'ja'}, //complete 30.04

    gost_7_79_2000_b: {'є': 'ê', 'ѕ': 'ẑ', 'ѫ': 'ǎ', 'і': 'ì', 'ѣ': 'ě', 'ѳ': 'f̀', 'ѵ': 'ỳ','ґ': 'g̀',
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ё',
      'ж': 'ž', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 'ъ': 'ʺ',
      'ы': 'y', 'ь': 'ʹ', 'э': 'è', 'ю': 'û', 'я': 'â'},//complete 30.04

    gost_7_79_2000_a: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
      'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'x', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shh',
      'ъ': '``', 'ы': 'y`', 'ь': '`', 'э': 'е`', 'ю': 'yu', 'я': 'ya'}, //complete 30.04

    iso_9: {'є': 'ê', 'ѕ': 'ẑ', 'ѫ': 'ǎ', 'і': 'ì', 'ѣ': 'ě', 'ѳ': 'f̀', 'ѵ': 'ỳ','ґ': 'g̀', 'а': 'a', 'б': 'b', 'в': 'v', 
      'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë','ж': 'ž', 'з': 'z', 'и': 'i', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm','н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 
      'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ',
      'ы': 'y', 'э': 'è', 'ю': 'û', 'я': 'â', 'ъ': 'ʺ', 'ь': 'ʹ'}, //complete 30.04

    iso_r9_ru: {'а': 'a','б': 'b','в': 'v','г': 'g','д': 'd','е': 'e','ё': 'ë','ж': 'ž',
      'з': 'z','и': 'i', 'й': 'j','і': 'ī','к': 'k','л': 'l','м': 'm','н': 'n','о': 'o', 
      'п': 'p','р': 'r','с': 's','т': 't','у': 'u','ф': 'f','х': 'h','ц': 'c','ч': 'č',
      'ш': 'š','щ': 'šč','ъ': 'ʺ','ы': 'y','ь': '′','ѣ': 'ě','э': 'e̊','ю': 'ju',
      'я': 'ja','’': '″','ѫ': '.″', 'ѳ': 'ḟ', 'ѵ': 'ẏ'},  //complete 30.04

    ala_lc: {'і': 'ī', 'ѣ': 'i︠e︡', 'ѳ': 'ḟ', 'ѵ': 'ẏ', 'а': 'a', 'б': 'b', 'в': 'v',
      'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë','ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'ĭ', 
      'к': 'k', 'л': 'l', 'м': 'm','н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 
      'т': 't', 'у': 'u','ф': 'f', 'х': 'kh', 'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 
      'щ': 'shch', 'ъ': 'ʺ','ь': 'ʹ', 'ʼ': 'ʼ', 'ы': 'y', 'э': 'ė', 'ю': 'i︠u︡', 'я': 'i︠a︡'}, //complete 30.04

    bnf_france: {'і': 'ì', 'ѣ': 'ĕ', 'ѫ': 'ă', 'ѳ': 'f̀', 'ѵ': 'ỳ','ґ': 'g̀',
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'ž', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 'ъ': 'ʺ', 
      'ь': 'ʹ','ы': 'y', 'э': 'è', 'ю': 'û', 'я': 'â'}, //complete 30.04
    
    bs_2979: {'тс': 't-s', 'і': 'ī', 'ѳ': 'ḟ', 'ѣ': 'ê', 'ѵ': 'y̆', 'а': 'a',
      'б': 'b','в': 'v','г': 'g','д': 'd','е': 'e','ё': 'ё','ж': 'zh','з': 'z',
      'и': 'i','й': 'ĭ','к': 'k','л': 'l','м': 'm','н': 'n','о': 'o','п': 'p',
      'р': 'r','с': 's','т': 't','у': 'u','ф': 'f','х': 'kh','ц': 'ts','ч': 'ch',
      'ш': 'sh','щ': 'shch','ъ': 'ʺ','ы': 'ȳ','ь': 'ʼ','э': 'é','ю': 'yu','я': 'ya'}, //complete 30.04
    
    bgn_pcgn: {
      _transliterate: function(text) {
        const vowels = new Set(['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']);
        const consonants = new Set([
          'б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н',
          'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'
        ]);
        const specialFollowers = new Set(['а', 'у', 'ы', 'э']);
        
        const baseMapping = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ж': 'zh',
          'з': 'z', 'и': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
          'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
          'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
          'ъ': '"', 'ь': '’', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        };
        
        const result = [];
        const length = text.length;
        
        function shouldUseYe(i) {
          if (i === 0) return true; 
          
          const prev = text[i - 1].toLowerCase();
          return vowels.has(prev) || prev === 'й' || prev === 'ъ' || prev === 'ь';
        }
        
        function isCyrillic(char) {
          return char && char.match(/[\u0400-\u04FF]/);
        }
        
        for (let i = 0; i < length; i++) {
          const current = text[i];
          const currentLower = current.toLowerCase();
          const next = i < length - 1 ? text[i + 1].toLowerCase() : null;
          const prev = i > 0 ? text[i - 1].toLowerCase() : null;
          const isUpperCase = current !== currentLower;
          
          let replacement;
          
          switch (currentLower) {
            case 'й': {
              if (next && specialFollowers.has(next)) {
                replacement = 'y·';
              } else {
                replacement = 'y';
              }
              break;
            }
            
            case 'ы': {
              if (next && specialFollowers.has(next)) {
                replacement = 'y·';
              } 
              else if (prev && vowels.has(prev)) {
                replacement = '·y';
              } else {
                replacement = 'y';
              }
              break;
            }
            
            case 'е': {
              if (shouldUseYe(i)) {
                replacement = 'ye';
              } else {
                replacement = 'e';
              }
              break;
            }
            
            case 'ё': {
              if (shouldUseYe(i)) {
                replacement = 'yë';
              } else {
                replacement = 'ë';
              }
              break;
            }
            
            case 'т': {
              if (next === 'с') {
                replacement = 't·';
              } else {
                replacement = 't';
              }
              break;
            }
            
            case 'ш': {
              if (next === 'ч') {
                replacement = 'sh·';
              } else {
                replacement = 'sh';
              }
              break;
            }
            
            default: {
              replacement = baseMapping[currentLower] || current;
            }
          }
          
          if (isUpperCase && replacement.length > 0) {
            if (replacement.length === 1) {
              replacement = replacement.toUpperCase();
            } else {
              replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
          }
          
          result.push(replacement);
        }
        
        return result.join('');
      },
      
      transliterate: function(text) {
        if (!text) return '';
        return this._transliterate(text);
        }
      },

    national: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 
      'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh',
      'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': 'ie', 'ы': 'y', 'ь': '',
      'э': 'e', 'ю': 'iu', 'я': 'ia'}, //complete
    
    duden: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'o, jo',
      'ж': 'sch', 'з': 'z', 'и': 'i', 'й': 'i', 'к': 'k', 'л': 'l',
      'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'z', 'ч': 'tsch', 'ш': 'sch', 'щ': 'schtsch',
      'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'ju', 'я': 'ja'}, //complete

    bordas: {},

    swedish: {}
  },

  ukrainian: {
    icao: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie',
      'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l',
      'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'iu',
      'я': 'ia'},//ommitted

    din_1460: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'je', 'ж': 'ž', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'ї', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'č',
      'ш': 'š', 'щ': 'šč', 'ь': 'ʹ', 'ю': 'ju', 'я': 'ja', '\'': 'ʼ', 'є': 'je'}, //complete 30.04

    iso_9: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g̀', 'д': 'd', 'е': 'e',
      'є': 'ê', 'ж': 'ž', 'з': 'z', 'и': 'i', 'і': 'ì', 'ї': 'ï', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
      'ш': 'š', 'щ': 'ŝ', 'ь': 'ʹ', '\'': '’', 'ю': 'û', 'я': 'â'}, //complete 30.04

    iso_r9_ua: {'а': 'a','б': 'b','в': 'v','г': 'g','ґ': 'g','д': 'd','е': 'e',
      'є': 'je','ж': 'ž','з': 'z','и': 'i', 'й': 'j','і': 'ī','ї': 'ï','к': 'k',
      'л': 'l','м': 'm','н': 'n','о': 'o','п': 'p','р': 'r','с': 's','т': 't',
      'у': 'u','ф': 'f','х': 'h','ц': 'c','ч': 'č','ш': 'š','щ': 'šč','ъ': 'ʺ',
      'ы': 'y','ь': '′','ѣ': 'ě','э': 'e̊','ю': 'ju','я': 'ja','\'': '″'},//complete 30.04

    ala_lc: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'i︠e︡', 'ж': 'z︠h︡', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'ï', 'й': 'ĭ',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 't︠s︡', 'ч': 'ch',
      'ш': 'sh', 'щ': 'shch', 'ь': 'ʹ', '\'': '\'', 'ю': 'i︠u︡', 'я': 'i︠a︡', 'є': 'i︠e︡'}, //complete 30.04

    bnf_france: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g̀', 'д': 'd', 'е': 'e',
      'є': 'ê', 'ж': 'ž', 'з': 'z', 'и': 'i', 'і': 'ì', 'ї': 'ï', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
      'ш': 'š', 'щ': 'ŝ', 'ь': 'ʹ', '\'': '’', 'ю': 'û', 'я': 'â'}, //complete 30.04

    bs_2979: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'ȳ', 'і': 'i', 'ї': 'yi', 'й': 'ĭ',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'shch', 'ь': 'ʼ', '\'': '', 'ю': 'yu', 'я': 'ya'}, //complete 30.04

    national_dstu_9112_2021_a: {
      to_latinka: {
        _transliterate: function(text) {
          function isCyrillic(char) {
            return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
          }
    
          function preserveCase(original, replacement) {
            if (!original || !replacement) return replacement;
    
            if (original.length === 1 && replacement.length === 1) {
              return original === original.toUpperCase() ? 
                     replacement.toUpperCase() : replacement.toLowerCase();
            }
    
            if (original === original.toUpperCase()) {
              return replacement.toUpperCase();
            } else if (original === original.toLowerCase()) {
              return replacement.toLowerCase();
            } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
    
            return replacement;
          }
    
          const result = [];
          const length = text.length;
    
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            const next = i < length - 1 ? text[i + 1] : null;
            const nextLower = next ? next.toLowerCase() : null;
            const nextNext = i < length - 2 ? text[i + 2] : null;
            const nextNextLower = nextNext ? nextNext.toLowerCase() : null;
            const prev = i > 0 ? text[i - 1] : null;
            const prevLower = prev ? prev.toLowerCase() : null;
    
            const nextIsJ = nextLower === 'й';
            const isAtWordStart = i === 0 || !isCyrillic(prevLower) || /[\s\p{P}]/.test(prevLower);
            const nextIsVowel = nextLower && /[аеуіȣ]/.test(nextLower);
            const isIsolated = !next || !isCyrillic(nextLower) || /\s/.test(nextLower);
    
            let replacement;
 
            if (currentLower === 'й' && nextIsVowel) {
              replacement = preserveCase(current, 'j\'');
              i++; 
            }
            else if (currentLower === 'ь') {
              const trulyIsolated = (!prev || !isCyrillic(prevLower) || /[\s\p{P}]/.test(prevLower)) && 
                                     (!next || !isCyrillic(nextLower) || /[\s\p{P}]/.test(nextLower));
                          
              if (nextIsVowel) {
                replacement = preserveCase(current, 'j\'');
              } else if (trulyIsolated) {
                replacement = preserveCase(current, 'ĵ');
              } else {
                replacement = 'j';
              }
            }
 
            else if (currentLower === 'щ') {
              if (nextIsJ) {
                replacement = preserveCase(current + next, 'ŝ\'');
                i++; 
              } else {
                replacement = preserveCase(current, 'ŝ');
              }
            }
            else if (nextIsJ && /[бвгґджзклмнпрстфхцчш]/.test(currentLower)) {
              const consonantBeforeJ = {
                'б': 'b\'', 'в': 'v\'', 'г': 'ğ\'', 'ґ': 'g\'', 'д': 'd\'',
                'ж': 'ž\'', 'з': 'z\'', 'к': 'k\'', 'л': 'l\'', 'м': 'm\'',
                'н': 'n\'', 'п': 'p\'', 'р': 'r\'', 'с': 's\'', 'т': 't\'',
                'ф': 'f\'', 'х': 'x\'', 'ц': 'c\'', 'ч': 'č\'', 'ш': 'š\''
              };
              replacement = preserveCase(current, consonantBeforeJ[currentLower]);
              i++; 
            }
            else if (nextIsJ && /[ѯѱѳџ]/.test(currentLower)) {
              const rareBeforeJ = {
                'ѯ': 'ḱ\'', 'ѱ': 'ϸ\'', 'ѳ': 'ḟ\'', 'џ': 'dž\''
              };
              replacement = preserveCase(current, rareBeforeJ[currentLower]);
              i++; 
            }
            else if ((currentLower === 'є' && prevLower === '\'') || 
                     (currentLower === 'є' && prevLower === 'ь')) {
              replacement = preserveCase(current, 'é');
            }
            else {
              const basicMappings = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'ğ', 'ґ': 'g', 'д': 'd',
                'е': 'e', 'є': 'je', 'ж': 'ž', 'з': 'z', 'и': 'y', 'і': 'i',
                'ї': 'ji', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
                'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
                'ф': 'f', 'х': 'x', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ',
                'ь': 'j', 'ю': 'ju', 'я': 'ja', '\'': '\'', 'ё': 'ō', 'ў': 'ŭ',
                'ъ': 'ǒ', 'ы': 'y', 'э': 'ē', 'ѣ': 'ė', 'ѧ': 'ä', 'ѫ': 'ü',
                'ѯ': 'ḱ', 'ѱ': 'ϸ', 'ѳ': 'ḟ', 'ѵ': 'ỳ', 'џ': 'dž', 'ȣ': 'ȣ'
              };
              
              replacement = preserveCase(current, basicMappings[currentLower] || current);
            }
    
            result.push(replacement);
          }
    
          let output = result.join('');
          
          output = output.replace(/šč(\')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'ŠČ' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/dž(\')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'DŽ' + (apostrophe || '') + nextChar;
          });
    
          return output;
        }
      }
    },

    national_dstu_9112_2021_b: {
      to_latinka: {
        _transliterate: function(text) {
          function isCyrillic(char) {
            return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
          }
    
          function preserveCase(original, replacement) {
            if (!original || !replacement) return replacement;
    
            if (original.length === 1 && replacement.length === 1) {
              return original === original.toUpperCase() ? 
                     replacement.toUpperCase() : replacement.toLowerCase();
            }
    
            if (original === original.toUpperCase()) {
              return replacement.toUpperCase();
            } else if (original === original.toLowerCase()) {
              return replacement.toLowerCase();
            } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
    
            return replacement;
          }
    
          const result = [];
          const length = text.length;
    
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            const next = i < length - 1 ? text[i + 1] : null;
            const nextLower = next ? next.toLowerCase() : null;
            const nextNext = i < length - 2 ? text[i + 2] : null;
            const nextNextLower = nextNext ? nextNext.toLowerCase() : null;
            const prev = i > 0 ? text[i - 1] : null;
            const prevLower = prev ? prev.toLowerCase() : null;
    
            const nextIsJ = nextLower === 'й';
            const isAtWordStart = i === 0 || !isCyrillic(prevLower) || /[\s\p{P}]/.test(prevLower);
            const nextIsVowel = nextLower && /[аеуіȣ]/.test(nextLower);
            const isIsolated = !next || !isCyrillic(nextLower) || /\s/.test(nextLower);
    
            let replacement;
    
            if (currentLower === 'й' && nextIsVowel) {
              replacement = preserveCase(current, "j'");
              i++;
            }
            else if (currentLower === 'ь') {
              const trulyIsolated = (!prev || !isCyrillic(prevLower) || /[\s\p{P}]/.test(prevLower)) && 
                                     (!next || !isCyrillic(nextLower) || /[\s\p{P}]/.test(nextLower));
                          
              if (nextIsVowel) {
                replacement = preserveCase(current, "j'");
              } else if (trulyIsolated) {
                replacement = preserveCase(current, "hj");
              } else {
                replacement = 'j';
              }
            }
            else if (nextIsJ && /[бвгґджзклмнпрстфхцчшщ]/.test(currentLower)) {
              const consonantBeforeJ = {
                'б': "b'", 'в': "v'", 'г': "h'", 'ґ': "g'", 'д': "d'",
                'ж': "zh'", 'з': "z'", 'к': "k'", 'л': "l'", 'м': "m'",
                'н': "n'", 'п': "p'", 'р': "r'", 'с': "s'", 'т': "t'",
                'ф': "f'", 'х': "kh'", 'ц': "ts'", 'ч': "ch'", 'ш': "sh'",
                'щ': "shch'"
              };
              replacement = preserveCase(current, consonantBeforeJ[currentLower]);
              i++; 
            }
            else if (nextIsJ && /[џѯѱѳ]/.test(currentLower)) {
              const rareBeforeJ = {
                'џ': "dh'", 'ѯ': "xh'", 'ѱ': "ph'", 'ѳ': "fh'"
              };
              replacement = preserveCase(current, rareBeforeJ[currentLower]);
              i++; 
            }
            else if (currentLower === 'є') {
              if (prevLower === '\'' || prevLower === 'ь') {
                replacement = preserveCase(current, "je'");
              } else {
                replacement = preserveCase(current, "je");
              }
            }
            else {
              const basicMappings = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
                'е': 'e', 'є': 'je', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i',
                'ї': 'ji', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
                'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
                'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
                'ю': 'ju', 'я': 'ja', '\'': '\'', 'ё': 'jow', 'ў': 'uh',
                'ъ': 'oh', 'ы': 'yw', 'э': 'ehw', 'ѣ': 'ieh', 'ѧ': 'jaw', 'ѫ': 'juw',
                'ѯ': 'xh', 'ѱ': 'ph', 'ѳ': 'fh', 'ѵ': 'yh', 'џ': 'dh', 'ȣ': 'uw',
                'g': 'gw'
              };
              
              if (currentLower === 'є' && (i === 0 || prevLower === ' ' || !isCyrillic(prevLower))) {
                replacement = preserveCase(current, 'ew');
              } else {
                replacement = preserveCase(current, basicMappings[currentLower] || current);
              }
            }
    
            result.push(replacement);
          }
    
          let output = result.join('');
          
          output = output.replace(/Shch(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'SHCH' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Zh(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'ZH' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Kh(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'KH' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Ts(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'TS' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Ch(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'CH' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Sh(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'SH' + (apostrophe || '') + nextChar;
          });
          
          output = output.replace(/Dh(')?([A-Z])/g, function(match, apostrophe, nextChar) {
            return 'DH' + (apostrophe || '') + nextChar;
          });
    
          return output;
        }
      }
    },

    national_rm_p55_2010: {
      to_latinka: {
        _transliterate: function(text) {
          function isCyrillic(char) {
            return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
          }
      
          const apostropheLike = ["'", "'", "ʼ", "`", "´", "̓", "′", "ʾ", "ʿ", "ⸯ", "ь"];
      
          function isAtWordStart(index, text) {
            if (index === 0) return true;
            
            const prevChar = text[index - 1];
            
            if (apostropheLike.includes(prevChar)) {
              return index <= 1 || !isCyrillic(text[index - 2]) || /[\s\p{P}]/.test(text[index - 2]);
            }
            
            return !isCyrillic(prevChar) || /[\s\p{P}]/.test(prevChar);
          }
      
          function preserveCase(original, replacement) {
            if (!original || !replacement) return replacement;
      
            if (original.length === 1 && replacement.length === 1) {
              return original === original.toUpperCase() ? 
                     replacement.toUpperCase() : replacement.toLowerCase();
            }
      
            if (original === original.toUpperCase()) {
              return replacement.toUpperCase();
            } else if (original === original.toLowerCase()) {
              return replacement.toLowerCase();
            } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
      
            return replacement;
          }
      
          const result = [];
          const length = text.length;
      
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            
            if (apostropheLike.includes(current)) {
              continue;
            }
      
            const atWordStart = isAtWordStart(i, text);
      
            let replacement;
      
            if (currentLower === 'є') {
              replacement = atWordStart ? 'ye' : 'ie';
            } 
            else if (currentLower === 'и') {
              replacement = atWordStart ? 'yi' : 'y';
            }
            else if (currentLower === 'й') {
              replacement = atWordStart ? 'y' : 'i';
            }
            else if (currentLower === 'ю') {
              replacement = atWordStart ? 'yu' : 'iu';
            }
            else if (currentLower === 'я') {
              replacement = atWordStart ? 'ya' : 'ia';
            }
            else if (currentLower === 'ї') {
              replacement = atWordStart ? 'yi' : 'i';
            }
      
            else {
              const basicMappings = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
                'е': 'e', 'ж': 'zh', 'з': 'z', 'ї': 'i', 'й': 'i',
                'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
                'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
                'ш': 'sh', 'щ': 'shch', 'ь': ''
              };
              
              replacement = basicMappings[currentLower] || current;
            }
      
            result.push(preserveCase(current, replacement));
          }
      
          let finalResult = result.join('');
          for (const char of apostropheLike) {
            finalResult = finalResult.split(char).join('');
          }
      
          return finalResult;
        }
      }
    }, 

    duden: {'а': 'a', 'б': 'b', 'в': 'w', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'je', 'ж': 'sch', 'з': 's', 'и': 'y', 'і': 'i', 'ї': 'ji', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'z', 'ч': 'tsch',
      'ш': 'sch', 'щ': 'schtsch', 'ь': '', 'ю': 'ju', 'я': 'ja',
      '’': ''}, //checked

    bordas: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'ie', 'ж': 'j', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'ї', 'й': 'i',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'ou', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'tch',
      'ш': 'ch', 'щ': 'chtch', 'ь': '', 'ю': 'iou', 'я': 'ia',
      '’': ''}, //checked

    swedish: {}
  },

  belarusian: {
    ICAO: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'e', 'ё': 'io',
      'ж': 'zh', 'з': 'z', 'і': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'ы': 'y',
      'ь': '', 'э': 'e', 'ю': 'iu', 'я': 'ia'}, // omitted

    din_1460: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'ž', 'з': 'z', 'й': 'j', 'і': 'i', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'ы': 'y',
      'ь': 'ʹ', '’': '’', 'э': 'ė', 'ю': 'ju', 'я': 'ja'}, // complete 30.04

    iso_9: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'ž', 'з': 'z', 'і': 'ì', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'ŭ', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'ы': 'y',
      'ь': 'ʹ', '’': '’', 'э': 'è', 'ю': 'û', 'я': 'â'}, // complete 30.04

    iso_r9_by: {'а': 'a', 'б': 'b','в': 'v','г': 'g','д': 'd','е': 'e','ё': 'ë','ж': 'ž',
      'з': 'z','й': 'j','і': 'ī','к': 'k','л': 'l','м': 'm','н': 'n','о': 'o',
      'п': 'p','р': 'r','с': 's','т': 't','у': 'u','ў': 'ŭ','ф': 'f','х': 'h',
      'ц': 'c','ч': 'č','ш': 'š','ъ': 'ʺ','ы': 'y','ь': '′','ѣ': 'ě','э': 'e̊',
      'ю': 'ju','я': 'ja','’': '″'}, //complete 30.04 
  
    ala_lc: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'e', 'ё': 'i͡o',
      'ж': 'z︠h︡', 'з': 'z', 'і': 'ī', 'й': 'ĭ', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'ŭ', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'ы': 'y',
      'ь': 'ʹ', 'э': 'ė', 'ю': 'i︠u︡', 'я': 'i︠a︡'}, //complete 25.04

    bs_2979: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'zh', 'з': 'z', 'і': 'i', 'й': 'ĭ', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'w', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'ы': 'ȳ',
      'ь': 'ʼ', '’': 'ʺ', 'э': 'é', 'ю': 'yu', 'я': 'ya', 'тс': 't-s',}, //complete 25.04

    bgn_pcgn: {'зг': 'z·h', 'кг': 'k·h', 'сг': 's·h', 'тс': 't·s', 'цг': 'ts·h', 
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'ye', 'ё': 'yo',
      'ж': 'zh', 'з': 'z', 'і': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'w', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'ы': 'y',
      'ь': '’', '’': 'ʼ', 'э': 'e', 'ю': 'yu', 'я': 'ya'}, //complete 30.04

    bnf_france: {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g','ґ': 'g̀', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'ž', 'з': 'z', 'і': 'ì', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ў': 'ŭ', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'ы': 'y',
      'ь': 'ʹ', '’': '”', 'э': 'è', 'ю': 'û', 'я': 'â'}, // complete 30.04

    national_2023: {
      to_latinka: {
        _transliterate: function(text) {
          function isCyrillic(char) {
            return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
          }
          
          function isVowel(char) {
            if (!char) return false;
            const vowels = ['а', 'е', 'ё', 'и', 'і', 'о', 'у', 'ы', 'э', 'ю', 'я'];
            return vowels.includes(char.toLowerCase());
          }
      
          const apostropheLike = ["'", "'", "ʼ", "`", "´", "̓", "′", "ʾ", "ʿ", "ⸯ", "ь"];
      
          function shouldUseJForm(index, text) {
            if (index === 0) return true;
            
            const prevChar = text[index - 1];
            const prevCharLower = prevChar ? prevChar.toLowerCase() : '';
            
            if (isVowel(prevCharLower)) return true;
            
            if (apostropheLike.includes(prevChar)) {
              return index <= 1 || isVowel(text[index - 2]) || !isCyrillic(text[index - 2]);
            }
            
            if (prevCharLower === 'ў') return true;
            
            return false;
          }
      
          function preserveCase(original, replacement) {
            if (!original || !replacement) return replacement;
      
            if (original.length === 1 && replacement.length === 1) {
              return original === original.toUpperCase() ? 
                     replacement.toUpperCase() : replacement.toLowerCase();
            }
      
            if (original === original.toUpperCase()) {
              return replacement.toUpperCase();
            } else if (original === original.toLowerCase()) {
              return replacement.toLowerCase();
            } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
      
            return replacement;
          }
      
          const result = [];
          const length = text.length;
      
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            
            if (apostropheLike.includes(current)) {
              continue;
            }
      
            const useJForm = shouldUseJForm(i, text);
      
            let replacement;
      
            if (currentLower === 'е') {
              replacement = useJForm ? 'je' : 'ie';
            } 
            else if (currentLower === 'ё') {
              replacement = useJForm ? 'jo' : 'io';
            }
            else if (currentLower === 'ю') {
              replacement = useJForm ? 'ju' : 'iu';
            }
            else if (currentLower === 'я') {
              replacement = useJForm ? 'ja' : 'ia';
            }
      
            else {
              const basicMappings = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
                'ж': 'zh', 'з': 'z', 'і': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 
                'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
                'с': 's', 'т': 't', 'у': 'u', 'ў': 'w', 'ф': 'f', 
                'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'ы': 'y', 
                'ь': '', 'э': 'e'
              };
              
              replacement = basicMappings[currentLower] || current;
            }
      
            result.push(preserveCase(current, replacement));
          }
      
          return result.join('');
        },
        
        transliterate: function(text) {
          return this._transliterate(text);
          }
        }
      }, 
  

    duden: {},
    bordas: {},
    swedish: {},
    lacinka: {
      to_lacinka: {
        _transliterate: function(text) {
          function isCyrillic(char) {
            return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
          }
    
          function preserveCase(original, replacement) {
            if (!original || !replacement) return replacement;
    
            if (original === original.toUpperCase()) {
              return replacement.toUpperCase();
            }
    
            if (original === original.charAt(0).toUpperCase() + original.slice(1).toLowerCase()) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
    
            return replacement;
          }
    
          const vowels = new Set(['а', 'й', 'і', 'о', 'у', 'ў', 'э', 'я', 'е', 'ё', 'ю']);
          const consonants = new Set(['б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш']);
    
          const result = [];
          const length = text.length;
    
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            const next = i < length - 1 ? text[i + 1] : null;
            const nextLower = next ? next.toLowerCase() : null;
            const nextNext = i < length - 2 ? text[i + 2] : null;
            const nextNextLower = nextNext ? nextNext.toLowerCase() : null;
            const prev = i > 0 ? text[i - 1] : null;
            const prevLower = prev ? prev.toLowerCase() : null;
    
            const isAtWordStart = i === 0 || !isCyrillic(prevLower) || /\s/.test(prevLower);
            const prevIsVowel = prevLower && vowels.has(prevLower);
            const prevIsConsonant = prevLower && consonants.has(prevLower);
    
            let replacement;
    
            if (currentLower === 'л' && nextLower === 'ь') {
              replacement = preserveCase(current, 'l');
              i++;  
            }
            else if (currentLower === 'л' && nextLower === 'я') {
              replacement = preserveCase(current + next, 'la');
              i++;  
            }
            else if (currentLower === 'л' && nextLower === 'е') {
              replacement = preserveCase(current + next, 'le');
              i++;  
            }
            else if (currentLower === 'л' && nextLower === 'ё') {
              replacement = preserveCase(current + next, 'lo');
              i++;  
            }
            else if (currentLower === 'л' && nextLower === 'і') {
              replacement = preserveCase(current + next, 'li');
              i++;  
            }

            else if (currentLower === 'л') {
              if (nextLower === 'а') {
                replacement = preserveCase(current + next, 'ła');
                i++;  
              } else if (nextLower === 'о') {
                replacement = preserveCase(current + next, 'ło');
                i++;
              } else if (nextLower === 'у') {
                replacement = preserveCase(current + next, 'łu');
                i++;
              } else if (nextLower === 'э') {
                replacement = preserveCase(current + next, 'łe');
                i++;
              } else if (nextLower === 'ь') {
                replacement = preserveCase(current, 'l');
                i++;
              } else {
                replacement = preserveCase(current, 'ł');
              }
            }
            else if (currentLower === 'д') {
              if (nextLower === 'з' && nextNextLower === 'ь') {
                replacement = preserveCase(current + next + nextNext, 'dź');
                i += 2;  
              } else if (nextLower === 'з') {
                replacement = preserveCase(current + next, 'dz');
                i++;
              } else if (nextLower === 'ж') {
                replacement = preserveCase(current + next, 'dž');
                i++;
              } else {
                replacement = preserveCase(current, 'd');
              }
            }
            else if (currentLower === 'ь' && next && vowels.has(nextLower)) {
              replacement = preserveCase(current, 'j');
            }
            else if (currentLower === 'і' && prevIsVowel) {
              replacement = preserveCase(current, 'ji');
            }
            else if (nextLower === 'ь') {
              if (currentLower === 'з') {
                replacement = preserveCase(current, 'ź');
                i++;
              } else if (currentLower === 'н') {
                replacement = preserveCase(current, 'ń');
                i++;
              } else if (currentLower === 'с') {
                replacement = preserveCase(current, 'ś');
                i++;
              } else if (currentLower === 'ц') {
                replacement = preserveCase(current, 'ć');
                i++;
              } else {
                const mapping = {
                  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
                  'ж': 'ž', 'з': 'z', 'і': 'i', 'й': 'j', 'к': 'k', 'л': 'l',
                  'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
                  'т': 't', 'у': 'u', 'ў': 'ŭ', 'ф': 'f', 'х': 'ch', 'ц': 'c',
                  'ч': 'č', 'ш': 'š', 'ы': 'y', 'э': 'e', 'ь': '', '’': '’'
                };
                replacement = preserveCase(current, mapping[currentLower] || current);
              }
            }
            else if (currentLower === 'я') {
              if (isAtWordStart || prevIsVowel) {
                replacement = preserveCase(current, 'ja');
              } else if (prevIsConsonant) {
                replacement = preserveCase(current, 'ia');
              } else {
                replacement = preserveCase(current, 'ia');
              }
            }
            else if (currentLower === 'е') {
              if (isAtWordStart || prevIsVowel) {
                replacement = preserveCase(current, 'jie');
              } else if (prevIsConsonant) {
                replacement = preserveCase(current, 'ie');
              } else {
                replacement = preserveCase(current, 'ie');
              }
            }
            else if (currentLower === 'ё') {
              if (isAtWordStart || prevIsVowel) {
                replacement = preserveCase(current, 'jo');
              } else if (prevIsConsonant) {
                replacement = preserveCase(current, 'io');
              } else {
                replacement = preserveCase(current, 'io');
              }
            }
            else if (currentLower === 'ю') {
              if (isAtWordStart || prevIsVowel) {
                replacement = preserveCase(current, 'ju');
              } else if (prevIsConsonant) {
                replacement = preserveCase(current, 'iu');
              } else {
                replacement = preserveCase(current, 'iu');
              }
            }
            else {
              const mapping = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
                'ж': 'ž', 'з': 'z', 'і': 'i', 'й': 'j', 'к': 'k', 'л': 'l',
                'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
                'т': 't', 'у': 'u', 'ў': 'ŭ', 'ф': 'f', 'х': 'ch', 'ц': 'c',
                'ч': 'č', 'ш': 'š', 'ы': 'y', 'э': 'e', 'ь': '', '’': '’'
              };
              replacement = preserveCase(current, mapping[currentLower] || current);
            }
    
            result.push(replacement);
          }
    
          let output = result.join('');
    
          output = output.replace(/[А-Яа-яЁёЎў]/g, function(match) {
            const cyrillicToLatin = {
              'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
              'ж': 'ž', 'з': 'z', 'і': 'i', 'й': 'j', 'к': 'k', 'л': 'l',
              'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
              'т': 't', 'у': 'u', 'ў': 'ŭ', 'ф': 'f', 'х': 'ch', 'ц': 'c',
              'ч': 'č', 'ш': 'š', 'ы': 'y', 'э': 'e', 'ь': '',
              'я': 'ia', 'е': 'ie', 'ё': 'io', 'ю': 'iu', '’': '’'
            };
    
            const replacement = cyrillicToLatin[match.toLowerCase()];
            return preserveCase(match, replacement) || match;
          });
    
          output = output.replace(/jie/gi, function(match) {
            if (match === 'JIE') return 'JE';
            if (match === 'Jie') return 'Je';
            return 'je';
          });
    
          return output;
        }
      }
    }
  },


  bcms: {
    general_latinica: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђ': 'đ', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'з́': 'ź', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm',
      'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'с́': 'ś', 'т': 't',
      'ћ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š'}, //complete 01.05

    
    iso_9: {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђ': 'đ', 'е': 'e',
        'ж': 'ž', 'з': 'z', 'и': 'i', 'ј': 'ǰ', 'к': 'k', 'л': 'l', 'љ': 'l̂',
        'м': 'm', 'н': 'n', 'њ': 'n̂', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
        'т': 't', 'ћ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
        'џ': 'd̂', 'ш': 'š'}, //complete 01.05

    iso_r9: {
      'а': 'a','б': 'b','в': 'v','г': 'g','д': 'd','ђ': 'đ','е': 'e', 'ж': 'ž',
      'з': 'z','и': 'i', 'ј': 'j','к': 'k','л': 'l','љ': 'lj','м': 'm', 'н': 'n',
      'њ': 'nj','о': 'o','п': 'p','р': 'r','с': 's','т': 't','ћ': 'ć','у': 'u',
      'ф': 'f','х': 'h','ц': 'c','ч': 'č','џ': 'dž','ш': 'š'}, //complete 01.05   
 },

  macedonian: {
    iso_9_1995: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'ѕ': 'ẑ', 'и': 'i', 'ј': 'ǰ', 'к': 'k', 'л': 'l', 'љ': 'l̂',
      'м': 'm', 'н': 'n', 'њ': 'n̂', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
      'џ': 'd̂', 'ш': 'š', 'ѓ': 'ǵ'}, //checked
  
  national_academy_1970: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
      'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
      'џ': 'dž', 'ш': 'š', 'ѓ': 'ǵ'}, //checked
  
  bgn_pcgn_pre_2013: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
      'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'k', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'č',
      'џ': 'dž', 'ш': 'š', 'ѓ': 'g'}, // complete 26.04

  bgn_pcgn_2013: {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
        'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
        'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
        'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
        'џ': 'dž', 'ш': 'š', 'ѓ': 'ǵ'}, // complete 26.04

  british_library_macedonian: {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'ǵ', 'е': 'e',
    'ж': 'ž', 'з': 'z', 'ѕ': 'd︠z︡', 'и': 'i', 'ј': 'i', 'к': 'k',
    'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'kh',
    'ц': 'c', 'ч': 'č', 'џ': 'd︠ž︡', 'ш': 'š', 'г': 'g'}, // complete 25.04

  bnf_macedonian: {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'ǵ', 'е': 'e',
    'ж': 'ž', 'з': 'z', 'ѕ': 'ẑ', 'и': 'i', 'ј': 'ǰ', 'к': 'k',
    'л': 'l', 'љ': 'l̂', 'м': 'm', 'н': 'n', 'њ': 'n̂', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'h',
    'ц': 'c', 'ч': 'č', 'џ': 'd̂', 'ш': 'š', 'ѓ': 'g', 'ѳ': 'f̀', 'ѵ': 'ỳ', 'ѣ': 'ĕ'}, // complete 25.04
  
  iso_9_1968: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
      'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
      'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'k', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'c', 'ч': 'č',
      'џ': 'dzh', 'ш': 'š', 'ѓ': 'g'}, //complete 25.04
  
  mjms_sso: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
      'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
      'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'kj', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'џ': 'dzh', 'ш': 'sh', 'ѓ': 'gj'}, //complete 25.04
  
  gajs_alphabet: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj',
      'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
      'т': 't', 'ќ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č',
      'џ': 'dž', 'ш': 'š', 'ѓ': 'đ'}, //checked

  din_1460_1_macedonian: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'ǵ', 'е': 'e',
      'ж': 'ž', 'з': 'z', 'ѕ': 'dz', 'и': 'i', 'ѝ': 'ì', 'ј': 'j', 'к': 'k', 'ѐ': 'è',
      'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p',
      'р': 'r', 'с': 's', 'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'h',
      'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š', 'г': 'g', '\'': 'ʼ'}, // checked

  ala_lc_macedonian: {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'ǵ', 'е': 'e',
    'ж': 'ž', 'з': 'z', 'ѕ': 'd︠z︡', 'ј': 'i', 'и': 'i', 'к': 'k',
    'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'ќ': 'ḱ', 'у': 'u', 'ф': 'f', 'х': 'kh',
    'ц': 'c', 'ч': 'č', 'џ': 'd︠ž︡', 'ш': 'š', 'г': 'g'} // complete 25.04

    },

  romanian_cyrillic_moldovan: {
      to_nat_latin: {
      _transliterate: function(text) {
          const vowels = new Set(['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'і']);
          const eaConsonants = new Set([
            'б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н',
            'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'е'
          ]);
          
          const result = [];
          const length = text.length;
    
          for (let i = 0; i < length; i++) {
            const current = text[i];
            const currentLower = current.toLowerCase();
            const next = i < length - 1 ? text[i + 1].toLowerCase() : null;
            const prev = i > 0 ? text[i - 1].toLowerCase() : null;
            const isUpperCase = current !== currentLower;
    
            let replacement;
    
            switch(currentLower) {
              case 'г':
                replacement = next === 'и' || next === 'е' || next === 'і' ? 'gh' : 'g';
                break;
                
              case 'я': {
                const isAfterTrigger = prev && eaConsonants.has(prev);
                replacement = isAfterTrigger ? 'ea' : 'ia';
                break;
              }
    
              case 'ы': {
                const isWordBoundary = !prev || !next || 
                                     !isCyrillic(prev) || !isCyrillic(next);
                replacement = isWordBoundary ? 'î' : 'â';
                break;
              }
    
              case 'ь':
                replacement = 'i';
                break;
    
              case 'к':
                replacement = next === 'и' || next === 'е' || next === 'і' ? 'ch' : 'c';
                break;
              case 'ч':
                replacement = next === 'а' ? 'ce' : 'c';
                break;
              case 'ю':
                replacement = 'iu';
                break;
              case 'ӂ':
                replacement = '__DZHE_PLACEHOLDER__';
                break;
              case 'е':
                replacement = 'e';
                break;
              case 'ъ':
                replacement = 'ă';
                break;
              case 'і':
                replacement = 'i';
                break;
              default: {
                  const mapping = {
                    'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'ж': 'j',
                    'з': 'z', 'й': 'i', 'л': 'l', 'м': 'm', 'н': 'n',
                    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
                    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
                    'ш': 'ș', 'э': 'ă', 'ю': 'iu', 'и': 'i',
                    'щ': 'șt', 'е': 'e', 'і': 'i', 'ъ': 'ă'
                  };
                  replacement = mapping[currentLower] || current;
                }
            }
    
            if (isUpperCase && replacement.length > 0) {
              replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            
            result.push(replacement);
          }
      
          function isCyrillic(char) {
            return char && char.match(/[\u0400-\u04FF\u0456]/); 
          }
    
          let output = result.join('')
            .replace(/([^h])g([ie])/g, function(match, p1, p2) {
              if (p1 === p1.toUpperCase()) {
                return p1 + 'Gh' + p2;
              }
              return p1 + 'gh' + p2;
            })
            .replace(/ii$/g, 'i')
            .replace(/__DZHE_PLACEHOLDER__/g, 'g')
            .replace(/[А-Яа-яЁёІі]/g, function(match) {
              const cyrillicToLatin = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
                'ж': 'j', 'з': 'z', 'и': 'i', 'й': 'i', 'к': 'c', 'л': 'l',
                'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
                'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
                'ш': 'ș', 'щ': 'șt', 'ъ': 'ă', 'ы': 'â', 'ь': 'i', 'э': 'ă',
                'ю': 'iu', 'я': 'ia', 'ӂ': 'g', 'ё': 'io', 'і': 'i',
 
                'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E',
                'Ж': 'J', 'З': 'Z', 'И': 'I', 'Й': 'I', 'К': 'C', 'Л': 'L',
                'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S',
                'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ț', 'Ч': 'C',
                'Ш': 'Ș', 'Щ': 'Șt', 'Ъ': 'Ă', 'Ы': 'Â', 'Ь': 'I', 'Э': 'Ă',
                'Ю': 'Iu', 'Я': 'Ia', 'Ӂ': 'G', 'Ё': 'Io', 'І': 'I'
              };
              return cyrillicToLatin[match] || match;
            });
            
          return output.replace(/__DZHE_PLACEHOLDER_UPPER__/g, 'G');
      }
    },

    to_nat_latin_3: {
      _transliterate: function(text) {
        const vowels = new Set(['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'і', 'є', 'ѻ']);
        const eaConsonants = new Set([
          'б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'ѕ',
          'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'е', 'ꚁ'
        ]);
        
        function normalizeChar(char) {
          if (!char) return '';
          return char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        
        function isCyrillicChar(char) {
          if (!char) return false;
          const normalized = normalizeChar(char);
          return /[а-яА-ЯіІѣѢѧѦѡѠꙋꙊъЪьЬѹѸꙟꙞџЏєЄѻѺоуОУѫѪ]/.test(normalized);
        }
    
        function isCombiningDiacritic(char) {
          const code = char.charCodeAt(0);
          return code >= 0x0300 && code <= 0x036F;
        }
        
        // Add special character detection for й and ї
        function isSpecialChar(char) {
          if (!char) return false;
          return char === 'й' || char === 'Й' || char === 'ї' || char === 'Ї';
        }
        
        const wordStarts = new Set();
        const wordEnds = new Set();
        const charPositions = new Map();
    
        let inWord = false;
        let currentWordStart = -1;
    
        for (let i = 0; i < text.length; i++) {
          const current = text[i];
          const isCyrillic = isCyrillicChar(current);
          const isCombining = isCombiningDiacritic(current);
    
          if (!inWord) {
            if (isCyrillic) {
              wordStarts.add(i);
              currentWordStart = i;
              inWord = true;
              charPositions.set(i, { isFirst: true, isLast: false });
            }
          } else {
            if (isCyrillic || isCombining) {
              charPositions.set(i, { isFirst: false, isLast: false });
            } else {
              wordEnds.add(i - 1);
              inWord = false;
            }
          }
        }
    
        if (inWord) {
          wordEnds.add(text.length - 1);
        }
    
        for (const endPos of wordEnds) {
          if (charPositions.has(endPos)) {
            charPositions.get(endPos).isLast = true;
          } else {
            for (let j = endPos; j >= 0; j--) {
              if (charPositions.has(j)) {
                charPositions.get(j).isLast = true;
                break;
              }
            }
          }
        }
    
        const result = [];
        const length = text.length;
        
        const processedIndices = new Set();
    
        for (let i = 0; i < length; i++) {
          if (processedIndices.has(i)) continue;
          
          const current = text[i];
          const currentLower = current.toLowerCase();
          
          if (currentLower === 'й' || currentLower === 'ї') {
            const isUpperCase = current !== currentLower;
            let replacement = currentLower === 'й' ? '__YI_PLACEHOLDER__' : '__YI_DIAERESIS_PLACEHOLDER__';
            
            if (isUpperCase) {
              replacement = currentLower === 'й' ? '__YI_PLACEHOLDER_UPPER__' : '__YI_DIAERESIS_PLACEHOLDER_UPPER__';
            }
            
            result.push(replacement);
            continue;
          }
          
          let j = i + 1;
          let diacritics = [];
          while (j < length && isCombiningDiacritic(text[j])) {
            diacritics.push(text[j]);
            processedIndices.add(j);
            j++;
          }
          
          const currentNormalized = currentLower.normalize('NFD');
          const baseChar = currentNormalized.replace(/[\u0300-\u036f]/g, '');
          
          const next = j < length ? normalizeChar(text[j].toLowerCase()) : null;
          const prev = i > 0 ? normalizeChar(text[i - 1].toLowerCase()) : null;
          const isUpperCase = current !== currentLower;
    
          const posInfo = charPositions.get(i);
          const isWordBoundary = posInfo ? (posInfo.isFirst || posInfo.isLast) : false;
    
          let replacement;
      
          switch(baseChar) {
            case 'г':
              replacement = next === 'и' || next === 'е' || next === 'і' || next === 'є' ? 'gh' : 'g';
              break;
              
            case 'я': {
              const isAfterTrigger = prev && eaConsonants.has(prev);
              replacement = isAfterTrigger ? 'ea' : 'ia';
              break;
            }
    
            case 'ь':
              replacement = 'ʹ';
              break;
    
            case 'к':
              replacement = next === 'и' || next === 'е' || next === 'і' || next === 'є' ? 'ch' : 'c';
              break;
    
            case 'ч':
              if (next === 'а' || next === 'ѻ') {
                replacement = 'ċe';
              } else if (next === 'о' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу' || (next && !vowels.has(next))) {
                replacement = 'ċi';
              } else {
                replacement = 'ċ';
              }
              break;
    
            case 'ю':
              replacement = 'iu';
              break;
    
            case 'ӂ':
              replacement = '__DZHE_PLACEHOLDER__';
              break;
    
            case 'й':
              replacement = '__YI_PLACEHOLDER__';
              break;
              
            case 'ї':
              replacement = '__YI_DIAERESIS_PLACEHOLDER__';
              break;
    
            case 'е':
            case 'є':
              replacement = 'e';
              break;
    
            case 'ѻ':
              replacement = 'o';
              break;
    
            case 'ъ':
              replacement = 'ă';
              break;
    
            case 'і':
              replacement = 'i';
              break;
    
            case 'ѫ': {
              replacement = isWordBoundary ? 'î' : 'â';
              break;
            }
    
            case 'ꙟ': {
              if (next === 'м' || next === 'н' || next === 'n' || next === 'm') {
                replacement = 'î';
              } else if (next === 'б' || next === 'п'|| next === 'b'|| next === 'p') {
                replacement = 'îm';
              } else {
                replacement = 'în';
              }
              break;
            }
    
            case 'џ': {
              if (next === 'а' || next === 'ѻ') {
                replacement = 'ġe';
              } else if (next === 'о' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу') {
                replacement = 'ġi';
              } else {
                replacement = 'ġ';
              }
              break;
            }
    
            case 'ѵ': {
              replacement = '[ẏ/v̇]'; 
              break;
            }
    
            default: {
              const mapping = {
                'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'ж': 'j',
                'з': 'z', 'й': 'ĭ', 'л': 'l', 'м': 'm', 'н': 'n',
                'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
                'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
                'ш': 'ș', 'э': 'ă', 'ю': 'iu', 'и': 'i',
                'щ': 'șt', 'е': 'e', 'і': 'i', 'ъ': 'ă',
                'ѹ': 'u', 'ꙋ': 'u', 'оу': 'u', 'ѡ': 'ō', 'ы': 'y', 'ѣ': 'ea', 
                'ѧ': 'ĭa', 'ѯ': 'x', 'ѱ': 'ps', 'ѳ': 'ṫ', 'ѵ': '[ẏ/v̇]',
                'ѫ': 'â', 'ꙟ': 'în', 'џ': 'ġ', 'ѕ': 'ż', 'є': 'e', 'ѻ': 'o',
                'ї': 'ī', 'ꚏ': 'ț', 'ꚗ': 'șt', 'ꙁ': 'z', 'ꚁ': 'd'
              };
              
              replacement = mapping[baseChar] || current;
            }
          }
    
          if (diacritics.length > 0 && replacement.length > 0) {
            const firstChar = replacement.charAt(0);
            replacement = firstChar + diacritics.join('') + replacement.slice(1);
          }
    
          if (isUpperCase && replacement.length > 0) {
            replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }
          
          result.push(replacement);
        }
    
        let output = result.join('')
          .replace(/([^h])g([ieє])/g, function(match, p1, p2) {
            if (p1 === p1.toUpperCase()) {
              return p1 + 'Gh' + p2;
            }
            return p1 + 'gh' + p2;
          })
          .replace(/ii$/g, 'i')
          .replace(/__DZHE_PLACEHOLDER__/g, 'g')
          .replace(/__YI_PLACEHOLDER__/g, 'ĭ')
          .replace(/__YI_PLACEHOLDER_UPPER__/g, 'Ĭ')
          .replace(/__YI_DIAERESIS_PLACEHOLDER__/g, 'ī')
          .replace(/__YI_DIAERESIS_PLACEHOLDER_UPPER__/g, 'Ī')
          .replace(/[А-Яа-яЁёІіѪѫꙞꙟЏџЄєѻѺ]/g, function(match) {
            const cyrillicToLatin = {
              'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'ж': 'j',
              'з': 'z', 'й': 'ĭ', 'л': 'l', 'м': 'm', 'н': 'n',
              'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
              'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
              'ш': 'ș', 'э': 'ă', 'ю': 'iu', 'и': 'i', 'ꙁ': 'z',
              'щ': 'șt', 'е': 'e', 'і': 'i', 'ъ': 'ă', 'ꚁ': 'd',
              'ѹ': 'u', 'ꙋ': 'u', 'оу': 'u', 'ѡ': 'ō', 'ы': 'y', 'ѣ': 'ea', 
              'ѧ': 'ĭa', 'ѯ': 'x', 'ѱ': 'ps', 'ѳ': 'ṫ', 'ѵ': '[ẏ/v̇]',
              'ѫ': 'â', 'ꙟ': 'în', 'џ': 'ġ', 'ѕ': 'ż', 'є': 'e', 'ѻ': 'o',
              'ї': 'ī', 'ꚏ': 'ț', 'ꚗ': 'șt', 'ȣ': 'u', 
    
              'А': 'A', 'Б': 'B', 'В': 'V', 'Д': 'D', 'Ж': 'J',
              'З': 'Z', 'Й': 'Ĭ', 'Л': 'L', 'М': 'M', 'Н': 'N',
              'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
              'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ț', 'Ч': 'C',
              'Ш': 'Ș', 'Э': 'Ă', 'Ю': 'Iu', 'И': 'I', 'Ꙁ': 'Z',
              'Щ': 'Șt', 'Е': 'E', 'І': 'I', 'Ъ': 'Ă', 'Ꚁ': 'D',
              'Ѹ': 'U', 'Ꙋ': 'U', 'ОУ': 'U', 'Ѡ': 'Ō', 'Ы': 'Y', 'Ѣ': 'Ea', 
              'Ѧ': 'Ĭa', 'Ѯ': 'X', 'Ѱ': 'Ps', 'Ѳ': 'Ṫ', 'Ѵ': '[Ẏ/V̇]',
              'Ѫ': 'Â', 'Ꙟ': 'În', 'Џ': 'Ġ', 'Ѕ': 'Ż', 'Є': 'E', 'Ѻ': 'O',
              'Ї': 'Ī', 'ꚏ': 'Ț', 'ꚗ': 'Șt', 'Ȣ': 'U'
            };
            
            const normalized = match.normalize('NFD');
            const baseChar = normalized.replace(/[\u0300-\u036f]/g, '');
            
            let replacement = cyrillicToLatin[baseChar] || baseChar;
            
            return replacement;
          });
          
        return output.replace(/__DZHE_PLACEHOLDER_UPPER__/g, 'G').normalize('NFC');
        }
      },

    to_nat_latin_2: {
      _transliterate: function(text) {
        const vowels = new Set(['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'і', 'є', 'ѹ', 'ꙋ', 'ѡ', 'ѣ', 'ѩ', 'ѥ', 'ѧ', 'ѫ', 'ꙟ', 'ѵ', 'ï', 'ĭ', 'Ȣ', 'ɣ', 'ѻ', '↑']);
        const eaConsonants = new Set([
          'б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'ʌ', 'ɴ',
          'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'е', 'є', 'ꚁ'
        ]);
        
        function normalizeChar(char) {
          if (!char) return '';
          return char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        
        function isCyrillicChar(char) {
          if (!char) return false;
          const normalized = normalizeChar(char);
          return /[а-яА-ЯіІѣѢѧѦѡѠꙋꙊъЪьЬѹѸꙟꙞџЏєЄѻѺоуОУѫѪ]/.test(normalized);
        }
      
        function isCombiningDiacritic(char) {
          const code = char.charCodeAt(0);
          return code >= 0x0300 && code <= 0x036F;
        }
        
        function isSpecialChar(char) {
          if (!char) return false;
          return char === 'й' || char === 'Й' || char === 'ї' || char === 'Ї';
        }
        
        const wordStarts = new Set();
        const wordEnds = new Set();
        const charPositions = new Map();
      
        let inWord = false;
        let currentWordStart = -1;
      
        for (let i = 0; i < text.length; i++) {
          const current = text[i];
          const isCyrillic = isCyrillicChar(current);
          const isCombining = isCombiningDiacritic(current);
      
          if (!inWord) {
            if (isCyrillic) {
              wordStarts.add(i);
              currentWordStart = i;
              inWord = true;
              charPositions.set(i, { isFirst: true, isLast: false });
            }
          } else {
            if (isCyrillic || isCombining) {
              charPositions.set(i, { isFirst: false, isLast: false });
            } else {
              wordEnds.add(i - 1);
              inWord = false;
            }
          }
        }
      
        if (inWord) {
          wordEnds.add(text.length - 1);
        }
      
        for (const endPos of wordEnds) {
          if (charPositions.has(endPos)) {
            charPositions.get(endPos).isLast = true;
          } else {
            for (let j = endPos; j >= 0; j--) {
              if (charPositions.has(j)) {
                charPositions.get(j).isLast = true;
                break;
              }
            }
          }
        }
      
        const result = [];
        const length = text.length;
        
        const processedIndices = new Set();
      
        function checkSpecificCombination(i) {
          if (i + 1 >= length) return null;
          
          const current = text[i].toLowerCase();
          const next = text[i + 1].toLowerCase();
          
          if ((current === 'і' || current === 'i' || current === 'и') && next === 'ѧ') {
            return {
              combination: current + next,
              skipCount: 1, 
              replacement: 'ia'
            };
          }
          
          return null;
        }
      
        for (let i = 0; i < length; i++) {
          if (processedIndices.has(i)) continue;
          
          const combinationResult = checkSpecificCombination(i);
          if (combinationResult) {
            const { combination, skipCount, replacement } = combinationResult;
            
            for (let j = 1; j <= skipCount; j++) {
              processedIndices.add(i + j);
            }
            
            const isUpperCase = text[i] !== text[i].toLowerCase();
            if (isUpperCase) {
              result.push(replacement.charAt(0).toUpperCase() + replacement.slice(1));
            } else {
              result.push(replacement);
            }
            
            continue;
          }
          
          const current = text[i];
          const currentLower = current.toLowerCase();
          
          let j = i + 1;
          let diacritics = [];
          while (j < length && isCombiningDiacritic(text[j])) {
            diacritics.push(text[j]);
            processedIndices.add(j);
            j++;
          }
          
          const currentNormalized = currentLower.normalize('NFD');
          const baseChar = currentNormalized.replace(/[\u0300-\u036f]/g, '');
          
          const next = j < length ? normalizeChar(text[j].toLowerCase()) : null;
          const prev = i > 0 ? normalizeChar(text[i - 1].toLowerCase()) : null;
          const isUpperCase = current !== currentLower;
      
          const posInfo = charPositions.get(i);
          const isWordBoundary = posInfo ? (posInfo.isFirst || posInfo.isLast) : false;
      
          let replacement;
          switch(currentLower) {
            case 'ꚏ':
              replacement = 'ț';
              break;
    
            case 'ꙋ':
            case 'ꙋ꙼':
              replacement = 'u';
              break;
              
            case 'ꙋ̆':
              replacement = 'ă';
              break;
              
            case 'ԁ':
            case 'Ԁ':
              replacement = 'd';
              break;
              
            case 'ѕ':
            case 'Ѕ':
              replacement = 'dz';  
              break;
              
            case 'л́':
              replacement = 'l';
              break;
              
            case 'ꙇ':
            case 'ꙇ꙼':
            case 'ꙇ꙼і́':
            case 'і́':
              replacement = 'i';
              break;
              
            case 'г':
              replacement = next === 'и' || next === 'ï' || next === 'ĭ' || next === 'ї' || next === 'î' || next === 'е' || next === 'і' || next === 'є' || next === 'ѣ' || next === 'ѥ' ? 'gh' : 'g';
              break;

            case 'я':
            case 'ѩ':
            case 'ꙗ':
            case 'ѧ':
              const isAfterTrigger = prev && eaConsonants.has(prev);
              replacement = isAfterTrigger ? 'ea' : 'ia';
              break;
    
            case 'ь':
              replacement = 'ă'; 
              break;
    
            case 'к':
              replacement = next === 'и' || next === 'ï' || next === 'ĭ' || next === 'ї' || next === 'î' || next === 'е' || next === 'і' || next === 'є' || next === 'ѣ' || next === 'ѥ' ? 'ch' : 'c';
              break;
              
            case 'ч':
              if (next === 'а') {
                replacement = 'ce';
              } else if (next === 'о' || next === 'ѻ' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу' || next === 'u') {
                replacement = 'ci';
              } else {
                replacement = 'c';
              }
              break;
              
            case 'ю':
            case 'ĭꙋ':
              replacement = 'iu';
              break;
              
            case 'ӂ':
            case 'џ': {
              if (next === 'а') {
                replacement = 'ge';
              } else if (next === 'о' || next === 'ѻ' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу' || next === 'u') {
                replacement = 'gi';
              } else {
                replacement = 'g';
              }
              break;
            }
              
            case 'е':
            case 'є':
            case 'ε':
              replacement = 'e';
              break;
              
            case 'ъ':
              replacement = 'ă';
              break;
              
            case 'і':
            case 'ï':
            case 'ї':
            case 'ĭ':
            case 'й':
            case 'ѝ':
              replacement = 'i';
              break;
              
            case 'ѣ':
              replacement = 'ea';
              break;
              
            case 'ѥ':
              replacement = 'ie';
              break;
              
            case 'ѡ':
              replacement = 'o';
              break;

            case 'ѫ': 
	          case 'ꙑ':
            case 'ы': {
              replacement = isWordBoundary ? 'î' : 'â';
              break;
            }
              
            case 'ꙟ':
            case '↑': {
              if (next === 'м' || next === 'н' || next === 'n' || next === 'm' || next === 'ʌ' || next === 'л') {
                replacement = 'î';
              } else if (next === 'б' || next === 'п'|| next === 'b'|| next === 'p') {
                replacement = 'îm';
              } else {
                replacement = 'în';
              }
              break;
            }
              
            case 'ѯ':
              replacement = 'x';
              break;
              
            case 'ѱ':
              replacement = 'ps';
              break;
              
            case 'ѳ':
              replacement = 'th';
              break;
              
            case 'ѹ':
            case 'у':
            case 'Ȣ':
              replacement = 'u';
              break;
              
            case 'ѵ':
              replacement = '[i/u]';
              break;
              
            case 'ӡ':
            case 'з':
            case 'ꙁ':
              replacement = 'z';
              break;
              
            case 'ʌ':
              replacement = 'l';
              break;
              
            case 'ɴ':
              replacement = 'n';
              break;
              
            case 'щ':
            case 'ꚗ':
              replacement = 'șt';
              break;
              
            case 'ѻ':  
              replacement = 'o';
              break;
              
            default: {
              const mapping = {
                'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'ж': 'j',
                'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 
                'р': 'r', 'с': 's', 'т': 't', 'ф': 'f', 'х': 'h', 
                'ц': 'ț', 'ш': 'ș', 'ꚁ': 'd'
              };
              replacement = mapping[currentLower] || current;
            }
          }
    
          if (isUpperCase && replacement.length > 0) {
            if (replacement.length === 1) {
              replacement = replacement.toUpperCase();
            } else {
              replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
          }
          
          result.push(replacement);
        }
    
        function isCyrillic(char) {
          return char && char.match(/[\u0400-\u04FF\u0456\u0460-\u04FF\u0500-\u052F\uA640-\uA69F]/);
        }
    
        let output = result.join('')
          .replace(/([^h])g([ieѣѥє])/g, function(match, p1, p2) {
            if (p1 === p1.toUpperCase()) {
              return p1 + 'Gh' + p2;
            }
            return p1 + 'gh' + p2;
          })
          .replace(/i$/g, '')
          .replace(/ii$/g, 'i')
          .replace(/i꙼/g, 'i')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[А-Яа-яЁёІіЄєѢѣѪѫѦѧѨѩѤѥѮѯѰѱѲѳѴѵѶѶѸѹѺѻѼѽѾѿҀҁ҂҃҄҅҆҇҈҉ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧӀ̄ѝ]/g, function(match) {
            const cyrillicToLatin = {
              'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
              'ж': 'j', 'з': 'z', 'и': 'i', 'й': 'i', 'к': 'c', 'л': 'l',
              'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
              'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
              'ш': 'ș', 'щ': 'șt', 'ъ': 'ă', 'ы': 'â', 'ь': 'ă', 'э': 'ă',
              'ю': 'iu', 'я': 'ia', 'ӂ': 'g', 'ё': 'io', 'і': 'i', 'є': 'e',
              'ѣ': 'ea', 'ѫ': 'â', 'ѧ': 'ea', 'ѩ': 'ia', 'ѥ': 'ie', 'ѯ': 'x',
              'ѱ': 'ps', 'ѳ': 'th', 'ѵ': 'ѵ', 'ѕ': 'dz', 'ꙟ': 'în', '↑': 'în', 'ѡ': 'o',
              'ѹ': 'u', 'ꙋ': 'u', 'ꙋ꙼': 'u', 'ӡ': 'z', 'ʌ': 'l', 'ɴ': 'n', 'џ': 'g',
              'ï': 'i', 'ĭ': 'i', 'Ȣ': 'u', 'ɣ': 'u', 'ѝ': 'i', 'Ѝ': 'I', 'ꚁ': 'd',
              'ꙗ': 'ia', 'ԁ': 'd', 'Ԁ': 'd', 'л́': 'l', 'ꙇ': 'i', 'ꙇ꙼': 'i', 'ꙇ꙼і́': 'i',
              'і́': 'i', 'ꚏ': 'ț', 'ꚗ': 'șt', 'ѻ': 'o', 'ꙋ̆': 'ă', 'ȣ': 'u',

              'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E',
              'Ж': 'J', 'З': 'Z', 'И': 'I', 'Й': 'I', 'К': 'C', 'Л': 'L',
              'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S',
              'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ț', 'Ч': 'C',
              'Ш': 'Ș', 'Щ': 'Șt', 'Ъ': 'Ă', 'Ы': 'Â', 'Ь': 'Ă', 'Э': 'Ă',
              'Ю': 'Iu', 'Я': 'Ia', 'Ӂ': 'G', 'Ё': 'Io', 'І': 'I', 'Є': 'E',
              'Ѣ': 'Ea', 'Ѫ': 'Â', 'Ѧ': 'Ea', 'Ѩ': 'Ia', 'Ѥ': 'Ie', 'Ѯ': 'X',
              'Ѱ': 'Ps', 'Ѳ': 'Th', 'Ѵ': 'Ѵ', 'Ѕ': 'Dz', 'Ꙟ': 'În', '↑': 'În', 'Ѡ': 'O',
              'Ѹ': 'U', 'Ꙋ': 'U', 'Ӡ': 'Z', 'Ʌ': 'L', 'Ɔ': 'N', 'Џ': 'G',
              'Ï': 'I', 'Ĭ': 'I', 'Ɣ': 'U', 'Ꚁ': 'D',
              'Ꙗ': 'Ia', 'Ꚏ': 'Ț', 'Ꚗ': 'Șt', 'Ѻ': 'O', 'Ꙋ̆': 'Ă'
            };
            return cyrillicToLatin[match] || match;
          });
          
        return this._cleanDiacritics(output);
      },
      
      _cleanDiacritics: function(text) {
        let cleaned = text
          .replace(/[áàäǎ]/g, 'a')
          .replace(/[ÁÀÄǍ]/g, 'A')
          .replace(/[éèêëě]/g, 'e')
          .replace(/[ÉÈÊËĚ]/g, 'E')
          .replace(/[óòôöǒ]/g, 'o')
          .replace(/[ÓÒÔÖǑ]/g, 'O')
          .replace(/[úùûüǔ]/g, 'u')
          .replace(/[ÚÙÛÜǓ]/g, 'U')
          .replace(/[íìïĭ]/g, 'i')
          .replace(/[ÍÌÏĬ]/g, 'I')
          .replace(/[ñÑ]/g, match => match === 'ñ' ? 'n' : 'N')
          .replace(/i꙼/g, 'i')
          .replace(/I꙼/g, 'I')
          .replace(/[\u0300-\u036f]/g, '');
        
        return cleaned;
      },
      
      translate: function(text) {
        return this._transliterate(text);
      }
    },

    to_nat_latin_transitional: {
      _transliterate: function(text) {
        const vowels = new Set(['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'і', 'є', 'ѹ', 'ꙋ', 'ѡ', 'ѣ', 'ѩ', 'ѥ', 'ѧ', 'ѫ', 'ꙟ', 'ѵ', 'ï', 'ĭ', 'Ȣ', 'ɣ', 'ѻ', '↑']);
        const eaConsonants = new Set([
          'б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'ʌ', 'ɴ',
          'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'е', 'є'
        ]);
        
        function normalizeChar(char) {
          if (!char) return '';
          return char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        
        function isCyrillicChar(char) {
          if (!char) return false;
          const normalized = normalizeChar(char);
          return /[а-яА-ЯіІѣѢѧѦѡѠꙋꙊъЪьЬѹѸꙟꙞџЏєЄѻѺоуОУѫѪ]/.test(normalized);
        }
      
        function isCombiningDiacritic(char) {
          const code = char.charCodeAt(0);
          return code >= 0x0300 && code <= 0x036F;
        }
        
        function isSpecialChar(char) {
          if (!char) return false;
          return char === 'й' || char === 'Й' || char === 'ї' || char === 'Ї';
        }
        
        const wordStarts = new Set();
        const wordEnds = new Set();
        const charPositions = new Map();
      
        let inWord = false;
        let currentWordStart = -1;
      
        for (let i = 0; i < text.length; i++) {
          const current = text[i];
          const isCyrillic = isCyrillicChar(current);
          const isCombining = isCombiningDiacritic(current);
      
          if (!inWord) {
            if (isCyrillic) {
              wordStarts.add(i);
              currentWordStart = i;
              inWord = true;
              charPositions.set(i, { isFirst: true, isLast: false });
            }
          } else {
            if (isCyrillic || isCombining) {
              charPositions.set(i, { isFirst: false, isLast: false });
            } else {
              wordEnds.add(i - 1);
              inWord = false;
            }
          }
        }
      
        if (inWord) {
          wordEnds.add(text.length - 1);
        }
      
        for (const endPos of wordEnds) {
          if (charPositions.has(endPos)) {
            charPositions.get(endPos).isLast = true;
          } else {
            for (let j = endPos; j >= 0; j--) {
              if (charPositions.has(j)) {
                charPositions.get(j).isLast = true;
                break;
              }
            }
          }
        }
      
        const result = [];
        const length = text.length;
        
        const processedIndices = new Set();
      
        function checkSpecificCombination(i) {
          if (i + 1 >= length) return null;
          
          const current = text[i].toLowerCase();
          const next = text[i + 1].toLowerCase();
          
          if ((current === 'і' || current === 'i' || current === 'и') && next === 'ѧ') {
            return {
              combination: current + next,
              skipCount: 1, 
              replacement: 'ia'
            };
          }
          
          return null;
        }
      
        for (let i = 0; i < length; i++) {
          if (processedIndices.has(i)) continue;
          
          const combinationResult = checkSpecificCombination(i);
          if (combinationResult) {
            const { combination, skipCount, replacement } = combinationResult;
            
            for (let j = 1; j <= skipCount; j++) {
              processedIndices.add(i + j);
            }
            
            const isUpperCase = text[i] !== text[i].toLowerCase();
            if (isUpperCase) {
              result.push(replacement.charAt(0).toUpperCase() + replacement.slice(1));
            } else {
              result.push(replacement);
            }
            
            continue;
          }
          
          const current = text[i];
          const currentLower = current.toLowerCase();
          
          let j = i + 1;
          let diacritics = [];
          while (j < length && isCombiningDiacritic(text[j])) {
            diacritics.push(text[j]);
            processedIndices.add(j);
            j++;
          }
          
          const currentNormalized = currentLower.normalize('NFD');
          const baseChar = currentNormalized.replace(/[\u0300-\u036f]/g, '');
          
          const next = j < length ? normalizeChar(text[j].toLowerCase()) : null;
          const prev = i > 0 ? normalizeChar(text[i - 1].toLowerCase()) : null;
          const isUpperCase = current !== currentLower;
      
          const posInfo = charPositions.get(i);
          const isWordBoundary = posInfo ? (posInfo.isFirst || posInfo.isLast) : false;
      
          let replacement;
          switch(currentLower) {
            case 'ꚏ':
              replacement = 'ț';
              break;
    
            case 'ꙋ':
            case 'ꙋ꙼':
              replacement = 'u';
              break;
              
            case 'ꙋ̆':
              replacement = 'ă';
              break;
              
            case 'ԁ':
            case 'Ԁ':
              replacement = 'd';
              break;
              
            case 'ѕ':
            case 'Ѕ':
              replacement = 's';  
              break;
              
            case 'л́':
              replacement = 'l';
              break;
              
            case 'ꙇ':
            case 'ꙇ꙼':
            case 'ꙇ꙼і́':
            case 'і́':
              replacement = 'i';
              break;
              
            case 'г':
              replacement = next === 'и' || next === 'ï' || next === 'ĭ' || next === 'ї' || next === 'î' || next === 'е' || next === 'і' || next === 'є' || next === 'ѣ' || next === 'ѥ' ? 'gh' : 'g';
              break;

            case 'я':
            case 'ѩ':
            case 'ꙗ':
            case 'ѧ':
              const isAfterTrigger = prev && eaConsonants.has(prev);
              replacement = isAfterTrigger ? 'ea' : 'ia';
              break;
    
            case 'ь':
              replacement = 'ă'; 
              break;
    
            case 'к':
            case 'k':
              replacement = next === 'и' || next === 'ï' || next === 'ĭ' || next === 'ї' || next === 'î' || next === 'е' || next === 'і' || next === 'є' || next === 'ѣ' || next === 'ѥ' ? 'ch' : 'c';
              break;
              
            case 'ч':
              if (next === 'а') {
                replacement = 'ce';
              } else if (next === 'о' || next === 'ѻ' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу' || next === 'u') {
                replacement = 'ci';
              } else {
                replacement = 'c';
              }
              break;
              
            case 'ю':
            case 'ĭꙋ':
              replacement = 'iu';
              break;
              
            case 'ӂ':
            case 'џ': {
              if (next === 'а') {
                replacement = 'ge';
              } else if (next === 'о' || next === 'ѻ' || next === 'у' || next === 'ѹ' || next === 'ꙋ' || next === 'оу' || next === 'u') {
                replacement = 'gi';
              } else {
                replacement = 'g';
              }
              break;
            }
              
            case 'е':
            case 'є':
            case 'ε':
              replacement = 'e';
              break;
              
            case 'ъ':
              replacement = 'ă';
              break;
              
            case 'і':
            case 'ï':
            case 'ї':
            case 'ĭ':
            case 'й':
            case 'ѝ':
              replacement = 'i';
              break;
              
            case 'ѣ':
              replacement = 'ea';
              break;
              
            case 'ѥ':
              replacement = 'ie';
              break;
              
            case 'ѡ':
              replacement = 'o';
              break;

            case 'ѫ': 
	          case 'ꙑ':
            case 'ы': {
              replacement = isWordBoundary ? 'î' : 'â';
              break;
            }
              
            case 'ꙟ':
            case '↑': {
              if (next === 'м' || next === 'н' || next === 'n' || next === 'm' || next === 'ʌ' || next === 'л') {
                replacement = 'î';
              } else if (next === 'б' || next === 'п'|| next === 'b'|| next === 'p') {
                replacement = 'îm';
              } else {
                replacement = 'în';
              }
              break;
            }
              
            case 'ѯ':
              replacement = 'x';
              break;
              
            case 'ѱ':
              replacement = 'ps';
              break;
              
            case 'ѳ':
              replacement = 'th';
              break;
              
            case 'ѹ':
            case 'у':
            case 'Ȣ':
              replacement = 'u';
              break;
              
            case 'ѵ':
              replacement = '[i/u]';
              break;
              
            case 'ӡ':
            case 'з':
            case 'ꙁ':
              replacement = 'z';
              break;
              
            case 'ʌ':
              replacement = 'l';
              break;
              
            case 'ɴ':
              replacement = 'n';
              break;
              
            case 'щ':
            case 'ꚗ':
              replacement = 'șt';
              break;
              
            case 'ѻ':  
              replacement = 'o';
              break;
              
            default: {
              const mapping = {
                'а': 'a', 'б': 'b', 'в': 'v', 'д': 'd', 'ж': 'j',
                'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 
                'р': 'r', 'с': 's', 'т': 't', 'ф': 'f', 'х': 'h', 
                'ц': 'ț', 'ш': 'ș'
              };
              replacement = mapping[currentLower] || current;
            }
          }
    
          if (isUpperCase && replacement.length > 0) {
            if (replacement.length === 1) {
              replacement = replacement.toUpperCase();
            } else {
              replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            }
          }
          
          result.push(replacement);
        }
    
        function isCyrillic(char) {
          return char && char.match(/[\u0400-\u04FF\u0456\u0460-\u04FF\u0500-\u052F\uA640-\uA69F]/);
        }
    
        let output = result.join('')
          .replace(/([^h])g([ieѣѥє])/g, function(match, p1, p2) {
            if (p1 === p1.toUpperCase()) {
              return p1 + 'Gh' + p2;
            }
            return p1 + 'gh' + p2;
          })
          .replace(/i$/g, '')
          .replace(/ii$/g, 'i')
          .replace(/i꙼/g, 'i')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[А-Яа-яЁёІіЄєѢѣѪѫѦѧѨѩѤѥѮѯѰѱѲѳѴѵѶѶѸѹѺѻѼѽѾѿҀҁ҂҃҄҅҆҇҈҉ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧӀ̄ѝ]/g, function(match) {
            const cyrillicToLatin = {
              'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
              'ж': 'j', 'з': 'z', 'и': 'i', 'й': 'i', 'к': 'c', 'л': 'l',
              'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
              'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ț', 'ч': 'c',
              'ш': 'ș', 'щ': 'șt', 'ъ': 'ă', 'ы': 'â', 'ь': 'ă', 'э': 'ă',
              'ю': 'iu', 'я': 'ia', 'ӂ': 'g', 'ё': 'io', 'і': 'i', 'є': 'e',
              'ѣ': 'ea', 'ѫ': 'â', 'ѧ': 'ea', 'ѩ': 'ia', 'ѥ': 'ie', 'ѯ': 'x',
              'ѱ': 'ps', 'ѳ': 'th', 'ѵ': 'ѵ', 'ѕ': 'dz', 'ꙟ': 'în', '↑': 'în', 'ѡ': 'o',
              'ѹ': 'u', 'ꙋ': 'u', 'ꙋ꙼': 'u', 'ӡ': 'z', 'ʌ': 'l', 'ɴ': 'n', 'џ': 'g',
              'ï': 'i', 'ĭ': 'i', 'Ȣ': 'u', 'ɣ': 'u', 'ѝ': 'i', 'Ѝ': 'I',
              'ꙗ': 'ia', 'ԁ': 'd', 'Ԁ': 'd', 'л́': 'l', 'ꙇ': 'i', 'ꙇ꙼': 'i', 'ꙇ꙼і́': 'i',
              'і́': 'i', 'ꚏ': 'ț', 'ꚗ': 'șt', 'ѻ': 'o', 'ꙋ̆': 'ă',

              'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E',
              'Ж': 'J', 'З': 'Z', 'И': 'I', 'Й': 'I', 'К': 'C', 'Л': 'L',
              'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S',
              'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ț', 'Ч': 'C',
              'Ш': 'Ș', 'Щ': 'Șt', 'Ъ': 'Ă', 'Ы': 'Â', 'Ь': 'Ă', 'Э': 'Ă',
              'Ю': 'Iu', 'Я': 'Ia', 'Ӂ': 'G', 'Ё': 'Io', 'І': 'I', 'Є': 'E',
              'Ѣ': 'Ea', 'Ѫ': 'Â', 'Ѧ': 'Ea', 'Ѩ': 'Ia', 'Ѥ': 'Ie', 'Ѯ': 'X',
              'Ѱ': 'Ps', 'Ѳ': 'Th', 'Ѵ': 'Ѵ', 'Ѕ': 'Dz', 'Ꙟ': 'În', '↑': 'În', 'Ѡ': 'O',
              'Ѹ': 'U', 'Ꙋ': 'U', 'Ӡ': 'Z', 'Ʌ': 'L', 'Ɔ': 'N', 'Џ': 'G',
              'Ï': 'I', 'Ĭ': 'I', 'ȣ': 'u', 'Ȣ': 'U', 'Ɣ': 'U',
              'Ꙗ': 'Ia', 'Ꚏ': 'Ț', 'Ꚗ': 'Șt', 'Ѻ': 'O', 'Ꙋ̆': 'Ă'
            };
            return cyrillicToLatin[match] || match;
          });
          
        return this._cleanDiacritics(output);
      },
      
      _cleanDiacritics: function(text) {
        let cleaned = text
          .replace(/[áàäǎ]/g, 'a')
          .replace(/[ÁÀÄǍ]/g, 'A')
          .replace(/[éèêëě]/g, 'e')
          .replace(/[ÉÈÊËĚ]/g, 'E')
          .replace(/[óòôöǒ]/g, 'o')
          .replace(/[ÓÒÔÖǑ]/g, 'O')
          .replace(/[úùûüǔ]/g, 'u')
          .replace(/[ÚÙÛÜǓ]/g, 'U')
          .replace(/[íìïĭ]/g, 'i')
          .replace(/[ÍÌÏĬ]/g, 'I')
          .replace(/[ñÑ]/g, match => match === 'ñ' ? 'n' : 'N')
          .replace(/i꙼/g, 'i')
          .replace(/I꙼/g, 'I')
          .replace(/[\u0300-\u036f]/g, '');
        
        return cleaned;
      },
      
      translate: function(text) {
        return this._transliterate(text);
      }
    },

    ala_lc_md: {'є': 'ē','ѥ': 'i︠e︡','ѕ': 'ż','ꙋ': 'ū','ѡ': 'ō','ѿ': 'ō︠t︡','ѫ': 'ą','ѧ': 'ę',
      'ѭ': 'i︠ą︡','ѩ': 'i︠ę︡','ѯ': 'k͡s','ѱ': 'p︠s︡','і': 'ī', 'ѣ': 'i︠e︡', 'ѳ': 'ḟ', 'ѵ': 'ẏ', 
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'ĭ', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'kh', 'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': 'ʺ', 
      'ʼ': 'ʼ', 'ы': 'y', 'э': 'ė', 'ю': 'i︠u︡', 'я': 'i︠a︡','ь': 'ʹ', 'ӂ': 'j'}, //complete 30.04

    iso_9_md: {'є': 'ê', 'ѕ': 'ẑ', 'ѫ': 'ǎ', 'і': 'ì', 'ѣ': 'ě', 'ѳ': 'f̀', 'ѵ': 'ỳ','ґ': 'g̀', 'а': 'a', 'б': 'b', 'в': 'v', 
      'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë','ж': 'ž', 'з': 'z', 'и': 'i', 'й': 'j',
      'к': 'k', 'л': 'l', 'м': 'm','н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 
      'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ',
      'ы': 'y', 'э': 'è', 'ю': 'û', 'я': 'â', 'ъ': 'ʺ', 'ь': '′', 'ӂ': 'ž'},//complete 30.04

    bnf_france_md: {'і': 'ì', 'ѣ': 'ĕ', 'ѫ': 'ă', 'ѳ': 'f̀', 'ѵ': 'ỳ','ґ': 'g̀',
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
      'ж': 'ž', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 'ъ': 'ʺ', 
      'ы': 'y', 'э': 'è', 'ю': 'û', 'я': 'â','ь': '′','ӂ': 'ž'},//complete 30.04

    din_1460_md: {'і': 'ï', 'ѣ': 'ê', 'ѳ': 'f', 'ѵ': 'ẏ','а': 'a', 
      'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë', 'ж': 'ž', 
      'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's','т': 't', 'у': 'u', 'ф': 'f', 
      'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'šč', 'ъ': 'ʺ', 'ы': 'y', 
      'э': 'ė', 'ю': 'ju', 'я': 'ja','ь': 'ʹ','ӂ': 'dž'} //complete 30.04
  },

  church_slavonic: {
    scholarly: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
      'е': 'e', 'є': 'e', 'ж': 'ž', 'ѕ': 'dz', 'з': 'z', 
      'и': 'i', 'й': 'j', 'і': 'ï', 'ї': 'ï', 'к': 'k', 
      'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 
      'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 
      'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 
      'ъ': 'ŭ', 'ы': 'y', 'ь': 'ĭ', 'ѣ': 'ě', 'ю': 'ju', 
      'я': 'ja', 'ѡ': 'ō', 'ѥ': 'je', 'ѧ': 'ę', 'ѩ': 'ję', 
      'ѫ': 'ǫ', 'ѭ': 'jǫ', 'ѯ': 'ẋ', 'ѱ': 'ṗs', 
      'ѳ': 'ḟ', 'ѵ': 'ẏ', 'ѹ': 'u', 'ꙋ': 'u', 
      'ѿ': 'ot', 'Ѿ': 'Ot', 'Ѷ': 'ẏ', 'ꙗ': 'ja',
      'ꙙ': 'o', 'ꙛ': 'ą', 'ꙝ': 'ę', '҃': '','Ⰰ': 'a', 'Ⰱ': 'b', 'Ⰲ': 'v', 'Ⰳ': 'g', 
      'Ⰴ': 'd', 'Ⰵ': 'e', 'Ⰶ': 'ž', 'Ⰷ': 'dz', 
      'Ⰸ': 'z', 'Ⰹ': 'i', 'Ⰺ': 'i', 'Ⰻ': 'i',
    } 
  },

  glagolitic: {
    scholarly: {}
  },

  kazakh: {
    to_nat_latin: {}
  },

  uzbek: {
    to_nat_latin: {}
  },

  kyrgyz: {
    scholarly: {}
  },

  tajik: {
    scholarly: {}
  },

  bulgarian: {

  din_1460_1_bulgarian: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'и': 'i', 'й': 'j', 'ѝ': 'ì', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
      'х': 'ch', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'št', 'ъ': 'ă', 'ы': 'y',
      'ь': 'ʹ', 'ѫ': 'ȧ', 'ю': 'ju', 'я': 'ja', 'ѣ': 'ě'
    },
  
  ala_lc_bulgarian: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
      'з': 'z', 'и': 'i', 'й': 'ĭ', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
      'х': 'kh', 'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'ŭ', 'ы': 'y',
      'ь': 'ʹ', 'ѫ': 'u̐', 'ю': 'i︠u︡', 'я': 'i︠a︡', 'ѣ': 'i︠e︡'
    },
  
  british_library_bulgarian: {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'ĭ', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'ŭ', 'ы': 'y',
    'ь': 'ʹ', 'ѫ': 'u̐', 'ю': 'i︠u︡', 'я': 'i︠a︡', 'ѣ': 'i︠e︡'
    },

  bgn_2013: {
      to_latinka: {
      _transliterate: function(text) {
        function isCyrillic(char) {
          return char && /[\u0400-\u04FF\u0500-\u052F]/.test(char);
        }
  
        function isAtWordEnd(index, text) {
          return index === text.length - 1 || !isCyrillic(text[index + 1]) || /[\s\p{P}]/.test(text[index + 1]);
        }
  
        function preserveCase(original, replacement) {
          if (!original || !replacement) return replacement;
  
          if (original.length === 1 && replacement.length === 1) {
            return original === original.toUpperCase() ? 
                   replacement.toUpperCase() : replacement.toLowerCase();
          }
  
          if (original === original.toUpperCase()) {
            return replacement.toUpperCase();
          } else if (original === original.toLowerCase()) {
            return replacement.toLowerCase();
          } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
          }
  
          return replacement;
        }
  
        const result = [];
        const length = text.length;
  
        for (let i = 0; i < length; i++) {
          const current = text[i];
          const currentLower = current.toLowerCase();
          const next = i < length - 1 ? text[i + 1] : null;
          const nextLower = next ? next.toLowerCase() : null;
  
          if (currentLower === 'и' && nextLower === 'я' && isAtWordEnd(i + 1, text)) {
            result.push(preserveCase(current, 'i'));
            result.push(preserveCase(next, 'a'));
            i++; 
            continue;
          }
  
          const basicMappings = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
            'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'a',
            'ь': 'y', 'ю': 'yu', 'я': 'ya', 
          };
          
          const replacement = basicMappings[currentLower] || current;
          result.push(preserveCase(current, replacement));
        }
  
        return result.join('');
      }
    }
  },
  
  bnf_bulgarian: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ѓ': 'g', 'е': 'e',
      'ж': 'ž', 'з': 'z', 'ѕ': 'ẑ', 'и': 'i', 'ј': 'ǰ', 'к': 'k', 'й': 'j',
      'л': 'l', 'љ': 'l̂', 'м': 'm', 'н': 'n', 'њ': 'n̂', 'о': 'o', 'п': 'p', 'ь': 'ʹ',
      'р': 'r', 'с': 's', 'т': 't', 'ќ': 'k', 'у': 'u', 'ф': 'f', 'х': 'h', 'ъ': 'ʺ',
      'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 'ѓ': 'g', 'ѳ': 'f̀', 'ѵ': 'ỳ', 'ѣ': 'ĕ', 'ѫ': 'ă', 'ю': 'û', 'я': 'â'
    }, //complete 25.04
  
  iso_9_1995_bulgarian: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'ž',
      'з': 'z', 'и': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
      'х': 'h', 'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'ŝ', 'ъ': 'ʺ', 'ы': 'y',
      'ь': 'ʹ', 'ѫ': 'ǎ', 'ю': 'û', 'я': 'â', 'ѣ': 'ě'
    }
  },

  rusyn: {
    din_1460_1_russin_1: {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
        'є': 'je', 'ж': 'ž', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'j',
        'к': 'k', 'л': 'l', 'л̌': 'ł', 'м': 'm', 'н': 'n', 'о': 'o', 'ô': 'ô',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch',
        'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'šč', 'ъ': '"', 'ы': 'ŷ', 'ь': '\'',
        'э': 'è', 'ю': 'ju', 'я': 'ja', 'ѣ': 'ě','ґ': 'g'}, // checked

    din_1460_1_russi_2: {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
          'є': 'je', 'ж': 'ž', 'з': 'z', 'и': 'i', 'і': 'i', 'ї': 'i', 'й': 'j',
          'к': 'k', 'л': 'l', 'л̌': 'ł', 'м': 'm', 'н': 'n', 'о': 'o', 'ô': 'ô',
          'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch',
          'ц': 'c', 'ч': 'č', 'ш': 'š', 'щ': 'šč', 'ъ': '"', 'ы': 'ŷ', 'ь': '\'',
          'э': 'è', 'ю': 'ju', 'я': 'ja', 'ѣ': 'ě','ґ': 'g'}, // checked
    
    ala_lc_russin_1: {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
        'є': 'i︠e︡', 'ж': 'z︠h︡', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'ĭ',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'ô': 'ô',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'k︠h︡',
        'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '"', 'ы': 'ŷ', 'ь': '\'',
        'э': 'ė', 'ю': 'i︠u︡', 'я': 'i︠a︡', 'ѣ': 'î','ґ': 'g'}, // checked

    ala_lc_russin_2: {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'ë',
          'є': 'i︠e︡', 'ж': 'z︠h︡', 'з': 'z', 'и': 'i', 'і': 'i', 'ї': 'i', 'й': 'ĭ',
          'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'ô': 'ô',
          'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'k︠h︡',
          'ц': 't︠s︡', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '"', 'ы': 'ŷ', 'ь': '\'',
          'э': 'ė', 'ю': 'i︠u︡', 'я': 'i︠a︡', 'ѣ': 'î', 'ґ': 'g'}, // checked

    iso_9_1995_rusyn: {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g̀', 'д': 'd', 'е': 'e', 
          'є': 'ê', 'ж': 'ž', 'з': 'z', 'и': 'i', 'і': 'ì', 'ї': 'ï', 'й': 'j', 
          'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 
          'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 
          'ш': 'š', 'щ': 'ŝ', 'ю': 'û', 'я': 'â', 'ь': '\'', 'ы': 'y', 'ъ': '"', 'ё': 'ô'
          },
          
   bgn_pcgn_rusyn: {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 
          'є': 'je', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'ji', 'й': 'j', 
          'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 
          'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'č', 
          'ш': 'š', 'щ': 'šč', 'ю': 'ju', 'я': 'ja', 'ь': '\’', 'ы': 'y', 'ъ': '’','ё': 'jo'
          }, //complete 27.04

   transkrypcja: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 
      'є': 'je', 'ж': 'ż', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'ji', 'й': 'j', 
      'к': 'k', 'л': 'ł', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'cz', 
      'ш': 'sz', 'щ': 'szcz', 'ю': 'ju', 'я': 'ja', 'ь': '', 'ы': 'y', 'ъ': '','ё': 'e'
      }      
  }
};

const availableStyles = {
  russian: [
    { value: 'din_1460', label: 'DIN 1460' }, 
    { value: 'iso_9', label: 'ISO 9 (1995)' }, 
    { value: 'iso_r9_ru', label: 'ISO/R9 (1968)' }, 
    { value: 'ala_lc', label: 'ALA-LC / British Library' }, 
    { value: 'bnf_france', label: 'BNF' }, 
    { value: 'bs_2979', label: 'British Standard 2979' }, 
    { value: 'bgn_pcgn', label: 'BGN/PCGN' }, 
    { value: 'gost_7_79_2000_b', label: 'GOST 7.79-2000 (Diacritics)' }, 
    { value: 'gost_7_79_2000_a', label: 'GOST 7.79-2000 (Sans Diacritics)' },
    { value: 'national', label: 'National' }, 
    { value: 'duden', label: 'DUDEN (German Transcription)' }, 
    { value: 'bordas', label: 'Dictionnaire Bordas (French Transcription)' }, 
    { value: 'swedish', label: 'Swedish Transcription' } 
  ],

  belarusian: [
    { value: 'din_1460', label: 'DIN 1460' },
    { value: 'iso_9', label: 'ISO 9' },
    { value: 'iso_r9_by', label: 'ISO/R9 (1968)' }, 
    { value: 'ala_lc', label: 'ALA-LC / British Library' },
    { value: 'bnf_france', label: 'BNF' }, 
    { value: 'bs_2979', label: 'British Standard 2979' },
    { value: 'bgn_pcgn', label: 'BGN/PCGN' },
    { value: 'national_2023', label: 'National (2023)' }, 
    { value: 'duden', label: 'DUDEN (German Transcription)' }, 
    { value: 'bordas', label: 'Dictionnaire Bordas (French Transcription)' },
    { value: 'swedish', label: 'Swedish Transcription' },
    { value: 'lacinka', label: 'Łacinka' }
  ],

  ukrainian: [
    { value: 'din_1460', label: 'DIN 1460' },
    { value: 'iso_9', label: 'ISO 9' },
    { value: 'iso_r9_ua', label: 'ISO/R9 (1968)' }, 
    { value: 'ala_lc', label: 'ALA-LC / British Library' },
    { value: 'bnf_france', label: 'BNF' },
    { value: 'bs_2979', label: 'British Standard 2979' },
    { value: 'national_dstu_9112_2021_a', label: 'National (DSTU 9112:2021 A)' },
    { value: 'national_dstu_9112_2021_b', label: 'National (DSTU 9112:2021 B)' },
    { value: 'national_rm_p55_2010', label: 'BGN/PCGN 2019 / RM-P55 2010' },
    { value: 'duden', label: 'DUDEN (German Transcription)' },
    { value: 'bordas', label: 'Dictionnaire Bordas (French Transcription)' },
    { value: 'swedish', label: 'Swedish Transcription' }
  ],

  bcms: [
    { value: 'general_latinica', label: 'Latinica / DIN 1460 / ALA LC' },
    { value: 'iso_9', label: 'ISO 9 (1995)' },
    { value: 'iso_r9', label: 'ISO/R9 (BCS)' },
  ],

  macedonian: [
    { value: 'din_1460_1_macedonian', label: 'DIN 1460' },
    { value: 'iso_9_1995', label: 'ISO 9 (1995)' },
    { value: 'iso_9_1968', label: 'ISO/R9 (1968)' },
    { value: 'ala_lc_macedonian', label: 'ALA LC' },
    { value: 'british_library_macedonian', label: 'British Library'},
    { value: 'national_academy_1970', label: 'National Academy (1970)'},
    { value: 'bgn_pcgn_pre_2013', label: 'BGN/PCGN (old)'},
    { value: 'bgn_pcgn_2013', label: 'BGN/PCGN (new)'},
    { value: 'bnf_macedonian', label: 'BNF' },
    { value: 'mjms_sso', label: 'MJMS/SSO' },
    { value: 'gajs_alphabet', label: 'Gajeva Latinica' }    
  ],

  romanian_cyrillic_moldovan: [
    { value: 'to_nat_latin', label: 'Latin from Bessarabian and Moldovan Cyrillic'},
    { value: 'to_nat_latin_transitional', label: 'Latin from Transitional Script'},
    { value: 'to_nat_latin_2', label: 'Latin from Slavonic Script'},
    { value: 'din_1460_md', label: 'DIN 1460 from Bessarabian and Moldovan Cyrillic' },
    { value: 'iso_9_md', label: 'ISO 9 from Bessarabian and Moldovan Cyrillic' },
    { value: 'bnf_france_md', label: 'BNF from Bessarabian and Moldovan Cyrillic' },
    { value: 'ala_lc_md', label: 'ALA LC / British Library from Bessarabian and Moldovan Cyrillic' },
    { value: 'to_nat_latin_3', label: 'ALA LC / British Library from Slavonic and Transitional Script'}
  ],

  church_slavonic: [
    { value: 'scholarly', label: 'scholarly' }
  ],

  bulgarian: [
    { value: 'din_1460_1_bulgarian', label: 'DIN 1460' }, 
    { value: 'iso_9_1995_bulgarian', label: 'ISO 9' },
    { value: 'bnf_bulgarian', label: 'BNF' },
    { value: 'ala_lc_bulgarian', label: 'ALA-LC / British Library' },
    { value: 'bgn_2013', label: 'BGN/PCGN 2013' }
  ],

  kazakh: [
    { value: 'to_nat_latin', label: 'to nat. Latin' }
  ],

  uzbek: [
    { value: 'to_nat_latin', label: 'to nat. Latin' }
  ],

  kyrgyz: [
    { value: 'scholarly', label: 'scholarly' }
  ],

  tajik: [
    { value: 'scholarly', label: 'scholarly' }
  ],

  rusyn: [
    { value: 'din_1460_1_russin_1', label: 'DIN 1460' },
    { value: 'iso_9_1995_rusyn', label: 'ISO 9'},
    { value: 'ala_lc_russin_1', label: 'ALA LC' },
    { value: 'bgn_pcgn_rusyn', label: 'BGN/PCGN 2016'},
    { value: 'din_1460_1_russin_2', label: 'DIN 1460 (Vojvodina, Bačka, Srem regions)'},
    { value: 'ala_lc_russin_2', label: 'ALA LC (Vojvodina, Bačka, Srem regions)'},
    { value: 'transkrypcja', label: 'Polish Transcription)'}
  ]
};
