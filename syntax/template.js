var name = 'k88-5';
var letter = 'Dear '+name+'\n\n\asdfasdfasdfadsf asdf adsfadsfa sdfa sdf adsf adsf afasdf asfd a';
console.log(letter);


var letter = `Dear +${name}
asdfasdfasdfadsf asdf adsfadsfa sdfa sdf adsf adsf ${1+1}afasdf asfd a${name}`;
console.log(letter);