export const locationHTML = (locationObj) => {
    return `
    <section class="location card">
        <br>
        <div><img class ="location__image image--card" src="${locationObj.image}"></div>
        <div class="location__name">${locationObj.name}</div>
        <div class="location__description">${locationObj.description}</div>
        <div class="location__url"><a href="${locationObj.link}">${locationObj.linkName}</a></div>
        <br>
    </section>
    `
}
