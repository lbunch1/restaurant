import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";
import './style.css';
import Title from "./img/title.svg";
import avotoast from "./img/avotoast.jpg";


function createHeader() {
    const header = document.createElement("header");
    const img = new Image();
    img.src = Title;
    img.alt = "Veg Place";
    header.appendChild(img);
    return header;
};

function createNav() {

    const buttonEvent = function (name) {
        body.innerHTML = "";
        const clearActive = document.querySelectorAll("nav>a");
        clearActive.forEach(element => element.classList.remove("active"));
        switch (name) {
            case 'home':
                body.appendChild(createHome());
                break;
            case 'menu':
                body.appendChild(createMenu());
                break;
            case 'about':
                body.appendChild(createAbout());
                break;
        }
    }

    const createNavLink = function(name){
        const button = document.createElement("a");
        button.setAttribute("id", name);
        button.setAttribute("href", "#");
        button.innerHTML = `${name[0].toUpperCase()}${name.slice(1)}`;
        button.addEventListener("click", () => buttonEvent(button.id));
        button.addEventListener("click", () => button.classList.add("active"));
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