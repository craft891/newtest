var crypt = new Crypt();
function encryptRSA(publickey,message,signiture){return crypt.encrypt(publickey,message,signiture)}
function decryptRSA(privatekey,encrypted){return crypt.decrypt(privatekey, encrypted)}
function login(user,pass){
 pr=CryptoJS.AES.decrypt(servget(user).key,pass);
  all=ge('all');
  us=servget(user);
  messages=us.cnt;
  messages.forEach((e)=>{mes=decryptRSA(pr,e.mes);user=e.user;document.wright(mes+":"+user)});
  document.wright("<form onsubmit='send();return false'><input placeholder='user'><input placeholder='message'><button>Message</button></form>");
  function send(){use=ge("user").value;mes=ge("message").value;to=servget(use);enc=encryptRSA(to.pu,mes);
                 q=to.cnt;q.push({mes:enc,user:user});
                 }
}
