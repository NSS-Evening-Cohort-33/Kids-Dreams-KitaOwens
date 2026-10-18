import { celebritiesDb } from "./database.js"

const celebrities = celebritiesDb()

document.addEventListener(
    "click",
        onClick => {
            const clickedItem = onClick.target

            if (clickedItem.dataset.type === "celebrity") {
                window.alert(
                    `${clickedItem.dataset.name} is a ${clickedItem.dataset.sport} star.`
                )
            }
        }
)

export const Celebrities = () => {
    let celebrityHTML = "<ol>"

    for (const celebrity of celebrities) {
        celebrityHTML += `<li 
            data-type="celebrity"
            data-id="${celebrity.id}" 
            data-name="${celebrity.name}"
            data-sport="${celebrity.sport}">
            ${celebrity.name}
        </li>`
    }

    celebrityHTML += "</ol>"

    return celebrityHTML
}
