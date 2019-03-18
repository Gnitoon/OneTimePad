# OneTimePad
OneTimePad cipher in  Javascript

This is a modified version of github.com/karai17/One-Time-Pad 

# installation 
  Clone or download this repo and include in your project folder 
  
  * include main file
  `<script src="OneTimePad0.1/oneTimePad.js"></script>`
  
  * include jQuery<br>
  `<script src="jquery-3.3.1.min.js"></script>`<br>
  *or<br> `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>`
  
  * Go to OneTimePad.js and set the path where the file are in<br>
  ```var pathToThisFile = "OneTimePad0.1/";```
 
  
# Usage
  
  * encrypt:<br>
    Call function ```encrypt("message", "yourkey")```<br>
    > the output will be in JSON like this: ```{"msg":"MESSAGE","key":"YOURKEY","out":"LTNKLLD"}```<br>
    > if no key was givem or leaved blank - ```encrypt("message", "");``` - a key will be generated with same length of the text
  
  * decrypt:<br>
    Call function ```decrypt("text", "key")```<br>
    > return will be in JSON like this: ```{"msg":"LTNKLLD","key":"YOURKEY","out":"MESSAGE"}```
    
  * testOTP:<br>
    Print a test with message = "test" and key = "" in console
    
    
# Credits
  This 'library' was based on one-time-pad implementation of github.com/karai17/One-Time-Pad adapted for command line and general pourpose usage.
  
# License 
  MIT license
