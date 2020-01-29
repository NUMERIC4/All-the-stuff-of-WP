/*
FETCH --> Promise yapısına sahip
    Bir talepte bulunulur soucu başarılı veya başarısız olarak dönüt verir
    async kullanılabilir
ASYNC çalışır 
Promise chain kullanabiliriz

    FETCH yapısı 
requeat, response
request : kullanıcı trafından server'dan yapılan talep, istenen data
response : server'ın kullanıcıya döndüğü sonuç / hata - başarılı / başarısız durum

HTTPS methods : get , post, put, petch, delete
----------------
CORS (Cross Origin Resource Share) - Farklı Kaynaklar Arası Veri Paylaşımı
    istediğimiz sayfanın formatı bu olduğu zaman data alabiliyoruz zaten ilk console log da da (console.log(response); ) gördük ki type:cors 
    CORS tipi siteler rest api deniyormuş bu tarz siteler data sunuyor normal sayfalardan alamayız.

fetch(url)
    .then()
    .catch()
*/

/*
function makeRequest() {
    const url = "http://jsonplaceholder.typicode.com/posts";

    fetch(url)      //promise yapısı ile url adresinden daa talebind bulunuyorum. (request) --> başarılı / başarısız bir durum response edecek
        .then( response => {
            console.log(response);
            return response.json();
        })
        .then( data => {
            console.log(data[0]);
            document.getElementById('title').innerHTML = data[0].title;
            document.getElementById('text').innerHTML = data[0].body;

            // data.slice(0, 10).forEach( (item, index) => {
            //     document.getElementById('div1').innerHTML += `<h2>${index + 1} ${item.title}</h2> \n <o>${item.body}</p>`;
            // });

            data.slice(0, 10).forEach( (item, index) => {
                document.getElementById('div1').innerHTML += `<h2>${index + 1} ${item.title}</h2> \n <o>${item.body}</p>`;
                document.querySelectorAll('div h2').forEach( tag => tag.style.color = 'blue'); //bütün yaptığımız h2 lerin style değerleri ile oynaşmak için
            });
        })
        .catch(error => {
            console.log(error);
        })

}

makeRequest();
*/


//FETCH() + ASYNC & AWAIT
//ASYNC & AWAIT : adım adım ilerler ve işlemin sonucunu "await" ile bekler
//Await in geçerli olması için function başında Async yazması şart 
/*
async function (){
    .........code1
    .........code2
    await ......code3       :   bu satırda beklenilmesi gereke bir response var.
    .........code4
    await ......code5
}
*/

/*
async function makeRequest(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url);

    console.log(response);

    const data = await response.json();
    console.log(data);

    data.slice(9,20).map((element, index)=> {
        document.getElementById('div1').innerHTML += `<h2>${index+1}. ${element.title}</h2> \n <p>${element.body}</p>`;
    })
}

makeRequest();
*/


