import ignore from '../ignore'

const self = ['script']
Object.entries(ignore).forEach(([tagName, ignored]) => {
  console.log('<%s\t%s>%s', tagName, ignored.join(' '), self.includes(tagName) ? `</${tagName}>` : '')
})