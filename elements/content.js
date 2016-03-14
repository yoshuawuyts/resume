const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`.hi{}`

module.exports = content

function content (section, data) {
  return function () {
    return yo`
      <section class=${prefix}>
        ${data.map(function (item) {
          return section(item[0], item[1])
        })}
      </section>
    `
  }
}
