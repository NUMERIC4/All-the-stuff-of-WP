let mails = [];
function sendEmail() 
{
    //we should read the value which entered to section
    let to = document.getElementById('to').value;
    let cc = $('#cc').val();
    let subject = $('#subject').val();
    let message = $('#text').val();
    let mail = {to, cc, subject, message};
    console.log(mail);
    mails.push(mail);
    localStorage.setItem('mail', JSON.stringify(mails[length.mails-1]));
    console.log(mails);
}