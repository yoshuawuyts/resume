const sf = require('sheetify')

const sidebar = require('./elements/sidebar')
const content = require('./elements/content')
const section = require('./elements/section')
const layout = require('./layouts/main')

sf('css-wipe')
sf('css-type-base')
sf('./index.css', { global: true })

const data = [
  [
    'work', [
      [ '2012 ▪ 2014', 'Fabrique', 'Office manager' ],
      [ '2014 ▪ 2015', 'Wercker', 'Engineer' ],
      [ '2015 ▪ 2016', 'Freelance', 'Creative Developer' ]
    ]
  ],
  [
    'communication skills',
    [ 'Public speech', 'Debate & discussion', 'Copywriting' ]
  ],
  [
    'off work',
    [ '2012 ▪ 2013', 'VSPVU', 'Student union board member' ],
    [ '2014 ▪ 2016', 'Nodeschool', 'Mentor' ]
  ],
  [
    'interests',
    [ 'Making things, moving & travel' ]
  ],
  [
    'education',
    [ '2004 ▪ 2011', 'Augustinianum', 'VWO - economics & social studies' ],
    [ '2011 ▪ 2015', 'Vrije Universiteit Amsterdam', ' Psychology bachelor' ],
    [ '2013 ▪ 2014', 'University of Amsterdam', 'Programming minor' ]
  ],
  [
    'programming skills',
    [ 'Writing modules ★★★★★' ]
  ]
]

const tree = layout(sidebar, content(section, data))
document.body.appendChild(tree)
