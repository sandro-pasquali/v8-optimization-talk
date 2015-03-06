var fs = require('fs');
var stream = require('stream');
var lineReader = new stream.Transform({ 
	objectMode: true 
});

function $writer(msg) {
	process.stdout.write(msg + '\n');
}
 
lineReader._transform = function $transform(chunk, encoding, done) {
	var data = chunk.toString()
	if(this._lastLine) {
		data = this._lastLine + data;
	}
	var lines = data.split('\n');
	this._lastLine = lines.pop();
	lines.forEach(this.push.bind(this));
	done();
}
 
lineReader._flush = function $flush(done) {
     if(this._lastLine) {
     	this.push(this._lastLine);
     }
     this._lastLine = null;
     done();
}
 
lineReader.on('readable', function $reader() {
	var line;
	while(line = lineReader.read()) {
		$writer(line);
	}
});

fs.createReadStream('./dummy.log').pipe(lineReader);
