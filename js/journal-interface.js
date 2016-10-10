var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  var entry;
  $("#journalEntry").submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var title = $('#title').val();
    var entry = new Entry(title, body);
    var output = entry.wordCount();
    var vowels = entry.vowelCount();
    var consonants = entry.consonantCount();
    var teaser = entry.getTeaser();

    //console.log(output);
    $('#entry').text(' wordcount = '  + output + ' vowel count = ' + vowels '  consonant count = ' + consonants + ' teaser = ' + teaser);
  });
});
