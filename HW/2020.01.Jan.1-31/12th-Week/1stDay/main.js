function showModal() 
{   //to show modal
    document.getElementById('modalId').style.display = 'block';
}

function hideModal() 
{   //to hide modal
    document.getElementById('modalId').style.display = 'none';
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

//when the user clicks anywhere otside of the modal, close tha modal
window.onclick = function (event) {
    // this.console.log(event);
    
    var modal = document.getElementById('modalId');
    if (event.target == modal) 
        {
            modal.style.display = 'none';
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