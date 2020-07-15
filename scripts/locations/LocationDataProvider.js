const locationCollection = [
    {
        name: "Great Barrier Reef",
        link: "https://greatbarrierreef.org",
        linkName: "Diving in the Great Barrier Reef",
        image: "./images/great barrier.jpg",
        description:"One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches."
    },
    {
        name: "Cambodia",
        link: "https://travel.padi.com/d/cambodia/",
        linkName: "Diving in Cambodia",
        image: "./images/cambodia.jpg",
        description: "Cambodia's topical waters are teeming with marine life and colorful reefs. Some of the most unexpected diving in Southeast Asia can be found in Cambodia, with its stretch of coastline and small islands in the Gulf of Thailand."
    },
    {
        name: "South America",
        link: "https://www.scubatravel.co.uk/americas/",
        linkName: "Diving in South America",
        image: "./images/south america.jpg",
        description: "South America is big and so is the diversity in diving you can expect. From cold water diving in the Galapagos to the tropical waters of Venezuela, there's some diving to suit everyone!"
    },
    {
        name: "Argentina",
        link: "https://travel.padi.com/d/argentina/",
        linkName: "Diving in Argentina",
        image: "./images/argentina.jpg",
        description: "Spanning from the subtropics to the sub polar regions of Tierra del Fuego, Argentina sports some of South America’s most diverse and desired dive locations such as Peninsula Valdes, well known amongst divers as a place to enjoy the underwater whale song as it is a rare breeding population of the endangered Southern Right whale and the accelerated breeding of Southern Elephant seals and Southern Sea lions."
    }
]

export const useLocationObj = () => {
    return locationCollection.slice()
}