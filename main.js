// Yes, this is it. This is all you need for a minimal package.
console.log('[IPL]: IPlogger started...');

const fs = require('fs');

jcmp.events.Add('ClientConnected', client => {
    fs.appendFile("logs/IPlogger.log", `${client.ipAddress}\n`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`[IPL] ip : ${client.ipAddress} - steamId : ${client.steamId}`);
    })

});
