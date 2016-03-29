import Ember from 'ember';

export default Ember.Component.extend({
  raw_text: "",
  cooked_text: "",
  tmp_text: "",
  transliterations: [
    [new RegExp('a`', 'g'), 'à'],
    [new RegExp('a\'', 'g'), 'á'],
    [new RegExp('a~', 'g'), 'ã'],
    [new RegExp('a;', 'g'), 'ã'],
    [new RegExp('a\^', 'g'), 'â'],
    [new RegExp('a:', 'g'), 'ä'],
    [new RegExp('A`', 'g'), 'À'],
    [new RegExp('A\'', 'g'), 'Á'],
    [new RegExp('A~', 'g'), 'Ã'],
    [new RegExp('A;', 'g'), 'Ã'],
    [new RegExp('A\^', 'g'), 'Â'],
    [new RegExp('A:', 'g'), 'Ä'],
    [new RegExp('c;', 'g'), 'ç'],
    [new RegExp('C;', 'g'), 'Ç'],
    [new RegExp('e`', 'g'), 'è'],
    [new RegExp('e\'', 'g'), 'é'],
    [new RegExp('e\^', 'g'), 'ê'],
    [new RegExp('E`', 'g'), 'È'],
    [new RegExp('E\'', 'g'), 'É'],
    [new RegExp('E\^', 'g'), 'Ê'],
    [new RegExp('i\'', 'g'), 'í'],
    [new RegExp('I\'', 'g'), 'Í'],
    [new RegExp('o`', 'g'), 'ò'],
    [new RegExp('o\'', 'g'), 'ó'],
    [new RegExp('o\^', 'g'), 'ô'],
    [new RegExp('o~', 'g'), 'õ'],
    [new RegExp('o;', 'g'), 'õ'],
    [new RegExp('o:', 'g'), 'ö'],
    [new RegExp('O`', 'g'), 'Ò'],
    [new RegExp('O\'', 'g'), 'Ó'],
    [new RegExp('O\^', 'g'), 'Ô'],
    [new RegExp('O~', 'g'), 'Õ'],
    [new RegExp('O;', 'g'), 'Õ'],
    [new RegExp('O:', 'g'), 'Ö'],
    [new RegExp('u`', 'g'), 'ù'],
    [new RegExp('u\'', 'g'), 'ú'],
    [new RegExp('u:', 'g'), 'ü'],
    [new RegExp('u\^', 'g'), 'û'],
    [new RegExp('u;', 'g'), 'ü'],
    [new RegExp('U`', 'g'), 'ù'],
    [new RegExp('U\'', 'g'), 'ú'],
    [new RegExp('U\^', 'g'), 'û'],
    [new RegExp('U:', 'g'), 'Ü'],
    [new RegExp('ss:', 'g'), 'ß'],
    [new RegExp('SS:', 'g'), 'ß']
  ],

  // 'tuple' is a tuple of [pattern, replacement], i.e.: [ /SS:/, 'ß' ]
  translit: function(tuple) {
    this.tmp_text = this.tmp_text.replace(tuple[0], tuple[1]);
  },

  // this guy succesively applies each [pattern, replacement] to the input text
  filterText: function(in_text) {
    if(in_text !== null && in_text !== "") {
      this.tmp_text = in_text;
      this.transliterations.forEach(this.translit,this);
    }
    return this.tmp_text;
  },
  actions: {
    clear() {
      this.set('raw_text', '');
      this.set('cooked_text', '');
    },
    transliterate() {
      if(this.get('raw_text') !== "") {
        this.set('cooked_text', this.filterText(this.get('raw_text')));
      } else {
        this.set('cooked_text','');
      }
    }
  }
});
