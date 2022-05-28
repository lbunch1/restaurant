

function createHome() {
    const content = document.createElement("div");
    content.innerHTML = "plant-based<br>cruelty-free<br>deliciousness";
    content.classList = "home";
    return content;
}

export default createHome;