import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1>Hellow Orldp Eople</h1>;      //JSX : javascript içindeki html
const name = 'OimusuNesan';     //değişken atama nasıl yapılırı görüyoruz değişken yazıyorus js deyiz unutmayalım o yüzden {} kullandık
const element = <p>Hello WorLd <b>{name}</b></p>

ReactDOM.render(
                (
                    //taglerin olacağı yer 
                    <>
                    <p>asd</p>
                    <h1>dsa</h1>
                    </>
                ) , document.getElementById('root'));