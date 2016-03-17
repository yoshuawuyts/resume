const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`
  :host {
    display: flex;
  }

  :host > .navigation {
    width: 300px;
  }
`

module.exports = template

// main template layout
// null -> obj
function template (navigation, content) {
  return yo`
    <main class=${prefix}>
      <section class="navigation">
        ${navigation()}
      </section>
      <section class="main">
        ${content()}
      </section>
    </main>
  `
}
