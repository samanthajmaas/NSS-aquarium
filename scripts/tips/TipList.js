import {useTips} from "./TipDataProvider.js"
import {Tip} from "./Tip.js"

export const TipList = () => {
    const contentElement = document.querySelector(".content--right")
    const tips = useTips()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tip(tip)

    }

    contentElement.innerHTML += `
    <aside class ="aside">
        <h2 class="aside__heading">Martin's Tips & Tricks!</h2>
            <section class="aside__tips">
                ${tipsHTMLRepresentations}
            </section>
    </aside>
        `
}