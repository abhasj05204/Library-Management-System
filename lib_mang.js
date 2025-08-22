document.addEventListener('DOMContentLoaded', () => {
  const form=document.querySelector('form');
  const emailinput=form.querySelector('input[placeholder="Email Id"]');
  const enrollinput=form.querySelector('input[placeholder="Enrollment"]');
  const passinput=form.querySelector('input[placeholder="Password"]');
  const acropolisEmail = /^[^\s@]+@acropolis\.in$/i;
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email=emailinput.value.trim();
    const enroll=enrollinput.value.trim();
    const pass=passinput.value.trim();
//trim removes the extra spaces while giving inputs
    if(!email || !enroll || !pass)
    {
        alert("Please fill in all fields");
        return;
    }
    if(!acropolisEmail.test(email))
    {
        alert("Invalid Email Entered");
        return;
    }
    window.location.href='demo homepage.html';
  });
  const signup=form.querySelector(' .footer input[type="button"]');
  if(signup){
    signup.addEventListener('click',()=>{
        window.location.href="sign_up_page.html";
    });
  }
});
//this prevents the webpage to go back to this login page and helps to head forward towards the login page


/*This defines a regular expression (regex) that checks if an email string follows the pattern something@acropolis.in.

🔍 Breakdown of the regex pattern:
/ ... /i
The expression is enclosed between forward slashes: / ... /.

The i at the end means case-insensitive matching.

So @Acropolis.in, @ACROPOLIS.IN, etc. are also allowed.

^
Start of string anchor.

Ensures the match starts right from the beginning of the string.

[^\s@]+
Character set rule:

^ inside the square brackets negates the characters listed.

\s matches whitespace (like spaces, tabs).

@ is the literal at-symbol.

So [^\s@]+ means:

“One or more characters that are NOT whitespace and NOT @.”

This part matches the username before the @.

@acropolis\.in
Matches the literal string @acropolis.in.

Why \.in and not just .in?

In regex, a . means “any character.”

So \. escapes it to mean a literal dot.

$
End of string anchor.

Ensures nothing comes after @acropolis.in.

✅ So, what does the full regex do?
It ensures that:

The email starts with at least one non-whitespace, non-@ character.

It then has exactly @acropolis.in.

Nothing follows after that.

And case doesn’t matter.

🔁 Examples
Email	Match?	Reason
john@acropolis.in	✅	Valid match
user.name@acropolis.in	✅	Still valid
john@acropolis.IN	✅	Case-insensitive
john@acropolis.com	❌	Domain must be acropolis.in
@acropolis.in	❌	No username before @
john @acropolis.in	❌	Space in the email
john@acropolis.inx	❌	Extra character after .in

Let me know if you want a version that allows subdomains like john@stu.acropolis.in.*/