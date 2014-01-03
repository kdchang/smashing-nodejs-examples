/**
Chapter 5 #CLI/File System API
**/
var fs = require('fs'),
	stdin = process.stdin,
	stdout = process.stdout;
var cwd = process.cwd();

fs.readdir(cwd, function(err, files) {
	var stats = [];
	console.log(' ');
	if (!files.length) {
		return console.log('   \033[31m Nofile\033[39m\n');
	}

	console.log('select a file what you want');

	var file = function(i) {
		var filename = files[i];

		fs.stat(__dirname + '/' + filename, function(err, stat) {
			stats[i] = stat;
			if (stat.isDirectory()) {
				console.log('' + i + ' ' + '\033[36m' + filename + '/\033[39m');
			} else {
				console.log('' + i + ' ' + '\033[90m' + filename + '\033[39m');
			}
			if (++i == files.length) {
				read();
			} else {
				file(i);
			}
		});
	}

	var read = function() {
		console.log('');
		stdout.write('\033[33mPlease Enter your choice: \033[39m');
		stdin.resume();
		stdin.setEncoding('utf8');
		stdin.on('data', option);
	};

	var option = function(data) {
		var filename = files[Number(data)];
		if (!filename) {
			stdout.write('\033[31m Please Enter your choice: \033[39m');
		} else {
			stdin.pause();
			if (stats[Number(data)].isDirectory()) {
				fs.readdir(__dirname + '/' + filename, 'utf8', function(err, files){
					console.log('');
					console.log(' (' + files.length + 'files)');
					files.forEach(function(file) {
						console.log('     - ' + file);
					});
					console.log('');
				});
			} else {
				fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data) {
					console.log('');
					console.log('\033[90m' + data.replace(/(.*)/g, '      $1') + '\033[39m');
					console.log('');
				});
			}
		}
	};

	file(0);
});