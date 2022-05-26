import Avocado from './avocado.svg';

function createHome() {
    const content = document.createElement("div");
    content.innerHTML = "plant-based<br>cruelty-free<br>deliciousness";
    content.style = `height:80%;width: 100%;max-width:800px;background-image: url(${Avocado});background-repeat:no-repeat;background-size:contain;background-position-x:left;background-position-y:center;color:#3c5422;font-size: 3.5rem;font-weight: 700;text-align:right;padding:1em;`;
    return content;
}

export default createHome;