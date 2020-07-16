import {useQuotesObj} from "./quotesDataProvider.js"
import {quotesHTML} from "./quotes.js"

export const useQuotes = () => {
    const contentElement=document.querySelector(".content--left")
    const quotes = useQuotesObj()


let quotesHTMLRepresentations =""

for (const quote of quotes) {
    quotesHTMLRepresentations += quotesHTML(quote)
}

contentElement.innerHTML += `
    <article class= "quotes">
        <h2 class="quotes__heading">Quotes</h2>
            ${quotesHTMLRepresentations}
    </article>
`
}