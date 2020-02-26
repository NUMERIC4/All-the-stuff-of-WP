//Function for data loading

async function dataLoad (currencyOne, currencyTwo) 
{

    $('.loadEffect').fadeIn();      //bir gif resmimiz var style css içinde display none halinde onu almak için kullanıyoruz yükleniyor etkisi oluşturmak için 18.54

    //https.//www.alphavantage.co/documentation/ buradan aldık alttaki linki apikeyide site içerisinde oluşyurduk 18.34
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyOne}&to_currency=${currencyTwo}&apikey=R5UAPIVMXDAHB5SI`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //bu console ile datanın yazımını objectin tasarımını console da gördük oradan gerekneleri belirleyip devamını yazıyoruz 18.34

    const currenctRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    console.log(currenctRate);

    //daya gelirse currancyRate true olucak bunu kullanıcaz mevcut olmayan çevirme işlemlerinden kaçınmak için 18.49
    currenctRate ? $('#currencyEqual').text(parseFloat(currenctRate).toFixed(5)) : alert('No available exchange order')        //ternary if case burası iç kısmada parse float koyduk integer sayısını sabitlemek için
    $('.loadEffect').fadeOut(); //burada da displayi none a geri çevirdik 18.55
}
//PARAMETRE verdik dataLoad functiona ki her seferinde farklı para birimleri arası dönüşüm yapabilsin 18.34
// dataLoad('EUR', 'TRY');
//gelen sayı . dan sonra 8 hane onu 5 e indiricekmişiz 18.34


//JQuery 18.36
$(document).ready ( function () 
{   //jquery oluşturduk 18.35
    let selectedCurrency1 = 'USD - United States of America';       //seçilmiş olan para birimi 18.37
    let selectedCurrency2 = 'EUR - Euro';                           //Çevrilicek para birimi 18.39
    //para birimleri için 3 haneli kelimeler kullanıcaz liste html tarafında var bizde string fonksiyonarlı ile ilk 3 string ayıklıcaz. let curr1Short bu tanım için 18.40

    let curr1Short = selectedCurrency1.substr(0,3);
    let curr2Short = selectedCurrency2.substr(0,3);

    dataLoad(curr1Short, curr2Short);

    $('#currency1').text(curr1Short);   //18.46 oraya çıkan yazıyı sadece paranın kısaltması haline getiriyoruz
    $('#currency2').text(curr2Short);   

    //select-1, if changes - bunu para birimi değiştiğinde bizde bunu data kısmında güncelleyelim diye yazdık 18.58
    $('#select1').change(function () 
    {
        selectedCurrency1 = $(this).children("option:selected").val() //seçileni buradan buluyoruz alıyoruz 19.01
        console.log(selectedCurrency1); //çalıştığını gördük 19.02
        curr1Short = selectedCurrency1.substr(0,3); //bu 3 hane güncellenmeli çünkü para birimini değiştirdik
        $('#currency1').text(curr1Short);   //sayfada yukarıda yazan görünür yazıda birim değiştirmek için

        // dataLoad(curr1Short, curr2Short);

    } )

    $('#select2').change(function () //19.09
    {
        selectedCurrency2 = $(this).children("option:selected").val() 
        console.log(selectedCurrency2); 
        curr2Short = selectedCurrency2.substr(0,3); 
        $('#currency2').text(curr2Short);  

        dataLoad(curr1Short, curr2Short);

    } )
    
    //reverse btn - iki para biriminin yerlerini değiştirmek için 19.10
    $('#btnChng').click ( () => 
    {
        //tam tersini yapıcağımız için çapraz bağlıyoruz 19.11
        curr1Short = selectedCurrency2.substr(0,3);
        curr2Short = selectedCurrency1.substr(0,3);

        //üstteki para birimlerini değiştiriyoruz
        $('#currency1').text(curr1Short);
        $('#currency2').text(curr2Short);
        $('#select1').val(selectedCurrency2);
        $('#select2').val(selectedCurrency1);
        dataLoad(curr1Short, curr2Short);
    } )


    //calculation part - şimdi girilen değerin sonucunu göstermek istiyoruz dolayısıyla keyUp ı kullanarak grilen değeri hesaplıyacak 19.49
    $('#input1').keyup(function ()  
    {
        let input1Value = $(this).val();
        let currencyValue = parseFloat($('#currencyEqual').text());
        let result = (input1Value * currencyValue).toFixed(2);
        console.log(`${input1Value} + ${currencyValue} + ${result}`);
        $('#input2').val(result);
    } )

} )