<?php 
echo "<script>const sk19 = new URLSearchParams(window.location.search);
const inurlencoded = sk19.get('one');var ke=sk19.get('twoa');CryptoJS.AES.decrypt(inurlencoded,ke).toString(CryptoJS.enc.Utf8)</script>"

?>
