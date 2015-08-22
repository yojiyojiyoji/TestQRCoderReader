/* 
 * This javascript code is written for QR Code Reading Module in 
 * Artengine reservation system
 * 
 * This code is dependent on
 * - JQuery,
 * - HTML5 QR Code Reader (https://github.com/dwa012/html5-qrcode)
 * 
 * It is also noted that the browser must be comaptible to HTML5
 * 
 * Written by Yoji Uno
 * Version: 0.01
 * Date: 2014-08-14 
 */
function setQrReader(){
    
    $('#reader').html5_qrcode(function(data){
            // do something when code is read
            //alert("Code has successfully read!" + data);
            window.location.href = data;
        },
        function(error){
            //show read errors 
        }, function(videoError){
            //the video stream could be opened
        }
    );
};

$('document').ready(function(){
    //alert("Hello!");
    setQrReader();
});
