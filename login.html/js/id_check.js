function checkUsername() {  
  const username = el.value;         
  if (username.length < 5) {                          
      elMsg.innerHTML = 'Not long enough, yet...';
    } else {                                  
      elMsg.innerHTML = '';                    
    }
}

function tipUsername() {    
  elMsg.innerHTML = 'Username must be at least 5 characters'; 
}  

const el = document.getElementById('username');     
const elMsg = document.getElementById('feedback'); 

el.addEventListener('focus', tipUsername, false); 
el.addEventListener('blur', checkUsername, false);

