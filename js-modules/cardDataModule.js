// cardDataModule.js

import { Card } from './card.js';

export const cardDataModule = (function () {

    const cardData = [{
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
