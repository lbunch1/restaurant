function createAbout () {
    const content = document.createElement("div");
    content.classList.add("about")
    content.innerHTML = "Veg Place is dedicated to providing cruelty free quisine without comprimising on flavor. Our dishes are made with quality ingredients and served with quality smiles."
    return content
}

export default createAbout;