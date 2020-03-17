import ignore from '../ignore'

Object.entries(ignore).forEach(([tagName, ignored]) => {
  console.log('<%s\t%s >', tagName, ignored.join(' '))
})