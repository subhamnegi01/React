import React from "react";
import ReactDOM from "react-dom/client"


// const element = React.createElement('h1',{key: "1", id:'first',className: 'Rahul',style: {backgroundColor: 'blue',fontSize: '30px',color: 'white'}},'Hello Coder Army');
// const element2 = React.createElement('h1',{key:"2", id:'second',className: 'Rahul',style: {backgroundColor: 'blue',fontSize: '30px',color: 'white'}},'How are you');
// console.log(element)



//     bable:                      React                     Render
// JSX => React.createElement() => react element(JSObject) => HTML Element




// const div1 = React.createElement('div',{},[element, element2])


const name = "Rohit"
const obj = {age:20, salary: 20000}

const newElement = (
    <div>
        <h1 id= "first">Hello Coder Army {name}</h1>
        <h2>Kaise ho aap {obj.age} </h2>
    </div>)
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(newElement)

// Reactroot.render(div1)


// Reactroot.render(element);
// Reactroot.render(element2);

