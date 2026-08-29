// Create element through JS

// React: object
// ReactDOM: object


const React = {

    createElement: function(tag, styles, children) {
        const element = document.createElement(tag);


        if(typeof children === 'object'){
            for(let val of children )
            element.append(val)
        }
        else
        element.innerText = children;
        

        for(let key in styles){
            element.style[key]= styles[key]
        }

        return element;
    }
};

const ReactDOM = {
    render: function (element,root){
        root.append(element)
    }
}


const header1 = React.createElement('h1', { fontSize: '30px', backgroundColor: 'blue', color: 'white' }, 'Hello Coder Army');
const header2 = React.createElement('h1', { fontSize: '25px', backgroundColor: 'black', color: 'white' }, 'Kaise ho aap');




// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);




const li1 = React.createElement('li', {}, "HTML")
const li2 = React.createElement('li', {}, "CSS")
const li3 = React.createElement('li', {}, "JS")

const Ul = React.createElement('ul', {fontSize: '30px', backgroundColor: 'blue', color: 'white'}, [li1, li2, li3])

ReactDOM.render(header1,document.getElementById('root'))
ReactDOM.render(header2, document.getElementById('root'))
ReactDOM.render(Ul, document.getElementById('root'))