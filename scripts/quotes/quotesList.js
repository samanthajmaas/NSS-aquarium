import {useQuotesObj} from "./quotesDataProvider.js"
import {quotesHTML} from "./quotes.js"

export const useQuotes = () => {
    const contentElement=document.querySelector(".content--left")
    const quotes = useQuotesObj()

contentElement.innerHTML += `
    <article class= "quotes">
        <h2 class="quotes__heading">Quotes</h2>
            ${quotes.map(quote => (quotesHTML(quote)))}
    </article>
`
}