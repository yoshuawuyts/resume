const html = require('remark-html')
const remark = require('remark')
const sf = require('sheetify')
const path = require('path')
const yo = require('yo-yo')
const fs = require('fs')

const md = fs.readFileSync(path.join(__dirname, '../tmp/blog.md'), 'utf8')

const prefix = sf`
  :host {
    padding: 54px 0 54px 0;
    width: 100vw;
  }

  h1 {
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  h2 {
    margin: 50px 0 10px 0;
    border-bottom: 1px solid;
  }

  h3 {
    display: inline-block;
    margin: 20px 0 10px 0;
    border-bottom: 1px solid;
  }

  ul, ol {
    margin: 10px 0 10px 0;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ol {
    list-style-type: decimal;
    margin-left: 35px;
  }

  pre, code {
    font-size: 85%;
    overflow: auto;
  }

  h1 + p, pre, pre + * {
    margin-top: 20px;
  }

  @media (min-width: 760px) {
    :host {
      width: 760px;
    }
  }
`

module.exports = section

function section () {
  const el = yo`
    <article class=${prefix}>
    </article>
  `
  const els = parseMarkdown(md)
  el.innerHTML = els
  return el
}

// str -> str
function parseMarkdown (md) {
  const p = remark().use(html)
  return p.process(md)
}
