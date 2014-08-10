var os = require('os');

var message = 'OS System Information:';

var sysArray = new Array('Type: ' + os.type(),
						 'Node version: ' + process.version,
						 'Platform: ' + os.platform(),
						 'Host name: ' + os.hostname(),
						 'Total Memory: ' + os.totalmem(),
						 'Free memory: ' + os.freemem(),
						 'Uptime: ' + os.uptime()
						);
console.log(message);

var arraylen = sysArray.length;

i = 0;
while(i < arraylen) {
	console.log(sysArray[i]);
	i++
}