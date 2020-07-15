const tipsListCollection = [
    {
        tip:"Maintain proper pH Levels",
    },
    {
        tip:"Change water regularly in tank",
    },
    {
        tip:"Only change 10% of the water every 2-3 weeks",
    },
    {
        tip:"Know their proper diets",
    },
]

export const useTips = () => {
    return tipsListCollection.slice()
}