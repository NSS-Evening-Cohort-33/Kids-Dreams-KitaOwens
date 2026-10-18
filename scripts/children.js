import { childrenDb } from "./database.js"

const children = childrenDb()

document.addEventListener(
    "click",
    (onClick) => {
        const clickedItem = onClick.target
        
        if (clickedItem.dataset.type === "child") {
            window.alert(
                `${clickedItem.dataset.name} dreams of having their celebrity join them in ${clickedItem.dataset.wish}`
            )
        }
    }
)

export const Children = () => {
    let childrenHTML = "<ol>"

    for (const child of children) {
        childrenHTML += `<li
            data-type="child"
            data-id="${child.id}"
            data-name="${child.name}"
            data-wish="${child.wish}">
            ${child.name}
        </li>`
    }

    childrenHTML += "</ol>"

    return childrenHTML
}
