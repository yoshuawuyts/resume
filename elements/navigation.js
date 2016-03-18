const sf = require('sheetify')
const yo = require('yo-yo')

const prefix = sf`
  :host {
    margin: 54px 20px 0 20px;
    margin-top: 54px;
    width: 100vw;
  }
  span {
    margin-top: 6px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media (min-width: 760px) {
    :host { width: 760px; }
    nav { flex-direction: row; }
    span { margin-top: 0; }
  }
`

module.exports = sidebar

function sidebar () {
  return yo`
    <section class=${prefix}>
      <nav>
        <span>Yoshua Wuyts</span>
        <span><a href="/">home</a></span>
        <span><a href="/blog">blog</a></span>
        <span><a href="/twitter">twitter</a></span>
        <span><a href="/github">github</a></span>
      </nav>
    </section>
  `
}
