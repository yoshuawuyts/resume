const sf = require('sheetify')
const yo = require('yo-yo')

const email = 'yoshuawuyts@gmail.com'
const nationality = 'Dutch + Peruvian'
const birthdate = '25th of December'
const birthplace = 'Eindhoven'
const twitter = 'https://twitter.com/yoshuawuyts'
const github = 'https://github.com/yoshuawuyts'

const prefix = sf`
  :host > h1, :host > h3 {
    text-transform: uppercase;
  }
`

module.exports = sidebar

function sidebar () {
  return yo`
    <section class=${prefix}>
      <h1>resume</h1>
      <h3>yoshua wuyts</h3>
      <a href="mailto:${email}">${email}</a>
      <p class="nationality">${nationality}</p>
      <p>Born on the ${birthdate} in ${birthplace}</p>
      <a href=${twitter}>twitter</a>
      <a href=${github}>github</a>
    </section>
  `
}
