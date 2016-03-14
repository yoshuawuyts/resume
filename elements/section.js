const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`
  :host {
    width: 300px;
  }

  :host > .bar {
    width: 100%;
    height: 6px;
    margin-top: 12px;
    color: black;
    background-color: black;
  }
`

module.exports = section

function section (title, content) {
  return yo`
    <section class=${prefix}>
      <div class="bar"></div>
      <h1>${title}</h1>
      <ul>${
        content.map(function (item) {
          return createContent(item)
        })
      }
      </ul>
    </section>
  `
}

function createContent (item) {
  if (Array.isArray(item)) {
    // list with dashes
    return yo`
      <li>
        <p>${item[0]}</p>
        <div class="dash"></div>
        <p>${item[1]}</p>
        <p>${item[2]}</p>
      </li>
    `
  } else {
    // single list
    return yo`<p>${item}</p>`
  }
}
