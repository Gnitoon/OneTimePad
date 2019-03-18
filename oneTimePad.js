/**
 * 
 * * One-time-pad simetric cipher
 *   
 * 
 * * Original Author:
 * @author:  karai17 - github.com/karai17
 * 
 * * MODIFIED by:               @2019-08-18
 * @author:  Nootiing - github.com/nootiing | Matheus Cesar
 * 
*/





/**
 * * requires jquery*
 * Include needed files by creating script element on html
 * 
 * @var pathToThisFile point the folder that contains these files to include on html
 * 
 */


var pathToThisFile = "OneTimePad0.1/";

	// include alphanumeric pack
	var alphaPack = document.createElement('script'); alphaPack.src = pathToThisFile + 'jquery.alphanumeric.pack.js';
	document.head.appendChild(alphaPack);

	// include encrypt 
	var encrypt = document.createElement('script'); encrypt.src = pathToThisFile + 'encrypt.js';
	document.head.appendChild(encrypt);

	// include decrypt 
	var decrypt = document.createElement('script'); decrypt.src = pathToThisFile + 'decrypt.js'; 
	document.head.appendChild(decrypt);
// *



const A			= 65; // ASCII value for A
const Z			= 90; // ASCII value for Z
const CHARSET	= 26; // Length of Alphabet
    


/**
 * Test One Time Pad 
 */
function testOTP(){
	console.log("\n\n%cEncrypt: ", "color: #bada55; font-size: 110%");
	console.log(x = encrypt("message", "yourkey"));
	console.log("\n\n%cParse JSON: ", "color: #bada55; font-size: 110%");
	console.log(x = JSON.parse(x));
	console.log("\n\n%cDecrypt: ", "color: #bada55; font-size: 110%");
	console.log(decrypt(x.out, x.key));
}


/**
 * Cleanse text
 * 
 * @param txt        Text to Cleanse 
 * @param return     returns text uppercase and remove special and number characters
*/
function cleanseText(txt){
	txt = txt.toUpperCase();
	return txt.replace(/[^a-z]+/gi, '');
}


/**
 * Format text
 * 
 * @param txt      Text to format 
 * @param return   returns formatted text
*/

function formatText(txt){
	var tmp	= '';
	
	// Separate string into groups of 5 letters
	for(var i = 0; i < txt.length; i++){
		tmp += txt[i];
		
		if(i % 5 == 4)
			tmp += ' ';
	}
	
	return tmp;
}


/**
 *	Detect Errors
 *
 *	@param msg			Input
 *	@param key			Secret key
 *	@return				true: errors
 *						false: no errors
*/

function detectErrors(msg, key){
	// * If no message, warn user
	if(msg.length < 1){
		console.log('Input Required');
		return true;
	}
	
	// * If no key available (on decrypt)
	if((key.length < 1)){
		console.log('Key Required');
		return true;
	}
	
	// * If key is too short, warn user
	if((msg.length > key.length)){
		console.log('Invalid Key');
		return true;
	}
	
	return false;
}


/**
 *	Generate Secret Key
 *
 *	@param txt			Text to determine key length
 *	@return				Secret key
*/

function generateKey(txt){
	var key = '';
	// Generate secret key with same length as message
	for(var i = 0; i < txt.length; i++)
		key	+= String.fromCharCode(Math.floor(Math.random() * CHARSET) + A);
	
	return key;
}