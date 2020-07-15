import {useLocationObj} from "./LocationDataProvider.js"
import {locationHTML} from "./Location.js"

export const useLocations = () => {
    const contentElement=document.querySelector(".content--left")
    const locations = useLocationObj()


let locationsHTMLRepresentations =""

for (const location of locations) {
    locationsHTMLRepresentations += locationHTML(location)
}

contentElement.innerHTML += `
    <article class= "locations">
        <h2 class="locations__heading">Locations</h2>
            ${locationsHTMLRepresentations}
    </article>
`
}