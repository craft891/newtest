<!DOCTYPE html>
<html>
<head>
<script src="login.js">get=(q)=>{return document.getElementById(q)}</script>
</head>
<body>
<form onsubmit="login(get("user").value,get("pass").value);return false">
<input placeholder="Username" id="user"><input placeholder="password" id="pass"><button>Submit</button>
</form>
</body>
</html>
