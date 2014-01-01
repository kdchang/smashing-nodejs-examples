/**
Module dependencies
**/
var fs = require('fs'),
	stdin = process.stdin,
	stdout = process.stdout;
	cwd = process.cwd();

fs.readdir(cwd, function(err, files){
	console.log(' ');
	if(!files.length){
		return console.log('\033[31m Nofile\033[39m\n');
	}

	console.log('select a file what you want');

	var file = function (i){
		var filename = files[i];
		fs.stat(__dirname + '/' + filename, function(err, stat){
			if(stat.isDirectory()){
				console.log('' + i + '\033[36m' + filename + '/\033[39m');
			} else {
				console.log('' + i + '\033[90m' + filename + '\033[39m');
			}
			if(++i == files.length){
				read();
			} else {
	   		file(i);
			}
		});
	}

	var read = function(){
		console.log('');
		stdout.write('     \033[33m Enter your choice: \033[39m');
		stdin.resume();
		stdin.setEncoding('utf8');
	};

	var option = function(data){
		var filename = files[Number(data)]
		if(!filename){
			stdout.write('    \033[31m Enter your choice: \033[39m');
		} else {
			stdin.pause();
			fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
				console.log('');
				console.log('\033[90m' + data.replace(/(.*)/g, '      $1') + '\033[39m');
			});
		}
	}; 
	
	file(0);
});
