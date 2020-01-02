let myFirstObj = {}; //Boş yeni bir object ** Yaygın kullanım
let mySecObj = new Object(); // Boş yeni bir object ** yaygın olmayan bir kullanım

let myEmail = 'bulentkyc@gmail.com';

//let client = {name: 'Bulent', email: myEmail, pass: '123'};

let client = {
    name: 'Bulent',
    email: myEmail,
    pass: '123'
};

let email = {
    to: 'abc@def.com',
    cc: null,
    bcc: null,
    subject: 'Test e-mail',
    message: 'Test'
}

console.log(email.subject);
console.log(email['to']);

let param = 'message';

console.log(email[param]);

//let userPref = window.prompt(`please enter which property you want from email object : `);
//alert(email[userPref]);

client.isActive = true;

let userPropKey = prompt('Please type your key');
let userPropVal = prompt('Please type your value');


client.userPropKey = userPropVal;
client[userPropKey] = userPropVal;

if (Boolean(client.userPropKey) == true){
    console.log('client.userPropKey is true');
} else {
    console.log('client.userPropKey is not true');
}

if (client.isActive == true){
    console.log('client.isActive is true');
} else {
    console.log('client.isActive is not true');
}

console.log(client);

client.userPropKey = '';

delete client.userPropKey;

client['userInput-'+userPropKey] = userPropVal;

let mail = prompt('please type your email address');

client.mail = mail;
client[mail] = mail;

let user = {
    mail
}

console.log(user);

console.log({
    to: 'abc@def.com',
    cc: null,
    bcc: null,
    subject: 'Test e-mail',
    message: 'Test'
});

localStorage.setItem('userEmail',client.mail);      //it hase overwrite option on

let StrgEmail = JSON.stringify(email);

localStorage.setItem('email', JSON.stringify(email));       //json stringify yapma sebebimiz object içindeki dataarı stringe çevirerek js in basmasını sağlamak

//let res = localStorage.getItem('email');                    //in any condition it will return string
//alert(res.to);          //Output --> undefined      it is string because

let res2 = JSON.parse(localStorage.getItem('email'));
//alert(res2.to);          //Output --> abc@def.de    we decode it so we can take value now
console.log(res2.to);

let res3 = localStorage.getItem('email');

let ObjEmail = JSON.parse(res3);

console.log(ObjEmail);