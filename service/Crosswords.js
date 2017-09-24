let fs = require('fs'),
    _  = require('lodahs);

class Crosswords {
  constructor() {
    console.log('Crosswords');
  }

  escapeHtml(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  make(words) {
   console.log('Making Crosswords');
    let xml,
        question,
        answer,
        pageId,
        hint,
        jt = [];

        _.each((item, index) => {
            let w = item.Word,
                t = item.Type,
                d = item.Definition;
            xml = `<dataPage><Word>${w}</Word><Hint>${d}</Hint></dataPage>`;
            jt.push(xml);

        });
        let crosswordsData = this.escapeHtml('<data>'+jt.join("")+'</data>');
        fs.readFile('templates/crossword.xml', "utf8" , (err, data) => {
          if (err) throw err;
          data = data.replace('_gdoc_input_', crosswordsData);
          fs.writeFileSync('/Users/wolde034/LodeStar/Projects/ActivityMakerCrossWord/base/main.xml',data);
        });
       console.log('Completed Making Crosswords');
    }
}

module.exports = Crosswords
