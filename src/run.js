import { writeFileSync } from 'fs'
import { properties as MDN } from 'vscode-web-custom-data/data/browsers.css-data'
import { EOL } from 'os'

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
  interface HTMLAttributes {
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

const props = MDN.map(({ name, values = [], references = [], description = '' }) => {
  const vals = values.map(({ name: n }) => n)
  const [ref] = references
  if (ref) description += EOL + `[${ref.name}](${ref.url})`
  return { name, description, vals }
})

const JSX = props.map(({ name, description, vals }) => {
  const s = S(description, name, vals)
  return s
})

const j = JSX.join(EOL)

writeFileSync('preact/index.d.ts', PREACT(j))
writeFileSync('types/index.d.ts', REACT(j))