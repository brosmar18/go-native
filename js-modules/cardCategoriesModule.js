import { Categories } from './categories.js';

export let cardCategoriesModule = (function () {
    let cardCategoriesData = [
        {
            imageSrc: "../images/recommend/food-recommend.png",
            title: "Restaurants & Cafes",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/outdoor-recommend.png",
            title: "Parks & Outdoor Activities",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/shopping-recommend.png",
            title: "Shopping & Local Markets",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/arts-culture-recommend.png",
            title: "Arts & Culture",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/nightlife-recommend.png",
            title: "Nightlife & Entertainment",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/family-recommend.png",
            title: "Family-Friendly Activities",
            description: "Suggest attractions and activities suitable for families with children, such as kid-friendly museums, amusement parks, or playgrounds.",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/festivals-recommend.png",
            title: "Events & Festivals",
            description: "Highlight upcoming local events, fairs, and festivals that visitors may want to attend during their stay.",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/accommodations-recommend.png",
            title: "Accommodations",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/attractions-recommend.png",
            title: "Attractions & Landmarks",
            url: "#"
        },
        {
            imageSrc: "../images/recommend/tours-recommend.png",
            title: "Tours and Experiences",
            url: "#"
        }
    ];
    function createCategoryCards(){
        let cardContainer = document.querySelector('.recommend__grid');
        cardContainer.innerHTML = '';
        cardCategoriesData.forEach(function(data){
            let card = new Categories(data.imageSrc, data.title).createCard();
            cardContainer.appendChild(card);
        })
    }
    return {
        createCategoryCards
    };
})();
