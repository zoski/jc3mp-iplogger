// Yes, this is it. This is all you need for a minimal package.
console.log('[IPL]: IPlogger started...');

const fs = require('fs');

jcmp.events.Add('ClientConnected', client => {
var d = new Date();
//plus 1 to month because js
var datetime = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    fs.appendFile("logs/IPlogger.log", `JOIN ${datetime} | ip : ${client.ipAddress} - steamId : ${client.steamId} - name : ${client.name}\n`, function(err) {
        if(err) {
            return console.log(err);
        }
	})
    console.log(`[IPL JOIN] ${datetime} | ip : ${client.ipAddress} - steamId : ${client.steamId} - name : ${client.name}`);


});

jcmp.events.Add('ClientDisconnected', client => {
var d = new Date();
//plus 1 to month because js
var datetime = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    fs.appendFile("logs/IPlogger.log", `LEAVE ${datetime} | ip : ${client.ipAddress} - steamId : ${client.steamId} - name : ${client.name}\n`, function(err) {
        if(err) {
            return console.log(err);
        }
	})
    console.log(`[IPL LEAVE] ${datetime} | ip : ${client.ipAddress} - steamId : ${client.steamId} - name : ${client.name}`);


});