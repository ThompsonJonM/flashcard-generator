
//basic card constructor
exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

//cloze card constructor
exports.ClozeCard = function(text, cloze) {
	// Convert the incoming strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	//cloze statement validation
	if (!textToLower.includes(clozeToLower)) {
		console.log('Cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}