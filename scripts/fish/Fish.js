export const Fish = (fishObj) => {
    return `
    <section class="fish">
    <br>
        <div><img class="fish__images" src="${fishObj.image}"></div>
        <div class="fish__name">${fishObj.name}</div>
        <div class="fish__species">${fishObj.species}</div>
        <div class="fish__length">${fishObj.length}</div>
        <div class="fish__location">${fishObj.location}</div>
        <div class="fish__diet">${fishObj.diet}</div>
    <br>
    </section>
    `
}