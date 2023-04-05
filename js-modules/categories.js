export function Categories(imageSrc, title, description){
    this.imageSrc = imageSrc;
    this.title = title;
    this.description = description;
    this.createCard = function(){
        let card = document.createElement('div');
        card.classList.add('card');
        let image = document.createElement('img');
        image.src = this.imageSrc;
        image.alt = this.title;
        image.classList.add('card__image');
        let cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = this.title;
        card.appendChild(image);
        card.appendChild(cardTitle);
        return card;
    }
}
