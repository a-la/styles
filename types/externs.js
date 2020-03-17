/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _style = {}
/**
 * Options for the program.
 * @record
 */
_style.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_style.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_style.Config.prototype.text

/* typal types/api.xml externs */
/**
 * CSS Properties For JSX.
 * @typedef {function(!_style.Config): !Promise<string>}
 */
_style.style
