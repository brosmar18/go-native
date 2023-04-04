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


// Array of objects that will store the data for each card created.

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
        imageSrc: "images/st-louis-mo.png",
        title: "St. Louis, Missouri",
        description: "St. Louis, MO is a historic city on the Mississippi River with a diverse culture and rich history. Known for its iconic Gateway Arch, world- renowned museums, and vibrant music scene, St.Louis has something for everyone.Whether you're interested in exploring the outdoors, trying delicious local cuisine, or experiencing the city's unique attractions, St. Louis is a must - visit destination for any traveler."
    },
    {
        imageSrc: "images/new-york-city.png",
        title: "New York City, New York",
        description: "New York City, also known as the Big Apple, is a bustling metropolis filled with iconic landmarks, cultural institutions, and diverse neighborhoods.From the bright lights of Times Square to the stunning views from the top of the Empire State Building, there's never a dull moment in the city that never sleeps. With world - class museums, Broadway shows, and endless dining options, New York City is a must- visit destination for any traveler."
    }
];

function createCards() {
    const cardContainer = document.querySelector('.featured__grid');
    cardContainer.innerHTML = '';
    cardData.forEach(function (data) {
        const card = new Card(data.imageSrc, data.title, data.description).createCard();
        cardContainer.appendChild(card);
    });
}

createCards();


let loginButton = document.querySelector(".login__button");
let logInForm = document.querySelector(".log-in-form");

// event listener for the log-in button to remove the "hidden" attribute from the log-in-form section
loginButton.addEventListener("click", function () {
    logInForm.removeAttribute("hidden");
});

// Click event listener to the log-in form to hide it when clicking outside the form.
document.addEventListener("click", function (event) {
    if (!logInForm.contains(event.target) && !loginButton.contains(event.target)) {
        logInForm.setAttribute("hidden", true);
    }
});
