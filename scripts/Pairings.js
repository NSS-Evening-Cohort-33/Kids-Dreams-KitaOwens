import { childrenDb, celebritiesDb } from "./database.js"

const children = childrenDb()

const celebrities = celebritiesDb()

const findCelebrityMatch = (childObject, celebrityArray) => {
    let celebrity = null

    for (let celebrityObject of celebrityArray) {
        if (celebrityObject.id === childObject.celebrityId) {
            celebrity = celebrityObject
        }
    }

    return celebrity
}

export const Pairings = () => {
    let pairingsHTML = "<ul>"

    for (const child of children) {
        const kidsStar = findCelebrityMatch(child, celebrities)

        pairingsHTML += `
            <li>
                ${child.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${child.wish}.
            </li>
        `
    }

    pairingsHTML += "</ul>"

    return pairingsHTML
}
