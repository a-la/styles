import 'react'
declare module 'react' {
  interface HTMLAttributes<T> {
    /**
     * `CSS` Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes. _Ignored on hr, pre, img, iframe, embed, object, video, input, canvas_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width)
     */
    width?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes. _Ignored on img, iframe, embed, object, video, input, canvas_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height)
     */
    height?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display)
     */
    display?: 'block'|'contents'|'flex'|'flexbox'|'flow-root'|'grid'|'inline'|'inline-block'|'inline-flex'|'inline-flexbox'|'inline-table'|'list-item'|'-moz-box'|'-moz-deck'|'-moz-grid'|'-moz-grid-group'|'-moz-grid-line'|'-moz-groupbox'|'-moz-inline-box'|'-moz-inline-grid'|'-moz-inline-stack'|'-moz-marker'|'-moz-popup'|'-moz-stack'|'-ms-flexbox'|'-ms-grid'|'-ms-inline-flexbox'|'-ms-inline-grid'|'none'|'ruby'|'ruby-base'|'ruby-base-container'|'ruby-text'|'ruby-text-container'|'run-in'|'table'|'table-caption'|'table-cell'|'table-column'|'table-column-group'|'table-footer-group'|'table-header-group'|'table-row'|'table-row-group'|'-webkit-box'|'-webkit-flex'|'-webkit-inline-box'|'-webkit-inline-flex'
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding)
     */
    padding?: string
    /**
     * `CSS` The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position)
     */
    position?: 'absolute'|'fixed'|'-ms-page'|'relative'|'static'|'sticky'|'-webkit-sticky'
    /**
     * `CSS` Shorthand property for setting border width, style, and color. _Ignored on object, table_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border)
     */
    border?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin)
     */
    margin?: 'auto'
    /**
     * `CSS` Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top)
     */
    top?: 'auto'
    /**
     * `CSS` Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left)
     */
    left?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top)
     */
    'margin-top'?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top)
     */
    marginTop?: 'auto'
    /**
     * `CSS` Color of an element's text _Ignored on hr_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color)
     */
    color?: string
    /**
     * `CSS` Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size)
     */
    'font-size'?: 'large'|'larger'|'medium'|'small'|'smaller'|'x-large'|'x-small'|'xx-large'|'xx-small'
    /**
     * `CSS` Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size)
     */
    fontSize?: 'large'|'larger'|'medium'|'small'|'smaller'|'x-large'|'x-small'|'xx-large'|'xx-small'
    /**
     * `CSS` Sets the background color of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color)
     */
    'background-color'?: string
    /**
     * `CSS` Sets the background color of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color)
     */
    backgroundColor?: string
    /**
     * `CSS` Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align)
     */
    'text-align'?: 'center'|'end'|'justify'|'left'|'right'|'start'
    /**
     * `CSS` Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align)
     */
    textAlign?: 'center'|'end'|'justify'|'left'|'right'|'start'
    /**
     * `CSS` Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity)
     */
    opacity?: string
    /**
     * `CSS` Shorthand property for setting most background properties at the same place in the style sheet. _Ignored on body_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background)
     */
    background?: 'fixed'|'local'|'none'|'scroll'
    /**
     * `CSS` Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float)
     */
    float?: 'inline-end'|'inline-start'|'left'|'none'|'right'
    /**
     * `CSS` Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight)
     */
    'font-weight'?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'bolder'|'lighter'|'normal'
    /**
     * `CSS` Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight)
     */
    fontWeight?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'bolder'|'lighter'|'normal'
    /**
     * `CSS` Shorthand for setting 'overflow-x' and 'overflow-y'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow)
     */
    overflow?: 'auto'|'hidden'|'-moz-hidden-unscrollable'|'scroll'|'visible'
    /**
     * `CSS` Determines the block-progression dimension of the text content area of an inline box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height)
     */
    'line-height'?: 'normal'
    /**
     * `CSS` Determines the block-progression dimension of the text content area of an inline box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height)
     */
    lineHeight?: 'normal'
    /**
     * `CSS` Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family)
     */
    'font-family'?: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'|'Arial, Helvetica, sans-serif'|'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif'|'\'Courier New\', Courier, monospace'|'cursive'|'fantasy'|'\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif'|'Georgia, \'Times New Roman\', Times, serif'|'\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'|'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif'|'\'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\', \'Lucida Sans Unicode\', Geneva, Verdana, sans-serif'|'monospace'|'sans-serif'|'\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'|'serif'|'\'Times New Roman\', Times, serif'|'\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif'|'Verdana, Geneva, Tahoma, sans-serif'
    /**
     * `CSS` Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family)
     */
    fontFamily?: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'|'Arial, Helvetica, sans-serif'|'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif'|'\'Courier New\', Courier, monospace'|'cursive'|'fantasy'|'\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif'|'Georgia, \'Times New Roman\', Times, serif'|'\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'|'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif'|'\'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\', \'Lucida Sans Unicode\', Geneva, Verdana, sans-serif'|'monospace'|'sans-serif'|'\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'|'serif'|'\'Times New Roman\', Times, serif'|'\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif'|'Verdana, Geneva, Tahoma, sans-serif'
    /**
     * `CSS` Decorations applied to font used for an element's text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration)
     */
    'text-decoration'?: 'dashed'|'dotted'|'double'|'line-through'|'none'|'overline'|'solid'|'underline'|'wavy'
    /**
     * `CSS` Decorations applied to font used for an element's text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration)
     */
    textDecoration?: 'dashed'|'dotted'|'double'|'line-through'|'none'|'overline'|'solid'|'underline'|'wavy'
    /**
     * `CSS` Specifies the behavior of the 'width' and 'height' properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
     */
    'box-sizing'?: 'border-box'|'content-box'
    /**
     * `CSS` Specifies the behavior of the 'width' and 'height' properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
     */
    boxSizing?: 'border-box'|'content-box'
    /**
     * `CSS` For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index)
     */
    'z-index'?: 'auto'
    /**
     * `CSS` For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index)
     */
    zIndex?: 'auto'
    /**
     * `CSS` Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align)
     */
    'vertical-align'?: 'auto'|'baseline'|'bottom'|'middle'|'sub'|'super'|'text-bottom'|'text-top'|'top'|'-webkit-baseline-middle'
    /**
     * `CSS` Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: 'auto'|'baseline'|'bottom'|'middle'|'sub'|'super'|'text-bottom'|'text-top'|'top'|'-webkit-baseline-middle'
    /**
     * `CSS` Defines the radii of the outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
     */
    'border-radius'?: string
    /**
     * `CSS` Defines the radii of the outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
     */
    borderRadius?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left)
     */
    'margin-left'?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left)
     */
    marginLeft?: 'auto'
    /**
     * `CSS` Allows control over cursor appearance in an element
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor)
     */
    cursor?: 'alias'|'all-scroll'|'auto'|'cell'|'col-resize'|'context-menu'|'copy'|'crosshair'|'default'|'e-resize'|'ew-resize'|'grab'|'grabbing'|'help'|'move'|'-moz-grab'|'-moz-grabbing'|'-moz-zoom-in'|'-moz-zoom-out'|'ne-resize'|'nesw-resize'|'no-drop'|'none'|'not-allowed'|'n-resize'|'ns-resize'|'nw-resize'|'nwse-resize'|'pointer'|'progress'|'row-resize'|'se-resize'|'s-resize'|'sw-resize'|'text'|'vertical-text'|'wait'|'-webkit-grab'|'-webkit-grabbing'|'-webkit-zoom-in'|'-webkit-zoom-out'|'w-resize'|'zoom-in'|'zoom-out'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom)
     */
    'margin-bottom'?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom)
     */
    marginBottom?: 'auto'
    /**
     * `CSS` Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right)
     */
    right?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right)
     */
    'margin-right'?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right)
     */
    marginRight?: 'auto'
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left)
     */
    'padding-left'?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left)
     */
    paddingLeft?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top)
     */
    'padding-top'?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top)
     */
    paddingTop?: string
    /**
     * `CSS` Allows authors to constrain content width to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width)
     */
    'max-width'?: 'none'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Allows authors to constrain content width to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width)
     */
    maxWidth?: 'none'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom)
     */
    bottom?: 'auto'
    /**
     * `CSS` Sets the background image(s) of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image)
     */
    'background-image'?: 'none'
    /**
     * `CSS` Sets the background image(s) of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image)
     */
    backgroundImage?: 'none'
    /**
     * `CSS` Determines which page-based occurrence of a given element is applied to a counter or string value. _Ignored on meta_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content)
     */
    content?: 'attr()'|'counter(name)'|'icon'|'none'|'normal'|'url()'
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right)
     */
    'padding-right'?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right)
     */
    paddingRight?: string
    /**
     * `CSS` Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space)
     */
    'white-space'?: 'normal'|'nowrap'|'pre'|'pre-line'|'pre-wrap'
    /**
     * `CSS` Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space)
     */
    whiteSpace?: 'normal'|'nowrap'|'pre'|'pre-line'|'pre-wrap'
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom)
     */
    'padding-bottom'?: string
    /**
     * `CSS` Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom)
     */
    paddingBottom?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom)
     */
    'border-bottom'?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom)
     */
    borderBottom?: string
    /**
     * `CSS` Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
     */
    'box-shadow'?: 'inset'|'none'
    /**
     * `CSS` Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
     */
    boxShadow?: 'inset'|'none'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
     */
    transform?: 'matrix()'|'matrix3d()'|'none'|'perspective()'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` Allows authors to constrain content height to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height)
     */
    'min-height'?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Allows authors to constrain content height to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height)
     */
    minHeight?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility)
     */
    visibility?: 'collapse'|'hidden'|'visible'
    /**
     * `CSS` Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position)
     */
    'background-position'?: string
    /**
     * `CSS` Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position)
     */
    backgroundPosition?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top)
     */
    'border-top'?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top)
     */
    borderTop?: string
    /**
     * `CSS` Allows authors to constrain content width to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width)
     */
    'min-width'?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Allows authors to constrain content width to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width)
     */
    minWidth?: 'auto'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline)
     */
    outline?: 'auto'|'invert'
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
     */
    transition?: 'all'|'none'
    /**
     * `CSS` Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts. _Ignored on br_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear)
     */
    clear?: 'both'|'left'|'none'|'right'
    /**
     * `CSS` The color of the border around all four edges of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color)
     */
    'border-color'?: string
    /**
     * `CSS` The color of the border around all four edges of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color)
     */
    borderColor?: string
    /**
     * `CSS` Specifies how background images are tiled after they have been sized and positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat)
     */
    'background-repeat'?: string
    /**
     * `CSS` Specifies how background images are tiled after they have been sized and positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat)
     */
    backgroundRepeat?: string
    /**
     * `CSS` Specifies the size of the background images.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
     */
    'background-size'?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Specifies the size of the background images.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
     */
    backgroundSize?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Controls capitalization effects of an element’s text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform)
     */
    'text-transform'?: 'capitalize'|'lowercase'|'none'|'uppercase'
    /**
     * `CSS` Controls capitalization effects of an element’s text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform)
     */
    textTransform?: 'capitalize'|'lowercase'|'none'|'uppercase'
    /**
     * `CSS` Allows authors to constrain content height to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height)
     */
    'max-height'?: 'none'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Allows authors to constrain content height to a certain range.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height)
     */
    maxHeight?: 'none'|'fit-content'|'max-content'|'min-content'
    /**
     * `CSS` Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style)
     */
    'list-style'?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'inside'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'outside'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'|'url()'
    /**
     * `CSS` Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style)
     */
    listStyle?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'inside'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'outside'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'|'url()'
    /**
     * `CSS` Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style)
     */
    'font-style'?: 'italic'|'normal'|'oblique'
    /**
     * `CSS` Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style)
     */
    fontStyle?: 'italic'|'normal'|'oblique'
    /**
     * `CSS` Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font)
     */
    font?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'bolder'|'caption'|'icon'|'italic'|'large'|'larger'|'lighter'|'medium'|'menu'|'message-box'|'normal'|'oblique'|'small'|'small-caps'|'small-caption'|'smaller'|'status-bar'|'x-large'|'x-small'|'xx-large'|'xx-small'
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow)
     */
    'text-overflow'?: 'clip'|'ellipsis'
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow)
     */
    textOverflow?: 'clip'|'ellipsis'
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left)
     */
    'border-left'?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left)
     */
    borderLeft?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right)
     */
    'border-right'?: string
    /**
     * `CSS` Shorthand property for setting border width, style and color
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right)
     */
    borderRight?: string
    /**
     * `CSS` Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width)
     */
    'border-width'?: string
    /**
     * `CSS` Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width)
     */
    borderWidth?: string
    /**
     * `CSS` Aligns flex items along the main axis of the current line of the flex container.
     */
    'justify-content'?: 'center'|'start'|'end'|'left'|'right'|'safe'|'unsafe'|'stretch'|'space-evenly'|'flex-end'|'flex-start'|'space-around'|'space-between'|'baseline'|'first baseline'|'last baseline'
    /**
     * `CSS` Aligns flex items along the main axis of the current line of the flex container.
     */
    justifyContent?: 'center'|'start'|'end'|'left'|'right'|'safe'|'unsafe'|'stretch'|'space-evenly'|'flex-end'|'flex-start'|'space-around'|'space-between'|'baseline'|'first baseline'|'last baseline'
    /**
     * `CSS` Aligns flex items along the cross axis of the current line of the flex container.
     */
    'align-items'?: 'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
    /**
     * `CSS` Aligns flex items along the cross axis of the current line of the flex container.
     */
    alignItems?: 'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
    /**
     * `CSS` Specifies the handling of overflow in the vertical direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y)
     */
    'overflow-y'?: 'auto'|'hidden'|'scroll'|'visible'
    /**
     * `CSS` Specifies the handling of overflow in the vertical direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y)
     */
    overflowY?: 'auto'|'hidden'|'scroll'|'visible'
    /**
     * `CSS` Specifies under what circumstances a given element can be the target element for a pointer event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events)
     */
    'pointer-events'?: 'all'|'fill'|'none'|'painted'|'stroke'|'visible'|'visibleFill'|'visiblePainted'|'visibleStroke'
    /**
     * `CSS` Specifies under what circumstances a given element can be the target element for a pointer event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events)
     */
    pointerEvents?: 'all'|'fill'|'none'|'painted'|'stroke'|'visible'|'visibleFill'|'visiblePainted'|'visibleStroke'
    /**
     * `CSS` Specifies the minimum, maximum, and optimal spacing between grapheme clusters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
     */
    'letter-spacing'?: 'normal'
    /**
     * `CSS` Specifies the minimum, maximum, and optimal spacing between grapheme clusters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
     */
    letterSpacing?: 'normal'
    /**
     * `CSS` The style of the border around edges of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style)
     */
    'border-style'?: string
    /**
     * `CSS` The style of the border around edges of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style)
     */
    borderStyle?: string
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
     */
    animation?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Specifies the handling of overflow in the horizontal direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x)
     */
    'overflow-x'?: 'auto'|'hidden'|'scroll'|'visible'
    /**
     * `CSS` Specifies the handling of overflow in the horizontal direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x)
     */
    overflowX?: 'auto'|'hidden'|'scroll'|'visible'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
     */
    'word-wrap'?: 'break-word'|'normal'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
     */
    wordWrap?: 'break-word'|'normal'
    /**
     * `CSS` Selects a table's border model.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
     */
    'border-collapse'?: 'collapse'|'separate'
    /**
     * `CSS` Selects a table's border model.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
     */
    borderCollapse?: 'collapse'|'separate'
    /**
     * `CSS` Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    'flex-direction'?: 'column'|'column-reverse'|'row'|'row-reverse'
    /**
     * `CSS` Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    flexDirection?: 'column'|'column-reverse'|'row'|'row-reverse'
    /**
     * `CSS` Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/zoom)
     */
    zoom?: 'normal'
    /**
     * `CSS` Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
     */
    flex?: 'auto'|'content'|'none'
    /**
     * `CSS` Enables shadow effects to be applied to the text of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow)
     */
    'text-shadow'?: 'none'
    /**
     * `CSS` Enables shadow effects to be applied to the text of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow)
     */
    textShadow?: 'none'
    /**
     * `CSS` Used to construct the default contents of a list item’s marker
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
     */
    'list-style-type'?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'
    /**
     * `CSS` Used to construct the default contents of a list item’s marker
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
     */
    listStyleType?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'
    /**
     * `CSS` Defines the radii of the bottom left outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
     */
    'border-bottom-left-radius'?: string
    /**
     * `CSS` Defines the radii of the bottom left outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
     */
    borderBottomLeftRadius?: string
    /**
     * `CSS` Controls the appearance of selection.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
     */
    'user-select'?: 'all'|'auto'|'contain'|'none'|'text'
    /**
     * `CSS` Controls the appearance of selection.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
     */
    userSelect?: 'all'|'auto'|'contain'|'none'|'text'
    /**
     * `CSS` Paints the interior of the given graphical element.
     */
    fill?: 'url()'|'none'
    /**
     * `CSS` Establishes the origin of transformation for an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
     */
    'transform-origin'?: string
    /**
     * `CSS` Establishes the origin of transformation for an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
     */
    transformOrigin?: string
    /**
     * `CSS` Defines the radii of the top left outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
     */
    'border-top-left-radius'?: string
    /**
     * `CSS` Defines the radii of the top left outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
     */
    borderTopLeftRadius?: string
    /**
     * `CSS` Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent)
     */
    'text-indent'?: string
    /**
     * `CSS` Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent)
     */
    textIndent?: string
    /**
     * `CSS` Defines the radii of the bottom right outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
     */
    'border-bottom-right-radius'?: string
    /**
     * `CSS` Defines the radii of the bottom right outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
     */
    borderBottomRightRadius?: string
    /**
     * `CSS` Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
     */
    'flex-wrap'?: 'nowrap'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: 'nowrap'|'wrap'|'wrap-reverse'
    /**
     * `CSS` The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
     */
    'border-spacing'?: string
    /**
     * `CSS` The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
     */
    borderSpacing?: string
    /**
     * `CSS` Defines the radii of the top right outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
     */
    'border-top-right-radius'?: string
    /**
     * `CSS` Defines the radii of the top right outer border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
     */
    borderTopRightRadius?: string
    /**
     * `CSS` Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
     */
    clip?: 'auto'|'rect()'
    /**
     * `CSS` Sets the color of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color)
     */
    'border-top-color'?: string
    /**
     * `CSS` Sets the color of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color)
     */
    borderTopColor?: string
    /**
     * `CSS` Specifies line break opportunities for non-CJK scripts.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break)
     */
    'word-break'?: 'break-all'|'keep-all'|'normal'
    /**
     * `CSS` Specifies line break opportunities for non-CJK scripts.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break)
     */
    wordBreak?: 'break-all'|'keep-all'|'normal'
    /**
     * `CSS` Sets the color of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)
     */
    'border-bottom-color'?: string
    /**
     * `CSS` Sets the color of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)
     */
    borderBottomColor?: string
    /**
     * `CSS` Sets the flex grow factor. Negative numbers are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
     */
    'flex-grow'?: string
    /**
     * `CSS` Sets the flex grow factor. Negative numbers are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
     */
    flexGrow?: string
    /**
     * `CSS` Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction)
     */
    direction?: 'ltr'|'rtl'
    /**
     * `CSS` Allows the default alignment along the cross axis to be overridden for individual flex items.
     */
    'align-self'?: 'auto'|'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
    /**
     * `CSS` Allows the default alignment along the cross axis to be overridden for individual flex items.
     */
    alignSelf?: 'auto'|'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
    /**
     * `CSS` Sets the flex shrink factor. Negative numbers are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
     */
    'flex-shrink'?: string
    /**
     * `CSS` Sets the flex shrink factor. Negative numbers are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
     */
    flexShrink?: string
    /**
     * `CSS` The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering)
     */
    'text-rendering'?: 'auto'|'geometricPrecision'|'optimizeLegibility'|'optimizeSpeed'
    /**
     * `CSS` The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering)
     */
    textRendering?: 'auto'|'geometricPrecision'|'optimizeLegibility'|'optimizeSpeed'
    /**
     * `CSS` Determines whether touch input may trigger default behavior supplied by user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action)
     */
    'touch-action'?: 'auto'|'cross-slide-x'|'cross-slide-y'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
    /**
     * `CSS` Determines whether touch input may trigger default behavior supplied by user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action)
     */
    touchAction?: 'auto'|'cross-slide-x'|'cross-slide-y'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
    /**
     * `CSS` Determines the background painting area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
     */
    'background-clip'?: string
    /**
     * `CSS` Determines the background painting area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
     */
    backgroundClip?: string
    /**
     * `CSS` Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
     */
    filter?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
     */
    'animation-timing-function'?: string
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
     */
    animationTimingFunction?: string
    /**
     * `CSS` Sets the color of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color)
     */
    'border-right-color'?: string
    /**
     * `CSS` Sets the color of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color)
     */
    borderRightColor?: string
    /**
     * `CSS` Specifies variant representations of the font
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant)
     */
    'font-variant'?: 'normal'|'small-caps'
    /**
     * `CSS` Specifies variant representations of the font
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant)
     */
    fontVariant?: 'normal'|'small-caps'
    /**
     * `CSS` Sets the color of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color)
     */
    'border-left-color'?: string
    /**
     * `CSS` Sets the color of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color)
     */
    borderLeftColor?: string
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
     */
    'animation-name'?: 'none'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
     */
    animationName?: 'none'
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
     */
    'animation-duration'?: string
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
     */
    animationDuration?: string
    /**
     * `CSS` Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change)
     */
    'will-change'?: 'auto'|'contents'|'scroll-position'
    /**
     * `CSS` Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change)
     */
    willChange?: 'auto'|'contents'|'scroll-position'
    /**
     * `CSS` Paints along the outline of the given graphical element.
     */
    stroke?: 'url()'|'none'
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
     */
    'transition-property'?: 'all'|'none'
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
     */
    transitionProperty?: 'all'|'none'
    /**
     * `CSS` Controls the algorithm used to lay out the table cells, rows, and columns.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout)
     */
    'table-layout'?: 'auto'|'fixed'
    /**
     * `CSS` Controls the algorithm used to lay out the table cells, rows, and columns.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout)
     */
    tableLayout?: 'auto'|'fixed'
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
     */
    'transition-delay'?: string
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
     */
    transitionDelay?: string
    /**
     * `CSS` Sets the flex basis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
     */
    'flex-basis'?: 'auto'|'content'
    /**
     * `CSS` Sets the flex basis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
     */
    flexBasis?: 'auto'|'content'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
     */
    'overflow-wrap'?: 'break-word'|'normal'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
     */
    overflowWrap?: 'break-word'|'normal'
    /**
     * `CSS` Sets the thickness of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width)
     */
    'border-top-width'?: string
    /**
     * `CSS` Sets the thickness of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width)
     */
    borderTopWidth?: string
    /**
     * `CSS` Width of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width)
     */
    'outline-width'?: string
    /**
     * `CSS` Width of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width)
     */
    outlineWidth?: string
    /**
     * `CSS` Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
     */
    order?: string
    /**
     * `CSS` Sets the thickness of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)
     */
    'border-bottom-width'?: string
    /**
     * `CSS` Sets the thickness of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)
     */
    borderBottomWidth?: string
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
     */
    'animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
     */
    animationFillMode?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Style of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style)
     */
    'outline-style'?: 'auto'
    /**
     * `CSS` Style of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style)
     */
    outlineStyle?: 'auto'
    /**
     * `CSS` Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit)
     */
    'object-fit'?: 'contain'|'cover'|'fill'|'none'|'scale-down'
    /**
     * `CSS` Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit)
     */
    objectFit?: 'contain'|'cover'|'fill'|'none'|'scale-down'
    /**
     * `CSS` Specifies the width of the stroke on the current object.
     */
    'stroke-width'?: string
    /**
     * `CSS` Specifies the width of the stroke on the current object.
     */
    strokeWidth?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
     */
    'transition-duration'?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
     */
    transitionDuration?: string
    /**
     * `CSS` Defines when the animation will start.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
     */
    'animation-delay'?: string
    /**
     * `CSS` Defines when the animation will start.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
     */
    animationDelay?: string
    /**
     * `CSS` Offset the outline and draw it beyond the border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset)
     */
    'outline-offset'?: string
    /**
     * `CSS` Offset the outline and draw it beyond the border edge.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset)
     */
    outlineOffset?: string
    /**
     * `CSS` Specifies the distance into the dash pattern to start the dash.
     */
    'stroke-dashoffset'?: string
    /**
     * `CSS` Specifies the distance into the dash pattern to start the dash.
     */
    strokeDashoffset?: string
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
     */
    'backface-visibility'?: 'hidden'|'visible'
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
     */
    backfaceVisibility?: 'hidden'|'visible'
    /**
     * `CSS` Sets the thickness of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width)
     */
    'border-right-width'?: string
    /**
     * `CSS` Sets the thickness of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width)
     */
    borderRightWidth?: string
    /**
     * `CSS` Specifies how flexbox items are placed in the flexbox.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    'flex-flow'?: 'column'|'column-reverse'|'nowrap'|'row'|'row-reverse'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Specifies how flexbox items are placed in the flexbox.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    flexFlow?: 'column'|'column-reverse'|'nowrap'|'row'|'row-reverse'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Specifies additional spacing between “words”.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing)
     */
    'word-spacing'?: 'normal'
    /**
     * `CSS` Specifies additional spacing between “words”.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing)
     */
    wordSpacing?: 'normal'
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
     */
    'transition-timing-function'?: string
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
     */
    transitionTimingFunction?: string
    /**
     * `CSS` Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize)
     */
    resize?: 'both'|'horizontal'|'none'|'vertical'
    /**
     * `CSS` The level of embedding with respect to the bidirectional algorithm.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)
     */
    'unicode-bidi'?: 'bidi-override'|'embed'|'isolate'|'isolate-override'|'normal'|'plaintext'
    /**
     * `CSS` The level of embedding with respect to the bidirectional algorithm.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)
     */
    unicodeBidi?: 'bidi-override'|'embed'|'isolate'|'isolate-override'|'normal'|'plaintext'
    /**
     * `CSS` Controls the pattern of dashes and gaps used to stroke paths.
     */
    'stroke-dasharray'?: 'none'
    /**
     * `CSS` Controls the pattern of dashes and gaps used to stroke paths.
     */
    strokeDasharray?: 'none'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
     */
    'animation-iteration-count'?: 'infinite'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
     */
    animationIterationCount?: 'infinite'
    /**
     * `CSS` Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering)
     */
    'image-rendering'?: 'auto'|'crisp-edges'|'-moz-crisp-edges'|'optimizeQuality'|'optimizeSpeed'|'pixelated'
    /**
     * `CSS` Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering)
     */
    imageRendering?: 'auto'|'crisp-edges'|'-moz-crisp-edges'|'optimizeQuality'|'optimizeSpeed'|'pixelated'
    /**
     * `CSS` Sets the thickness of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width)
     */
    'border-left-width'?: string
    /**
     * `CSS` Sets the thickness of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width)
     */
    borderLeftWidth?: string
    /**
     * `CSS` Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
     */
    'align-content'?: 'center'|'flex-end'|'flex-start'|'space-around'|'space-between'|'stretch'
    /**
     * `CSS` Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
     */
    alignContent?: 'center'|'flex-end'|'flex-start'|'space-around'|'space-between'|'stretch'
    /**
     * `CSS` Sets the style of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)
     */
    'border-bottom-style'?: string
    /**
     * `CSS` Sets the style of the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)
     */
    borderBottomStyle?: string
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
     */
    perspective?: 'none'
    /**
     * `CSS` Sets the style of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style)
     */
    'border-top-style'?: string
    /**
     * `CSS` Sets the style of the top border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style)
     */
    borderTopStyle?: string
    /**
     * `CSS` The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
     */
    'text-size-adjust'?: string
    /**
     * `CSS` The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
     */
    textSizeAdjust?: string
    /**
     * `CSS` Defines how nested elements are rendered in 3D space.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
     */
    'transform-style'?: 'flat'|'preserve-3d'
    /**
     * `CSS` Defines how nested elements are rendered in 3D space.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
     */
    transformStyle?: 'flat'|'preserve-3d'
    /**
     * `CSS` specifies, as a space-separated track list, the line names and track sizing functions of the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)
     */
    'grid-template-columns'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` specifies, as a space-separated track list, the line names and track sizing functions of the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` Specifies the position of the '::marker' pseudo-element's box in the list item.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
     */
    'list-style-position'?: 'inside'|'outside'
    /**
     * `CSS` Specifies the position of the '::marker' pseudo-element's box in the list item.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
     */
    listStylePosition?: 'inside'|'outside'
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
     */
    'animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
     */
    animationDirection?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines whether the animation is running or paused.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
     */
    'animation-play-state'?: 'paused'|'running'
    /**
     * `CSS` Defines whether the animation is running or paused.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
     */
    animationPlayState?: 'paused'|'running'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens)
     */
    hyphens?: 'auto'|'manual'|'none'
    /**
     * `CSS` Specifies quotation marks for any number of embedded quotations.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes)
     */
    quotes?: 'none'
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
     */
    'background-origin'?: string
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
     */
    backgroundOrigin?: string
    /**
     * `CSS` Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment)
     */
    'background-attachment'?: 'fixed'|'local'|'scroll'
    /**
     * `CSS` Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment)
     */
    backgroundAttachment?: 'fixed'|'local'|'scroll'
    /**
     * `CSS` If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x)
     */
    'background-position-x'?: 'center'|'left'|'right'
    /**
     * `CSS` If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x)
     */
    backgroundPositionX?: 'center'|'left'|'right'
    /**
     * `CSS` If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y)
     */
    'background-position-y'?: 'bottom'|'center'|'top'
    /**
     * `CSS` If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y)
     */
    backgroundPositionY?: 'bottom'|'center'|'top'
    /**
     * `CSS` Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)
     */
    'font-feature-settings'?: 'aalt"'|'abvf"'|'abvm"'|'abvs"'|'afrc"'|'akhn"'|'blwf"'|'blwm"'|'blws"'|'calt"'|'case"'|'ccmp"'|'cfar"'|'cjct"'|'clig"'|'cpct"'|'cpsp"'|'cswh"'|'curs"'|'c2pc"'|'c2sc"'|'dist"'|'dlig"'|'dnom"'|'dtls"'|'expt"'|'falt"'|'fin2"'|'fin3"'|'fina"'|'flac"'|'frac"'|'fwid"'|'half"'|'haln"'|'halt"'|'hist"'|'hkna"'|'hlig"'|'hngl"'|'hojo"'|'hwid"'|'init"'|'isol"'|'ital"'|'jalt"'|'jp78"'|'jp83"'|'jp90"'|'jp04"'|'kern"'|'lfbd"'|'liga"'|'ljmo"'|'lnum"'|'locl"'|'ltra"'|'ltrm"'|'mark"'|'med2"'|'medi"'|'mgrk"'|'mkmk"'|'nalt"'|'nlck"'|'nukt"'|'numr"'|'onum"'|'opbd"'|'ordn"'|'ornm"'|'palt"'|'pcap"'|'pkna"'|'pnum"'|'pref"'|'pres"'|'pstf"'|'psts"'|'pwid"'|'qwid"'|'rand"'|'rclt"'|'rlig"'|'rkrf"'|'rphf"'|'rtbd"'|'rtla"'|'rtlm"'|'ruby"'|'salt"'|'sinf"'|'size"'|'smcp"'|'smpl"'|'ssty"'|'stch"'|'subs"'|'sups"'|'swsh"'|'titl"'|'tjmo"'|'tnam"'|'tnum"'|'trad"'|'twid"'|'unic"'|'valt"'|'vatu"'|'vert"'|'vhal"'|'vjmo"'|'vkna"'|'vkrn"'|'vpal"'|'vrt2"'|'zero"'|'normal'|'off'|'on'
    /**
     * `CSS` Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)
     */
    fontFeatureSettings?: 'aalt"'|'abvf"'|'abvm"'|'abvs"'|'afrc"'|'akhn"'|'blwf"'|'blwm"'|'blws"'|'calt"'|'case"'|'ccmp"'|'cfar"'|'cjct"'|'clig"'|'cpct"'|'cpsp"'|'cswh"'|'curs"'|'c2pc"'|'c2sc"'|'dist"'|'dlig"'|'dnom"'|'dtls"'|'expt"'|'falt"'|'fin2"'|'fin3"'|'fina"'|'flac"'|'frac"'|'fwid"'|'half"'|'haln"'|'halt"'|'hist"'|'hkna"'|'hlig"'|'hngl"'|'hojo"'|'hwid"'|'init"'|'isol"'|'ital"'|'jalt"'|'jp78"'|'jp83"'|'jp90"'|'jp04"'|'kern"'|'lfbd"'|'liga"'|'ljmo"'|'lnum"'|'locl"'|'ltra"'|'ltrm"'|'mark"'|'med2"'|'medi"'|'mgrk"'|'mkmk"'|'nalt"'|'nlck"'|'nukt"'|'numr"'|'onum"'|'opbd"'|'ordn"'|'ornm"'|'palt"'|'pcap"'|'pkna"'|'pnum"'|'pref"'|'pres"'|'pstf"'|'psts"'|'pwid"'|'qwid"'|'rand"'|'rclt"'|'rlig"'|'rkrf"'|'rphf"'|'rtbd"'|'rtla"'|'rtlm"'|'ruby"'|'salt"'|'sinf"'|'size"'|'smcp"'|'smpl"'|'ssty"'|'stch"'|'subs"'|'sups"'|'swsh"'|'titl"'|'tjmo"'|'tnam"'|'tnum"'|'trad"'|'twid"'|'unic"'|'valt"'|'vatu"'|'vert"'|'vhal"'|'vjmo"'|'vkna"'|'vkrn"'|'vpal"'|'vrt2"'|'zero"'|'normal'|'off'|'on'
    /**
     * `CSS` Sets the style of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style)
     */
    'border-left-style'?: string
    /**
     * `CSS` Sets the style of the left border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style)
     */
    borderLeftStyle?: string
    /**
     * `CSS` Selects a normal, condensed, or expanded face from a font family.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch)
     */
    'font-stretch'?: 'condensed'|'expanded'|'extra-condensed'|'extra-expanded'|'narrower'|'normal'|'semi-condensed'|'semi-expanded'|'ultra-condensed'|'ultra-expanded'|'wider'
    /**
     * `CSS` Selects a normal, condensed, or expanded face from a font family.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch)
     */
    fontStretch?: 'condensed'|'expanded'|'extra-condensed'|'extra-expanded'|'narrower'|'normal'|'semi-condensed'|'semi-expanded'|'ultra-condensed'|'ultra-expanded'|'wider'
    /**
     * `CSS` The color of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color)
     */
    'outline-color'?: 'invert'
    /**
     * `CSS` The color of the outline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color)
     */
    outlineColor?: 'invert'
    /**
     * `CSS` Sets the style of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style)
     */
    'border-right-style'?: string
    /**
     * `CSS` Sets the style of the right border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style)
     */
    borderRightStyle?: string
    /**
     * `CSS` Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path)
     */
    'clip-path'?: 'none'|'url()'
    /**
     * `CSS` Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path)
     */
    clipPath?: 'none'|'url()'
    /**
     * `CSS` Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
     */
    'list-style-image'?: 'none'
    /**
     * `CSS` Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
     */
    listStyleImage?: 'none'
    /**
     * `CSS` Manipulate the value of existing counters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment)
     */
    'counter-increment'?: 'none'
    /**
     * `CSS` Manipulate the value of existing counters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment)
     */
    counterIncrement?: 'none'
    /**
     * `CSS` Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset)
     */
    'counter-reset'?: 'none'
    /**
     * `CSS` Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset)
     */
    counterReset?: 'none'
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image)
     */
    'border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image)
     */
    borderImage?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count)
     */
    'column-count'?: 'auto'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count)
     */
    columnCount?: 'auto'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    'column-gap'?: 'normal'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    columnGap?: 'normal'
    /**
     * `CSS` Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)
     */
    'text-decoration-color'?: string
    /**
     * `CSS` Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)
     */
    textDecorationColor?: string
    /**
     * `CSS` Shorthand that resets all properties except 'direction' and 'unicode-bidi'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all)
     */
    all?: string
    /**
     * `CSS` Determines the alignment of the replaced element inside its box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position)
     */
    'object-position'?: string
    /**
     * `CSS` Determines the alignment of the replaced element inside its box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position)
     */
    objectPosition?: string
    /**
     * `CSS` Defines rules for page breaks inside an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside)
     */
    'page-break-inside'?: 'auto'|'avoid'
    /**
     * `CSS` Defines rules for page breaks inside an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside)
     */
    pageBreakInside?: 'auto'|'avoid'
    /**
     * `CSS` Specifies the shape to be used at the end of open subpaths when they are stroked.
     */
    'stroke-linecap'?: 'butt'|'round'|'square'
    /**
     * `CSS` Specifies the shape to be used at the end of open subpaths when they are stroked.
     */
    strokeLinecap?: 'butt'|'round'|'square'
    /**
     * `CSS`  _Ignored on hr, input, select_.
     */
    size?: string
    /**
     * `CSS` In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
     */
    'empty-cells'?: 'hide'|'-moz-show-background'|'show'
    /**
     * `CSS` In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
     */
    emptyCells?: 'hide'|'-moz-show-background'|'show'
    /**
     * `CSS` Defines rules for page breaks after an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after)
     */
    'page-break-after'?: 'always'|'auto'|'avoid'|'left'|'right'
    /**
     * `CSS` Defines rules for page breaks after an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after)
     */
    pageBreakAfter?: 'always'|'auto'|'avoid'|'left'|'right'
    /**
     * `CSS` Specifies the opacity of the painting operation used to paint the interior the current object.
     */
    'fill-opacity'?: string
    /**
     * `CSS` Specifies the opacity of the painting operation used to paint the interior the current object.
     */
    fillOpacity?: string
    /**
     * `CSS` Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.
     */
    'grid-gap'?: string
    /**
     * `CSS` Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.
     */
    gridGap?: string
    /**
     * `CSS` Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end)
     */
    'margin-block-end'?: 'auto'
    /**
     * `CSS` Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end)
     */
    marginBlockEnd?: 'auto'
    /**
     * `CSS` Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain)
     */
    contain?: 'none'|'strict'|'content'|'size'|'layout'|'style'|'paint'
    /**
     * `CSS` Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)
     */
    'padding-inline-start'?: string
    /**
     * `CSS` Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)
     */
    paddingInlineStart?: string
    /**
     * `CSS` Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)
     */
    'margin-inline-start'?: 'auto'
    /**
     * `CSS` Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)
     */
    marginInlineStart?: 'auto'
    /**
     * `CSS` Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)
     */
    'margin-inline-end'?: 'auto'
    /**
     * `CSS` Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)
     */
    marginInlineEnd?: 'auto'
    /**
     * `CSS` specifies, as a space-separated track list, the line names and track sizing functions of the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)
     */
    'grid-template-rows'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` specifies, as a space-separated track list, the line names and track sizing functions of the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)
     */
    gridTemplateRows?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)
     */
    'padding-inline-end'?: string
    /**
     * `CSS` Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)
     */
    paddingInlineEnd?: string
    /**
     * `CSS` Specifies the opacity of the painting operation used to stroke the current object.
     */
    'stroke-opacity'?: string
    /**
     * `CSS` Specifies the opacity of the painting operation used to stroke the current object.
     */
    strokeOpacity?: string
    /**
     * `CSS` Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans)
     */
    orphans?: string
    /**
     * `CSS` Specifies an orthogonal rotation to be applied to an image before it is laid out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside)
     */
    'shape-outside'?: 'margin-box'|'none'
    /**
     * `CSS` Specifies an orthogonal rotation to be applied to an image before it is laid out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside)
     */
    shapeOutside?: 'margin-box'|'none'
    /**
     * `CSS` Specifies the position of the caption box with respect to the table box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side)
     */
    'caption-side'?: 'bottom'|'top'
    /**
     * `CSS` Specifies the position of the caption box with respect to the table box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side)
     */
    captionSide?: 'bottom'|'top'
    /**
     * `CSS` Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows)
     */
    widows?: string
    /**
     * `CSS` Shorthand for 'grid-column-start' and 'grid-column-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column)
     */
    'grid-column'?: 'auto'|'span'
    /**
     * `CSS` Shorthand for 'grid-column-start' and 'grid-column-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column)
     */
    gridColumn?: 'auto'|'span'
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
     */
    'perspective-origin'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
     */
    perspectiveOrigin?: string
    /**
     * `CSS` Describes the width of columns in multicol elements.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width)
     */
    'column-width'?: 'auto'
    /**
     * `CSS` Describes the width of columns in multicol elements.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width)
     */
    columnWidth?: 'auto'
    /**
     * `CSS` Defines the formula that must be used to mix the colors with the backdrop.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
     */
    'mix-blend-mode'?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
    /**
     * `CSS` Defines the formula that must be used to mix the colors with the backdrop.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
     */
    mixBlendMode?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
    /**
     * `CSS` Specifies the size of implicitly created rows.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)
     */
    'grid-auto-rows'?: 'min-content'|'max-content'|'auto'|'minmax()'
    /**
     * `CSS` Specifies the size of implicitly created rows.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: 'min-content'|'max-content'|'auto'|'minmax()'
    /**
     * `CSS` Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)
     */
    'font-variant-ligatures'?: 'additional-ligatures'|'common-ligatures'|'contextual'|'discretionary-ligatures'|'historical-ligatures'|'no-additional-ligatures'|'no-common-ligatures'|'no-contextual'|'no-discretionary-ligatures'|'no-historical-ligatures'|'none'|'normal'
    /**
     * `CSS` Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)
     */
    fontVariantLigatures?: 'additional-ligatures'|'common-ligatures'|'contextual'|'discretionary-ligatures'|'historical-ligatures'|'no-additional-ligatures'|'no-common-ligatures'|'no-contextual'|'no-discretionary-ligatures'|'no-historical-ligatures'|'none'|'normal'
    /**
     * `CSS` Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)
     */
    'scroll-behavior'?: 'auto'|'smooth'
    /**
     * `CSS` Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)
     */
    scrollBehavior?: 'auto'|'smooth'
    /**
     * `CSS` The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip)
     */
    'text-decoration-skip'?: string
    /**
     * `CSS` The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip)
     */
    textDecorationSkip?: string
    /**
     * `CSS` A shorthand property which sets both 'column-width' and 'column-count'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns)
     */
    columns?: 'auto'
    /**
     * `CSS` Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule)
     */
    'column-rule'?: string
    /**
     * `CSS` Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule)
     */
    columnRule?: string
    /**
     * `CSS` Specifies what set of line breaking restrictions are in effect within the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break)
     */
    'line-break'?: 'auto'|'loose'|'normal'|'strict'
    /**
     * `CSS` Specifies what set of line breaking restrictions are in effect within the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break)
     */
    lineBreak?: 'auto'|'loose'|'normal'|'strict'
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last)
     */
    'text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last)
     */
    textAlignLast?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width)
     */
    'border-image-width'?: 'auto'
    /**
     * `CSS` The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width)
     */
    borderImageWidth?: 'auto'
    /**
     * `CSS` When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.
     */
    'stroke-miterlimit'?: string
    /**
     * `CSS` When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.
     */
    strokeMiterlimit?: string
    /**
     * `CSS` Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)
     */
    'border-image-repeat'?: 'repeat'|'round'|'space'|'stretch'
    /**
     * `CSS` Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)
     */
    borderImageRepeat?: 'repeat'|'round'|'space'|'stretch'
    /**
     * `CSS` Specifies the gutters between grid columns. Replaced by 'column-gap' property.
     */
    'grid-column-gap'?: string
    /**
     * `CSS` Specifies the gutters between grid columns. Replaced by 'column-gap' property.
     */
    gridColumnGap?: string
    /**
     * `CSS` Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
     */
    'border-image-slice'?: 'fill'
    /**
     * `CSS` Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
     */
    borderImageSlice?: 'fill'
    /**
     * `CSS` Defines the way of justifying a box inside its container along the appropriate axis.
     */
    'justify-self'?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'
    /**
     * `CSS` Defines the way of justifying a box inside its container along the appropriate axis.
     */
    justifySelf?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'
    /**
     * `CSS` Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.
     */
    'fill-rule'?: 'evenodd'|'nonzero'
    /**
     * `CSS` Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.
     */
    fillRule?: 'evenodd'|'nonzero'
    /**
     * `CSS` The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset)
     */
    'border-image-outset'?: string
    /**
     * `CSS` The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset)
     */
    borderImageOutset?: string
    /**
     * `CSS` Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis
     */
    'justify-items'?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'|'legacy'
    /**
     * `CSS` Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis
     */
    justifyItems?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'|'legacy'
    /**
     * `CSS` Describes the page/column/region break behavior inside the principal box.
     */
    'break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'
    /**
     * `CSS` Describes the page/column/region break behavior inside the principal box.
     */
    breakInside?: 'auto'|'avoid'|'avoid-column'|'avoid-page'
    /**
     * `CSS` Defines how strictly snap points are enforced on the scroll container.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)
     */
    'scroll-snap-type'?: 'none'|'mandatory'|'proximity'
    /**
     * `CSS` Defines how strictly snap points are enforced on the scroll container.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)
     */
    scrollSnapType?: 'none'|'mandatory'|'proximity'
    /**
     * `CSS` Specifies what line decorations, if any, are added to the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)
     */
    'text-decoration-line'?: 'line-through'|'none'|'overline'|'underline'
    /**
     * `CSS` Specifies what line decorations, if any, are added to the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)
     */
    textDecorationLine?: 'line-through'|'none'|'overline'|'underline'
    /**
     * `CSS` The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)
     */
    'scroll-snap-align'?: string
    /**
     * `CSS` The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)
     */
    scrollSnapAlign?: string
    /**
     * `CSS` Shorthand for 'grid-row-start' and 'grid-row-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row)
     */
    'grid-row'?: 'auto'|'span'
    /**
     * `CSS` Shorthand for 'grid-row-start' and 'grid-row-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row)
     */
    gridRow?: 'auto'|'span'
    /**
     * `CSS` Controls the color of the text insertion indicator.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color)
     */
    'caret-color'?: 'auto'
    /**
     * `CSS` Controls the color of the text insertion indicator.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color)
     */
    caretColor?: 'auto'
    /**
     * `CSS` Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
     */
    'stroke-linejoin'?: 'bevel'|'miter'|'round'
    /**
     * `CSS` Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
     */
    strokeLinejoin?: 'bevel'|'miter'|'round'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area)
     */
    'grid-area'?: 'auto'|'span'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area)
     */
    gridArea?: 'auto'|'span'
    /**
     * `CSS` In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill)
     */
    'column-fill'?: 'auto'|'balance'
    /**
     * `CSS` In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill)
     */
    columnFill?: 'auto'|'balance'
    /**
     * `CSS` Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size)
     */
    'tab-size'?: string
    /**
     * `CSS` Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size)
     */
    tabSize?: string
    /**
     * `CSS` The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor)
     */
    'overflow-anchor'?: string
    /**
     * `CSS` The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor)
     */
    overflowAnchor?: string
    /**
     * `CSS` Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source)
     */
    'border-image-source'?: 'none'
    /**
     * `CSS` Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source)
     */
    borderImageSource?: 'none'
    /**
     * `CSS` Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)
     */
    'grid-template-areas'?: 'none'
    /**
     * `CSS` Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: 'none'
    /**
     * `CSS` Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning)
     */
    'font-kerning'?: 'auto'|'none'|'normal'
    /**
     * `CSS` Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning)
     */
    fontKerning?: 'auto'|'none'|'normal'
    /**
     * `CSS` Defines rules for page breaks before an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before)
     */
    'page-break-before'?: 'always'|'auto'|'avoid'|'left'|'right'
    /**
     * `CSS` Defines rules for page breaks before an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before)
     */
    pageBreakBefore?: 'always'|'auto'|'avoid'|'left'|'right'
    /**
     * `CSS` Specifies the line style for underline, line-through and overline text decoration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)
     */
    'text-decoration-style'?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
    /**
     * `CSS` Specifies the line style for underline, line-through and overline text decoration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)
     */
    textDecorationStyle?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
    /**
     * `CSS` Specifies the gutters between grid rows. Replaced by 'row-gap' property.
     */
    'grid-row-gap'?: string
    /**
     * `CSS` Specifies the gutters between grid rows. Replaced by 'row-gap' property.
     */
    gridRowGap?: string
    /**
     * `CSS` The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter)
     */
    'backdrop-filter'?: string
    /**
     * `CSS` The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter)
     */
    backdropFilter?: string
    /**
     * `CSS` Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)
     */
    'grid-auto-flow'?: 'row'|'column'|'dense'
    /**
     * `CSS` Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: 'row'|'column'|'dense'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start)
     */
    'grid-column-start'?: 'auto'|'span'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start)
     */
    gridColumnStart?: 'auto'|'span'
    /**
     * `CSS` Sets the color of the column rule
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color)
     */
    'column-rule-color'?: string
    /**
     * `CSS` Sets the color of the column rule
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color)
     */
    columnRuleColor?: string
    /**
     * `CSS` In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation)
     */
    isolation?: 'auto'|'isolate'
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style)
     */
    'column-rule-style'?: string
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style)
     */
    columnRuleStyle?: string
    /**
     * `CSS` Indicates what color to use at that gradient stop.
     */
    'stop-color'?: string
    /**
     * `CSS` Indicates what color to use at that gradient stop.
     */
    stopColor?: string
    /**
     * `CSS` Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.
     */
    'clip-rule'?: 'evenodd'|'nonzero'
    /**
     * `CSS` Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.
     */
    clipRule?: 'evenodd'|'nonzero'
    /**
     * `CSS` Defines the blending mode of each background layer.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)
     */
    'background-blend-mode'?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
    /**
     * `CSS` Defines the blending mode of each background layer.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)
     */
    backgroundBlendMode?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
    /**
     * `CSS` Specifies control over numerical forms.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)
     */
    'font-variant-numeric'?: 'diagonal-fractions'|'lining-nums'|'normal'|'oldstyle-nums'|'ordinal'|'proportional-nums'|'slashed-zero'|'stacked-fractions'|'tabular-nums'
    /**
     * `CSS` Specifies control over numerical forms.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)
     */
    fontVariantNumeric?: 'diagonal-fractions'|'lining-nums'|'normal'|'oldstyle-nums'|'ordinal'|'proportional-nums'|'slashed-zero'|'stacked-fractions'|'tabular-nums'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end)
     */
    'grid-column-end'?: 'auto'|'span'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end)
     */
    gridColumnEnd?: 'auto'|'span'
    /**
     * `CSS` Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start)
     */
    'margin-block-start'?: 'auto'
    /**
     * `CSS` Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start)
     */
    marginBlockStart?: 'auto'
    /**
     * `CSS` This is a shorthand property for both 'direction' and 'block-progression'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode)
     */
    'writing-mode'?: 'horizontal-tb'|'sideways-lr'|'sideways-rl'|'vertical-lr'|'vertical-rl'
    /**
     * `CSS` This is a shorthand property for both 'direction' and 'block-progression'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode)
     */
    writingMode?: 'horizontal-tb'|'sideways-lr'|'sideways-rl'|'vertical-lr'|'vertical-rl'
    /**
     * `CSS` Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.
     */
    'shape-rendering'?: 'auto'|'crispEdges'|'geometricPrecision'|'optimizeSpeed'
    /**
     * `CSS` Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.
     */
    shapeRendering?: 'auto'|'crispEdges'|'geometricPrecision'|'optimizeSpeed'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start)
     */
    'grid-row-start'?: 'auto'|'span'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start)
     */
    gridRowStart?: 'auto'|'span'
    /**
     * `CSS` Specifies the size of implicitly created columns.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)
     */
    'grid-auto-columns'?: 'min-content'|'max-content'|'auto'|'minmax()'
    /**
     * `CSS` Specifies the size of implicitly created columns.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: 'min-content'|'max-content'|'auto'|'minmax()'
    /**
     * `CSS` Describes the page/column/region break behavior after the generated box.
     */
    'break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
    /**
     * `CSS` Describes the page/column/region break behavior after the generated box.
     */
    breakAfter?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
    /**
     * `CSS` The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink)
     */
    'text-decoration-skip-ink'?: string
    /**
     * `CSS` The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink)
     */
    textDecorationSkipInk?: string
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end)
     */
    'grid-row-end'?: 'auto'|'span'
    /**
     * `CSS` Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end)
     */
    gridRowEnd?: 'auto'|'span'
    /**
     * `CSS` Describes the page/column/region break behavior before the generated box.
     */
    'break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
    /**
     * `CSS` Describes the page/column/region break behavior before the generated box.
     */
    breakBefore?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
    /**
     * `CSS` Specifies control over capitalized forms.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)
     */
    'font-variant-caps'?: 'all-petite-caps'|'all-small-caps'|'normal'|'petite-caps'|'small-caps'|'titling-caps'|'unicase'
    /**
     * `CSS` Specifies control over capitalized forms.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)
     */
    fontVariantCaps?: 'all-petite-caps'|'all-small-caps'|'normal'|'petite-caps'|'small-caps'|'titling-caps'|'unicase'
    /**
     * `CSS` Defines the opacity of a given gradient stop.
     */
    'stop-opacity'?: string
    /**
     * `CSS` Defines the opacity of a given gradient stop.
     */
    stopOpacity?: string
    /**
     * `CSS` Describes the page/column break behavior after the generated box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span)
     */
    'column-span'?: 'all'|'none'
    /**
     * `CSS` Describes the page/column break behavior after the generated box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span)
     */
    columnSpan?: 'all'|'none'
    /**
     * `CSS` Used to align (start-, middle- or end-alignment) a string of text relative to a given point.
     */
    'text-anchor'?: 'end'|'middle'|'start'
    /**
     * `CSS` Used to align (start-, middle- or end-alignment) a string of text relative to a given point.
     */
    textAnchor?: 'end'|'middle'|'start'
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width)
     */
    'column-rule-width'?: string
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width)
     */
    columnRuleWidth?: string
    /**
     * `CSS` The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
     */
    mask?: string
    /**
     * `CSS` Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position)
     */
    'text-underline-position'?: 'above'|'auto'|'below'
    /**
     * `CSS` Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position)
     */
    textUnderlinePosition?: 'above'|'auto'|'below'
    /**
     * `CSS` Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type)
     */
    'mask-type'?: 'alpha'|'luminance'
    /**
     * `CSS` Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type)
     */
    maskType?: 'alpha'|'luminance'
    /**
     * `CSS` Allows control of glyph substitute and positioning in East Asian text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)
     */
    'font-variant-east-asian'?: 'full-width'|'jis04'|'jis78'|'jis83'|'jis90'|'normal'|'proportional-width'|'ruby'|'simplified'|'traditional'
    /**
     * `CSS` Allows control of glyph substitute and positioning in East Asian text.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)
     */
    fontVariantEastAsian?: 'full-width'|'jis04'|'jis78'|'jis83'|'jis90'|'normal'|'proportional-width'|'ruby'|'simplified'|'traditional'
    /**
     * `CSS` Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)
     */
    'border-inline-end-width'?: string
    /**
     * `CSS` Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)
     */
    borderInlineEndWidth?: string
    /**
     * `CSS` Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)
     */
    'border-inline-start-width'?: string
    /**
     * `CSS` Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)
     */
    borderInlineStartWidth?: string
    /**
     * `CSS` Specifies the orientation of text within a line.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation)
     */
    'text-orientation'?: 'sideways'|'sideways-right'|'upright'
    /**
     * `CSS` Specifies the orientation of text within a line.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation)
     */
    textOrientation?: 'sideways'|'sideways-right'|'upright'
    /**
     * `CSS` Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin)
     */
    'shape-margin'?: string
    /**
     * `CSS` Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin)
     */
    shapeMargin?: string
    /**
     * `CSS` Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)
     */
    'shape-image-threshold'?: string
    /**
     * `CSS` Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)
     */
    shapeImageThreshold?: string
    /**
     * `CSS` Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size)
     */
    'min-inline-size'?: string
    /**
     * `CSS` Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size)
     */
    minInlineSize?: string
    /**
     * `CSS` Logical 'height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size)
     */
    'inline-size'?: 'auto'
    /**
     * `CSS` Logical 'height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size)
     */
    inlineSize?: 'auto'
    /**
     * `CSS` The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
     * 
     * This is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright)
     */
    'text-combine-upright'?: string
    /**
     * `CSS` The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
     * 
     * This is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright)
     */
    textCombineUpright?: string
    /**
     * `CSS` Logical 'width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size)
     */
    'block-size'?: 'auto'
    /**
     * `CSS` Logical 'width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size)
     */
    blockSize?: 'auto'
    /**
     * `CSS` Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size)
     */
    'min-block-size'?: string
    /**
     * `CSS` Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size)
     */
    minBlockSize?: string
    /**
     * `CSS` Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start)
     */
    'padding-block-start'?: string
    /**
     * `CSS` Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start)
     */
    paddingBlockStart?: string
    /**
     * `CSS` Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end)
     */
    'padding-block-end'?: string
    /**
     * `CSS` Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end)
     */
    paddingBlockEnd?: string
    /**
     * `CSS` Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)
     */
    'border-inline-start-color'?: string
    /**
     * `CSS` Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)
     */
    borderInlineStartColor?: string
    /**
     * `CSS` Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)
     */
    'border-inline-end-color'?: string
    /**
     * `CSS` Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)
     */
    borderInlineEndColor?: string
    /**
     * `CSS` Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)
     */
    'border-inline-end-style'?: string
    /**
     * `CSS` Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)
     */
    borderInlineEndStyle?: string
    /**
     * `CSS` Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)
     */
    'border-inline-start-style'?: string
    /**
     * `CSS` Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)
     */
    borderInlineStartStyle?: string
    /**
     * `CSS` Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)
     */
    'border-block-end-style'?: string
    /**
     * `CSS` Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)
     */
    borderBlockEndStyle?: string
    /**
     * `CSS` Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)
     */
    'border-block-end-color'?: string
    /**
     * `CSS` Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)
     */
    borderBlockEndColor?: string
    /**
     * `CSS` Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)
     */
    'border-block-start-style'?: string
    /**
     * `CSS` Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)
     */
    borderBlockStartStyle?: string
    /**
     * `CSS` Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)
     */
    'border-block-start-color'?: string
    /**
     * `CSS` Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)
     */
    borderBlockStartColor?: string
    /**
     * `CSS` Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)
     */
    'border-block-start-width'?: string
    /**
     * `CSS` Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)
     */
    borderBlockStartWidth?: string
    /**
     * `CSS` Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)
     */
    'border-block-end-width'?: string
    /**
     * `CSS` Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)
     */
    borderBlockEndWidth?: string
    /**
     * `CSS` The row-gap CSS property specifies the gutter between grid rows.
     */
    'row-gap'?: string
    /**
     * `CSS` The row-gap CSS property specifies the gutter between grid rows.
     */
    rowGap?: string
    /**
     * `CSS` Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template)
     */
    'grid-template'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template)
     */
    gridTemplate?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
    /**
     * `CSS` Specifies the color space for imaging operations performed via filter effects.
     */
    'color-interpolation-filters'?: 'auto'|'linearRGB'|'sRGB'
    /**
     * `CSS` Specifies the color space for imaging operations performed via filter effects.
     */
    colorInterpolationFilters?: 'auto'|'linearRGB'|'sRGB'
    /**
     * `CSS` Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order)
     */
    'paint-order'?: 'fill'|'markers'|'normal'|'stroke'
    /**
     * `CSS` Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order)
     */
    paintOrder?: 'fill'|'markers'|'normal'|'stroke'
    /**
     * `CSS` Indicates what color to use to flood the current filter primitive subregion.
     */
    'flood-color'?: string
    /**
     * `CSS` Indicates what color to use to flood the current filter primitive subregion.
     */
    floodColor?: string
    /**
     * `CSS` Indicates what opacity to use to flood the current filter primitive subregion.
     */
    'flood-opacity'?: string
    /**
     * `CSS` Indicates what opacity to use to flood the current filter primitive subregion.
     */
    floodOpacity?: string
    /**
     * `CSS` The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)
     */
    'scroll-snap-stop'?: string
    /**
     * `CSS` The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)
     */
    scrollSnapStop?: string
    /**
     * `CSS` Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.
     */
    'lighting-color'?: string
    /**
     * `CSS` Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.
     */
    lightingColor?: string
    /**
     * `CSS` The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left)
     */
    'scroll-padding-left'?: string
    /**
     * `CSS` The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left)
     */
    scrollPaddingLeft?: string
    /**
     * `CSS` Specifies the marker that will be drawn at the last vertices of the given markable element.
     */
    'marker-end'?: 'none'|'url()'
    /**
     * `CSS` Specifies the marker that will be drawn at the last vertices of the given markable element.
     */
    markerEnd?: 'none'|'url()'
    /**
     * `CSS` Specifies the marker that will be drawn at the first vertices of the given markable element.
     */
    'marker-start'?: 'none'|'url()'
    /**
     * `CSS` Specifies the marker that will be drawn at the first vertices of the given markable element.
     */
    markerStart?: 'none'|'url()'
    /**
     * `CSS` Specifies the marker that will be drawn at all vertices except the first and last.
     */
    'marker-mid'?: 'none'|'url()'
    /**
     * `CSS` Specifies the marker that will be drawn at all vertices except the first and last.
     */
    markerMid?: 'none'|'url()'
    /**
     * `CSS` The offset-distance CSS property specifies a position along an offset-path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance)
     */
    'offset-distance'?: string
    /**
     * `CSS` The offset-distance CSS property specifies a position along an offset-path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance)
     */
    offsetDistance?: string
    /**
     * `CSS` The place-content CSS shorthand property sets both the align-content and justify-content properties.
     */
    'place-content'?: string
    /**
     * `CSS` The place-content CSS shorthand property sets both the align-content and justify-content properties.
     */
    placeContent?: string
    /**
     * `CSS` The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)
     */
    'font-variation-settings'?: string
    /**
     * `CSS` The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)
     */
    fontVariationSettings?: string
    /**
     * `CSS` The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.
     * 
     * In this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path)
     */
    'offset-path'?: string
    /**
     * `CSS` The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.
     * 
     * In this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path)
     */
    offsetPath?: string
    /**
     * `CSS` The offset-rotate CSS property defines the direction of the element while positioning along the offset path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate)
     */
    'offset-rotate'?: string
    /**
     * `CSS` The offset-rotate CSS property defines the direction of the element while positioning along the offset path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate)
     */
    offsetRotate?: string
    /**
     * `CSS` Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size)
     */
    'max-inline-size'?: 'none'
    /**
     * `CSS` Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size)
     */
    maxInlineSize?: 'none'
    /**
     * `CSS` Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size)
     */
    'max-block-size'?: 'none'
    /**
     * `CSS` Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size)
     */
    maxBlockSize?: 'none'
    /**
     * `CSS` The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding)
     */
    'scroll-padding'?: string
    /**
     * `CSS` The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding)
     */
    scrollPadding?: string
    /**
     * `CSS` The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box)
     */
    'transform-box'?: string
    /**
     * `CSS` The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box)
     */
    transformBox?: string
    /**
     * `CSS` The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top)
     */
    'scroll-padding-top'?: string
    /**
     * `CSS` The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top)
     */
    scrollPaddingTop?: string
    /**
     * `CSS` The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.
     */
    gap?: string
    /**
     * `CSS` The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right)
     */
    'scroll-padding-right'?: string
    /**
     * `CSS` The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right)
     */
    scrollPaddingRight?: string
    /**
     * `CSS` Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.
     */
    marker?: 'none'|'url()'
    /**
     * `CSS` The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom)
     */
    'scroll-padding-bottom'?: string
    /**
     * `CSS` The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom)
     */
    scrollPaddingBottom?: string
    /**
     * `CSS` The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start)
     */
    'scroll-padding-inline-start'?: string
    /**
     * `CSS` The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start)
     */
    scrollPaddingInlineStart?: string
    /**
     * `CSS` The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start)
     */
    'scroll-padding-block-start'?: string
    /**
     * `CSS` The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start)
     */
    scrollPaddingBlockStart?: string
    /**
     * `CSS` The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end)
     */
    'scroll-padding-inline-end'?: string
    /**
     * `CSS` The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end)
     */
    scrollPaddingInlineEnd?: string
    /**
     * `CSS` The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end)
     */
    'scroll-padding-block-end'?: string
    /**
     * `CSS` The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end)
     */
    scrollPaddingBlockEnd?: string
    /**
     * `CSS` The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
     */
    'place-self'?: string
    /**
     * `CSS` The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
     */
    placeSelf?: string
    /**
     * `CSS` The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid)
     */
    grid?: string
    /**
     * `CSS` The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it.
     */
    'place-items'?: string
    /**
     * `CSS` The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it.
     */
    placeItems?: string
    /**
     * `CSS` The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)
     */
    'font-optical-sizing'?: string
    /**
     * `CSS` The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)
     */
    fontOpticalSizing?: string
    /**
     * `CSS` Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start)
     */
    'border-block-start'?: string
    /**
     * `CSS` Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start)
     */
    borderBlockStart?: string
    /**
     * `CSS` Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end)
     */
    'border-block-end'?: string
    /**
     * `CSS` Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end)
     */
    borderBlockEnd?: string
    /**
     * `CSS` Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start)
     */
    'border-inline-start'?: string
    /**
     * `CSS` Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start)
     */
    borderInlineStart?: string
    /**
     * `CSS` The offset CSS property is a shorthand property for animating an element along a defined path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset)
     */
    offset?: string
    /**
     * `CSS` Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end)
     */
    'border-inline-end'?: string
    /**
     * `CSS` Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end)
     */
    borderInlineEnd?: string
    /**
     * `CSS` The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block)
     */
    'scroll-padding-block'?: string
    /**
     * `CSS` The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block)
     */
    scrollPaddingBlock?: string
    /**
     * `CSS` The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline)
     */
    'scroll-padding-inline'?: string
    /**
     * `CSS` The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline)
     */
    scrollPaddingInline?: string
    /**
     * `CSS` Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.
     */
    motion?: 'none'|'path()'|'auto'|'reverse'
    /**
     * `CSS` The margin-inline CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline)
     */
    'margin-inline'?: string
    /**
     * `CSS` The margin-inline CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline)
     */
    marginInline?: string
    /**
     * `CSS` The padding-block CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block)
     */
    'padding-block'?: string
    /**
     * `CSS` The padding-block CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block)
     */
    paddingBlock?: string
    /**
     * `CSS` The padding-inline CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline)
     */
    'padding-inline'?: string
    /**
     * `CSS` The padding-inline CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline)
     */
    paddingInline?: string
    /**
     * `CSS` Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same regardless of the font used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust)
     */
    'font-size-adjust'?: 'none'
    /**
     * `CSS` Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same regardless of the font used.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust)
     */
    fontSizeAdjust?: 'none'
    /**
     * `CSS` Specifies the motion path the element gets positioned at.
     */
    'motion-path'?: 'none'|'path()'
    /**
     * `CSS` Specifies the motion path the element gets positioned at.
     */
    motionPath?: 'none'|'path()'
    /**
     * `CSS` Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-justify)
     */
    'text-justify'?: 'auto'|'distribute'|'distribute-all-lines'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'|'newspaper'
    /**
     * `CSS` Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-justify)
     */
    textJustify?: 'auto'|'distribute'|'distribute-all-lines'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'|'newspaper'
    /**
     * `CSS` A distance that describes the position along the specified motion path.
     */
    'motion-offset'?: string
    /**
     * `CSS` A distance that describes the position along the specified motion path.
     */
    motionOffset?: string
    /**
     * `CSS` The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start)
     */
    'inset-block-start'?: string
    /**
     * `CSS` The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start)
     */
    insetBlockStart?: string
    /**
     * `CSS` The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset)
     */
    inset?: string
    /**
     * `CSS` The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start)
     */
    'inset-inline-start'?: string
    /**
     * `CSS` The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start)
     */
    insetInlineStart?: string
    /**
     * `CSS` The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end)
     */
    'inset-inline-end'?: string
    /**
     * `CSS` The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end)
     */
    insetInlineEnd?: string
    /**
     * `CSS` The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale)
     */
    scale?: string
    /**
     * `CSS` The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate)
     */
    translate?: string
    /**
     * `CSS` The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate)
     */
    rotate?: string
    /**
     * `CSS` Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-anchor)
     */
    'offset-anchor'?: string
    /**
     * `CSS` Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-anchor)
     */
    offsetAnchor?: string
    /**
     * `CSS` Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-position)
     */
    'offset-position'?: string
    /**
     * `CSS` Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-position)
     */
    offsetPosition?: string
    /**
     * `CSS` The margin-block CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block)
     */
    'margin-block'?: string
    /**
     * `CSS` The margin-block CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block)
     */
    marginBlock?: string
    /**
     * `CSS` The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end)
     */
    'inset-block-end'?: string
    /**
     * `CSS` The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end)
     */
    insetBlockEnd?: string
    /**
     * `CSS` Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.
     */
    'enable-background'?: 'accumulate'|'new'
    /**
     * `CSS` Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.
     */
    enableBackground?: 'accumulate'|'new'
    /**
     * `CSS` Controls glyph orientation when the inline-progression-direction is horizontal.
     */
    'glyph-orientation-horizontal'?: string
    /**
     * `CSS` Controls glyph orientation when the inline-progression-direction is horizontal.
     */
    glyphOrientationHorizontal?: string
    /**
     * `CSS` Controls glyph orientation when the inline-progression-direction is vertical.
     */
    'glyph-orientation-vertical'?: 'auto'
    /**
     * `CSS` Controls glyph orientation when the inline-progression-direction is vertical.
     */
    glyphOrientationVertical?: 'auto'
    /**
     * `CSS` Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.
     */
    kerning?: 'auto'
    /**
     * `CSS` Specifies an orthogonal rotation to be applied to an image before it is laid out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
     */
    'image-orientation'?: 'flip'|'from-image'
    /**
     * `CSS` Specifies an orthogonal rotation to be applied to an image before it is laid out.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
     */
    imageOrientation?: 'flip'|'from-image'
    /**
     * `CSS` The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.
     */
    'image-resolution'?: string
    /**
     * `CSS` The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.
     */
    imageResolution?: string
    /**
     * `CSS` The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media).
     */
    orientation?: string
    /**
     * `CSS` Defines the direction of the element while positioning along the motion path.
     */
    'motion-rotation'?: 'auto'|'reverse'
    /**
     * `CSS` Defines the direction of the element while positioning along the motion path.
     */
    motionRotation?: 'auto'|'reverse'
    /**
     * `CSS` Defines the positioning of snap points along the x axis of the scroll container it is applied to.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-x)
     */
    'scroll-snap-points-x'?: 'none'|'repeat()'
    /**
     * `CSS` Defines the positioning of snap points along the x axis of the scroll container it is applied to.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-x)
     */
    scrollSnapPointsX?: 'none'|'repeat()'
    /**
     * `CSS` Defines the positioning of snap points along the y axis of the scroll container it is applied to.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-y)
     */
    'scroll-snap-points-y'?: 'none'|'repeat()'
    /**
     * `CSS` Defines the positioning of snap points along the y axis of the scroll container it is applied to.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-y)
     */
    scrollSnapPointsY?: 'none'|'repeat()'
    /**
     * `CSS` Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-coordinate)
     */
    'scroll-snap-coordinate'?: 'none'
    /**
     * `CSS` Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-coordinate)
     */
    scrollSnapCoordinate?: 'none'
    /**
     * `CSS` Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-destination)
     */
    'scroll-snap-destination'?: string
    /**
     * `CSS` Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-destination)
     */
    scrollSnapDestination?: string
    /**
     * `CSS` The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color)
     */
    'border-block-color'?: string
    /**
     * `CSS` The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color)
     */
    borderBlockColor?: string
    /**
     * `CSS` The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style)
     */
    'border-block-style'?: string
    /**
     * `CSS` The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style)
     */
    borderBlockStyle?: string
    /**
     * `CSS` The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width)
     */
    'border-block-width'?: string
    /**
     * `CSS` The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width)
     */
    borderBlockWidth?: string
    /**
     * `CSS` The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color)
     */
    'border-inline-color'?: string
    /**
     * `CSS` The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color)
     */
    borderInlineColor?: string
    /**
     * `CSS` The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style)
     */
    'border-inline-style'?: string
    /**
     * `CSS` The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style)
     */
    borderInlineStyle?: string
    /**
     * `CSS` The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width)
     */
    'border-inline-width'?: string
    /**
     * `CSS` The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width)
     */
    borderInlineWidth?: string
    /**
     * `CSS` The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block)
     */
    'border-block'?: string
    /**
     * `CSS` The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block)
     */
    borderBlock?: string
    /**
     * `CSS` The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline)
     */
    'border-inline'?: string
    /**
     * `CSS` The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline)
     */
    borderInline?: string
    /**
     * `CSS` The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block)
     */
    'inset-block'?: string
    /**
     * `CSS` The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block)
     */
    insetBlock?: string
    /**
     * `CSS` The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline)
     */
    'inset-inline'?: string
    /**
     * `CSS` The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline)
     */
    insetInline?: string
    /**
     * `CSS` Provides alternative text for assistive technology to replace the generated content of a ::before or ::after element. _Ignored on img, area, input_.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/alt)
     */
    alt?: string
    /**
     * `CSS` IE only. Used to extend behaviors of the browser.
     */
    behavior?: string
    /**
     * `CSS` Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-decoration-break)
     */
    'box-decoration-break'?: 'clone'|'slice'
    /**
     * `CSS` Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-decoration-break)
     */
    boxDecorationBreak?: 'clone'|'slice'
    /**
     * `CSS` The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-language-override)
     */
    'font-language-override'?: 'normal'
    /**
     * `CSS` The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-language-override)
     */
    fontLanguageOverride?: 'normal'
    /**
     * `CSS` Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis)
     */
    'font-synthesis'?: 'none'|'style'|'weight'
    /**
     * `CSS` Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis)
     */
    fontSynthesis?: 'none'|'style'|'weight'
    /**
     * `CSS` For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)
     */
    'font-variant-alternates'?: 'annotation()'|'character-variant()'|'historical-forms'|'normal'|'ornaments()'|'styleset()'|'stylistic()'|'swash()'
    /**
     * `CSS` For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)
     */
    fontVariantAlternates?: 'annotation()'|'character-variant()'|'historical-forms'|'normal'|'ornaments()'|'styleset()'|'stylistic()'|'swash()'
    /**
     * `CSS` Specifies the vertical position
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position)
     */
    'font-variant-position'?: 'normal'|'sub'|'super'
    /**
     * `CSS` Specifies the vertical position
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position)
     */
    fontVariantPosition?: 'normal'|'sub'|'super'
    /**
     * `CSS` Controls the state of the input method editor for text fields.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ime-mode)
     */
    'ime-mode'?: 'active'|'auto'|'disabled'|'inactive'|'normal'
    /**
     * `CSS` Controls the state of the input method editor for text fields.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ime-mode)
     */
    imeMode?: 'active'|'auto'|'disabled'|'inactive'|'normal'
    /**
     * `CSS` Sets the mask layer image of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
     */
    'mask-image'?: 'none'|'url()'
    /**
     * `CSS` Sets the mask layer image of an element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
     */
    maskImage?: 'none'|'url()'
    /**
     * `CSS` Indicates whether the mask layer image is treated as luminance mask or alpha mask.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode)
     */
    'mask-mode'?: 'alpha'|'auto'|'luminance'
    /**
     * `CSS` Indicates whether the mask layer image is treated as luminance mask or alpha mask.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode)
     */
    maskMode?: 'alpha'|'auto'|'luminance'
    /**
     * `CSS` Specifies the mask positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
     */
    'mask-origin'?: string
    /**
     * `CSS` Specifies the mask positioning area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
     */
    maskOrigin?: string
    /**
     * `CSS` Specifies how mask layer images are positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
     */
    'mask-position'?: string
    /**
     * `CSS` Specifies how mask layer images are positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
     */
    maskPosition?: string
    /**
     * `CSS` Specifies how mask layer images are tiled after they have been sized and positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
     */
    'mask-repeat'?: string
    /**
     * `CSS` Specifies how mask layer images are tiled after they have been sized and positioned.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
     */
    maskRepeat?: string
    /**
     * `CSS` Specifies the size of the mask layer images.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
     */
    'mask-size'?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Specifies the size of the mask layer images.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
     */
    maskSize?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    '-moz-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    mozAnimation?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Defines when the animation will start.
     */
    '-moz-animation-delay'?: string
    /**
     * `CSS` Defines when the animation will start.
     */
    mozAnimationDelay?: string
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    '-moz-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    mozAnimationDirection?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    '-moz-animation-duration'?: string
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    mozAnimationDuration?: string
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    '-moz-animation-iteration-count'?: 'infinite'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    mozAnimationIterationCount?: 'infinite'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    '-moz-animation-name'?: 'none'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    mozAnimationName?: 'none'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    '-moz-animation-play-state'?: 'paused'|'running'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    mozAnimationPlayState?: 'paused'|'running'
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    '-moz-animation-timing-function'?: string
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    mozAnimationTimingFunction?: string
    /**
     * `CSS` Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.
     */
    '-moz-appearance'?: 'button'|'button-arrow-down'|'button-arrow-next'|'button-arrow-previous'|'button-arrow-up'|'button-bevel'|'checkbox'|'checkbox-container'|'checkbox-label'|'dialog'|'groupbox'|'listbox'|'menuarrow'|'menuimage'|'menuitem'|'menuitemtext'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'menupopup'|'menuradio'|'menuseparator'|'-moz-mac-unified-toolbar'|'-moz-win-borderless-glass'|'-moz-win-browsertabbar-toolbox'|'-moz-win-communications-toolbox'|'-moz-win-glass'|'-moz-win-media-toolbox'|'none'|'progressbar'|'progresschunk'|'radio'|'radio-container'|'radio-label'|'radiomenuitem'|'resizer'|'resizerpanel'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbar-small'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'separator'|'spinner'|'spinner-downbutton'|'spinner-textfield'|'spinner-upbutton'|'statusbar'|'statusbarpanel'|'tab'|'tabpanels'|'tab-scroll-arrow-back'|'tab-scroll-arrow-forward'|'textfield'|'textfield-multiline'|'toolbar'|'toolbox'|'tooltip'|'treeheadercell'|'treeheadersortarrow'|'treeitem'|'treetwistyopen'|'treeview'|'treewisty'|'window'
    /**
     * `CSS` Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.
     */
    mozAppearance?: 'button'|'button-arrow-down'|'button-arrow-next'|'button-arrow-previous'|'button-arrow-up'|'button-bevel'|'checkbox'|'checkbox-container'|'checkbox-label'|'dialog'|'groupbox'|'listbox'|'menuarrow'|'menuimage'|'menuitem'|'menuitemtext'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'menupopup'|'menuradio'|'menuseparator'|'-moz-mac-unified-toolbar'|'-moz-win-borderless-glass'|'-moz-win-browsertabbar-toolbox'|'-moz-win-communications-toolbox'|'-moz-win-glass'|'-moz-win-media-toolbox'|'none'|'progressbar'|'progresschunk'|'radio'|'radio-container'|'radio-label'|'radiomenuitem'|'resizer'|'resizerpanel'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbar-small'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'separator'|'spinner'|'spinner-downbutton'|'spinner-textfield'|'spinner-upbutton'|'statusbar'|'statusbarpanel'|'tab'|'tabpanels'|'tab-scroll-arrow-back'|'tab-scroll-arrow-forward'|'textfield'|'textfield-multiline'|'toolbar'|'toolbox'|'tooltip'|'treeheadercell'|'treeheadersortarrow'|'treeitem'|'treetwistyopen'|'treeview'|'treewisty'|'window'
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     */
    '-moz-backface-visibility'?: 'hidden'|'visible'
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     */
    mozBackfaceVisibility?: 'hidden'|'visible'
    /**
     * `CSS` Determines the background painting area.
     */
    '-moz-background-clip'?: 'padding'
    /**
     * `CSS` Determines the background painting area.
     */
    mozBackgroundClip?: 'padding'
    /**
     * `CSS` In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.
     */
    '-moz-background-inline-policy'?: 'bounding-box'|'continuous'|'each-box'
    /**
     * `CSS` In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.
     */
    mozBackgroundInlinePolicy?: 'bounding-box'|'continuous'|'each-box'
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     */
    '-moz-background-origin'?: string
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     */
    mozBackgroundOrigin?: string
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-bottom-colors)
     */
    '-moz-border-bottom-colors'?: string
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-bottom-colors)
     */
    mozBorderBottomColors?: string
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    '-moz-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    mozBorderImage?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-left-colors)
     */
    '-moz-border-left-colors'?: string
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-left-colors)
     */
    mozBorderLeftColors?: string
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-right-colors)
     */
    '-moz-border-right-colors'?: string
    /**
     * `CSS` Sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-right-colors)
     */
    mozBorderRightColors?: string
    /**
     * `CSS` Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-top-colors)
     */
    '-moz-border-top-colors'?: string
    /**
     * `CSS` Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-top-colors)
     */
    mozBorderTopColors?: string
    /**
     * `CSS` Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.
     */
    '-moz-box-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.
     */
    mozBoxAlign?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     */
    '-moz-box-direction'?: 'normal'|'reverse'
    /**
     * `CSS` Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     */
    mozBoxDirection?: 'normal'|'reverse'
    /**
     * `CSS` Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.
     */
    '-moz-box-flex'?: string
    /**
     * `CSS` Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.
     */
    mozBoxFlex?: string
    /**
     * `CSS` Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
     */
    '-moz-box-flexgroup'?: string
    /**
     * `CSS` Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
     */
    mozBoxFlexgroup?: string
    /**
     * `CSS` Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
     */
    '-moz-box-ordinal-group'?: string
    /**
     * `CSS` Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
     */
    mozBoxOrdinalGroup?: string
    /**
     * `CSS` In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.
     */
    '-moz-box-orient'?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
    /**
     * `CSS` In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.
     */
    mozBoxOrient?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
    /**
     * `CSS` Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
     */
    '-moz-box-pack'?: 'center'|'end'|'justify'|'start'
    /**
     * `CSS` Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
     */
    mozBoxPack?: 'center'|'end'|'justify'|'start'
    /**
     * `CSS` Box Model addition in CSS3.
     */
    '-moz-box-sizing'?: 'border-box'|'content-box'|'padding-box'
    /**
     * `CSS` Box Model addition in CSS3.
     */
    mozBoxSizing?: 'border-box'|'content-box'|'padding-box'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     */
    '-moz-column-count'?: 'auto'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     */
    mozColumnCount?: 'auto'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    '-moz-column-gap'?: 'normal'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    mozColumnGap?: 'normal'
    /**
     * `CSS` Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     */
    '-moz-column-rule'?: string
    /**
     * `CSS` Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     */
    mozColumnRule?: string
    /**
     * `CSS` Sets the color of the column rule
     */
    '-moz-column-rule-color'?: string
    /**
     * `CSS` Sets the color of the column rule
     */
    mozColumnRuleColor?: string
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     */
    '-moz-column-rule-style'?: string
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     */
    mozColumnRuleStyle?: string
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     */
    '-moz-column-rule-width'?: string
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     */
    mozColumnRuleWidth?: string
    /**
     * `CSS` A shorthand property which sets both 'column-width' and 'column-count'.
     */
    '-moz-columns'?: 'auto'
    /**
     * `CSS` A shorthand property which sets both 'column-width' and 'column-count'.
     */
    mozColumns?: 'auto'
    /**
     * `CSS` This property describes the width of columns in multicol elements.
     */
    '-moz-column-width'?: 'auto'
    /**
     * `CSS` This property describes the width of columns in multicol elements.
     */
    mozColumnWidth?: 'auto'
    /**
     * `CSS` Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     */
    '-moz-font-feature-settings'?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
    /**
     * `CSS` Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     */
    mozFontFeatureSettings?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    '-moz-hyphens'?: 'auto'|'manual'|'none'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    mozHyphens?: 'auto'|'manual'|'none'
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    '-moz-perspective'?: 'none'
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    mozPerspective?: 'none'
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    '-moz-perspective-origin'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    mozPerspectiveOrigin?: string
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     */
    '-moz-text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     */
    mozTextAlignLast?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
     */
    '-moz-text-decoration-color'?: string
    /**
     * `CSS` Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
     */
    mozTextDecorationColor?: string
    /**
     * `CSS` Specifies what line decorations, if any, are added to the element.
     */
    '-moz-text-decoration-line'?: 'line-through'|'none'|'overline'|'underline'
    /**
     * `CSS` Specifies what line decorations, if any, are added to the element.
     */
    mozTextDecorationLine?: 'line-through'|'none'|'overline'|'underline'
    /**
     * `CSS` Specifies the line style for underline, line-through and overline text decoration.
     */
    '-moz-text-decoration-style'?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
    /**
     * `CSS` Specifies the line style for underline, line-through and overline text decoration.
     */
    mozTextDecorationStyle?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    '-moz-text-size-adjust'?: 'auto'|'none'
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    mozTextSizeAdjust?: 'auto'|'none'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    '-moz-transform'?: 'matrix()'|'matrix3d()'|'none'|'perspective'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    mozTransform?: 'matrix()'|'matrix3d()'|'none'|'perspective'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    '-moz-transform-origin'?: string
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    mozTransformOrigin?: string
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    '-moz-transition'?: 'all'|'none'
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    mozTransition?: 'all'|'none'
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    '-moz-transition-delay'?: string
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    mozTransitionDelay?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    '-moz-transition-duration'?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    mozTransitionDuration?: string
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    '-moz-transition-property'?: 'all'|'none'
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    mozTransitionProperty?: 'all'|'none'
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    '-moz-transition-timing-function'?: string
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    mozTransitionTimingFunction?: string
    /**
     * `CSS` Used to indicate whether the element can have focus.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-focus)
     */
    '-moz-user-focus'?: 'ignore'|'normal'
    /**
     * `CSS` Used to indicate whether the element can have focus.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-focus)
     */
    mozUserFocus?: 'ignore'|'normal'
    /**
     * `CSS` Controls the appearance of selection.
     */
    '-moz-user-select'?: 'all'|'element'|'elements'|'-moz-all'|'-moz-none'|'none'|'text'|'toggle'
    /**
     * `CSS` Controls the appearance of selection.
     */
    mozUserSelect?: 'all'|'element'|'elements'|'-moz-all'|'-moz-none'|'none'|'text'|'toggle'
    /**
     * `CSS` IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed
     */
    '-ms-accelerator'?: 'false'|'true'
    /**
     * `CSS` IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed
     */
    msAccelerator?: 'false'|'true'
    /**
     * `CSS` IE only. Used to extend behaviors of the browser
     */
    '-ms-behavior'?: string
    /**
     * `CSS` IE only. Used to extend behaviors of the browser
     */
    msBehavior?: string
    /**
     * `CSS` Sets the block-progression value and the flow orientation
     */
    '-ms-block-progression'?: 'bt'|'lr'|'rl'|'tb'
    /**
     * `CSS` Sets the block-progression value and the flow orientation
     */
    msBlockProgression?: 'bt'|'lr'|'rl'|'tb'
    /**
     * `CSS` Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.
     */
    '-ms-content-zoom-chaining'?: 'chained'|'none'
    /**
     * `CSS` Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.
     */
    msContentZoomChaining?: 'chained'|'none'
    /**
     * `CSS` Specifies whether zooming is enabled.
     */
    '-ms-content-zooming'?: 'none'|'zoom'
    /**
     * `CSS` Specifies whether zooming is enabled.
     */
    msContentZooming?: 'none'|'zoom'
    /**
     * `CSS` Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.
     */
    '-ms-content-zoom-limit'?: string
    /**
     * `CSS` Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.
     */
    msContentZoomLimit?: string
    /**
     * `CSS` Specifies the maximum zoom factor.
     */
    '-ms-content-zoom-limit-max'?: string
    /**
     * `CSS` Specifies the maximum zoom factor.
     */
    msContentZoomLimitMax?: string
    /**
     * `CSS` Specifies the minimum zoom factor.
     */
    '-ms-content-zoom-limit-min'?: string
    /**
     * `CSS` Specifies the minimum zoom factor.
     */
    msContentZoomLimitMin?: string
    /**
     * `CSS` Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.
     */
    '-ms-content-zoom-snap'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.
     */
    msContentZoomSnap?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Defines where zoom snap-points are located.
     */
    '-ms-content-zoom-snap-points'?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Defines where zoom snap-points are located.
     */
    msContentZoomSnapPoints?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Specifies how zooming is affected by defined snap-points.
     */
    '-ms-content-zoom-snap-type'?: 'mandatory'|'none'|'proximity'
    /**
     * `CSS` Specifies how zooming is affected by defined snap-points.
     */
    msContentZoomSnapType?: 'mandatory'|'none'|'proximity'
    /**
     * `CSS` IE only. Used to produce visual effects.
     */
    '-ms-filter'?: string
    /**
     * `CSS` IE only. Used to produce visual effects.
     */
    msFilter?: string
    /**
     * `CSS` specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.
     */
    '-ms-flex'?: 'auto'|'none'
    /**
     * `CSS` specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.
     */
    msFlex?: 'auto'|'none'
    /**
     * `CSS` Aligns flex items along the cross axis of the current line of the flex container.
     */
    '-ms-flex-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Aligns flex items along the cross axis of the current line of the flex container.
     */
    msFlexAlign?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
     */
    '-ms-flex-direction'?: 'column'|'column-reverse'|'row'|'row-reverse'
    /**
     * `CSS` Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
     */
    msFlexDirection?: 'column'|'column-reverse'|'row'|'row-reverse'
    /**
     * `CSS` Specifies how flexbox items are placed in the flexbox.
     */
    '-ms-flex-flow'?: 'column'|'column-reverse'|'nowrap'|'row'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Specifies how flexbox items are placed in the flexbox.
     */
    msFlexFlow?: 'column'|'column-reverse'|'nowrap'|'row'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Allows the default alignment along the cross axis to be overridden for individual flex items.
     */
    '-ms-flex-item-align'?: 'auto'|'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Allows the default alignment along the cross axis to be overridden for individual flex items.
     */
    msFlexItemAlign?: 'auto'|'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
     */
    '-ms-flex-line-pack'?: 'center'|'distribute'|'end'|'justify'|'start'|'stretch'
    /**
     * `CSS` Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
     */
    msFlexLinePack?: 'center'|'distribute'|'end'|'justify'|'start'|'stretch'
    /**
     * `CSS` Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
     */
    '-ms-flex-order'?: string
    /**
     * `CSS` Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
     */
    msFlexOrder?: string
    /**
     * `CSS` Aligns flex items along the main axis of the current line of the flex container.
     */
    '-ms-flex-pack'?: 'center'|'distribute'|'end'|'justify'|'start'
    /**
     * `CSS` Aligns flex items along the main axis of the current line of the flex container.
     */
    msFlexPack?: 'center'|'distribute'|'end'|'justify'|'start'
    /**
     * `CSS` Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
     */
    '-ms-flex-wrap'?: 'nowrap'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
     */
    msFlexWrap?: 'nowrap'|'wrap'|'wrap-reverse'
    /**
     * `CSS` Makes a block container a region and associates it with a named flow.
     */
    '-ms-flow-from'?: 'none'
    /**
     * `CSS` Makes a block container a region and associates it with a named flow.
     */
    msFlowFrom?: 'none'
    /**
     * `CSS` Places an element or its contents into a named flow.
     */
    '-ms-flow-into'?: 'none'
    /**
     * `CSS` Places an element or its contents into a named flow.
     */
    msFlowInto?: 'none'
    /**
     * `CSS` Used to place grid items and explicitly defined grid cells in the Grid.
     */
    '-ms-grid-column'?: 'auto'|'end'|'start'
    /**
     * `CSS` Used to place grid items and explicitly defined grid cells in the Grid.
     */
    msGridColumn?: 'auto'|'end'|'start'
    /**
     * `CSS` Aligns the columns in a grid.
     */
    '-ms-grid-column-align'?: 'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Aligns the columns in a grid.
     */
    msGridColumnAlign?: 'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Lays out the columns of the grid.
     */
    '-ms-grid-columns'?: string
    /**
     * `CSS` Lays out the columns of the grid.
     */
    msGridColumns?: string
    /**
     * `CSS` Specifies the number of columns to span.
     */
    '-ms-grid-column-span'?: string
    /**
     * `CSS` Specifies the number of columns to span.
     */
    msGridColumnSpan?: string
    /**
     * `CSS` Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.
     */
    '-ms-grid-layer'?: string
    /**
     * `CSS` Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.
     */
    msGridLayer?: string
    /**
     * `CSS` grid-row is used to place grid items and explicitly defined grid cells in the Grid.
     */
    '-ms-grid-row'?: 'auto'|'end'|'start'
    /**
     * `CSS` grid-row is used to place grid items and explicitly defined grid cells in the Grid.
     */
    msGridRow?: 'auto'|'end'|'start'
    /**
     * `CSS` Aligns the rows in a grid.
     */
    '-ms-grid-row-align'?: 'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Aligns the rows in a grid.
     */
    msGridRowAlign?: 'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Lays out the columns of the grid.
     */
    '-ms-grid-rows'?: string
    /**
     * `CSS` Lays out the columns of the grid.
     */
    msGridRows?: string
    /**
     * `CSS` Specifies the number of rows to span.
     */
    '-ms-grid-row-span'?: string
    /**
     * `CSS` Specifies the number of rows to span.
     */
    msGridRowSpan?: string
    /**
     * `CSS` Specifies if properties should be adjusted in high contrast mode.
     */
    '-ms-high-contrast-adjust'?: 'auto'|'none'
    /**
     * `CSS` Specifies if properties should be adjusted in high contrast mode.
     */
    msHighContrastAdjust?: 'auto'|'none'
    /**
     * `CSS` Specifies the minimum number of characters in a hyphenated word.
     */
    '-ms-hyphenate-limit-chars'?: 'auto'
    /**
     * `CSS` Specifies the minimum number of characters in a hyphenated word.
     */
    msHyphenateLimitChars?: 'auto'
    /**
     * `CSS` Indicates the maximum number of successive hyphenated lines in an element.
     */
    '-ms-hyphenate-limit-lines'?: 'no-limit'
    /**
     * `CSS` Indicates the maximum number of successive hyphenated lines in an element.
     */
    msHyphenateLimitLines?: 'no-limit'
    /**
     * `CSS` Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.
     */
    '-ms-hyphenate-limit-zone'?: string
    /**
     * `CSS` Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.
     */
    msHyphenateLimitZone?: string
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    '-ms-hyphens'?: 'auto'|'manual'|'none'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    msHyphens?: 'auto'|'manual'|'none'
    /**
     * `CSS` Controls the state of the input method editor for text fields.
     */
    '-ms-ime-mode'?: 'active'|'auto'|'disabled'|'inactive'|'normal'
    /**
     * `CSS` Controls the state of the input method editor for text fields.
     */
    msImeMode?: 'active'|'auto'|'disabled'|'inactive'|'normal'
    /**
     * `CSS` Gets or sets the interpolation (resampling) method used to stretch images.
     */
    '-ms-interpolation-mode'?: 'bicubic'|'nearest-neighbor'
    /**
     * `CSS` Gets or sets the interpolation (resampling) method used to stretch images.
     */
    msInterpolationMode?: 'bicubic'|'nearest-neighbor'
    /**
     * `CSS` Sets or retrieves the composite document grid properties that specify the layout of text characters.
     */
    '-ms-layout-grid'?: 'char'|'line'|'mode'|'type'
    /**
     * `CSS` Sets or retrieves the composite document grid properties that specify the layout of text characters.
     */
    msLayoutGrid?: 'char'|'line'|'mode'|'type'
    /**
     * `CSS` Sets or retrieves the size of the character grid used for rendering the text content of an element.
     */
    '-ms-layout-grid-char'?: 'auto'|'none'
    /**
     * `CSS` Sets or retrieves the size of the character grid used for rendering the text content of an element.
     */
    msLayoutGridChar?: 'auto'|'none'
    /**
     * `CSS` Sets or retrieves the gridline value used for rendering the text content of an element.
     */
    '-ms-layout-grid-line'?: 'auto'|'none'
    /**
     * `CSS` Sets or retrieves the gridline value used for rendering the text content of an element.
     */
    msLayoutGridLine?: 'auto'|'none'
    /**
     * `CSS` Gets or sets whether the text layout grid uses two dimensions.
     */
    '-ms-layout-grid-mode'?: 'both'|'char'|'line'|'none'
    /**
     * `CSS` Gets or sets whether the text layout grid uses two dimensions.
     */
    msLayoutGridMode?: 'both'|'char'|'line'|'none'
    /**
     * `CSS` Sets or retrieves the type of grid used for rendering the text content of an element.
     */
    '-ms-layout-grid-type'?: 'fixed'|'loose'|'strict'
    /**
     * `CSS` Sets or retrieves the type of grid used for rendering the text content of an element.
     */
    msLayoutGridType?: 'fixed'|'loose'|'strict'
    /**
     * `CSS` Specifies what set of line breaking restrictions are in effect within the element.
     */
    '-ms-line-break'?: 'auto'|'keep-all'|'newspaper'|'normal'|'strict'
    /**
     * `CSS` Specifies what set of line breaking restrictions are in effect within the element.
     */
    msLineBreak?: 'auto'|'keep-all'|'newspaper'|'normal'|'strict'
    /**
     * `CSS` Specify whether content is clipped when it overflows the element's content area.
     */
    '-ms-overflow-style'?: 'auto'|'-ms-autohiding-scrollbar'|'none'|'scrollbar'
    /**
     * `CSS` Specify whether content is clipped when it overflows the element's content area.
     */
    msOverflowStyle?: 'auto'|'-ms-autohiding-scrollbar'|'none'|'scrollbar'
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    '-ms-perspective'?: 'none'
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    msPerspective?: 'none'
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    '-ms-perspective-origin'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    msPerspectiveOrigin?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.
     */
    '-ms-perspective-origin-x'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.
     */
    msPerspectiveOriginX?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.
     */
    '-ms-perspective-origin-y'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.
     */
    msPerspectiveOriginY?: string
    /**
     * `CSS` Gets or sets a value that specifies whether a progress control displays as a bar or a ring.
     */
    '-ms-progress-appearance'?: 'bar'|'ring'
    /**
     * `CSS` Gets or sets a value that specifies whether a progress control displays as a bar or a ring.
     */
    msProgressAppearance?: 'bar'|'ring'
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     */
    '-ms-scrollbar-3dlight-color'?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     */
    msScrollbar3dlightColor?: string
    /**
     * `CSS` Determines the color of the arrow elements of a scroll arrow.
     */
    '-ms-scrollbar-arrow-color'?: string
    /**
     * `CSS` Determines the color of the arrow elements of a scroll arrow.
     */
    msScrollbarArrowColor?: string
    /**
     * `CSS` Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
     */
    '-ms-scrollbar-base-color'?: string
    /**
     * `CSS` Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
     */
    msScrollbarBaseColor?: string
    /**
     * `CSS` Determines the color of the gutter of a scroll bar.
     */
    '-ms-scrollbar-darkshadow-color'?: string
    /**
     * `CSS` Determines the color of the gutter of a scroll bar.
     */
    msScrollbarDarkshadowColor?: string
    /**
     * `CSS` Determines the color of the scroll box and scroll arrows of a scroll bar.
     */
    '-ms-scrollbar-face-color'?: string
    /**
     * `CSS` Determines the color of the scroll box and scroll arrows of a scroll bar.
     */
    msScrollbarFaceColor?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     */
    '-ms-scrollbar-highlight-color'?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     */
    msScrollbarHighlightColor?: string
    /**
     * `CSS` Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
     */
    '-ms-scrollbar-shadow-color'?: string
    /**
     * `CSS` Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
     */
    msScrollbarShadowColor?: string
    /**
     * `CSS` Determines the color of the track element of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-track-color)
     */
    '-ms-scrollbar-track-color'?: string
    /**
     * `CSS` Determines the color of the track element of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-track-color)
     */
    msScrollbarTrackColor?: string
    /**
     * `CSS` Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.
     */
    '-ms-scroll-chaining'?: 'chained'|'none'
    /**
     * `CSS` Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.
     */
    msScrollChaining?: 'chained'|'none'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.
     */
    '-ms-scroll-limit'?: 'auto'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.
     */
    msScrollLimit?: 'auto'
    /**
     * `CSS` Gets or sets a value that specifies the maximum value for the scrollLeft property.
     */
    '-ms-scroll-limit-x-max'?: 'auto'
    /**
     * `CSS` Gets or sets a value that specifies the maximum value for the scrollLeft property.
     */
    msScrollLimitXMax?: 'auto'
    /**
     * `CSS` Gets or sets a value that specifies the minimum value for the scrollLeft property.
     */
    '-ms-scroll-limit-x-min'?: string
    /**
     * `CSS` Gets or sets a value that specifies the minimum value for the scrollLeft property.
     */
    msScrollLimitXMin?: string
    /**
     * `CSS` Gets or sets a value that specifies the maximum value for the scrollTop property.
     */
    '-ms-scroll-limit-y-max'?: 'auto'
    /**
     * `CSS` Gets or sets a value that specifies the maximum value for the scrollTop property.
     */
    msScrollLimitYMax?: 'auto'
    /**
     * `CSS` Gets or sets a value that specifies the minimum value for the scrollTop property.
     */
    '-ms-scroll-limit-y-min'?: string
    /**
     * `CSS` Gets or sets a value that specifies the minimum value for the scrollTop property.
     */
    msScrollLimitYMin?: string
    /**
     * `CSS` Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).
     */
    '-ms-scroll-rails'?: 'none'|'railed'
    /**
     * `CSS` Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).
     */
    msScrollRails?: 'none'|'railed'
    /**
     * `CSS` Gets or sets a value that defines where snap-points will be located along the x-axis.
     */
    '-ms-scroll-snap-points-x'?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a value that defines where snap-points will be located along the x-axis.
     */
    msScrollSnapPointsX?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a value that defines where snap-points will be located along the y-axis.
     */
    '-ms-scroll-snap-points-y'?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a value that defines where snap-points will be located along the y-axis.
     */
    msScrollSnapPointsY?: 'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.
     */
    '-ms-scroll-snap-type'?: 'none'|'mandatory'|'proximity'
    /**
     * `CSS` Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.
     */
    msScrollSnapType?: 'none'|'mandatory'|'proximity'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.
     */
    '-ms-scroll-snap-x'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.
     */
    msScrollSnapX?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.
     */
    '-ms-scroll-snap-y'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.
     */
    msScrollSnapY?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
    /**
     * `CSS` Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
     */
    '-ms-scroll-translation'?: 'none'|'vertical-to-horizontal'
    /**
     * `CSS` Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
     */
    msScrollTranslation?: 'none'|'vertical-to-horizontal'
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     */
    '-ms-text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
     */
    msTextAlignLast?: 'auto'|'center'|'justify'|'left'|'right'
    /**
     * `CSS` Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.
     */
    '-ms-text-autospace'?: 'ideograph-alpha'|'ideograph-numeric'|'ideograph-parenthesis'|'ideograph-space'|'none'|'punctuation'
    /**
     * `CSS` Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.
     */
    msTextAutospace?: 'ideograph-alpha'|'ideograph-numeric'|'ideograph-parenthesis'|'ideograph-space'|'none'|'punctuation'
    /**
     * `CSS` This property specifies the combination of multiple characters into the space of a single character.
     */
    '-ms-text-combine-horizontal'?: 'all'|'digits'|'none'
    /**
     * `CSS` This property specifies the combination of multiple characters into the space of a single character.
     */
    msTextCombineHorizontal?: 'all'|'digits'|'none'
    /**
     * `CSS` Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
     */
    '-ms-text-justify'?: 'auto'|'distribute'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'
    /**
     * `CSS` Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
     */
    msTextJustify?: 'auto'|'distribute'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'
    /**
     * `CSS` Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.
     */
    '-ms-text-kashida-space'?: string
    /**
     * `CSS` Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.
     */
    msTextKashidaSpace?: string
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping
     */
    '-ms-text-overflow'?: 'clip'|'ellipsis'
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping
     */
    msTextOverflow?: 'clip'|'ellipsis'
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    '-ms-text-size-adjust'?: 'auto'|'none'
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    msTextSizeAdjust?: 'auto'|'none'
    /**
     * `CSS` Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
     */
    '-ms-text-underline-position'?: 'alphabetic'|'auto'|'over'|'under'
    /**
     * `CSS` Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
     */
    msTextUnderlinePosition?: 'alphabetic'|'auto'|'over'|'under'
    /**
     * `CSS` Gets or sets a value that indicates whether and how a given region can be manipulated by the user.
     */
    '-ms-touch-action'?: 'auto'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
    /**
     * `CSS` Gets or sets a value that indicates whether and how a given region can be manipulated by the user.
     */
    msTouchAction?: 'auto'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
    /**
     * `CSS` Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.
     */
    '-ms-touch-select'?: 'grippers'|'none'
    /**
     * `CSS` Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.
     */
    msTouchSelect?: 'grippers'|'none'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    '-ms-transform'?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    msTransform?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    '-ms-transform-origin'?: string
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    msTransformOrigin?: string
    /**
     * `CSS` The x coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-ms-transform-origin-x'?: string
    /**
     * `CSS` The x coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    msTransformOriginX?: string
    /**
     * `CSS` The y coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-ms-transform-origin-y'?: string
    /**
     * `CSS` The y coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    msTransformOriginY?: string
    /**
     * `CSS` The z coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-ms-transform-origin-z'?: string
    /**
     * `CSS` The z coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    msTransformOriginZ?: string
    /**
     * `CSS` Controls the appearance of selection.
     */
    '-ms-user-select'?: 'element'|'none'|'text'
    /**
     * `CSS` Controls the appearance of selection.
     */
    msUserSelect?: 'element'|'none'|'text'
    /**
     * `CSS` Specifies line break opportunities for non-CJK scripts.
     */
    '-ms-word-break'?: 'break-all'|'keep-all'|'normal'
    /**
     * `CSS` Specifies line break opportunities for non-CJK scripts.
     */
    msWordBreak?: 'break-all'|'keep-all'|'normal'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
     */
    '-ms-word-wrap'?: 'break-word'|'normal'
    /**
     * `CSS` Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
     */
    msWordWrap?: 'break-word'|'normal'
    /**
     * `CSS` An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.
     */
    '-ms-wrap-flow'?: 'auto'|'both'|'clear'|'end'|'maximum'|'minimum'|'start'
    /**
     * `CSS` An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.
     */
    msWrapFlow?: 'auto'|'both'|'clear'|'end'|'maximum'|'minimum'|'start'
    /**
     * `CSS` Gets or sets a value that is used to offset the inner wrap shape from other shapes.
     */
    '-ms-wrap-margin'?: string
    /**
     * `CSS` Gets or sets a value that is used to offset the inner wrap shape from other shapes.
     */
    msWrapMargin?: string
    /**
     * `CSS` Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.
     */
    '-ms-wrap-through'?: 'none'|'wrap'
    /**
     * `CSS` Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.
     */
    msWrapThrough?: 'none'|'wrap'
    /**
     * `CSS` Shorthand property for both 'direction' and 'block-progression'.
     */
    '-ms-writing-mode'?: 'bt-lr'|'bt-rl'|'lr-bt'|'lr-tb'|'rl-bt'|'rl-tb'|'tb-lr'|'tb-rl'
    /**
     * `CSS` Shorthand property for both 'direction' and 'block-progression'.
     */
    msWritingMode?: 'bt-lr'|'bt-rl'|'lr-bt'|'lr-tb'|'rl-bt'|'rl-tb'|'tb-lr'|'tb-rl'
    /**
     * `CSS` Sets or retrieves the magnification scale of the object.
     */
    '-ms-zoom'?: 'normal'
    /**
     * `CSS` Sets or retrieves the magnification scale of the object.
     */
    msZoom?: 'normal'
    /**
     * `CSS` Gets or sets a value that indicates whether an animation is used when zooming.
     */
    '-ms-zoom-animation'?: 'default'|'none'
    /**
     * `CSS` Gets or sets a value that indicates whether an animation is used when zooming.
     */
    msZoomAnimation?: 'default'|'none'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    'nav-down'?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    navDown?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').
     */
    'nav-index'?: 'auto'
    /**
     * `CSS` Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').
     */
    navIndex?: 'auto'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    'nav-left'?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    navLeft?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    'nav-right'?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    navRight?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    'nav-up'?: 'auto'|'current'|'root'
    /**
     * `CSS` Provides an way to control directional focus navigation.
     */
    navUp?: 'auto'|'current'|'root'
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    '-o-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    oAnimation?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Defines when the animation will start.
     */
    '-o-animation-delay'?: string
    /**
     * `CSS` Defines when the animation will start.
     */
    oAnimationDelay?: string
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    '-o-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    oAnimationDirection?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    '-o-animation-duration'?: string
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    oAnimationDuration?: string
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     */
    '-o-animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     */
    oAnimationFillMode?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    '-o-animation-iteration-count'?: 'infinite'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    oAnimationIterationCount?: 'infinite'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    '-o-animation-name'?: 'none'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    oAnimationName?: 'none'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    '-o-animation-play-state'?: 'paused'|'running'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    oAnimationPlayState?: 'paused'|'running'
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    '-o-animation-timing-function'?: string
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    oAnimationTimingFunction?: string
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    '-o-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    oBorderImage?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'
    /**
     * `CSS` Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
     */
    '-o-object-fit'?: 'contain'|'cover'|'fill'|'none'|'scale-down'
    /**
     * `CSS` Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
     */
    oObjectFit?: 'contain'|'cover'|'fill'|'none'|'scale-down'
    /**
     * `CSS` Determines the alignment of the replaced element inside its box.
     */
    '-o-object-position'?: string
    /**
     * `CSS` Determines the alignment of the replaced element inside its box.
     */
    oObjectPosition?: string
    /**
     * `CSS` Determines which row of a inline-table should be used as baseline of inline-table.
     */
    '-o-table-baseline'?: string
    /**
     * `CSS` Determines which row of a inline-table should be used as baseline of inline-table.
     */
    oTableBaseline?: string
    /**
     * `CSS` This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
     */
    '-o-tab-size'?: string
    /**
     * `CSS` This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
     */
    oTabSize?: string
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping
     */
    '-o-text-overflow'?: 'clip'|'ellipsis'
    /**
     * `CSS` Text can overflow for example when it is prevented from wrapping
     */
    oTextOverflow?: 'clip'|'ellipsis'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    '-o-transform'?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    oTransform?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    '-o-transform-origin'?: string
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    oTransformOrigin?: string
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    '-o-transition'?: 'all'|'none'
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    oTransition?: 'all'|'none'
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    '-o-transition-delay'?: string
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    oTransitionDelay?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    '-o-transition-duration'?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    oTransitionDuration?: string
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    '-o-transition-property'?: 'all'|'none'
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    oTransitionProperty?: 'all'|'none'
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    '-o-transition-timing-function'?: string
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    oTransitionTimingFunction?: string
    /**
     * `CSS` Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    'offset-block-end'?: 'auto'
    /**
     * `CSS` Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    offsetBlockEnd?: 'auto'
    /**
     * `CSS` Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    'offset-block-start'?: 'auto'
    /**
     * `CSS` Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    offsetBlockStart?: 'auto'
    /**
     * `CSS` Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    'offset-inline-end'?: 'auto'
    /**
     * `CSS` Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    offsetInlineEnd?: 'auto'
    /**
     * `CSS` Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    'offset-inline-start'?: 'auto'
    /**
     * `CSS` Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
     */
    offsetInlineStart?: 'auto'
    /**
     * `CSS` Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-align)
     */
    'ruby-align'?: 'auto'|'center'|'distribute-letter'|'distribute-space'|'left'|'line-edge'|'right'|'start'|'space-between'|'space-around'
    /**
     * `CSS` Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-align)
     */
    rubyAlign?: 'auto'|'center'|'distribute-letter'|'distribute-space'|'left'|'line-edge'|'right'|'start'|'space-between'|'space-around'
    /**
     * `CSS` Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
     */
    'ruby-overhang'?: 'auto'|'end'|'none'|'start'
    /**
     * `CSS` Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
     */
    rubyOverhang?: 'auto'|'end'|'none'|'start'
    /**
     * `CSS` Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position)
     */
    'ruby-position'?: 'after'|'before'|'inline'|'right'
    /**
     * `CSS` Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position)
     */
    rubyPosition?: 'after'|'before'|'inline'|'right'
    /**
     * `CSS` Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
     */
    'ruby-span'?: 'attr(x)'|'none'
    /**
     * `CSS` Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
     */
    rubySpan?: 'attr(x)'|'none'
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-3dlight-color)
     */
    'scrollbar-3dlight-color'?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-3dlight-color)
     */
    scrollbar3dlightColor?: string
    /**
     * `CSS` Determines the color of the arrow elements of a scroll arrow.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-arrow-color)
     */
    'scrollbar-arrow-color'?: string
    /**
     * `CSS` Determines the color of the arrow elements of a scroll arrow.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-arrow-color)
     */
    scrollbarArrowColor?: string
    /**
     * `CSS` Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-base-color)
     */
    'scrollbar-base-color'?: string
    /**
     * `CSS` Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-base-color)
     */
    scrollbarBaseColor?: string
    /**
     * `CSS` Determines the color of the gutter of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-darkshadow-color)
     */
    'scrollbar-darkshadow-color'?: string
    /**
     * `CSS` Determines the color of the gutter of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-darkshadow-color)
     */
    scrollbarDarkshadowColor?: string
    /**
     * `CSS` Determines the color of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-face-color)
     */
    'scrollbar-face-color'?: string
    /**
     * `CSS` Determines the color of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-face-color)
     */
    scrollbarFaceColor?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-highlight-color)
     */
    'scrollbar-highlight-color'?: string
    /**
     * `CSS` Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-highlight-color)
     */
    scrollbarHighlightColor?: string
    /**
     * `CSS` Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-shadow-color)
     */
    'scrollbar-shadow-color'?: string
    /**
     * `CSS` Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-shadow-color)
     */
    scrollbarShadowColor?: string
    /**
     * `CSS` Determines the color of the track element of a scroll bar.
     */
    'scrollbar-track-color'?: string
    /**
     * `CSS` Determines the color of the track element of a scroll bar.
     */
    scrollbarTrackColor?: string
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    '-webkit-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Shorthand property combines six of the animation properties into a single property.
     */
    webkitAnimation?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
    /**
     * `CSS` Defines when the animation will start.
     */
    '-webkit-animation-delay'?: string
    /**
     * `CSS` Defines when the animation will start.
     */
    webkitAnimationDelay?: string
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    '-webkit-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines whether or not the animation should play in reverse on alternate cycles.
     */
    webkitAnimationDirection?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    '-webkit-animation-duration'?: string
    /**
     * `CSS` Defines the length of time that an animation takes to complete one cycle.
     */
    webkitAnimationDuration?: string
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     */
    '-webkit-animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Defines what values are applied by the animation outside the time it is executing.
     */
    webkitAnimationFillMode?: 'backwards'|'both'|'forwards'|'none'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    '-webkit-animation-iteration-count'?: 'infinite'
    /**
     * `CSS` Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
     */
    webkitAnimationIterationCount?: 'infinite'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    '-webkit-animation-name'?: 'none'
    /**
     * `CSS` Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
     */
    webkitAnimationName?: 'none'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    '-webkit-animation-play-state'?: 'paused'|'running'
    /**
     * `CSS` Defines whether the animation is running or paused.
     */
    webkitAnimationPlayState?: 'paused'|'running'
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    '-webkit-animation-timing-function'?: string
    /**
     * `CSS` Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
     */
    webkitAnimationTimingFunction?: string
    /**
     * `CSS` Changes the appearance of buttons and other controls to resemble native controls.
     */
    '-webkit-appearance'?: 'button'|'button-bevel'|'caps-lock-indicator'|'caret'|'checkbox'|'default-button'|'listbox'|'listitem'|'media-fullscreen-button'|'media-mute-button'|'media-play-button'|'media-seek-back-button'|'media-seek-forward-button'|'media-slider'|'media-sliderthumb'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'none'|'push-button'|'radio'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbargripper-horizontal'|'scrollbargripper-vertical'|'scrollbarthumb-horizontal'|'scrollbarthumb-vertical'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'searchfield'|'searchfield-cancel-button'|'searchfield-decoration'|'searchfield-results-button'|'searchfield-results-decoration'|'slider-horizontal'|'sliderthumb-horizontal'|'sliderthumb-vertical'|'slider-vertical'|'square-button'|'textarea'|'textfield'
    /**
     * `CSS` Changes the appearance of buttons and other controls to resemble native controls.
     */
    webkitAppearance?: 'button'|'button-bevel'|'caps-lock-indicator'|'caret'|'checkbox'|'default-button'|'listbox'|'listitem'|'media-fullscreen-button'|'media-mute-button'|'media-play-button'|'media-seek-back-button'|'media-seek-forward-button'|'media-slider'|'media-sliderthumb'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'none'|'push-button'|'radio'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbargripper-horizontal'|'scrollbargripper-vertical'|'scrollbarthumb-horizontal'|'scrollbarthumb-vertical'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'searchfield'|'searchfield-cancel-button'|'searchfield-decoration'|'searchfield-results-button'|'searchfield-results-decoration'|'slider-horizontal'|'sliderthumb-horizontal'|'sliderthumb-vertical'|'slider-vertical'|'square-button'|'textarea'|'textfield'
    /**
     * `CSS` Applies a filter effect where the first filter in the list takes the element's background image as the input image.
     */
    '-webkit-backdrop-filter'?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
    /**
     * `CSS` Applies a filter effect where the first filter in the list takes the element's background image as the input image.
     */
    webkitBackdropFilter?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     */
    '-webkit-backface-visibility'?: 'hidden'|'visible'
    /**
     * `CSS` Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
     */
    webkitBackfaceVisibility?: 'hidden'|'visible'
    /**
     * `CSS` Determines the background painting area.
     */
    '-webkit-background-clip'?: string
    /**
     * `CSS` Determines the background painting area.
     */
    webkitBackgroundClip?: string
    /**
     * `CSS` 
     */
    '-webkit-background-composite'?: 'border'|'padding'
    /**
     * `CSS` 
     */
    webkitBackgroundComposite?: 'border'|'padding'
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     */
    '-webkit-background-origin'?: string
    /**
     * `CSS` For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
     */
    webkitBackgroundOrigin?: string
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    '-webkit-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
     */
    webkitBorderImage?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
    /**
     * `CSS` Specifies the alignment of nested elements within an outer flexible box element.
     */
    '-webkit-box-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` Specifies the alignment of nested elements within an outer flexible box element.
     */
    webkitBoxAlign?: 'baseline'|'center'|'end'|'start'|'stretch'
    /**
     * `CSS` In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     */
    '-webkit-box-direction'?: 'normal'|'reverse'
    /**
     * `CSS` In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     */
    webkitBoxDirection?: 'normal'|'reverse'
    /**
     * `CSS` Specifies an element's flexibility.
     */
    '-webkit-box-flex'?: string
    /**
     * `CSS` Specifies an element's flexibility.
     */
    webkitBoxFlex?: string
    /**
     * `CSS` Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
     */
    '-webkit-box-flex-group'?: string
    /**
     * `CSS` Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
     */
    webkitBoxFlexGroup?: string
    /**
     * `CSS` Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
     */
    '-webkit-box-ordinal-group'?: string
    /**
     * `CSS` Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
     */
    webkitBoxOrdinalGroup?: string
    /**
     * `CSS` In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.
     */
    '-webkit-box-orient'?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
    /**
     * `CSS` In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.
     */
    webkitBoxOrient?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
    /**
     * `CSS` Specifies alignment of child elements within the current element in the direction of orientation.
     */
    '-webkit-box-pack'?: 'center'|'end'|'justify'|'start'
    /**
     * `CSS` Specifies alignment of child elements within the current element in the direction of orientation.
     */
    webkitBoxPack?: 'center'|'end'|'justify'|'start'
    /**
     * `CSS` Defines a reflection of a border box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-box-reflect)
     */
    '-webkit-box-reflect'?: 'above'|'below'|'left'|'right'
    /**
     * `CSS` Defines a reflection of a border box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-box-reflect)
     */
    webkitBoxReflect?: 'above'|'below'|'left'|'right'
    /**
     * `CSS` Box Model addition in CSS3.
     */
    '-webkit-box-sizing'?: 'border-box'|'content-box'
    /**
     * `CSS` Box Model addition in CSS3.
     */
    webkitBoxSizing?: 'border-box'|'content-box'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    '-webkit-break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    webkitBreakAfter?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    '-webkit-break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    webkitBreakBefore?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior inside the generated box.
     */
    '-webkit-break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
    /**
     * `CSS` Describes the page/column break behavior inside the generated box.
     */
    webkitBreakInside?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    '-webkit-column-break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    webkitColumnBreakAfter?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    '-webkit-column-break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior before the generated box.
     */
    webkitColumnBreakBefore?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
    /**
     * `CSS` Describes the page/column break behavior inside the generated box.
     */
    '-webkit-column-break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
    /**
     * `CSS` Describes the page/column break behavior inside the generated box.
     */
    webkitColumnBreakInside?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     */
    '-webkit-column-count'?: 'auto'
    /**
     * `CSS` Describes the optimal number of columns into which the content of the element will be flowed.
     */
    webkitColumnCount?: 'auto'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    '-webkit-column-gap'?: 'normal'
    /**
     * `CSS` Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
     */
    webkitColumnGap?: 'normal'
    /**
     * `CSS` This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     */
    '-webkit-column-rule'?: string
    /**
     * `CSS` This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
     */
    webkitColumnRule?: string
    /**
     * `CSS` Sets the color of the column rule
     */
    '-webkit-column-rule-color'?: string
    /**
     * `CSS` Sets the color of the column rule
     */
    webkitColumnRuleColor?: string
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     */
    '-webkit-column-rule-style'?: string
    /**
     * `CSS` Sets the style of the rule between columns of an element.
     */
    webkitColumnRuleStyle?: string
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     */
    '-webkit-column-rule-width'?: string
    /**
     * `CSS` Sets the width of the rule between columns. Negative values are not allowed.
     */
    webkitColumnRuleWidth?: string
    /**
     * `CSS` A shorthand property which sets both 'column-width' and 'column-count'.
     */
    '-webkit-columns'?: 'auto'
    /**
     * `CSS` A shorthand property which sets both 'column-width' and 'column-count'.
     */
    webkitColumns?: 'auto'
    /**
     * `CSS` Describes the page/column break behavior after the generated box.
     */
    '-webkit-column-span'?: 'all'|'none'
    /**
     * `CSS` Describes the page/column break behavior after the generated box.
     */
    webkitColumnSpan?: 'all'|'none'
    /**
     * `CSS` This property describes the width of columns in multicol elements.
     */
    '-webkit-column-width'?: 'auto'
    /**
     * `CSS` This property describes the width of columns in multicol elements.
     */
    webkitColumnWidth?: 'auto'
    /**
     * `CSS` Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.
     */
    '-webkit-filter'?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
    /**
     * `CSS` Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.
     */
    webkitFilter?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
    /**
     * `CSS` Makes a block container a region and associates it with a named flow.
     */
    '-webkit-flow-from'?: 'none'
    /**
     * `CSS` Makes a block container a region and associates it with a named flow.
     */
    webkitFlowFrom?: 'none'
    /**
     * `CSS` Places an element or its contents into a named flow.
     */
    '-webkit-flow-into'?: 'none'
    /**
     * `CSS` Places an element or its contents into a named flow.
     */
    webkitFlowInto?: 'none'
    /**
     * `CSS` This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     */
    '-webkit-font-feature-settings'?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
    /**
     * `CSS` This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
     */
    webkitFontFeatureSettings?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    '-webkit-hyphens'?: 'auto'|'manual'|'none'
    /**
     * `CSS` Controls whether hyphenation is allowed to create more break opportunities within a line of text.
     */
    webkitHyphens?: 'auto'|'manual'|'none'
    /**
     * `CSS` Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.
     */
    '-webkit-line-break'?: 'after-white-space'|'normal'
    /**
     * `CSS` Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.
     */
    webkitLineBreak?: 'after-white-space'|'normal'
    /**
     * `CSS` 
     */
    '-webkit-margin-bottom-collapse'?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` 
     */
    webkitMarginBottomCollapse?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` 
     */
    '-webkit-margin-collapse'?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` 
     */
    webkitMarginCollapse?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` 
     */
    '-webkit-margin-start'?: 'auto'
    /**
     * `CSS` 
     */
    webkitMarginStart?: 'auto'
    /**
     * `CSS` 
     */
    '-webkit-margin-top-collapse'?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` 
     */
    webkitMarginTopCollapse?: 'collapse'|'discard'|'separate'
    /**
     * `CSS` Determines the mask painting area, which determines the area that is affected by the mask.
     */
    '-webkit-mask-clip'?: string
    /**
     * `CSS` Determines the mask painting area, which determines the area that is affected by the mask.
     */
    webkitMaskClip?: string
    /**
     * `CSS` Sets the mask layer image of an element.
     */
    '-webkit-mask-image'?: 'none'|'url()'
    /**
     * `CSS` Sets the mask layer image of an element.
     */
    webkitMaskImage?: 'none'|'url()'
    /**
     * `CSS` Specifies the mask positioning area.
     */
    '-webkit-mask-origin'?: string
    /**
     * `CSS` Specifies the mask positioning area.
     */
    webkitMaskOrigin?: string
    /**
     * `CSS` Specifies how mask layer images are tiled after they have been sized and positioned.
     */
    '-webkit-mask-repeat'?: string
    /**
     * `CSS` Specifies how mask layer images are tiled after they have been sized and positioned.
     */
    webkitMaskRepeat?: string
    /**
     * `CSS` Specifies the size of the mask layer images.
     */
    '-webkit-mask-size'?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Specifies the size of the mask layer images.
     */
    webkitMaskSize?: 'auto'|'contain'|'cover'
    /**
     * `CSS` Defines the behavior of nonbreaking spaces within text.
     */
    '-webkit-nbsp-mode'?: 'normal'|'space'
    /**
     * `CSS` Defines the behavior of nonbreaking spaces within text.
     */
    webkitNbspMode?: 'normal'|'space'
    /**
     * `CSS` Specifies whether to use native-style scrolling in an overflow:scroll element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-overflow-scrolling)
     */
    '-webkit-overflow-scrolling'?: 'auto'|'touch'
    /**
     * `CSS` Specifies whether to use native-style scrolling in an overflow:scroll element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-overflow-scrolling)
     */
    webkitOverflowScrolling?: 'auto'|'touch'
    /**
     * `CSS` 
     */
    '-webkit-padding-start'?: string
    /**
     * `CSS` 
     */
    webkitPaddingStart?: string
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    '-webkit-perspective'?: 'none'
    /**
     * `CSS` Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
     */
    webkitPerspective?: 'none'
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    '-webkit-perspective-origin'?: string
    /**
     * `CSS` Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
     */
    webkitPerspectiveOrigin?: string
    /**
     * `CSS` The 'region-fragment' property controls the behavior of the last region associated with a named flow.
     */
    '-webkit-region-fragment'?: 'auto'|'break'
    /**
     * `CSS` The 'region-fragment' property controls the behavior of the last region associated with a named flow.
     */
    webkitRegionFragment?: 'auto'|'break'
    /**
     * `CSS` 
     */
    '-webkit-tap-highlight-color'?: string
    /**
     * `CSS` 
     */
    webkitTapHighlightColor?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color)
     */
    '-webkit-text-fill-color'?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color)
     */
    webkitTextFillColor?: string
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    '-webkit-text-size-adjust'?: 'auto'|'none'
    /**
     * `CSS` Specifies a size adjustment for displaying text content in mobile browsers.
     */
    webkitTextSizeAdjust?: 'auto'|'none'
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke)
     */
    '-webkit-text-stroke'?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke)
     */
    webkitTextStroke?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color)
     */
    '-webkit-text-stroke-color'?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color)
     */
    webkitTextStrokeColor?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width)
     */
    '-webkit-text-stroke-width'?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width)
     */
    webkitTextStrokeWidth?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-touch-callout)
     */
    '-webkit-touch-callout'?: 'none'
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-touch-callout)
     */
    webkitTouchCallout?: 'none'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    '-webkit-transform'?: 'matrix()'|'matrix3d()'|'none'|'perspective()'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
     */
    webkitTransform?: 'matrix()'|'matrix3d()'|'none'|'perspective()'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    '-webkit-transform-origin'?: string
    /**
     * `CSS` Establishes the origin of transformation for an element.
     */
    webkitTransformOrigin?: string
    /**
     * `CSS` The x coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-webkit-transform-origin-x'?: string
    /**
     * `CSS` The x coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    webkitTransformOriginX?: string
    /**
     * `CSS` The y coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-webkit-transform-origin-y'?: string
    /**
     * `CSS` The y coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    webkitTransformOriginY?: string
    /**
     * `CSS` The z coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    '-webkit-transform-origin-z'?: string
    /**
     * `CSS` The z coordinate of the origin for transforms applied to an element with respect to its border box.
     */
    webkitTransformOriginZ?: string
    /**
     * `CSS` Defines how nested elements are rendered in 3D space.
     */
    '-webkit-transform-style'?: 'flat'
    /**
     * `CSS` Defines how nested elements are rendered in 3D space.
     */
    webkitTransformStyle?: 'flat'
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    '-webkit-transition'?: 'all'|'none'
    /**
     * `CSS` Shorthand property combines four of the transition properties into a single property.
     */
    webkitTransition?: 'all'|'none'
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    '-webkit-transition-delay'?: string
    /**
     * `CSS` Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
     */
    webkitTransitionDelay?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    '-webkit-transition-duration'?: string
    /**
     * `CSS` Specifies how long the transition from the old value to the new value should take.
     */
    webkitTransitionDuration?: string
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    '-webkit-transition-property'?: 'all'|'none'
    /**
     * `CSS` Specifies the name of the CSS property to which the transition is applied.
     */
    webkitTransitionProperty?: 'all'|'none'
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    '-webkit-transition-timing-function'?: string
    /**
     * `CSS` Describes how the intermediate values used during a transition will be calculated.
     */
    webkitTransitionTimingFunction?: string
    /**
     * `CSS` 
     */
    '-webkit-user-drag'?: 'auto'|'element'|'none'
    /**
     * `CSS` 
     */
    webkitUserDrag?: 'auto'|'element'|'none'
    /**
     * `CSS` Determines whether a user can edit the content of an element.
     */
    '-webkit-user-modify'?: 'read-only'|'read-write'|'read-write-plaintext-only'
    /**
     * `CSS` Determines whether a user can edit the content of an element.
     */
    webkitUserModify?: 'read-only'|'read-write'|'read-write-plaintext-only'
    /**
     * `CSS` Controls the appearance of selection.
     */
    '-webkit-user-select'?: 'auto'|'none'|'text'
    /**
     * `CSS` Controls the appearance of selection.
     */
    webkitUserSelect?: 'auto'|'none'|'text'
    /**
     * `CSS` Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.
     */
    '-ms-ime-align'?: string
    /**
     * `CSS` Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.
     */
    msImeAlign?: string
    /**
     * `CSS` The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-binding)
     */
    '-moz-binding'?: string
    /**
     * `CSS` The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-binding)
     */
    mozBinding?: string
    /**
     * `CSS` If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.
     * 
     * This feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-context-properties)
     */
    '-moz-context-properties'?: string
    /**
     * `CSS` If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.
     * 
     * This feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-context-properties)
     */
    mozContextProperties?: string
    /**
     * `CSS` The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
     */
    '-moz-float-edge'?: string
    /**
     * `CSS` The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
     */
    mozFloatEdge?: string
    /**
     * `CSS` The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.
     */
    '-moz-force-broken-image-icon'?: string
    /**
     * `CSS` The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.
     */
    mozForceBrokenImageIcon?: string
    /**
     * `CSS` For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-image-region)
     */
    '-moz-image-region'?: string
    /**
     * `CSS` For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-image-region)
     */
    mozImageRegion?: string
    /**
     * `CSS` The -moz-orient CSS property specifies the orientation of the element to which it's applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-orient)
     */
    '-moz-orient'?: string
    /**
     * `CSS` The -moz-orient CSS property specifies the orientation of the element to which it's applied.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-orient)
     */
    mozOrient?: string
    /**
     * `CSS` In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius)
     */
    '-moz-outline-radius'?: string
    /**
     * `CSS` In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius)
     */
    mozOutlineRadius?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.
     */
    '-moz-outline-radius-bottomleft'?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.
     */
    mozOutlineRadiusBottomleft?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.
     */
    '-moz-outline-radius-bottomright'?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.
     */
    mozOutlineRadiusBottomright?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.
     */
    '-moz-outline-radius-topleft'?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.
     */
    mozOutlineRadiusTopleft?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.
     */
    '-moz-outline-radius-topright'?: string
    /**
     * `CSS` In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.
     */
    mozOutlineRadiusTopright?: string
    /**
     * `CSS` -moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
     */
    '-moz-stack-sizing'?: string
    /**
     * `CSS` -moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
     */
    mozStackSizing?: string
    /**
     * `CSS` The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-text-blink)
     */
    '-moz-text-blink'?: string
    /**
     * `CSS` The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-text-blink)
     */
    mozTextBlink?: string
    /**
     * `CSS` In Mozilla applications, -moz-user-input determines if an element will accept user input.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-input)
     */
    '-moz-user-input'?: string
    /**
     * `CSS` In Mozilla applications, -moz-user-input determines if an element will accept user input.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-input)
     */
    mozUserInput?: string
    /**
     * `CSS` The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.
     */
    '-moz-user-modify'?: string
    /**
     * `CSS` The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.
     */
    mozUserModify?: string
    /**
     * `CSS` The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
     */
    '-moz-window-dragging'?: string
    /**
     * `CSS` The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
     */
    mozWindowDragging?: string
    /**
     * `CSS` The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-window-shadow)
     */
    '-moz-window-shadow'?: string
    /**
     * `CSS` The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-window-shadow)
     */
    mozWindowShadow?: string
    /**
     * `CSS` The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-border-before)
     */
    '-webkit-border-before'?: string
    /**
     * `CSS` The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-border-before)
     */
    webkitBorderBefore?: string
    /**
     * `CSS` The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.
     */
    '-webkit-border-before-color'?: string
    /**
     * `CSS` The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.
     */
    webkitBorderBeforeColor?: string
    /**
     * `CSS` The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.
     */
    '-webkit-border-before-style'?: string
    /**
     * `CSS` The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.
     */
    webkitBorderBeforeStyle?: string
    /**
     * `CSS` The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.
     */
    '-webkit-border-before-width'?: string
    /**
     * `CSS` The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.
     */
    webkitBorderBeforeWidth?: string
    /**
     * `CSS` The -webkit-line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp)
     */
    '-webkit-line-clamp'?: string
    /**
     * `CSS` The -webkit-line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp)
     */
    webkitLineClamp?: string
    /**
     * `CSS` The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
     */
    '-webkit-mask'?: string
    /**
     * `CSS` The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
     */
    webkitMask?: string
    /**
     * `CSS` If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-attachment)
     */
    '-webkit-mask-attachment'?: string
    /**
     * `CSS` If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-attachment)
     */
    webkitMaskAttachment?: string
    /**
     * `CSS` The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite)
     */
    '-webkit-mask-composite'?: string
    /**
     * `CSS` The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite)
     */
    webkitMaskComposite?: string
    /**
     * `CSS` The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.
     */
    '-webkit-mask-position'?: string
    /**
     * `CSS` The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.
     */
    webkitMaskPosition?: string
    /**
     * `CSS` The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-x)
     */
    '-webkit-mask-position-x'?: string
    /**
     * `CSS` The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-x)
     */
    webkitMaskPositionX?: string
    /**
     * `CSS` The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-y)
     */
    '-webkit-mask-position-y'?: string
    /**
     * `CSS` The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-y)
     */
    webkitMaskPositionY?: string
    /**
     * `CSS` The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-x)
     */
    '-webkit-mask-repeat-x'?: string
    /**
     * `CSS` The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-x)
     */
    webkitMaskRepeatX?: string
    /**
     * `CSS` The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-y)
     */
    '-webkit-mask-repeat-y'?: string
    /**
     * `CSS` The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-y)
     */
    webkitMaskRepeatY?: string
    /**
     * `CSS` Changes the appearance of buttons and other controls to resemble native controls.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
     */
    appearance?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio)
     */
    'aspect-ratio'?: string
    /**
     * `CSS` 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio)
     */
    aspectRatio?: string
    /**
     * `CSS` In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/azimuth)
     */
    azimuth?: string
    /**
     * `CSS` The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius)
     */
    'border-end-end-radius'?: string
    /**
     * `CSS` The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius)
     */
    borderEndEndRadius?: string
    /**
     * `CSS` The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius)
     */
    'border-end-start-radius'?: string
    /**
     * `CSS` The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius)
     */
    borderEndStartRadius?: string
    /**
     * `CSS` The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius)
     */
    'border-start-end-radius'?: string
    /**
     * `CSS` The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius)
     */
    borderStartEndRadius?: string
    /**
     * `CSS` The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius)
     */
    'border-start-start-radius'?: string
    /**
     * `CSS` The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius)
     */
    borderStartStartRadius?: string
    /**
     * `CSS` The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
     */
    'box-align'?: string
    /**
     * `CSS` The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
     */
    boxAlign?: string
    /**
     * `CSS` The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-direction)
     */
    'box-direction'?: string
    /**
     * `CSS` The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-direction)
     */
    boxDirection?: string
    /**
     * `CSS` The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
     */
    'box-flex'?: string
    /**
     * `CSS` The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
     */
    boxFlex?: string
    /**
     * `CSS` The box-flex-group CSS property assigns the flexbox's child elements to a flex group.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex-group)
     */
    'box-flex-group'?: string
    /**
     * `CSS` The box-flex-group CSS property assigns the flexbox's child elements to a flex group.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex-group)
     */
    boxFlexGroup?: string
    /**
     * `CSS` The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-lines)
     */
    'box-lines'?: string
    /**
     * `CSS` The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-lines)
     */
    boxLines?: string
    /**
     * `CSS` The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
     */
    'box-ordinal-group'?: string
    /**
     * `CSS` The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
     */
    boxOrdinalGroup?: string
    /**
     * `CSS` The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
     */
    'box-orient'?: string
    /**
     * `CSS` The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
     */
    boxOrient?: string
    /**
     * `CSS` The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
     */
    'box-pack'?: string
    /**
     * `CSS` The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
     */
    boxPack?: string
    /**
     * `CSS` The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-adjust)
     */
    'color-adjust'?: string
    /**
     * `CSS` The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-adjust)
     */
    colorAdjust?: string
    /**
     * `CSS` The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set)
     */
    'counter-set'?: string
    /**
     * `CSS` The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set)
     */
    counterSet?: string
    /**
     * `CSS` The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation)
     */
    'hanging-punctuation'?: string
    /**
     * `CSS` The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation)
     */
    hangingPunctuation?: string
    /**
     * `CSS` The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter)
     */
    'initial-letter'?: string
    /**
     * `CSS` The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter)
     */
    initialLetter?: string
    /**
     * `CSS` The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter-align)
     */
    'initial-letter-align'?: string
    /**
     * `CSS` The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter-align)
     */
    initialLetterAlign?: string
    /**
     * `CSS` The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content.
     */
    'line-clamp'?: string
    /**
     * `CSS` The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content.
     */
    lineClamp?: string
    /**
     * `CSS` The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height-step)
     */
    'line-height-step'?: string
    /**
     * `CSS` The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height-step)
     */
    lineHeightStep?: string
    /**
     * `CSS` The mask-border CSS property lets you create a mask along the edge of an element's border.
     * 
     * This property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.
     */
    'mask-border'?: string
    /**
     * `CSS` The mask-border CSS property lets you create a mask along the edge of an element's border.
     * 
     * This property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.
     */
    maskBorder?: string
    /**
     * `CSS` The mask-border-mode CSS property specifies the blending mode used in a mask border.
     */
    'mask-border-mode'?: string
    /**
     * `CSS` The mask-border-mode CSS property specifies the blending mode used in a mask border.
     */
    maskBorderMode?: string
    /**
     * `CSS` The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.
     */
    'mask-border-outset'?: string
    /**
     * `CSS` The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.
     */
    maskBorderOutset?: string
    /**
     * `CSS` The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
     */
    'mask-border-repeat'?: string
    /**
     * `CSS` The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
     */
    maskBorderRepeat?: string
    /**
     * `CSS` The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.
     */
    'mask-border-slice'?: string
    /**
     * `CSS` The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.
     */
    maskBorderSlice?: string
    /**
     * `CSS` The mask-border-source CSS property specifies the source image used to create an element's mask border.
     * 
     * The mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.
     */
    'mask-border-source'?: string
    /**
     * `CSS` The mask-border-source CSS property specifies the source image used to create an element's mask border.
     * 
     * The mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.
     */
    maskBorderSource?: string
    /**
     * `CSS` The mask-border-width CSS property specifies the width of an element's mask border.
     */
    'mask-border-width'?: string
    /**
     * `CSS` The mask-border-width CSS property specifies the width of an element's mask border.
     */
    maskBorderWidth?: string
    /**
     * `CSS` The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
     */
    'mask-clip'?: string
    /**
     * `CSS` The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
     */
    maskClip?: string
    /**
     * `CSS` The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite)
     */
    'mask-composite'?: string
    /**
     * `CSS` The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite)
     */
    maskComposite?: string
    /**
     * `CSS` The max-liens property forces a break after a set number of lines
     */
    'max-lines'?: string
    /**
     * `CSS` The max-liens property forces a break after a set number of lines
     */
    maxLines?: string
    /**
     * `CSS` The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-block)
     */
    'overflow-block'?: string
    /**
     * `CSS` The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-block)
     */
    overflowBlock?: string
    /**
     * `CSS` The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box)
     */
    'overflow-clip-box'?: string
    /**
     * `CSS` The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.
     * [MDN Reference](https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box)
     */
    overflowClipBox?: string
    /**
     * `CSS` The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-inline)
     */
    'overflow-inline'?: string
    /**
     * `CSS` The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-inline)
     */
    overflowInline?: string
    /**
     * `CSS` The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior)
     */
    'overscroll-behavior'?: string
    /**
     * `CSS` The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior)
     */
    overscrollBehavior?: string
    /**
     * `CSS` The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x)
     */
    'overscroll-behavior-x'?: string
    /**
     * `CSS` The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x)
     */
    overscrollBehaviorX?: string
    /**
     * `CSS` The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)
     */
    'overscroll-behavior-y'?: string
    /**
     * `CSS` The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)
     */
    overscrollBehaviorY?: string
    /**
     * `CSS` This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.
     */
    'ruby-merge'?: string
    /**
     * `CSS` This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.
     */
    rubyMerge?: string
    /**
     * `CSS` The scrollbar-color CSS property sets the color of the scrollbar track and thumb.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-color)
     */
    'scrollbar-color'?: string
    /**
     * `CSS` The scrollbar-color CSS property sets the color of the scrollbar track and thumb.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-color)
     */
    scrollbarColor?: string
    /**
     * `CSS` The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown. 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width)
     */
    'scrollbar-width'?: string
    /**
     * `CSS` The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown. 
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width)
     */
    scrollbarWidth?: string
    /**
     * `CSS` The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin)
     */
    'scroll-margin'?: string
    /**
     * `CSS` The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin)
     */
    scrollMargin?: string
    /**
     * `CSS` The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block)
     */
    'scroll-margin-block'?: string
    /**
     * `CSS` The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block)
     */
    scrollMarginBlock?: string
    /**
     * `CSS` The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start)
     */
    'scroll-margin-block-start'?: string
    /**
     * `CSS` The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start)
     */
    scrollMarginBlockStart?: string
    /**
     * `CSS` The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end)
     */
    'scroll-margin-block-end'?: string
    /**
     * `CSS` The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end)
     */
    scrollMarginBlockEnd?: string
    /**
     * `CSS` The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom)
     */
    'scroll-margin-bottom'?: string
    /**
     * `CSS` The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom)
     */
    scrollMarginBottom?: string
    /**
     * `CSS` The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline)
     */
    'scroll-margin-inline'?: string
    /**
     * `CSS` The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline)
     */
    scrollMarginInline?: string
    /**
     * `CSS` The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start)
     */
    'scroll-margin-inline-start'?: string
    /**
     * `CSS` The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start)
     */
    scrollMarginInlineStart?: string
    /**
     * `CSS` The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end)
     */
    'scroll-margin-inline-end'?: string
    /**
     * `CSS` The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end)
     */
    scrollMarginInlineEnd?: string
    /**
     * `CSS` The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left)
     */
    'scroll-margin-left'?: string
    /**
     * `CSS` The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left)
     */
    scrollMarginLeft?: string
    /**
     * `CSS` The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right)
     */
    'scroll-margin-right'?: string
    /**
     * `CSS` The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right)
     */
    scrollMarginRight?: string
    /**
     * `CSS` The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top)
     */
    'scroll-margin-top'?: string
    /**
     * `CSS` The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top)
     */
    scrollMarginTop?: string
    /**
     * `CSS` The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
     * 
     * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-x)
     */
    'scroll-snap-type-x'?: string
    /**
     * `CSS` The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
     * 
     * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-x)
     */
    scrollSnapTypeX?: string
    /**
     * `CSS` The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
     * 
     * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-y)
     */
    'scroll-snap-type-y'?: string
    /**
     * `CSS` The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
     * 
     * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-y)
     */
    scrollSnapTypeY?: string
    /**
     * `CSS` The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness)
     */
    'text-decoration-thickness'?: string
    /**
     * `CSS` The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness)
     */
    textDecorationThickness?: string
    /**
     * `CSS` The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis)
     */
    'text-emphasis'?: string
    /**
     * `CSS` The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis)
     */
    textEmphasis?: string
    /**
     * `CSS` The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color)
     */
    'text-emphasis-color'?: string
    /**
     * `CSS` The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color)
     */
    textEmphasisColor?: string
    /**
     * `CSS` The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position)
     */
    'text-emphasis-position'?: string
    /**
     * `CSS` The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position)
     */
    textEmphasisPosition?: string
    /**
     * `CSS` The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style)
     */
    'text-emphasis-style'?: string
    /**
     * `CSS` The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style)
     */
    textEmphasisStyle?: string
    /**
     * `CSS` The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset)
     */
    'text-underline-offset'?: string
    /**
     * `CSS` The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset)
     */
    textUnderlineOffset?: string
  }
}