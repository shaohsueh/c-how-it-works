var primes = new Array();
primes[0] = 2;
function test(p) {

   for(var i = 0; i < primes.length; i++) {
      if(p % primes[i] === 0)
	  return;
   }
   primes[primes.length] = p;
}

var j = 3;
var fs = require('fs');
var outfile = "hw1_2.txt";
var out = "";
while(primes.length < 100) {
   test(j);
   j++;
}
for(var i = 0; i < 99; i++) {
   out = out + primes[i];
   out = out + ',';
}
out = out + primes[99]+"\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
