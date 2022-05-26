import createHome from "./home";
import './style.css';
import Avocado from './avocado.svg';

function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Vegan Restaurant Website</h1>";
    return header;
};

function createNav() {

    const createNavLink = function(name){
        const button = document.createElement("a");
        button.setAttribute("id", name);
        button.setAttribute("href", "#");
        button.innerHTML = `${name[0].toUpperCase()}${name.slice(1)}`;
        return button;
    };

    const nav = document.createElement("nav");

    nav.appendChild(createNavLink("home"));
    nav.appendChild(createNavLink("menu"));
    nav.appendChild(createNavLink("about"));

    return nav;
};

const createMain = function() {
    const main = document.createElement("main");
    return main;
};

const createFooter = function() {
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>Copyright &copy; lbunch ${new Date().getFullYear()}</p>`;
    return footer;
};



function component() {
    const body = document.querySelector("body");

    body.appendChild(createHeader());
    body.appendChild(createNav());
    body.appendChild(createMain());
    body.appendChild(createFooter());
    
    
};

component();

const body = document.querySelector("main");

body.appendChild(createHome());


console.log('index.js is working!!');