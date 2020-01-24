function showModal() 
{   //to show modal
    document.getElementById('modalId').style.display = 'block';
}

function hideModal(x) 
{   //to hide modal
    document.getElementById('modalId'+ x).style.display = 'none';
}

//to get the values of input
function getValueLogin(event) 
{
    if (event.name === 'username') 
    {
        username = event.value.toLowerCase();
    }
    else if ( event.name === 'password')
    {
        password = event.value.toLowerCase();
    }
}

//------------------------------------------------------------------------SIGN UP PART------------------------------------------------------
var userNameSignUp, passwordSignUp, passwordRepeatSignUp;

function signUpInLogin() {
    document.getElementById('modalId').style.display = 'none';
    document.getElementById('modalId2').style.display = 'block';
}

//to get the values of inputs' in Sign Up part
function getValueSignUp(event) {
    if (event.name === 'username') 
    {
        userNameSignUp = event.value.toLowerCase();
    }
    else if (event.name === 'password') 
    {
        passwordSignUp = event.value.toLowerCase();
    }
    else
    {
        passwordRepeatSignUp = event.value.toLowerCase();
    }
}

//to submit the form in Sign Up
function signUp() {
    if (passwordSignUp !== passwordRepeatSignUp) 
    {
        alert('Error password doesnt matching');
        return;
    }
    else
    {
        alert('Successful sign up');
        document.location.reload(true);
    }
}

//when the user clicks anywhere otside of the modal, close tha modal
window.onclick = function (event) {
    // this.console.log(event);
    
    var modal = document.getElementById('modalId');
    var modal2 = document.getElementById('modalId2');

    if (event.target == modal) 
        {
            modal.style.display = 'none';
        }
    else if (event.target == modal2)
        {
            modal2.style.display = 'none';
        }
}

function submitFormLogin() 
{
    if (username ==='admin' && password === 'admin') 
    {
        console.log(document.location);
        document.location.href = "homePage.html";
    }   
    else
    {
        alert('Yanlış username veya şifre girildi..');
        document.location.reload(true);
    }
}


// navbar olucak
// içerik bize kalmış
// ön tarafa giriş bilgisi gelicek z konumlamaya göre arka plan biraz karanlık olucak seviye görselleşmesi için, aynı zamanda logni menüsünün dışında bir yere tıklayınca o menü kaoanıcak
// şifre pw için sign up kısmı olmalı
// login butonu ile etkinleşecek giriş sayfası 
// loginden giriş admin olucak ve şifre de admin olucak
// sgin up kısmında 

// **bu arka plana farklı renk verme konusu modal diye geçiyor sanırım
// baştan sona html css js ile bütünsel bir şey yapmak