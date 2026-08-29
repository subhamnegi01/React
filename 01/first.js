// Create element through JS
const React = {

    createElement: function(tag, styles, children) {
        const element = document.createElement(tag);
        element.innerText = children;
        

        for(let key in styles){
            element.style[key]= styles[key]
        }

        return element;
    }
};

const root = document.getElementById('root');

const header1 = React.createElement('h1', { fontSize: '30px', backgroundColor: 'blue', color: 'white' }, 'Hello Coder Army');
const header2 = React.createElement('h1', { fontSize: '25px', backgroundColor: 'black', color: 'white' }, 'Kaise ho aap');

root.append(header1);
root.append(header2);