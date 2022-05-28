import avotoast from "./img/avotoast.jpg";

function createMenu () {
    const content = document.createElement("div")
    content.classList.add("menu")
    
    function createMenuItem (id, image, title, description) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = new Image();
        img.src = image;

        const Title = document.createElement("h2");
        Title.innerHTML = title;

        const Description = document.createElement("p");
        Description.innerHTML = description;

        card.appendChild(img);
        card.appendChild(Title);
        card.appendChild(Description);

        return card;
    }

    content.appendChild(createMenuItem("avotoast", avotoast, "Avocado Toast", "Premium sourdough bread perfectly toasted with California grown avocados topped with a touch of salt and pepper."));
    content.appendChild(createMenuItem("avotoast", avotoast, "Avocado Toast", "Premium sourdough bread perfectly toasted with California grown avocados topped with a touch of salt and pepper."));

    return content;
};

export default createMenu