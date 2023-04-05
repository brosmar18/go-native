// cardDataModule.js

import { Card } from './card.js';

export const cardDataModule = (function () {

    const cardData = [{
        imageSrc: "images/cedar-rapids-ia.png",
        title: "Cedar Rapids, Iowa",
        description: "Cedar Rapids, Iowa, enchants visitors with its rich Czech and Slovak heritage, a lively arts scene, and stunning riverside parks, all nestled in a welcoming community that promises unforgettable culinary and outdoor adventures."
    },
    {
        imageSrc: "images/chicago-il.png",
        title: "Chicago, Illinois",
        description: "Chicago, Illinois, beckons with its iconic skyline, world-class museums, diverse culinary delights, and a vibrant arts and culture scene, all set against the stunning backdrop of Lake Michigan's glistening shores."
    },
    {
        imageSrc: "images/st-louis-mo.png",
        title: "St. Louis, Missouri",
        description: "St. Louis, Missouri, entices travelers with its iconic Gateway Arch, rich history, bustling arts scene, mouthwatering BBQ, and family-friendly attractions, nestled along the mighty Mississippi River."
    },
    {
        imageSrc: "images/new-york-city.png",
        title: "New York City, New York",
        description: "New York City, NY, captivates visitors with its awe-inspiring skyline, unparalleled arts and culture, diverse culinary experiences, and electrifying energy, all set in a city that truly never sleeps."
    }];

    function createCards() {
        const cardContainer = document.querySelector('.featured__grid');
        cardContainer.innerHTML = '';
        cardData.forEach(function (data) {
            const card = new Card(data.imageSrc, data.title, data.description).createCard();
            cardContainer.appendChild(card);
        });
    }

    return {
        createCards
    };
})();
