/*
Neredeyiz ?
    İskelet oluturma HTML
    Deriyi oluşturma CSS
    Kasların eklenmesi JS
        Şu ana kadar yaptığımız işlemler locale idi yani kendi bilgisayarımızda idi.

SYNC & ASYNC ? ----> SYNC : Eş zamanlı          ASYNC : paralel

javascript ---> SYNC & Single-Thread(yukarıdan aşağıya)

*/

getAnimals = () => {
    console.log('1. Cat');

    setTimeout( () => {
        console.log('2. Dog');
    } , 5000);

    console.log('3. Butterfly');
}

getAnimals();

/* önce 1. sonra 3.  sonra 2. bastırılcak 5 saniyelik gecikmeyle neden? - JS timer başlattıktan sonra devam etti okumaya dolayısıyla 5saniyelik süreç başladığında JS 3. bstırılcak console log komutuna geçti düresi bitincede settimeout değerini bastırdı. Dingle Thread olmasından dolayı imiş bu */
/* Biz programın 2. console log gelene kadar beklemesini istiyoruz ama bu olmuyor problem teşkil ediyor bize */
/* Problem için çözüm metodları 

1. Yöntem : PROMISE
    JS bir işlemin biteceğini (başarılı veya başarısız olarak) garantiliyen sistem.
2. Yöntem : ASYNC & AWAIT
*/

/* Promise

1. Pending      : Bekleme süreci
2. Başarılı     : Bir fonksiyon dönecek --> resolve()
3. Başarısız    : Bir fonksiyon dönecek --> reject()
                                                        resolve ve reject terimleri değiştirilebilir ama genel kabul bu iki kelime üserine olduğu için kalması daha iyi gibi gibi
- Promise oluşturma
    let promise_Obj = new Promise( (resolve, reject) => {İşlemler burada olucak})
*/


let promise_Obj = new Promise( (resolve, reject) => {
    //pending process, bekleme süreci
    setTimeout(() => {
        const number = Math.floor(Math.random()*500);
        //Create a number with random if it is Greater then 250 return SUCCESS (resolve())
        if (number > 250) {
            resolve(number);
        } else{
            // if it is Smaller then 250 return FAIL (reject())
            reject(`${number} is not greater then 250`);

        }
    }, 4000);
} )

//Using Promise Obj
/*
promise_Obj 
    .then   ( function - resolve() )
    .catch  ( function - rejcet() )
*/

/*Bu yapıya zincirleme yapı deniyormuş */
promise_Obj
    .then (result => console.log(`Promise resolve. Result  : ${result}`))
    .catch(reason => console.log(`Promise rejected. Reason : ${reason}`))

