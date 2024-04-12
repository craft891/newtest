function login(user,pass){
 pr=CryptoJS.AES.decrypt(servget(user).key,pass);
  all=ge('all');
  us=servget(user);
  messages=us.cnt;
  messages.forEach((e)=>{mes=e.mes;user=e.user;document.wright(mes+":"+user)});
  document.wright("<form onsubmit='send();return false'><input placeholder='user'><input placeholder='message'><button>Message</button></form>");
  function send(){use=ge("user").value;mes=ge("message").value;serget("use").pu}
}
