import {useFish} from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

export const FishList = () => {
    const contentElement = document.querySelector(".content--left")
    const fishes = useFish()


let fishHTMLRepresentations = ""

for (const fishObj of fishes) {
    fishHTMLRepresentations += Fish(fishObj)
 }

contentElement.innerHTML += `
    <article class="fishList">
        <h2 class="locations__heading">Fish</h2>
           ${fishHTMLRepresentations}
    </article>
     `
}