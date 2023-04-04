// card.js

export function Card(imageSrc, title, description) {
    this.imageSrc = imageSrc;
    this.title = title;
    this.description = description;
    this.createCard = function () {
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
