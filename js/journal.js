function Entry(title, body) {
  this.title = title;
  this.body = body;
 }

 Entry.prototype.wordCount = function() {
   var entry_text = this.body;
   var splitString = entry_text.split(" ");
   return splitString.length;
 }

 exports.entryModule = Entry;
