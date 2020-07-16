const fishCollection = [
    {
        name: "Dory",
        food: "Plankton",
        species:"Blue Tang",
        length: 4,
        location: "Great Barrier Reef",
        image: "./images/dory.jpg",
    },
    {
        name: "Rainbox",
        food: "Zooplankton",
        species:"Siamese fighting fish",
        length: 3,
        location: "Cambodia",
        image: "./images/siamese fighting fish.jpg",
    },
    {
        name: "Bubba",
        food: "Duckweed, java moss, and water wisteria",
        species:"Guppy",
        length: 5,
        location: "South America",
        image: "./images/guppy.png",
    },
    {
        name: "Kelly",
        food: "Brine shrimp, mosquito larvae, and daphnia",
        species:"Killifish",
        length: 2,
        location: "Argentina",
        image: "./images/killifish.jpg",
    }
    
]

export const useFish = () => {
    return fishCollection.slice()
}

export const holyFishFunction = () => {
    const holyFish = []

    for (const fish of fishCollection)
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    return holyFish
}

export const soldierFishFunction = () => {
    const soldierFish = []

    for (const fish of fishCollection)
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierFish.push(fish)
        }
        
    return soldierFish
}

export const normalFishFunction = () => {
    const normalFish = []

    for (const fish of fishCollection)
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            normalFish.push(fish)
        }
        
    return normalFish
}