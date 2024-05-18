function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}