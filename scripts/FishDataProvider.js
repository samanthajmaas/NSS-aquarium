const fishCollection = [
    {
        name: "Dory",
        food: "Plankton",
        species:"Blue Tang",
        length: "4 inches",
        location: "Great Barrier Reef",
        image: "./images/dory.jpg"
    }
    {
        name: "Rainbox",
        food: "Zooplankton",
        species:"Siamese fighting fish",
        length: "2.8 inches",
        location: "Cambodia",
        image: "./images/siamese fighting fish.jpg"
    }
    {
        name: "Bubba",
        food: "Duckweed, java moss, and water wisteria",
        species:"Guppy",
        length: "5 inches",
        location: "South America",
        image: "./images/guppy.png"
    }
    {
        name: "Kelly",
        food: "Brine shrimp, mosquito larvae, and daphnia",
        species:"Killifish",
        length: "2 inches",
        location: "Argentina",
        image: "./images/killifish.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}