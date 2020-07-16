const quotesCollection = [
    {
        text: "When you fish for love, bait with your heart, not your brain.",
        author: "Mark Twain"
    },
    {
        text: "Many men go fishing all of their lives without knowing that it is not fish they are after.",
        author: "Henry David Thoreau"
    },
    {
        text:"Memory is a net: one finds it full of fish when he takes it from the brook, but a dozen miles of water have run through it without sticking.",
        author: "Oliver Wendell Holmes, Sr."
    },
    
]

export const useQuotesObj = () => {
    return quotesCollection.slice()
}