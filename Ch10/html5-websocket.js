var ws = new WebSocket('ws://host/path');
ws.open = function(){
	ws.send('data');
}

ws.onclose = function() {};

ws.ondata = function(data) {
	alert(ev.data);
}