// Yes, this is it. This is all you need for a minimal package.
console.log('[IPL]: IPlogger started...');

const fs = require('fs');

jcmp.events.Add('ClientConnected', client => {
    var d = new Date();
    //plus 1 to month because js
    var datetime = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    fs.appendFile("logs/IPlogger.log", `${datetime} JOIN - name : ${client.name}  - ip : ${client.ipAddress} - steamId : ${client.steamId} - \n`, function(err) {
        if(err) {
            return console.log(err);
        }
	})

    console.log(`[IPL] JOIN ${datetime} - name : ${client.name} - IP : ${client.ipAddress} - steamId : ${client.steamId}`);

    // login only IPs on JOIN
    fs.appendFile("logs/IPs.log", `${client.ipAddress}`, function(err) {
        if(err) {
            return console.log(err);
        }
	})
});

jcmp.events.Add('ClientDisconnected', client => {
    var d = new Date();
    //plus 1 to month because js
    var datetime = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    console.log("logs/IPlogger.log", `${datetime} LEAVE - name : ${client.name}  - ip : ${client.ipAddress} - steamId : ${client.steamId} - \n`, function(err) {
        if(err) {
            return console.log(err);
        }
	})
    console.log(`[IPL] LEAVE ${datetime} - name : ${client.name} - IP : ${client.ipAddress} - steamId : ${client.steamId}`);


});
