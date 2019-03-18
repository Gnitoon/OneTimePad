
/**
 * Encrypt
 * 
 * @param msg message to encrypt
 * @param key optional key (if not given will generate with same size of message)
 * @param return return as JSON
*/

function encrypt(msg, key) {
    var msg	= cleanseText(msg);
    var key	= cleanseText(key);
    var out	= '';

    // * If no key, generate key based on message length
 	if(key.length < 1){
        console.log("no given key, generating...");
        key = generateKey(msg);
        console.log("generated key: " + key);
    }
    
	// Check for errors
	if(!detectErrors(msg, key)){
        // Encrypt msg with key
		for(var i = 0; i < msg.length; i++){
            var msgTmp	= msg[i].charCodeAt();
			var keyTmp	= key[i].charCodeAt();
			var tmp		= msgTmp + keyTmp - (A - 1);
			
			// Roll over if value passes Z
			if(tmp > Z)
            tmp	-= CHARSET;
			
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