const sf = require('sheetify')

const sidebar = require('./elements/sidebar')
const layout = require('./layouts/main')

sf('css-wipe')

const tree = layout(sidebar, content)
document.body.appendChild(tree)

function content () {}
