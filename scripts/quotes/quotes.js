export const quotesHTML = (quotesObj) => {
    return `
    <section class="quote">
                    <div class="quote__text">${quotesObj.text}</div>
                    <div class= "quote__author">${quotesObj.author}</div>
    </section>
    `
}