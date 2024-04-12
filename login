<!DOCTYPE html>
<html>
<head>
<script src='https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js'></script>
<script src="login.js">get=(q)=>{return document.getElementById(q)}</script>
</head>
<body>
<form onsubmit="login(get("user").value,get("pass").value);return false">
<input placeholder="Username" id="user"><input placeholder="password" id="pass"><button>Submit</button>
</form>
</body>
</html>
