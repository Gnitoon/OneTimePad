/**
 * Decrypt
 * 
 * @param msg message to decrypt
 * @param key required key
 * @param return return as JSON
*/

function decrypt(msg, key) {
    var msg	= cleanseText(msg);
    var key	= cleanseText(key);
    var out	= '';

    if(!detectErrors(msg, key)){
        // Decrypt msg with key
		for(var i = 0; i < msg.length; i++){
            var msgTmp	= msg[i].charCodeAt();
			var keyTmp	= key[i].charCodeAt();
			var tmp		= msgTmp - keyTmp + (A - 1);
			
			// Roll over if value passes A
			if(tmp < A)
				tmp	+= CHARSET;
			
			out += String.fromCharCode(tmp);
		}
		
        // * Display output
        console.log("message(in): " + msg);
        console.log("key:         " + key);
        console.log("output:      " + out);

        // * return as JSON
        return JSON.stringify({"msg": msg, "key": key, "out":out});
	}
}