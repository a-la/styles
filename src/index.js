import { c } from 'erte'

/**
 * @type {_style.style}
 */
export default async function style(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@a-la/style called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').style} _style.style
 */
