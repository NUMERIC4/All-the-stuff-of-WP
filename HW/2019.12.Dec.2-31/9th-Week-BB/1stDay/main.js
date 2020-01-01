/*      //Empty object creation way
        let MyFirstObj = {};                //empty object creation (common way)
        let MySecObj = new Object();        //empty object creation (rare way)
*/
//Creation of an object with a value
let MyMail = 'ahmetfkaran@gmail.com';
let client = 
{
    name: 'Bulent',     //this is a property first element key property which is "name" other one value property which is 'Bulent' it can be number too or variable. And we split them with , not ;
    email: MyMail,      //AS we said we can use variable if this porperty is the last onei we dont need to use ',' here
    pass: '123',
};

let email =
{                       //we use dummy data because we are not interested with reality about this data we just need something so we manupulate it
    to: 'abc@dsadsa.de',
    cc: null,
    bcc: null,
    subject: 'Test-email',
    message: 'Test'
};

console.log(email.subject);
console.log(email[0]);
console.log(email['to']);       //if we dont use '' then we got an error that we didnt define to variable yeap it is not variable it s a key property

let param = 'message';

console.log(email[param]);      //we can define what we will take from object as an property by variable

let UserPref = window.prompt(`please enter which property you want from email object : `);      //prompt always return to string to better coding we should respect to datatype
alert(email[UserPref]);

client.isActive = true;
let userPropKey = prompt('Please type your key');
let userPropValue = prompt('please type your value');
client.userPropKey = userPropValue;     //userPropKey create inside client then its start running
client[userPropKey] = userPropValue;    //If we want to declare parameter by user we should use this way to guarantee enter that key value as a property
console.log(client);
    /*Output
    15: "95"                        coming from row 38
    name: "Bulent"
    email: "ahmetfkaran@gmail.com"
    pass: "123"
    isActive: true
    userPropKey: "95"               coming from row 37
    */

        if (client.userPropKey ==true) 
        {
            console.log('True');
        } 
        else 
        {
            console.log('False');
        }
//ufak bir kopuş komple tekrar izlemem gerekicek :S

client['userInput-'+userPropKey]=userPropValue; //we can add something that already define by user to become key prop

let mail = prompt('please enter a valid email adres');

client.mail = mail;
client[mail] = mail;

let user = 
{
    mail
}
console.log(user);



//HW
/* ------------------Task--------------------*/
/* 1)Create an object with these keys and values and
    name it foods.
    key     |    value
    name    |    banana
    color   |    yellow
    calori  |    276
    isFamous|    true
    2) log to the console whole object
    3) Ask to user which property would like to see
        (you can use promt)
        when page is opened, a promt window should appear and ask
        for key. Afterwords you should show alert windows with value
        of that key.
    4) Create a button and connect number 3 to this butto
    5) put a button to HTML file. When someone click show a new
        promt and ask which property would like to add.
        Afterwords insert the property to your object.
        !!!It should support space named keys.
    6) One more button for delete some properties. You can use 
        promt and ask the key for delete.
*/