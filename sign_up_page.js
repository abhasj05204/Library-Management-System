document.addEventListener('DOMContentLoaded', () => {
  const form=document.querySelector('form');
  const email=form.querySelector('input[placeholder="Email Id"]');
  const enroll=form.querySelector('input[placeholder="Enrollment No."]');
  const pass=form.querySelector('input[placeholder="New Password"]');
  const confirm=form.querySelector('input[placeholder="Confirm Password"]');
  const acropolisEmail = /^[^\s@]+@acropolis\.in$/i;
  const signUp=form.querySelector('.footer input[type="button"]');
  const login=form.querySelector('.footer input[type="button"]');
  signUp.addEventListener('click', (e) => {
    e.preventDefault();

    const em=email.value.trim();
    const enr=enroll.value.trim();
    const password=pass.value.trim();
    const confirmpassword=confirm.value.trim();
    if(!em || !enr || !password)
    {
        alert("Please fill in all fields");
        return;
    }
    if(!acropolisEmail.test(em))
    {
        alert("Invalid Email Entered");
        return;
    }  
    if(password==confirmpassword){
      alert("Sign up successful");
      window.location.href='demo homepage.html';
    }
    if(password!=confirmpassword)
    {
      alert("Password Doesn't Match");
      return;
    }
  });
});