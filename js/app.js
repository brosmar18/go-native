`use strict`
console.log('file connected');

// Constructor function to create a new card objects.
function Card(imageSrc, title, description) {
    this.imageSrc = imageSrc;
    this.title = title;
    this.description = description;
    this.createCard = function() {
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = this.imageSrc;
        image.alt = this.title;
        image.classList.add("card__image");
        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card__title");
        cardTitle.textContent = this.title;
        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card__description");
        cardDescription.textContent = this.description;
        card.appendChild(image);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        return card;
    }
}


// Use the constructor function to create a new card object.

let cardData = [{
    imageSrc: "images/cedar-rapids-ia.png",
    title: "Cedar Rapids, Iowa",
    description: "Cedar Rapids, Iowa is a Midwestern city with a rich cultural heritage and beautiful natural scenery. It offers attractions such as the Cedar Rapids Museum of Art, the Brucemore Mansion, and the NewBo City Market, which is a unique shopping and dining experience. Cedar Rapids is also a hub for business and innovation, with major corporations and a strong economy."
},
    {
        imageSrc: "images/chicago-il.png",
        title: "Chicago, Illinois",
        description: "Chicago, Il is a vibrant city located on the shores of Lake Michigan. Known for its impressive skyline, world-class museums, and delicious food scene, there's no shortage of things to see and do in the Windy City. Whether you're interested in architecture, art, or history, Chicago has something to offer every type of traveler"
    },
    {

    }
]
