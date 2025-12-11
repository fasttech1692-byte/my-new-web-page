// Enhance contact form UX (no dependency)
const form = document.getElementById('contactForm');
const success = document.getElementById('successMsg');
const error = document.getElementById('errorMsg');
if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    success.style.display = 'none';
    error.style.display = 'none';
    const fd = new FormData(form);
    try{
      const resp = await fetch(form.action, {
        method: 'POST',
        body: new URLSearchParams(fd)
      });
      if(resp.ok){ success.style.display = 'block'; form.reset(); }
      else{ throw new Error('Request failed'); }
    }catch(err){ error.style.display = 'block'; }
  });
}
