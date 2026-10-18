import { Pairings } from "./pairings.js"
import { Celebrities } from "./celebrities.js"
import { Children } from "./children.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1 style="text-align: center; margin-top: 3rem">
        Making Memories for Children
    </h1>

    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Children</h2>
            ${Children()}
        </section>
        <section class="detail--column list details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <section class="detail--row list details__pairings">
            <h2>Pairings</h2>
            ${Pairings()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML
