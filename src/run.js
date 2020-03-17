import { writeFileSync } from 'fs'
import { properties as MDN } from 'vscode-web-custom-data/data/browsers.css-data'
import { tags } from 'vscode-web-custom-data/data/browsers.html-data'
import { EOL } from 'os'
import { c } from 'erte'

/**
 * All possible attributes.
 * @type {{name:string, tagName:string}[]}
 */
const attributes = tags.reduce((acc, { name: tagName, attributes: a = [] }) => {
  const attrs = a.map(({ name }) => {
    return { name, tagName }
  })
  acc.push(...attrs)
  return acc
}, []).filter((v, i, a) => a.indexOf(v) == i)
// console.log(attributes.length)

const PREACT = (tt) => `import 'preact'
declare global {
  namespace JSX {
    interface HTMLAttributes {
${tt.replace(/^/gm, '      ')}
    }
  }
}`
const REACT = (tt) => `import 'react'
declare module 'react' {
  interface HTMLAttributes<T> {
${tt.replace(/^/gm, '    ')}
  }
}`

const S = (desc, name, values = []) => {
  const type = values.length ? values.map(v => {
    const V = v
      .replace(/(^"|"$)/, '')
      .replace(/'/g, '\\\'')
    return `'${V}'`
  }).join('|') : 'string'
  return `/**
${desc.replace(/^/mg, ' * ')}
 */
${/-/.test(name) ? `'${name}'` : name}?: ${type}`
}

const IGNORE = [
  'src', 'unicode-range', 'font-display', // those work on @font-face, not elements.
  'user-zoom', 'min-zoom', 'max-zoom',
  'additive-symbols', 'fallback', 'negative', 'pad', 'prefix', 'range', 'suffix', 'system', 'symbols', 'speak-as', 'bleed', 'marks',
]

const props = MDN.map(({ name, values = [], references = [], description = '' }) => {
  if (IGNORE.includes(name)) return null
  const vals = values.map(({ name: n }) => n)
  const [ref] = references
  let reference = ''
  if (ref) reference = `[${ref.name}](${ref.url})`
  return { name, description, vals, reference }
}).filter(Boolean)

const ignoreMap = {}

const JSX = props.reduce((acc, { name, description, reference, vals }) => {
  const foundAttr = attributes.filter(({ name: n }) => name == n)
  if (foundAttr.length) {
    console.warn('CSS property %s conflicts with an attribute of tag%s %s.',
      c(name, 'yellow'),
      foundAttr.length > 1 ? 's' : '',
      foundAttr.map(({ tagName }) => c(tagName, 'green')).join(', ')
    )
    const tagNames = foundAttr.map(({ tagName: fa }) => {
      ignoreMap[fa] = ignoreMap[fa] || []
      ignoreMap[fa].push(name)
      return fa
    })
    description += ` _Ignored on ${tagNames.join(', ')}_.`
    // return acc
  }
  if (reference) description += EOL + reference
  const s = S(`\`CSS\` ${description}`, name, vals)
  acc.push(s)
  const hyphen = name.replace(/-(\S)/g, (m, l) => {
    return l.toUpperCase()
  }).replace(/^\S/, (m) => m.toLowerCase())
  if (name != hyphen) acc.push(S(`\`CSS\` ${description}`, hyphen, vals))
  return acc
}, [])

const j = JSX.join(EOL)

writeFileSync('preact/index.d.ts', PREACT(j))
console.log('Written %s', 'preact/index.d.ts')

writeFileSync('types/index.d.ts', REACT(j))
console.log('Written %s', 'types/index.d.ts')

const map = props.reduce((acc, { name }) => {
  const hasHyphen = /-/.test(name)
  acc[name] = 1
  if (!hasHyphen) return acc
  const hyphen = name.replace(/-(\S)/g, (m, l) => {
    return l.toUpperCase()
  }).replace(/^\S/, (m) => m.toLowerCase())
  acc[hyphen] = name
  return acc
}, {})

writeFileSync('map.json', JSON.stringify(map, null, 2))
writeFileSync('ignore.json', JSON.stringify(ignoreMap, null, 2))
