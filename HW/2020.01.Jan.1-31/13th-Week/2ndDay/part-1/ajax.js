/*
AJAX = Asynchronous JavaScript And XML
--------

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading whole page.

AJAX is a developer dream because you can:
    Read data from a web server - after the page has loaded
    Update a web page without reloading the page
    Send data to a web server - in the background

How AJAX works :
----------
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JS
3. The XMLHttpRequest object sends a request to a web server
4. The server process the request
5. The server sends a response back to the web page
6. The response is read by JS
7. Proper action (like page update) is performed by JS

Exp :
------
var xhttp = new XMLHttpRequest();
xhttp.onreadtstatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
};
xhhtp.open("GET", "ajax_info.txt", true);
xhttp.send();

Steps:
-----
1.  The XMLHttpRequest Object :
        - variable = new XMLHttpRequest();
        - All modern browser support the XMLHttpRequest object
        - For security reasons, modern browsers do not allow access across domains !!!!!!!!
        - This means that both the web page and the XML file it tries to load, must be located on the same server. (CORS)

2.  open(method, url async, user, psw) Specifies the request
        method: the request type GET or POST, and can be used in most cases
            - GET is simpler and faster than POST, and can be used in most cases
            - Sending a large amount of data to the server (POST has no size limitations)
            - Sending user input (which can contain unknown characters), POST is more robust and secure than GET
        url: the file location
        async: true (asynchronous) or false (synchronous)
        user: optional user name
        psw: optional password

3.  <
*/

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {    //readyState 4 ready to send :D
    // console.log(this);
    // console.log('Alinan responseText :', this.responseText);

    // document.getElementById('div1').innerHTML = this.responseText;

    myData = JSON.parse(this.responseText);
    console.log(myData);

    // myData.slice(0, 10).map(item => {
    //     document.getElementById('div1').innerHTML += `<h2>${item.id}. ${item.title}</h2> \n <p>${item.body}</p>`;
    //     document.querySelectorAll('div h2').forEach(element=> element.style.color = 'green');
    //     document.querySelectorAll('div p').forEach(element=> element.style.color = 'red');
    // })
    }
    addHTML(myData,'div1', 'red', 'blue');
    addHTML(myData, 'div2', 'green', 'yellow');

}
xhttp.send();

//alternatif iki içerde de tasarlanabilir dışarıda fonksiyon olarak kkonabilir
function addHTML(data, y, color1, color2) {
        data.slice(0, 10).map(item => {
            document.getElementById(`${y}`).innerHTML += `<h2>${item.id}. ${item.title}</h2> \n <p>${item.body}</p>`;
            document.querySelectorAll(`#${y} h2`).forEach(element=> element.style.color = `${color1}`);
            document.querySelectorAll(`#${y} p`).forEach(element=> element.style.color = `${color2}`);
    })

    
}