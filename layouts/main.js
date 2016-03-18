const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`
  :host {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

module.exports = template

// main template layout
// null -> obj
function template (navigation, content) {
  return yo`
    <main class=${prefix}>
      ${navigation()}
      ${content()}
    </main>
  `
}
