import React from "react";
import ReactDOM from "react-dom/client"


const element = React.createElement('h1',{key: "1", id:'first',className: 'Rahul',style: {backgroundColor: 'blue',fontSize: '30px',color: 'white'}},'Hello Coder Army');
const element2 = React.createElement('h1',{key:"2", id:'second',className: 'Rahul',style: {backgroundColor: 'blue',fontSize: '30px',color: 'white'}},'How are you');
console.log(element)


const newElement = <h1>Hello Coder Army</h1>

const div1 = React.createElement('div',{},[element, element2])

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div1)


// Reactroot.render(element);
// Reactroot.render(element2);

