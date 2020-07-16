import {useFish, holyFishFunction, soldierFishFunction, normalFishFunction} from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

const contentElement = document.querySelector(".content--left")

const addFishToDom = (fishArray) => {
    let fishHTMLRepresentations = ""

    for (const fishObj of fishArray) {
        fishHTMLRepresentations += Fish(fishObj)
    }

    contentElement.innerHTML += `
    <article class="fishList">
           ${fishHTMLRepresentations}
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