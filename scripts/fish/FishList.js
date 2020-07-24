import {useFish, holyFishFunction, soldierFishFunction, normalFishFunction} from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

const contentElement = document.querySelector(".content--left")

const addFishToDom = (fishArray) => {
    const fishes = useFish()

    contentElement.innerHTML += `
    <article class="fishList">
           ${fishes.map(fish => (Fish(fish)))}
    </article>
     `
}


export const FishList = () => {

    const holyFish = holyFishFunction()
    addFishToDom(holyFish)

    const soldierFish = soldierFishFunction()
    addFishToDom(soldierFish)

    const normalFish = normalFishFunction()
    addFishToDom(normalFish)
}