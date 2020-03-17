const { _style } = require('./style')

/**
 * CSS Properties For JSX.
 * @param {!_style.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function style(config) {
  return _style(config)
}

module.exports = style

/* typal types/index.xml namespace */
/**
 * @typedef {_style.Config} Config `＠record` Options for the program.
 * @typedef {Object} _style.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
