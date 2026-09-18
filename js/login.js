(()=>{
  const form=document.getElementById('loginForm'),error=document.getElementById('error'),btn=document.getElementById('submitBtn');
  (async()=>{try{await Api.get('/api/auth/me');location.href='app.html';}catch{}})();
  form.addEventListener('submit',async e=>{
    e.preventDefault();error.textContent='';btn.disabled=true;btn.innerHTML='Validando…';
    try{await Api.post('/api/auth/login',{email:document.getElementById('email').value,password:document.getElementById('password').value,rememberMe:document.getElementById('remember').checked});location.href='app.html';}
    catch(ex){error.textContent=ex.message;btn.disabled=false;btn.innerHTML='Iniciar sesión <span>→</span>'}
  });
})();
