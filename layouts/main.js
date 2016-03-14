const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`
  :host {
    display: flex;
  }

  :host > .sidebar {
    width: 300px;
  }
`

module.exports = template

// main template layout
// null -> obj
function template (sidebar, content) {
  return yo`
    <main class=${prefix}>
      <section class="sidebar">
        ${sidebar()}
      </section>
      <section class="main">
        ${content()}
      </section>
    </main>
  `
}
