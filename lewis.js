let LewisCarrolCipher = function(master) {
	this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
	this.master = master;
}

LewisCarrolCipher.prototype._getIndexOfMasterKey = function(index) {
	return this.alphabet.indexOf(this.master[index]);
}

LewisCarrolCipher.prototype._getIndexOfLetter = function(letter) {
	return this.alphabet.indexOf(letter);
}

LewisCarrolCipher.prototype._getDecryptCypherLetter = function(letter, index) {
	let keyIndex = this._getIndexOfMasterKey(index);
	let letterIndex = this._getIndexOfLetter(letter);
	let toPositive = (x) =>  x * -1;
	let i = keyIndex - letterIndex;
	if (i < 0) {
		i = toPositive(i);
	} else if (i > 0){
		i = 26 - i;
	}
	return this.alphabet[i];
};

LewisCarrolCipher.prototype._getEncryptCypherLetter = function(letter, index) {
	let keyIndex = this._getIndexOfMasterKey(index);
	let letterIndex = this._getIndexOfLetter(letter);
	let toPositive = (x) =>  x * -1;
	let i = keyIndex - letterIndex;
	if (i < 0) {
		i = toPositive(i);
	} else if (i > 0){
		i = 26 - i;
	}
	return this.alphabet[i];
};

LewisCarrolCipher.prototype.decrypWord = function(word) {
	let array = word.split('');
	let dec = ''
	array.reduce((prevWord, cypherLetter, index) => {
		dec += this._getDecryptCypherLetter(cypherLetter, index)
	}, '');
	return dec;
}

LewisCarrolCipher.prototype.encrypWord = function(word) {
	let array = word.split('');
	let dec = ''; 
	array.reduce((prevWord, cypherLetter, index) => {
		prevWord += this._getEncryptCypherLetter(cypherLetter, index)
	}, '');
	return dec;
}

module.exports = LewisCarrolCipher;