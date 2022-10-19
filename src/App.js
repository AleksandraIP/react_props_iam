import React from 'react';
import './App.css';


function Info(props){
    return(
        <div>
            <img width="300px" src={props.img} alt=""/>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Telefon: {props.tel}</p>
            <p>E-mail: {props.email}</p>
            <p>Nationality: {props.nationality}</p>
        </div>
    )
}

function Pet(props){
    return(
        <div>
            <img width="400px" src={props.avatar} alt=""/>
            <h2>Name: {props.name}</h2>
            <p>Breed: {props.breed} </p>
            <p>Age: {props.age}</p>
        </div>
    )
}
export default function App(){
    return(
        <div className="App">
         <Info img={process.env.PUBLIC_URL + 'Oleksandra.jpg'} name="Oleksandra Popova" age="29" tel="079 111 11 11" email="aleksandraip@ukr.net" nationality="Ukrainian"></Info>
            <Pet avatar={process.env.PUBLIC_URL + 'vasa.jpg'} name='Vasya' breed='British' age='10 year'></Pet>
        </div>
    );
}