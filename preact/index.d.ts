import 'preact'
declare global {
  namespace JSX {
    interface HTMLAttributes {
      /**
       * Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width)
       */
      width?: 'auto'|'fit-content'|'max-content'|'min-content'
      /**
       * Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height)
       */
      height?: 'auto'|'fit-content'|'max-content'|'min-content'
      /**
       * In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display)
       */
      display?: 'block'|'contents'|'flex'|'flexbox'|'flow-root'|'grid'|'inline'|'inline-block'|'inline-flex'|'inline-flexbox'|'inline-table'|'list-item'|'-moz-box'|'-moz-deck'|'-moz-grid'|'-moz-grid-group'|'-moz-grid-line'|'-moz-groupbox'|'-moz-inline-box'|'-moz-inline-grid'|'-moz-inline-stack'|'-moz-marker'|'-moz-popup'|'-moz-stack'|'-ms-flexbox'|'-ms-grid'|'-ms-inline-flexbox'|'-ms-inline-grid'|'none'|'ruby'|'ruby-base'|'ruby-base-container'|'ruby-text'|'ruby-text-container'|'run-in'|'table'|'table-caption'|'table-cell'|'table-column'|'table-column-group'|'table-footer-group'|'table-header-group'|'table-row'|'table-row-group'|'-webkit-box'|'-webkit-flex'|'-webkit-inline-box'|'-webkit-inline-flex'
      /**
       * Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding)
       */
      padding?: string
      /**
       * The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position)
       */
      position?: 'absolute'|'fixed'|'-ms-page'|'relative'|'static'|'sticky'|'-webkit-sticky'
      /**
       * Shorthand property for setting border width, style, and color.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border)
       */
      border?: string
      /**
       * Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin)
       */
      margin?: 'auto'
      /**
       * Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top)
       */
      top?: 'auto'
      /**
       * Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left)
       */
      left?: 'auto'
      /**
       * Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top)
       */
      'margin-top'?: 'auto'
      /**
       * Color of an element's text
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color)
       */
      color?: string
      /**
       * Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size)
       */
      'font-size'?: 'large'|'larger'|'medium'|'small'|'smaller'|'x-large'|'x-small'|'xx-large'|'xx-small'
      /**
       * Sets the background color of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color)
       */
      'background-color'?: string
      /**
       * Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align)
       */
      'text-align'?: 'center'|'end'|'justify'|'left'|'right'|'start'
      /**
       * Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity)
       */
      opacity?: string
      /**
       * Shorthand property for setting most background properties at the same place in the style sheet.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background)
       */
      background?: 'fixed'|'local'|'none'|'scroll'
      /**
       * Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float)
       */
      float?: 'inline-end'|'inline-start'|'left'|'none'|'right'
      /**
       * Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight)
       */
      'font-weight'?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'bolder'|'lighter'|'normal'
      /**
       * Shorthand for setting 'overflow-x' and 'overflow-y'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow)
       */
      overflow?: 'auto'|'hidden'|'-moz-hidden-unscrollable'|'scroll'|'visible'
      /**
       * Determines the block-progression dimension of the text content area of an inline box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height)
       */
      'line-height'?: 'normal'
      /**
       * Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family)
       */
      'font-family'?: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'|'Arial, Helvetica, sans-serif'|'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif'|'\'Courier New\', Courier, monospace'|'cursive'|'fantasy'|'\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif'|'Georgia, \'Times New Roman\', Times, serif'|'\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'|'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif'|'\'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\', \'Lucida Sans Unicode\', Geneva, Verdana, sans-serif'|'monospace'|'sans-serif'|'\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'|'serif'|'\'Times New Roman\', Times, serif'|'\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif'|'Verdana, Geneva, Tahoma, sans-serif'
      /**
       * Decorations applied to font used for an element's text.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration)
       */
      'text-decoration'?: 'dashed'|'dotted'|'double'|'line-through'|'none'|'overline'|'solid'|'underline'|'wavy'
      /**
       * Specifies the behavior of the 'width' and 'height' properties.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
       */
      'box-sizing'?: 'border-box'|'content-box'
      /**
       * For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index)
       */
      'z-index'?: 'auto'
      /**
       * Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align)
       */
      'vertical-align'?: 'auto'|'baseline'|'bottom'|'middle'|'sub'|'super'|'text-bottom'|'text-top'|'top'|'-webkit-baseline-middle'
      /**
       * Defines the radii of the outer border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
       */
      'border-radius'?: string
      /**
       * Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left)
       */
      'margin-left'?: 'auto'
      /**
       * Allows control over cursor appearance in an element
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor)
       */
      cursor?: 'alias'|'all-scroll'|'auto'|'cell'|'col-resize'|'context-menu'|'copy'|'crosshair'|'default'|'e-resize'|'ew-resize'|'grab'|'grabbing'|'help'|'move'|'-moz-grab'|'-moz-grabbing'|'-moz-zoom-in'|'-moz-zoom-out'|'ne-resize'|'nesw-resize'|'no-drop'|'none'|'not-allowed'|'n-resize'|'ns-resize'|'nw-resize'|'nwse-resize'|'pointer'|'progress'|'row-resize'|'se-resize'|'s-resize'|'sw-resize'|'text'|'vertical-text'|'wait'|'-webkit-grab'|'-webkit-grabbing'|'-webkit-zoom-in'|'-webkit-zoom-out'|'w-resize'|'zoom-in'|'zoom-out'
      /**
       * Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom)
       */
      'margin-bottom'?: 'auto'
      /**
       * Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right)
       */
      right?: 'auto'
      /**
       * Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right)
       */
      'margin-right'?: 'auto'
      /**
       * Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left)
       */
      'padding-left'?: string
      /**
       * Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top)
       */
      'padding-top'?: string
      /**
       * Allows authors to constrain content width to a certain range.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width)
       */
      'max-width'?: 'none'|'fit-content'|'max-content'|'min-content'
      /**
       * Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom)
       */
      bottom?: 'auto'
      /**
       * Sets the background image(s) of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image)
       */
      'background-image'?: 'none'
      /**
       * Determines which page-based occurrence of a given element is applied to a counter or string value.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content)
       */
      content?: 'attr()'|'counter(name)'|'icon'|'none'|'normal'|'url()'
      /**
       * Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right)
       */
      'padding-right'?: string
      /**
       * Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space)
       */
      'white-space'?: 'normal'|'nowrap'|'pre'|'pre-line'|'pre-wrap'
      /**
       * Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom)
       */
      'padding-bottom'?: string
      /**
       * Shorthand property for setting border width, style and color.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom)
       */
      'border-bottom'?: string
      /**
       * Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
       */
      'box-shadow'?: 'inset'|'none'
      /**
       * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
       */
      transform?: 'matrix()'|'matrix3d()'|'none'|'perspective()'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
      /**
       * Allows authors to constrain content height to a certain range.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height)
       */
      'min-height'?: 'auto'|'fit-content'|'max-content'|'min-content'
      /**
       * Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility)
       */
      visibility?: 'collapse'|'hidden'|'visible'
      /**
       * Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position)
       */
      'background-position'?: string
      /**
       * Shorthand property for setting border width, style and color
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top)
       */
      'border-top'?: string
      /**
       * Allows authors to constrain content width to a certain range.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width)
       */
      'min-width'?: 'auto'|'fit-content'|'max-content'|'min-content'
      /**
       * Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline)
       */
      outline?: 'auto'|'invert'
      /**
       * Shorthand property combines four of the transition properties into a single property.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
       */
      transition?: 'all'|'none'
      /**
       * Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear)
       */
      clear?: 'both'|'left'|'none'|'right'
      /**
       * The color of the border around all four edges of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color)
       */
      'border-color'?: string
      /**
       * Specifies how background images are tiled after they have been sized and positioned.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat)
       */
      'background-repeat'?: string
      /**
       * Specifies the size of the background images.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
       */
      'background-size'?: 'auto'|'contain'|'cover'
      /**
       * Controls capitalization effects of an element’s text.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform)
       */
      'text-transform'?: 'capitalize'|'lowercase'|'none'|'uppercase'
      /**
       * Allows authors to constrain content height to a certain range.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height)
       */
      'max-height'?: 'none'|'fit-content'|'max-content'|'min-content'
      /**
       * Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style)
       */
      'list-style'?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'inside'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'outside'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'|'url()'
      /**
       * Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style)
       */
      'font-style'?: 'italic'|'normal'|'oblique'
      /**
       * Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font)
       */
      font?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'bolder'|'caption'|'icon'|'italic'|'large'|'larger'|'lighter'|'medium'|'menu'|'message-box'|'normal'|'oblique'|'small'|'small-caps'|'small-caption'|'smaller'|'status-bar'|'x-large'|'x-small'|'xx-large'|'xx-small'
      /**
       * Text can overflow for example when it is prevented from wrapping.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow)
       */
      'text-overflow'?: 'clip'|'ellipsis'
      /**
       * Shorthand property for setting border width, style and color
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left)
       */
      'border-left'?: string
      /**
       * Shorthand property for setting border width, style and color
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right)
       */
      'border-right'?: string
      /**
       * Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width)
       */
      'border-width'?: string
      /**
       * Aligns flex items along the main axis of the current line of the flex container.
       */
      'justify-content'?: 'center'|'start'|'end'|'left'|'right'|'safe'|'unsafe'|'stretch'|'space-evenly'|'flex-end'|'flex-start'|'space-around'|'space-between'|'baseline'|'first baseline'|'last baseline'
      /**
       * Aligns flex items along the cross axis of the current line of the flex container.
       */
      'align-items'?: 'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
      /**
       * Specifies the handling of overflow in the vertical direction.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y)
       */
      'overflow-y'?: 'auto'|'hidden'|'scroll'|'visible'
      /**
       * Specifies under what circumstances a given element can be the target element for a pointer event.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events)
       */
      'pointer-events'?: 'all'|'fill'|'none'|'painted'|'stroke'|'visible'|'visibleFill'|'visiblePainted'|'visibleStroke'
      /**
       * Specifies the minimum, maximum, and optimal spacing between grapheme clusters.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
       */
      'letter-spacing'?: 'normal'
      /**
       * The style of the border around edges of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style)
       */
      'border-style'?: string
      /**
       * Shorthand property combines six of the animation properties into a single property.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
       */
      animation?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
      /**
       * Specifies the handling of overflow in the horizontal direction.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x)
       */
      'overflow-x'?: 'auto'|'hidden'|'scroll'|'visible'
      /**
       * Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
       */
      'word-wrap'?: 'break-word'|'normal'
      /**
       * Selects a table's border model.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
       */
      'border-collapse'?: 'collapse'|'separate'
      /**
       * Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
       */
      'flex-direction'?: 'column'|'column-reverse'|'row'|'row-reverse'
      /**
       * Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/zoom)
       */
      zoom?: 'normal'
      /**
       * Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
       */
      flex?: 'auto'|'content'|'none'
      /**
       * Enables shadow effects to be applied to the text of the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow)
       */
      'text-shadow'?: 'none'
      /**
       * Used to construct the default contents of a list item’s marker
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
       */
      'list-style-type'?: 'armenian'|'circle'|'decimal'|'decimal-leading-zero'|'disc'|'georgian'|'lower-alpha'|'lower-greek'|'lower-latin'|'lower-roman'|'none'|'square'|'symbols()'|'upper-alpha'|'upper-latin'|'upper-roman'
      /**
       * Defines the radii of the bottom left outer border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
       */
      'border-bottom-left-radius'?: string
      /**
       * Controls the appearance of selection.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
       */
      'user-select'?: 'all'|'auto'|'contain'|'none'|'text'
      /**
       * Paints the interior of the given graphical element.
       */
      fill?: 'url()'|'none'
      /**
       * Establishes the origin of transformation for an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
       */
      'transform-origin'?: string
      /**
       * Defines the radii of the top left outer border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
       */
      'border-top-left-radius'?: string
      /**
       * Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent)
       */
      'text-indent'?: string
      /**
       * Defines the radii of the bottom right outer border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
       */
      'border-bottom-right-radius'?: string
      /**
       * Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
       */
      'flex-wrap'?: 'nowrap'|'wrap'|'wrap-reverse'
      /**
       * The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
       */
      'border-spacing'?: string
      /**
       * Defines the radii of the top right outer border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
       */
      'border-top-right-radius'?: string
      /**
       * Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
       */
      clip?: 'auto'|'rect()'
      /**
       * Sets the color of the top border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color)
       */
      'border-top-color'?: string
      /**
       * Specifies line break opportunities for non-CJK scripts.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break)
       */
      'word-break'?: 'break-all'|'keep-all'|'normal'
      /**
       * Sets the color of the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)
       */
      'border-bottom-color'?: string
      /**
       * Sets the flex grow factor. Negative numbers are invalid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
       */
      'flex-grow'?: string
      /**
       * Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction)
       */
      direction?: 'ltr'|'rtl'
      /**
       * Allows the default alignment along the cross axis to be overridden for individual flex items.
       */
      'align-self'?: 'auto'|'baseline'|'center'|'flex-end'|'flex-start'|'stretch'
      /**
       * Sets the flex shrink factor. Negative numbers are invalid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
       */
      'flex-shrink'?: string
      /**
       * The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering)
       */
      'text-rendering'?: 'auto'|'geometricPrecision'|'optimizeLegibility'|'optimizeSpeed'
      /**
       * Determines whether touch input may trigger default behavior supplied by user agent.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action)
       */
      'touch-action'?: 'auto'|'cross-slide-x'|'cross-slide-y'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
      /**
       * Determines the background painting area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
       */
      'background-clip'?: string
      /**
       * Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
       */
      filter?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
      /**
       * @font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.
       */
      src?: 'url()'|'format()'|'local()'
      /**
       * Describes how the animation will progress over one cycle of its duration.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
       */
      'animation-timing-function'?: string
      /**
       * Sets the color of the right border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color)
       */
      'border-right-color'?: string
      /**
       * Specifies variant representations of the font
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant)
       */
      'font-variant'?: 'normal'|'small-caps'
      /**
       * Sets the color of the left border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color)
       */
      'border-left-color'?: string
      /**
       * Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
       */
      'animation-name'?: 'none'
      /**
       * Defines the length of time that an animation takes to complete one cycle.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
       */
      'animation-duration'?: string
      /**
       * Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change)
       */
      'will-change'?: 'auto'|'contents'|'scroll-position'
      /**
       * Paints along the outline of the given graphical element.
       */
      stroke?: 'url()'|'none'
      /**
       * Specifies the name of the CSS property to which the transition is applied.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
       */
      'transition-property'?: 'all'|'none'
      /**
       * Controls the algorithm used to lay out the table cells, rows, and columns.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout)
       */
      'table-layout'?: 'auto'|'fixed'
      /**
       * Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
       */
      'transition-delay'?: string
      /**
       * Sets the flex basis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
       */
      'flex-basis'?: 'auto'|'content'
      /**
       * Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
       */
      'overflow-wrap'?: 'break-word'|'normal'
      /**
       * Sets the thickness of the top border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width)
       */
      'border-top-width'?: string
      /**
       * Width of the outline.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width)
       */
      'outline-width'?: string
      /**
       * Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
       */
      order?: string
      /**
       * Sets the thickness of the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)
       */
      'border-bottom-width'?: string
      /**
       * Defines what values are applied by the animation outside the time it is executing.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
       */
      'animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
      /**
       * Style of the outline.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style)
       */
      'outline-style'?: 'auto'
      /**
       * Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit)
       */
      'object-fit'?: 'contain'|'cover'|'fill'|'none'|'scale-down'
      /**
       * Specifies the width of the stroke on the current object.
       */
      'stroke-width'?: string
      /**
       * Specifies how long the transition from the old value to the new value should take.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
       */
      'transition-duration'?: string
      /**
       * Defines when the animation will start.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
       */
      'animation-delay'?: string
      /**
       * Offset the outline and draw it beyond the border edge.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset)
       */
      'outline-offset'?: string
      /**
       * Specifies the distance into the dash pattern to start the dash.
       */
      'stroke-dashoffset'?: string
      /**
       * Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
       */
      'backface-visibility'?: 'hidden'|'visible'
      /**
       * Sets the thickness of the right border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width)
       */
      'border-right-width'?: string
      /**
       * Specifies how flexbox items are placed in the flexbox.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
       */
      'flex-flow'?: 'column'|'column-reverse'|'nowrap'|'row'|'row-reverse'|'wrap'|'wrap-reverse'
      /**
       * Specifies additional spacing between “words”.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing)
       */
      'word-spacing'?: 'normal'
      /**
       * Describes how the intermediate values used during a transition will be calculated.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
       */
      'transition-timing-function'?: string
      /**
       * Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize)
       */
      resize?: 'both'|'horizontal'|'none'|'vertical'
      /**
       * The level of embedding with respect to the bidirectional algorithm.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)
       */
      'unicode-bidi'?: 'bidi-override'|'embed'|'isolate'|'isolate-override'|'normal'|'plaintext'
      /**
       * @font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.
       */
      'unicode-range'?: 'U+26'|'U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F'|'U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF'|'U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD'|'U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD'|'U+00-7F'|'U+80-FF'|'U+100-17F'|'U+180-24F'|'U+1E00-1EFF'|'U+250-2AF'|'U+370-3FF'|'U+1F00-1FFF'|'U+400-4FF'|'U+500-52F'|'U+00-52F, U+1E00-1FFF, U+2200–22FF'|'U+530–58F'|'U+590–5FF'|'U+600–6FF'|'U+750–77F'|'U+8A0–8FF'|'U+700–74F'|'U+900–97F'|'U+980–9FF'|'U+A00–A7F'|'U+A80–AFF'|'U+B00–B7F'|'U+B80–BFF'|'U+C00–C7F'|'U+C80–CFF'|'U+D00–D7F'|'U+D80–DFF'|'U+118A0–118FF'|'U+E00–E7F'|'U+1A20–1AAF'|'U+AA80–AADF'|'U+E80–EFF'|'U+F00–FFF'|'U+1000–109F'|'U+10A0–10FF'|'U+1200–137F'|'U+1380–139F'|'U+2D80–2DDF'|'U+AB00–AB2F'|'U+1780–17FF'|'U+1800–18AF'|'U+1B80–1BBF'|'U+1CC0–1CCF'|'U+4E00–9FD5'|'U+3400–4DB5'|'U+2F00–2FDF'|'U+2E80–2EFF'|'U+1100–11FF'|'U+AC00–D7AF'|'U+3040–309F'|'U+30A0–30FF'|'U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F'|'U+A4D0–A4FF'|'U+A000–A48F'|'U+A490–A4CF'|'U+2000-206F'|'U+3000–303F'|'U+2070–209F'|'U+20A0–20CF'|'U+2100–214F'|'U+2150–218F'|'U+2190–21FF'|'U+2200–22FF'|'U+2300–23FF'|'U+E000-F8FF'|'U+FB00–FB4F'|'U+FB50–FDFF'|'U+1F600–1F64F'|'U+2600–26FF'|'U+1F300–1F5FF'|'U+1F900–1F9FF'|'U+1F680–1F6FF'
      /**
       * Controls the pattern of dashes and gaps used to stroke paths.
       */
      'stroke-dasharray'?: 'none'
      /**
       * Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
       */
      'animation-iteration-count'?: 'infinite'
      /**
       * Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering)
       */
      'image-rendering'?: 'auto'|'crisp-edges'|'-moz-crisp-edges'|'optimizeQuality'|'optimizeSpeed'|'pixelated'
      /**
       * Sets the thickness of the left border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width)
       */
      'border-left-width'?: string
      /**
       * Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
       */
      'align-content'?: 'center'|'flex-end'|'flex-start'|'space-around'|'space-between'|'stretch'
      /**
       * Sets the style of the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)
       */
      'border-bottom-style'?: string
      /**
       * Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
       */
      perspective?: 'none'
      /**
       * Sets the style of the top border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style)
       */
      'border-top-style'?: string
      /**
       * The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
       */
      'text-size-adjust'?: string
      /**
       * Defines how nested elements are rendered in 3D space.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
       */
      'transform-style'?: 'flat'|'preserve-3d'
      /**
       * specifies, as a space-separated track list, the line names and track sizing functions of the grid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)
       */
      'grid-template-columns'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
      /**
       * Specifies the position of the '::marker' pseudo-element's box in the list item.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
       */
      'list-style-position'?: 'inside'|'outside'
      /**
       * Defines whether or not the animation should play in reverse on alternate cycles.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
       */
      'animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
      /**
       * Defines whether the animation is running or paused.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
       */
      'animation-play-state'?: 'paused'|'running'
      /**
       * Controls whether hyphenation is allowed to create more break opportunities within a line of text.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens)
       */
      hyphens?: 'auto'|'manual'|'none'
      /**
       * Specifies quotation marks for any number of embedded quotations.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes)
       */
      quotes?: 'none'
      /**
       * For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
       */
      'background-origin'?: string
      /**
       * Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment)
       */
      'background-attachment'?: 'fixed'|'local'|'scroll'
      /**
       * If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x)
       */
      'background-position-x'?: 'center'|'left'|'right'
      /**
       * If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y)
       */
      'background-position-y'?: 'bottom'|'center'|'top'
      /**
       * Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)
       */
      'font-feature-settings'?: 'aalt"'|'abvf"'|'abvm"'|'abvs"'|'afrc"'|'akhn"'|'blwf"'|'blwm"'|'blws"'|'calt"'|'case"'|'ccmp"'|'cfar"'|'cjct"'|'clig"'|'cpct"'|'cpsp"'|'cswh"'|'curs"'|'c2pc"'|'c2sc"'|'dist"'|'dlig"'|'dnom"'|'dtls"'|'expt"'|'falt"'|'fin2"'|'fin3"'|'fina"'|'flac"'|'frac"'|'fwid"'|'half"'|'haln"'|'halt"'|'hist"'|'hkna"'|'hlig"'|'hngl"'|'hojo"'|'hwid"'|'init"'|'isol"'|'ital"'|'jalt"'|'jp78"'|'jp83"'|'jp90"'|'jp04"'|'kern"'|'lfbd"'|'liga"'|'ljmo"'|'lnum"'|'locl"'|'ltra"'|'ltrm"'|'mark"'|'med2"'|'medi"'|'mgrk"'|'mkmk"'|'nalt"'|'nlck"'|'nukt"'|'numr"'|'onum"'|'opbd"'|'ordn"'|'ornm"'|'palt"'|'pcap"'|'pkna"'|'pnum"'|'pref"'|'pres"'|'pstf"'|'psts"'|'pwid"'|'qwid"'|'rand"'|'rclt"'|'rlig"'|'rkrf"'|'rphf"'|'rtbd"'|'rtla"'|'rtlm"'|'ruby"'|'salt"'|'sinf"'|'size"'|'smcp"'|'smpl"'|'ssty"'|'stch"'|'subs"'|'sups"'|'swsh"'|'titl"'|'tjmo"'|'tnam"'|'tnum"'|'trad"'|'twid"'|'unic"'|'valt"'|'vatu"'|'vert"'|'vhal"'|'vjmo"'|'vkna"'|'vkrn"'|'vpal"'|'vrt2"'|'zero"'|'normal'|'off'|'on'
      /**
       * Sets the style of the left border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style)
       */
      'border-left-style'?: string
      /**
       * Selects a normal, condensed, or expanded face from a font family.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch)
       */
      'font-stretch'?: 'condensed'|'expanded'|'extra-condensed'|'extra-expanded'|'narrower'|'normal'|'semi-condensed'|'semi-expanded'|'ultra-condensed'|'ultra-expanded'|'wider'
      /**
       * The color of the outline.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color)
       */
      'outline-color'?: 'invert'
      /**
       * Sets the style of the right border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style)
       */
      'border-right-style'?: string
      /**
       * Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path)
       */
      'clip-path'?: 'none'|'url()'
      /**
       * Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
       */
      'list-style-image'?: 'none'
      /**
       * Manipulate the value of existing counters.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment)
       */
      'counter-increment'?: 'none'
      /**
       * Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset)
       */
      'counter-reset'?: 'none'
      /**
       * The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.
       */
      'font-display'?: string
      /**
       * Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image)
       */
      'border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
      /**
       * Describes the optimal number of columns into which the content of the element will be flowed.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count)
       */
      'column-count'?: 'auto'
      /**
       * Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
       */
      'column-gap'?: 'normal'
      /**
       * Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)
       */
      'text-decoration-color'?: string
      /**
       * Shorthand that resets all properties except 'direction' and 'unicode-bidi'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all)
       */
      all?: string
      /**
       * Determines the alignment of the replaced element inside its box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position)
       */
      'object-position'?: string
      /**
       * Defines rules for page breaks inside an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside)
       */
      'page-break-inside'?: 'auto'|'avoid'
      /**
       * Specifies the shape to be used at the end of open subpaths when they are stroked.
       */
      'stroke-linecap'?: 'butt'|'round'|'square'
      /**
       * 
       */
      size?: string
      /**
       * In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
       */
      'empty-cells'?: 'hide'|'-moz-show-background'|'show'
      /**
       * Defines rules for page breaks after an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after)
       */
      'page-break-after'?: 'always'|'auto'|'avoid'|'left'|'right'
      /**
       * Specifies the opacity of the painting operation used to paint the interior the current object.
       */
      'fill-opacity'?: string
      /**
       * Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.
       */
      'grid-gap'?: string
      /**
       * Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end)
       */
      'margin-block-end'?: 'auto'
      /**
       * Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain)
       */
      contain?: 'none'|'strict'|'content'|'size'|'layout'|'style'|'paint'
      /**
       * Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)
       */
      'padding-inline-start'?: string
      /**
       * Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)
       */
      'margin-inline-start'?: 'auto'
      /**
       * Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)
       */
      'margin-inline-end'?: 'auto'
      /**
       * specifies, as a space-separated track list, the line names and track sizing functions of the grid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)
       */
      'grid-template-rows'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
      /**
       * Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)
       */
      'padding-inline-end'?: string
      /**
       * Specifies the opacity of the painting operation used to stroke the current object.
       */
      'stroke-opacity'?: string
      /**
       * Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans)
       */
      orphans?: string
      /**
       * Specifies an orthogonal rotation to be applied to an image before it is laid out.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside)
       */
      'shape-outside'?: 'margin-box'|'none'
      /**
       * Specifies the position of the caption box with respect to the table box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side)
       */
      'caption-side'?: 'bottom'|'top'
      /**
       * Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows)
       */
      widows?: string
      /**
       * Shorthand for 'grid-column-start' and 'grid-column-end'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column)
       */
      'grid-column'?: 'auto'|'span'
      /**
       * Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
       */
      'perspective-origin'?: string
      /**
       * Describes the width of columns in multicol elements.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width)
       */
      'column-width'?: 'auto'
      /**
       * Defines the formula that must be used to mix the colors with the backdrop.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
       */
      'mix-blend-mode'?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
      /**
       * Specifies the size of implicitly created rows.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)
       */
      'grid-auto-rows'?: 'min-content'|'max-content'|'auto'|'minmax()'
      /**
       * Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)
       */
      'font-variant-ligatures'?: 'additional-ligatures'|'common-ligatures'|'contextual'|'discretionary-ligatures'|'historical-ligatures'|'no-additional-ligatures'|'no-common-ligatures'|'no-contextual'|'no-discretionary-ligatures'|'no-historical-ligatures'|'none'|'normal'
      /**
       * Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)
       */
      'scroll-behavior'?: 'auto'|'smooth'
      /**
       * The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip)
       */
      'text-decoration-skip'?: string
      /**
       * A shorthand property which sets both 'column-width' and 'column-count'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns)
       */
      columns?: 'auto'
      /**
       * Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule)
       */
      'column-rule'?: string
      /**
       * Specifies what set of line breaking restrictions are in effect within the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break)
       */
      'line-break'?: 'auto'|'loose'|'normal'|'strict'
      /**
       * Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last)
       */
      'text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
      /**
       * The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width)
       */
      'border-image-width'?: 'auto'
      /**
       * When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.
       */
      'stroke-miterlimit'?: string
      /**
       * Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)
       */
      'border-image-repeat'?: 'repeat'|'round'|'space'|'stretch'
      /**
       * Specifies the gutters between grid columns. Replaced by 'column-gap' property.
       */
      'grid-column-gap'?: string
      /**
       * Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
       */
      'border-image-slice'?: 'fill'
      /**
       * Defines the way of justifying a box inside its container along the appropriate axis.
       */
      'justify-self'?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'
      /**
       * Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.
       */
      'fill-rule'?: 'evenodd'|'nonzero'
      /**
       * The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset)
       */
      'border-image-outset'?: string
      /**
       * Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis
       */
      'justify-items'?: 'auto'|'normal'|'end'|'start'|'flex-end'|'flex-start'|'self-end'|'self-start'|'center'|'left'|'right'|'baseline'|'first baseline'|'last baseline'|'stretch'|'save'|'unsave'|'legacy'
      /**
       * Describes the page/column/region break behavior inside the principal box.
       */
      'break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'
      /**
       * Defines how strictly snap points are enforced on the scroll container.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)
       */
      'scroll-snap-type'?: 'none'|'mandatory'|'proximity'
      /**
       * Specifies what line decorations, if any, are added to the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)
       */
      'text-decoration-line'?: 'line-through'|'none'|'overline'|'underline'
      /**
       * The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)
       */
      'scroll-snap-align'?: string
      /**
       * Shorthand for 'grid-row-start' and 'grid-row-end'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row)
       */
      'grid-row'?: 'auto'|'span'
      /**
       * Controls the color of the text insertion indicator.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color)
       */
      'caret-color'?: 'auto'
      /**
       * Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
       */
      'stroke-linejoin'?: 'bevel'|'miter'|'round'
      /**
       * Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area)
       */
      'grid-area'?: 'auto'|'span'
      /**
       * In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill)
       */
      'column-fill'?: 'auto'|'balance'
      /**
       * Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size)
       */
      'tab-size'?: string
      /**
       * The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor)
       */
      'overflow-anchor'?: string
      /**
       * Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source)
       */
      'border-image-source'?: 'none'
      /**
       * Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)
       */
      'grid-template-areas'?: 'none'
      /**
       * Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning)
       */
      'font-kerning'?: 'auto'|'none'|'normal'
      /**
       * Defines rules for page breaks before an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before)
       */
      'page-break-before'?: 'always'|'auto'|'avoid'|'left'|'right'
      /**
       * Specifies the line style for underline, line-through and overline text decoration.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)
       */
      'text-decoration-style'?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
      /**
       * Specifies the gutters between grid rows. Replaced by 'row-gap' property.
       */
      'grid-row-gap'?: string
      /**
       * The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter)
       */
      'backdrop-filter'?: string
      /**
       * Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)
       */
      'grid-auto-flow'?: 'row'|'column'|'dense'
      /**
       * Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start)
       */
      'grid-column-start'?: 'auto'|'span'
      /**
       * Sets the color of the column rule
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color)
       */
      'column-rule-color'?: string
      /**
       * In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation)
       */
      isolation?: 'auto'|'isolate'
      /**
       * Sets the style of the rule between columns of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style)
       */
      'column-rule-style'?: string
      /**
       * Indicates what color to use at that gradient stop.
       */
      'stop-color'?: string
      /**
       * Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.
       */
      'clip-rule'?: 'evenodd'|'nonzero'
      /**
       * Defines the blending mode of each background layer.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)
       */
      'background-blend-mode'?: 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'color-burn'|'hard-light'|'soft-light'|'difference'|'exclusion'|'hue'|'saturation'|'color'|'luminosity'
      /**
       * Specifies control over numerical forms.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)
       */
      'font-variant-numeric'?: 'diagonal-fractions'|'lining-nums'|'normal'|'oldstyle-nums'|'ordinal'|'proportional-nums'|'slashed-zero'|'stacked-fractions'|'tabular-nums'
      /**
       * Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end)
       */
      'grid-column-end'?: 'auto'|'span'
      /**
       * Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start)
       */
      'margin-block-start'?: 'auto'
      /**
       * This is a shorthand property for both 'direction' and 'block-progression'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode)
       */
      'writing-mode'?: 'horizontal-tb'|'sideways-lr'|'sideways-rl'|'vertical-lr'|'vertical-rl'
      /**
       * Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.
       */
      'shape-rendering'?: 'auto'|'crispEdges'|'geometricPrecision'|'optimizeSpeed'
      /**
       * Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start)
       */
      'grid-row-start'?: 'auto'|'span'
      /**
       * Specifies the size of implicitly created columns.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)
       */
      'grid-auto-columns'?: 'min-content'|'max-content'|'auto'|'minmax()'
      /**
       * Describes the page/column/region break behavior after the generated box.
       */
      'break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
      /**
       * The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink)
       */
      'text-decoration-skip-ink'?: string
      /**
       * Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end)
       */
      'grid-row-end'?: 'auto'|'span'
      /**
       * Describes the page/column/region break behavior before the generated box.
       */
      'break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'column'|'left'|'page'|'right'
      /**
       * Specifies control over capitalized forms.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)
       */
      'font-variant-caps'?: 'all-petite-caps'|'all-small-caps'|'normal'|'petite-caps'|'small-caps'|'titling-caps'|'unicase'
      /**
       * Defines the opacity of a given gradient stop.
       */
      'stop-opacity'?: string
      /**
       * Describes the page/column break behavior after the generated box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span)
       */
      'column-span'?: 'all'|'none'
      /**
       * Used to align (start-, middle- or end-alignment) a string of text relative to a given point.
       */
      'text-anchor'?: 'end'|'middle'|'start'
      /**
       * Sets the width of the rule between columns. Negative values are not allowed.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width)
       */
      'column-rule-width'?: string
      /**
       * The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
       */
      mask?: string
      /**
       * Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position)
       */
      'text-underline-position'?: 'above'|'auto'|'below'
      /**
       * Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type)
       */
      'mask-type'?: 'alpha'|'luminance'
      /**
       * Allows control of glyph substitute and positioning in East Asian text.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)
       */
      'font-variant-east-asian'?: 'full-width'|'jis04'|'jis78'|'jis83'|'jis90'|'normal'|'proportional-width'|'ruby'|'simplified'|'traditional'
      /**
       * Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)
       */
      'border-inline-end-width'?: string
      /**
       * Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)
       */
      'border-inline-start-width'?: string
      /**
       * Specifies the orientation of text within a line.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation)
       */
      'text-orientation'?: 'sideways'|'sideways-right'|'upright'
      /**
       * Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin)
       */
      'shape-margin'?: string
      /**
       * Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)
       */
      'shape-image-threshold'?: string
      /**
       * Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size)
       */
      'min-inline-size'?: string
      /**
       * Logical 'height'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size)
       */
      'inline-size'?: 'auto'
      /**
       * The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
       * 
       * This is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright)
       */
      'text-combine-upright'?: string
      /**
       * Logical 'width'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size)
       */
      'block-size'?: 'auto'
      /**
       * Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size)
       */
      'min-block-size'?: string
      /**
       * Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start)
       */
      'padding-block-start'?: string
      /**
       * Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end)
       */
      'padding-block-end'?: string
      /**
       * Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)
       */
      'border-inline-start-color'?: string
      /**
       * Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)
       */
      'border-inline-end-color'?: string
      /**
       * Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)
       */
      'border-inline-end-style'?: string
      /**
       * Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)
       */
      'border-inline-start-style'?: string
      /**
       * Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)
       */
      'border-block-end-style'?: string
      /**
       * Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)
       */
      'border-block-end-color'?: string
      /**
       * Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)
       */
      'border-block-start-style'?: string
      /**
       * Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)
       */
      'border-block-start-color'?: string
      /**
       * Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)
       */
      'border-block-start-width'?: string
      /**
       * Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)
       */
      'border-block-end-width'?: string
      /**
       * The row-gap CSS property specifies the gutter between grid rows.
       */
      'row-gap'?: string
      /**
       * Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template)
       */
      'grid-template'?: 'none'|'min-content'|'max-content'|'auto'|'subgrid'|'minmax()'|'repeat()'
      /**
       * Specifies the color space for imaging operations performed via filter effects.
       */
      'color-interpolation-filters'?: 'auto'|'linearRGB'|'sRGB'
      /**
       * Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order)
       */
      'paint-order'?: 'fill'|'markers'|'normal'|'stroke'
      /**
       * Indicates what color to use to flood the current filter primitive subregion.
       */
      'flood-color'?: string
      /**
       * Indicates what opacity to use to flood the current filter primitive subregion.
       */
      'flood-opacity'?: string
      /**
       * The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)
       */
      'scroll-snap-stop'?: string
      /**
       * Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.
       */
      'lighting-color'?: string
      /**
       * The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left)
       */
      'scroll-padding-left'?: string
      /**
       * Specifies the marker that will be drawn at the last vertices of the given markable element.
       */
      'marker-end'?: 'none'|'url()'
      /**
       * Specifies the marker that will be drawn at the first vertices of the given markable element.
       */
      'marker-start'?: 'none'|'url()'
      /**
       * Specifies the marker that will be drawn at all vertices except the first and last.
       */
      'marker-mid'?: 'none'|'url()'
      /**
       * The offset-distance CSS property specifies a position along an offset-path.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance)
       */
      'offset-distance'?: string
      /**
       * The place-content CSS shorthand property sets both the align-content and justify-content properties.
       */
      'place-content'?: string
      /**
       * The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)
       */
      'font-variation-settings'?: string
      /**
       * The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.
       * 
       * In this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path)
       */
      'offset-path'?: string
      /**
       * The offset-rotate CSS property defines the direction of the element while positioning along the offset path.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate)
       */
      'offset-rotate'?: string
      /**
       * Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size)
       */
      'max-inline-size'?: 'none'
      /**
       * Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size)
       */
      'max-block-size'?: 'none'
      /**
       * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding)
       */
      'scroll-padding'?: string
      /**
       * The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box)
       */
      'transform-box'?: string
      /**
       * The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top)
       */
      'scroll-padding-top'?: string
      /**
       * The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.
       */
      gap?: string
      /**
       * The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right)
       */
      'scroll-padding-right'?: string
      /**
       * Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.
       */
      marker?: 'none'|'url()'
      /**
       * The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom)
       */
      'scroll-padding-bottom'?: string
      /**
       * The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start)
       */
      'scroll-padding-inline-start'?: string
      /**
       * The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start)
       */
      'scroll-padding-block-start'?: string
      /**
       * The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end)
       */
      'scroll-padding-inline-end'?: string
      /**
       * The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end)
       */
      'scroll-padding-block-end'?: string
      /**
       * The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
       */
      'place-self'?: string
      /**
       * The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid)
       */
      grid?: string
      /**
       * The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it.
       */
      'place-items'?: string
      /**
       * The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)
       */
      'font-optical-sizing'?: string
      /**
       * Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start)
       */
      'border-block-start'?: string
      /**
       * Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end)
       */
      'border-block-end'?: string
      /**
       * Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start)
       */
      'border-inline-start'?: string
      /**
       * The offset CSS property is a shorthand property for animating an element along a defined path.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset)
       */
      offset?: string
      /**
       * Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end)
       */
      'border-inline-end'?: string
      /**
       * The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block)
       */
      'scroll-padding-block'?: string
      /**
       * The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline)
       */
      'scroll-padding-inline'?: string
      /**
       * Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.
       */
      motion?: 'none'|'path()'|'auto'|'reverse'
      /**
       * The margin-inline CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline)
       */
      'margin-inline'?: string
      /**
       * The padding-block CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block)
       */
      'padding-block'?: string
      /**
       * The padding-inline CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline)
       */
      'padding-inline'?: string
      /**
       * Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same regardless of the font used.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust)
       */
      'font-size-adjust'?: 'none'
      /**
       * Specifies the motion path the element gets positioned at.
       */
      'motion-path'?: 'none'|'path()'
      /**
       * Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-justify)
       */
      'text-justify'?: 'auto'|'distribute'|'distribute-all-lines'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'|'newspaper'
      /**
       * A distance that describes the position along the specified motion path.
       */
      'motion-offset'?: string
      /**
       * The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start)
       */
      'inset-block-start'?: string
      /**
       * The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset)
       */
      inset?: string
      /**
       * The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start)
       */
      'inset-inline-start'?: string
      /**
       * The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end)
       */
      'inset-inline-end'?: string
      /**
       * The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale)
       */
      scale?: string
      /**
       * The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate)
       */
      translate?: string
      /**
       * The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate)
       */
      rotate?: string
      /**
       * Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-anchor)
       */
      'offset-anchor'?: string
      /**
       * Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-position)
       */
      'offset-position'?: string
      /**
       * The margin-block CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block)
       */
      'margin-block'?: string
      /**
       * The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.
       */
      'user-zoom'?: string
      /**
       * The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.
       * 
       * A zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.
       */
      'min-zoom'?: string
      /**
       * The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end)
       */
      'inset-block-end'?: string
      /**
       * Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.
       */
      'enable-background'?: 'accumulate'|'new'
      /**
       * Controls glyph orientation when the inline-progression-direction is horizontal.
       */
      'glyph-orientation-horizontal'?: string
      /**
       * Controls glyph orientation when the inline-progression-direction is vertical.
       */
      'glyph-orientation-vertical'?: 'auto'
      /**
       * Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.
       */
      kerning?: 'auto'
      /**
       * Specifies an orthogonal rotation to be applied to an image before it is laid out.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
       */
      'image-orientation'?: 'flip'|'from-image'
      /**
       * The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.
       */
      'image-resolution'?: string
      /**
       * The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.
       * 
       * A zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.
       */
      'max-zoom'?: string
      /**
       * The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media).
       */
      orientation?: string
      /**
       * Defines the direction of the element while positioning along the motion path.
       */
      'motion-rotation'?: 'auto'|'reverse'
      /**
       * Defines the positioning of snap points along the x axis of the scroll container it is applied to.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-x)
       */
      'scroll-snap-points-x'?: 'none'|'repeat()'
      /**
       * Defines the positioning of snap points along the y axis of the scroll container it is applied to.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-points-y)
       */
      'scroll-snap-points-y'?: 'none'|'repeat()'
      /**
       * Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-coordinate)
       */
      'scroll-snap-coordinate'?: 'none'
      /**
       * Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-destination)
       */
      'scroll-snap-destination'?: string
      /**
       * The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color)
       */
      'border-block-color'?: string
      /**
       * The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style)
       */
      'border-block-style'?: string
      /**
       * The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width)
       */
      'border-block-width'?: string
      /**
       * The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color)
       */
      'border-inline-color'?: string
      /**
       * The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style)
       */
      'border-inline-style'?: string
      /**
       * The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width)
       */
      'border-inline-width'?: string
      /**
       * The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block)
       */
      'border-block'?: string
      /**
       * The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline)
       */
      'border-inline'?: string
      /**
       * The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block)
       */
      'inset-block'?: string
      /**
       * The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline)
       */
      'inset-inline'?: string
      /**
       * @counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.
       */
      'additive-symbols'?: string
      /**
       * Provides alternative text for assistive technology to replace the generated content of a ::before or ::after element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/alt)
       */
      alt?: string
      /**
       * IE only. Used to extend behaviors of the browser.
       */
      behavior?: string
      /**
       * Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-decoration-break)
       */
      'box-decoration-break'?: 'clone'|'slice'
      /**
       * @counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.
       */
      fallback?: string
      /**
       * The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-language-override)
       */
      'font-language-override'?: 'normal'
      /**
       * Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis)
       */
      'font-synthesis'?: 'none'|'style'|'weight'
      /**
       * For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)
       */
      'font-variant-alternates'?: 'annotation()'|'character-variant()'|'historical-forms'|'normal'|'ornaments()'|'styleset()'|'stylistic()'|'swash()'
      /**
       * Specifies the vertical position
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position)
       */
      'font-variant-position'?: 'normal'|'sub'|'super'
      /**
       * Controls the state of the input method editor for text fields.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ime-mode)
       */
      'ime-mode'?: 'active'|'auto'|'disabled'|'inactive'|'normal'
      /**
       * Sets the mask layer image of an element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
       */
      'mask-image'?: 'none'|'url()'
      /**
       * Indicates whether the mask layer image is treated as luminance mask or alpha mask.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode)
       */
      'mask-mode'?: 'alpha'|'auto'|'luminance'
      /**
       * Specifies the mask positioning area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
       */
      'mask-origin'?: string
      /**
       * Specifies how mask layer images are positioned.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
       */
      'mask-position'?: string
      /**
       * Specifies how mask layer images are tiled after they have been sized and positioned.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
       */
      'mask-repeat'?: string
      /**
       * Specifies the size of the mask layer images.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
       */
      'mask-size'?: 'auto'|'contain'|'cover'
      /**
       * Shorthand property combines six of the animation properties into a single property.
       */
      '-moz-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
      /**
       * Defines when the animation will start.
       */
      '-moz-animation-delay'?: string
      /**
       * Defines whether or not the animation should play in reverse on alternate cycles.
       */
      '-moz-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
      /**
       * Defines the length of time that an animation takes to complete one cycle.
       */
      '-moz-animation-duration'?: string
      /**
       * Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
       */
      '-moz-animation-iteration-count'?: 'infinite'
      /**
       * Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
       */
      '-moz-animation-name'?: 'none'
      /**
       * Defines whether the animation is running or paused.
       */
      '-moz-animation-play-state'?: 'paused'|'running'
      /**
       * Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
       */
      '-moz-animation-timing-function'?: string
      /**
       * Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.
       */
      '-moz-appearance'?: 'button'|'button-arrow-down'|'button-arrow-next'|'button-arrow-previous'|'button-arrow-up'|'button-bevel'|'checkbox'|'checkbox-container'|'checkbox-label'|'dialog'|'groupbox'|'listbox'|'menuarrow'|'menuimage'|'menuitem'|'menuitemtext'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'menupopup'|'menuradio'|'menuseparator'|'-moz-mac-unified-toolbar'|'-moz-win-borderless-glass'|'-moz-win-browsertabbar-toolbox'|'-moz-win-communications-toolbox'|'-moz-win-glass'|'-moz-win-media-toolbox'|'none'|'progressbar'|'progresschunk'|'radio'|'radio-container'|'radio-label'|'radiomenuitem'|'resizer'|'resizerpanel'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbar-small'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'separator'|'spinner'|'spinner-downbutton'|'spinner-textfield'|'spinner-upbutton'|'statusbar'|'statusbarpanel'|'tab'|'tabpanels'|'tab-scroll-arrow-back'|'tab-scroll-arrow-forward'|'textfield'|'textfield-multiline'|'toolbar'|'toolbox'|'tooltip'|'treeheadercell'|'treeheadersortarrow'|'treeitem'|'treetwistyopen'|'treeview'|'treewisty'|'window'
      /**
       * Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
       */
      '-moz-backface-visibility'?: 'hidden'|'visible'
      /**
       * Determines the background painting area.
       */
      '-moz-background-clip'?: 'padding'
      /**
       * In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.
       */
      '-moz-background-inline-policy'?: 'bounding-box'|'continuous'|'each-box'
      /**
       * For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
       */
      '-moz-background-origin'?: string
      /**
       * Sets a list of colors for the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-bottom-colors)
       */
      '-moz-border-bottom-colors'?: string
      /**
       * Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
       */
      '-moz-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
      /**
       * Sets a list of colors for the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-left-colors)
       */
      '-moz-border-left-colors'?: string
      /**
       * Sets a list of colors for the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-right-colors)
       */
      '-moz-border-right-colors'?: string
      /**
       * Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-border-top-colors)
       */
      '-moz-border-top-colors'?: string
      /**
       * Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.
       */
      '-moz-box-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
      /**
       * Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
       */
      '-moz-box-direction'?: 'normal'|'reverse'
      /**
       * Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.
       */
      '-moz-box-flex'?: string
      /**
       * Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
       */
      '-moz-box-flexgroup'?: string
      /**
       * Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
       */
      '-moz-box-ordinal-group'?: string
      /**
       * In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.
       */
      '-moz-box-orient'?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
      /**
       * Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
       */
      '-moz-box-pack'?: 'center'|'end'|'justify'|'start'
      /**
       * Box Model addition in CSS3.
       */
      '-moz-box-sizing'?: 'border-box'|'content-box'|'padding-box'
      /**
       * Describes the optimal number of columns into which the content of the element will be flowed.
       */
      '-moz-column-count'?: 'auto'
      /**
       * Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
       */
      '-moz-column-gap'?: 'normal'
      /**
       * Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
       */
      '-moz-column-rule'?: string
      /**
       * Sets the color of the column rule
       */
      '-moz-column-rule-color'?: string
      /**
       * Sets the style of the rule between columns of an element.
       */
      '-moz-column-rule-style'?: string
      /**
       * Sets the width of the rule between columns. Negative values are not allowed.
       */
      '-moz-column-rule-width'?: string
      /**
       * A shorthand property which sets both 'column-width' and 'column-count'.
       */
      '-moz-columns'?: 'auto'
      /**
       * This property describes the width of columns in multicol elements.
       */
      '-moz-column-width'?: 'auto'
      /**
       * Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
       */
      '-moz-font-feature-settings'?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
      /**
       * Controls whether hyphenation is allowed to create more break opportunities within a line of text.
       */
      '-moz-hyphens'?: 'auto'|'manual'|'none'
      /**
       * Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
       */
      '-moz-perspective'?: 'none'
      /**
       * Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
       */
      '-moz-perspective-origin'?: string
      /**
       * Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
       */
      '-moz-text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
      /**
       * Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.
       */
      '-moz-text-decoration-color'?: string
      /**
       * Specifies what line decorations, if any, are added to the element.
       */
      '-moz-text-decoration-line'?: 'line-through'|'none'|'overline'|'underline'
      /**
       * Specifies the line style for underline, line-through and overline text decoration.
       */
      '-moz-text-decoration-style'?: 'dashed'|'dotted'|'double'|'none'|'solid'|'wavy'
      /**
       * Specifies a size adjustment for displaying text content in mobile browsers.
       */
      '-moz-text-size-adjust'?: 'auto'|'none'
      /**
       * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
       */
      '-moz-transform'?: 'matrix()'|'matrix3d()'|'none'|'perspective'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
      /**
       * Establishes the origin of transformation for an element.
       */
      '-moz-transform-origin'?: string
      /**
       * Shorthand property combines four of the transition properties into a single property.
       */
      '-moz-transition'?: 'all'|'none'
      /**
       * Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
       */
      '-moz-transition-delay'?: string
      /**
       * Specifies how long the transition from the old value to the new value should take.
       */
      '-moz-transition-duration'?: string
      /**
       * Specifies the name of the CSS property to which the transition is applied.
       */
      '-moz-transition-property'?: 'all'|'none'
      /**
       * Describes how the intermediate values used during a transition will be calculated.
       */
      '-moz-transition-timing-function'?: string
      /**
       * Used to indicate whether the element can have focus.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-focus)
       */
      '-moz-user-focus'?: 'ignore'|'normal'
      /**
       * Controls the appearance of selection.
       */
      '-moz-user-select'?: 'all'|'element'|'elements'|'-moz-all'|'-moz-none'|'none'|'text'|'toggle'
      /**
       * IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed
       */
      '-ms-accelerator'?: 'false'|'true'
      /**
       * IE only. Used to extend behaviors of the browser
       */
      '-ms-behavior'?: string
      /**
       * Sets the block-progression value and the flow orientation
       */
      '-ms-block-progression'?: 'bt'|'lr'|'rl'|'tb'
      /**
       * Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.
       */
      '-ms-content-zoom-chaining'?: 'chained'|'none'
      /**
       * Specifies whether zooming is enabled.
       */
      '-ms-content-zooming'?: 'none'|'zoom'
      /**
       * Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.
       */
      '-ms-content-zoom-limit'?: string
      /**
       * Specifies the maximum zoom factor.
       */
      '-ms-content-zoom-limit-max'?: string
      /**
       * Specifies the minimum zoom factor.
       */
      '-ms-content-zoom-limit-min'?: string
      /**
       * Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.
       */
      '-ms-content-zoom-snap'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Defines where zoom snap-points are located.
       */
      '-ms-content-zoom-snap-points'?: 'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Specifies how zooming is affected by defined snap-points.
       */
      '-ms-content-zoom-snap-type'?: 'mandatory'|'none'|'proximity'
      /**
       * IE only. Used to produce visual effects.
       */
      '-ms-filter'?: string
      /**
       * specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.
       */
      '-ms-flex'?: 'auto'|'none'
      /**
       * Aligns flex items along the cross axis of the current line of the flex container.
       */
      '-ms-flex-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
      /**
       * Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.
       */
      '-ms-flex-direction'?: 'column'|'column-reverse'|'row'|'row-reverse'
      /**
       * Specifies how flexbox items are placed in the flexbox.
       */
      '-ms-flex-flow'?: 'column'|'column-reverse'|'nowrap'|'row'|'wrap'|'wrap-reverse'
      /**
       * Allows the default alignment along the cross axis to be overridden for individual flex items.
       */
      '-ms-flex-item-align'?: 'auto'|'baseline'|'center'|'end'|'start'|'stretch'
      /**
       * Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
       */
      '-ms-flex-line-pack'?: 'center'|'distribute'|'end'|'justify'|'start'|'stretch'
      /**
       * Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.
       */
      '-ms-flex-order'?: string
      /**
       * Aligns flex items along the main axis of the current line of the flex container.
       */
      '-ms-flex-pack'?: 'center'|'distribute'|'end'|'justify'|'start'
      /**
       * Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
       */
      '-ms-flex-wrap'?: 'nowrap'|'wrap'|'wrap-reverse'
      /**
       * Makes a block container a region and associates it with a named flow.
       */
      '-ms-flow-from'?: 'none'
      /**
       * Places an element or its contents into a named flow.
       */
      '-ms-flow-into'?: 'none'
      /**
       * Used to place grid items and explicitly defined grid cells in the Grid.
       */
      '-ms-grid-column'?: 'auto'|'end'|'start'
      /**
       * Aligns the columns in a grid.
       */
      '-ms-grid-column-align'?: 'center'|'end'|'start'|'stretch'
      /**
       * Lays out the columns of the grid.
       */
      '-ms-grid-columns'?: string
      /**
       * Specifies the number of columns to span.
       */
      '-ms-grid-column-span'?: string
      /**
       * Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.
       */
      '-ms-grid-layer'?: string
      /**
       * grid-row is used to place grid items and explicitly defined grid cells in the Grid.
       */
      '-ms-grid-row'?: 'auto'|'end'|'start'
      /**
       * Aligns the rows in a grid.
       */
      '-ms-grid-row-align'?: 'center'|'end'|'start'|'stretch'
      /**
       * Lays out the columns of the grid.
       */
      '-ms-grid-rows'?: string
      /**
       * Specifies the number of rows to span.
       */
      '-ms-grid-row-span'?: string
      /**
       * Specifies if properties should be adjusted in high contrast mode.
       */
      '-ms-high-contrast-adjust'?: 'auto'|'none'
      /**
       * Specifies the minimum number of characters in a hyphenated word.
       */
      '-ms-hyphenate-limit-chars'?: 'auto'
      /**
       * Indicates the maximum number of successive hyphenated lines in an element.
       */
      '-ms-hyphenate-limit-lines'?: 'no-limit'
      /**
       * Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.
       */
      '-ms-hyphenate-limit-zone'?: string
      /**
       * Controls whether hyphenation is allowed to create more break opportunities within a line of text.
       */
      '-ms-hyphens'?: 'auto'|'manual'|'none'
      /**
       * Controls the state of the input method editor for text fields.
       */
      '-ms-ime-mode'?: 'active'|'auto'|'disabled'|'inactive'|'normal'
      /**
       * Gets or sets the interpolation (resampling) method used to stretch images.
       */
      '-ms-interpolation-mode'?: 'bicubic'|'nearest-neighbor'
      /**
       * Sets or retrieves the composite document grid properties that specify the layout of text characters.
       */
      '-ms-layout-grid'?: 'char'|'line'|'mode'|'type'
      /**
       * Sets or retrieves the size of the character grid used for rendering the text content of an element.
       */
      '-ms-layout-grid-char'?: 'auto'|'none'
      /**
       * Sets or retrieves the gridline value used for rendering the text content of an element.
       */
      '-ms-layout-grid-line'?: 'auto'|'none'
      /**
       * Gets or sets whether the text layout grid uses two dimensions.
       */
      '-ms-layout-grid-mode'?: 'both'|'char'|'line'|'none'
      /**
       * Sets or retrieves the type of grid used for rendering the text content of an element.
       */
      '-ms-layout-grid-type'?: 'fixed'|'loose'|'strict'
      /**
       * Specifies what set of line breaking restrictions are in effect within the element.
       */
      '-ms-line-break'?: 'auto'|'keep-all'|'newspaper'|'normal'|'strict'
      /**
       * Specify whether content is clipped when it overflows the element's content area.
       */
      '-ms-overflow-style'?: 'auto'|'-ms-autohiding-scrollbar'|'none'|'scrollbar'
      /**
       * Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
       */
      '-ms-perspective'?: 'none'
      /**
       * Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
       */
      '-ms-perspective-origin'?: string
      /**
       * Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.
       */
      '-ms-perspective-origin-x'?: string
      /**
       * Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.
       */
      '-ms-perspective-origin-y'?: string
      /**
       * Gets or sets a value that specifies whether a progress control displays as a bar or a ring.
       */
      '-ms-progress-appearance'?: 'bar'|'ring'
      /**
       * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
       */
      '-ms-scrollbar-3dlight-color'?: string
      /**
       * Determines the color of the arrow elements of a scroll arrow.
       */
      '-ms-scrollbar-arrow-color'?: string
      /**
       * Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
       */
      '-ms-scrollbar-base-color'?: string
      /**
       * Determines the color of the gutter of a scroll bar.
       */
      '-ms-scrollbar-darkshadow-color'?: string
      /**
       * Determines the color of the scroll box and scroll arrows of a scroll bar.
       */
      '-ms-scrollbar-face-color'?: string
      /**
       * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
       */
      '-ms-scrollbar-highlight-color'?: string
      /**
       * Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
       */
      '-ms-scrollbar-shadow-color'?: string
      /**
       * Determines the color of the track element of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-ms-scrollbar-track-color)
       */
      '-ms-scrollbar-track-color'?: string
      /**
       * Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.
       */
      '-ms-scroll-chaining'?: 'chained'|'none'
      /**
       * Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.
       */
      '-ms-scroll-limit'?: 'auto'
      /**
       * Gets or sets a value that specifies the maximum value for the scrollLeft property.
       */
      '-ms-scroll-limit-x-max'?: 'auto'
      /**
       * Gets or sets a value that specifies the minimum value for the scrollLeft property.
       */
      '-ms-scroll-limit-x-min'?: string
      /**
       * Gets or sets a value that specifies the maximum value for the scrollTop property.
       */
      '-ms-scroll-limit-y-max'?: 'auto'
      /**
       * Gets or sets a value that specifies the minimum value for the scrollTop property.
       */
      '-ms-scroll-limit-y-min'?: string
      /**
       * Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).
       */
      '-ms-scroll-rails'?: 'none'|'railed'
      /**
       * Gets or sets a value that defines where snap-points will be located along the x-axis.
       */
      '-ms-scroll-snap-points-x'?: 'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Gets or sets a value that defines where snap-points will be located along the y-axis.
       */
      '-ms-scroll-snap-points-y'?: 'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.
       */
      '-ms-scroll-snap-type'?: 'none'|'mandatory'|'proximity'
      /**
       * Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.
       */
      '-ms-scroll-snap-x'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.
       */
      '-ms-scroll-snap-y'?: 'mandatory'|'none'|'proximity'|'snapInterval(100%, 100%)'|'snapList()'
      /**
       * Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
       */
      '-ms-scroll-translation'?: 'none'|'vertical-to-horizontal'
      /**
       * Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.
       */
      '-ms-text-align-last'?: 'auto'|'center'|'justify'|'left'|'right'
      /**
       * Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.
       */
      '-ms-text-autospace'?: 'ideograph-alpha'|'ideograph-numeric'|'ideograph-parenthesis'|'ideograph-space'|'none'|'punctuation'
      /**
       * This property specifies the combination of multiple characters into the space of a single character.
       */
      '-ms-text-combine-horizontal'?: 'all'|'digits'|'none'
      /**
       * Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.
       */
      '-ms-text-justify'?: 'auto'|'distribute'|'inter-cluster'|'inter-ideograph'|'inter-word'|'kashida'
      /**
       * Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.
       */
      '-ms-text-kashida-space'?: string
      /**
       * Text can overflow for example when it is prevented from wrapping
       */
      '-ms-text-overflow'?: 'clip'|'ellipsis'
      /**
       * Specifies a size adjustment for displaying text content in mobile browsers.
       */
      '-ms-text-size-adjust'?: 'auto'|'none'
      /**
       * Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text
       */
      '-ms-text-underline-position'?: 'alphabetic'|'auto'|'over'|'under'
      /**
       * Gets or sets a value that indicates whether and how a given region can be manipulated by the user.
       */
      '-ms-touch-action'?: 'auto'|'double-tap-zoom'|'manipulation'|'none'|'pan-x'|'pan-y'|'pinch-zoom'
      /**
       * Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.
       */
      '-ms-touch-select'?: 'grippers'|'none'
      /**
       * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
       */
      '-ms-transform'?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
      /**
       * Establishes the origin of transformation for an element.
       */
      '-ms-transform-origin'?: string
      /**
       * The x coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-ms-transform-origin-x'?: string
      /**
       * The y coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-ms-transform-origin-y'?: string
      /**
       * The z coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-ms-transform-origin-z'?: string
      /**
       * Controls the appearance of selection.
       */
      '-ms-user-select'?: 'element'|'none'|'text'
      /**
       * Specifies line break opportunities for non-CJK scripts.
       */
      '-ms-word-break'?: 'break-all'|'keep-all'|'normal'
      /**
       * Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.
       */
      '-ms-word-wrap'?: 'break-word'|'normal'
      /**
       * An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.
       */
      '-ms-wrap-flow'?: 'auto'|'both'|'clear'|'end'|'maximum'|'minimum'|'start'
      /**
       * Gets or sets a value that is used to offset the inner wrap shape from other shapes.
       */
      '-ms-wrap-margin'?: string
      /**
       * Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.
       */
      '-ms-wrap-through'?: 'none'|'wrap'
      /**
       * Shorthand property for both 'direction' and 'block-progression'.
       */
      '-ms-writing-mode'?: 'bt-lr'|'bt-rl'|'lr-bt'|'lr-tb'|'rl-bt'|'rl-tb'|'tb-lr'|'tb-rl'
      /**
       * Sets or retrieves the magnification scale of the object.
       */
      '-ms-zoom'?: 'normal'
      /**
       * Gets or sets a value that indicates whether an animation is used when zooming.
       */
      '-ms-zoom-animation'?: 'default'|'none'
      /**
       * Provides an way to control directional focus navigation.
       */
      'nav-down'?: 'auto'|'current'|'root'
      /**
       * Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').
       */
      'nav-index'?: 'auto'
      /**
       * Provides an way to control directional focus navigation.
       */
      'nav-left'?: 'auto'|'current'|'root'
      /**
       * Provides an way to control directional focus navigation.
       */
      'nav-right'?: 'auto'|'current'|'root'
      /**
       * Provides an way to control directional focus navigation.
       */
      'nav-up'?: 'auto'|'current'|'root'
      /**
       * @counter-style descriptor. Defines how to alter the representation when the counter value is negative.
       */
      negative?: string
      /**
       * Shorthand property combines six of the animation properties into a single property.
       */
      '-o-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
      /**
       * Defines when the animation will start.
       */
      '-o-animation-delay'?: string
      /**
       * Defines whether or not the animation should play in reverse on alternate cycles.
       */
      '-o-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
      /**
       * Defines the length of time that an animation takes to complete one cycle.
       */
      '-o-animation-duration'?: string
      /**
       * Defines what values are applied by the animation outside the time it is executing.
       */
      '-o-animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
      /**
       * Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
       */
      '-o-animation-iteration-count'?: 'infinite'
      /**
       * Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
       */
      '-o-animation-name'?: 'none'
      /**
       * Defines whether the animation is running or paused.
       */
      '-o-animation-play-state'?: 'paused'|'running'
      /**
       * Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
       */
      '-o-animation-timing-function'?: string
      /**
       * Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
       */
      '-o-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'
      /**
       * Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.
       */
      '-o-object-fit'?: 'contain'|'cover'|'fill'|'none'|'scale-down'
      /**
       * Determines the alignment of the replaced element inside its box.
       */
      '-o-object-position'?: string
      /**
       * Determines which row of a inline-table should be used as baseline of inline-table.
       */
      '-o-table-baseline'?: string
      /**
       * This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.
       */
      '-o-tab-size'?: string
      /**
       * Text can overflow for example when it is prevented from wrapping
       */
      '-o-text-overflow'?: 'clip'|'ellipsis'
      /**
       * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
       */
      '-o-transform'?: 'matrix()'|'matrix3d()'|'none'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
      /**
       * Establishes the origin of transformation for an element.
       */
      '-o-transform-origin'?: string
      /**
       * Shorthand property combines four of the transition properties into a single property.
       */
      '-o-transition'?: 'all'|'none'
      /**
       * Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
       */
      '-o-transition-delay'?: string
      /**
       * Specifies how long the transition from the old value to the new value should take.
       */
      '-o-transition-duration'?: string
      /**
       * Specifies the name of the CSS property to which the transition is applied.
       */
      '-o-transition-property'?: 'all'|'none'
      /**
       * Describes how the intermediate values used during a transition will be calculated.
       */
      '-o-transition-timing-function'?: string
      /**
       * Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       */
      'offset-block-end'?: 'auto'
      /**
       * Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       */
      'offset-block-start'?: 'auto'
      /**
       * Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       */
      'offset-inline-end'?: 'auto'
      /**
       * Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.
       */
      'offset-inline-start'?: 'auto'
      /**
       * @counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>
       */
      pad?: string
      /**
       * @counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.
       */
      prefix?: string
      /**
       * @counter-style descriptor. Defines the ranges over which the counter style is defined.
       */
      range?: 'auto'|'infinite'
      /**
       * Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-align)
       */
      'ruby-align'?: 'auto'|'center'|'distribute-letter'|'distribute-space'|'left'|'line-edge'|'right'|'start'|'space-between'|'space-around'
      /**
       * Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
       */
      'ruby-overhang'?: 'auto'|'end'|'none'|'start'
      /**
       * Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position)
       */
      'ruby-position'?: 'after'|'before'|'inline'|'right'
      /**
       * Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.
       */
      'ruby-span'?: 'attr(x)'|'none'
      /**
       * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-3dlight-color)
       */
      'scrollbar-3dlight-color'?: string
      /**
       * Determines the color of the arrow elements of a scroll arrow.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-arrow-color)
       */
      'scrollbar-arrow-color'?: string
      /**
       * Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-base-color)
       */
      'scrollbar-base-color'?: string
      /**
       * Determines the color of the gutter of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-darkshadow-color)
       */
      'scrollbar-darkshadow-color'?: string
      /**
       * Determines the color of the scroll box and scroll arrows of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-face-color)
       */
      'scrollbar-face-color'?: string
      /**
       * Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-highlight-color)
       */
      'scrollbar-highlight-color'?: string
      /**
       * Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-shadow-color)
       */
      'scrollbar-shadow-color'?: string
      /**
       * Determines the color of the track element of a scroll bar.
       */
      'scrollbar-track-color'?: string
      /**
       * @counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.
       */
      suffix?: string
      /**
       * @counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.
       */
      system?: 'additive'|'alphabetic'|'cyclic'|'extends'|'fixed'|'numeric'|'symbolic'
      /**
       * @counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor.
       */
      symbols?: string
      /**
       * Shorthand property combines six of the animation properties into a single property.
       */
      '-webkit-animation'?: 'alternate'|'alternate-reverse'|'backwards'|'both'|'forwards'|'infinite'|'none'|'normal'|'reverse'
      /**
       * Defines when the animation will start.
       */
      '-webkit-animation-delay'?: string
      /**
       * Defines whether or not the animation should play in reverse on alternate cycles.
       */
      '-webkit-animation-direction'?: 'alternate'|'alternate-reverse'|'normal'|'reverse'
      /**
       * Defines the length of time that an animation takes to complete one cycle.
       */
      '-webkit-animation-duration'?: string
      /**
       * Defines what values are applied by the animation outside the time it is executing.
       */
      '-webkit-animation-fill-mode'?: 'backwards'|'both'|'forwards'|'none'
      /**
       * Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.
       */
      '-webkit-animation-iteration-count'?: 'infinite'
      /**
       * Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.
       */
      '-webkit-animation-name'?: 'none'
      /**
       * Defines whether the animation is running or paused.
       */
      '-webkit-animation-play-state'?: 'paused'|'running'
      /**
       * Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.
       */
      '-webkit-animation-timing-function'?: string
      /**
       * Changes the appearance of buttons and other controls to resemble native controls.
       */
      '-webkit-appearance'?: 'button'|'button-bevel'|'caps-lock-indicator'|'caret'|'checkbox'|'default-button'|'listbox'|'listitem'|'media-fullscreen-button'|'media-mute-button'|'media-play-button'|'media-seek-back-button'|'media-seek-forward-button'|'media-slider'|'media-sliderthumb'|'menulist'|'menulist-button'|'menulist-text'|'menulist-textfield'|'none'|'push-button'|'radio'|'scrollbarbutton-down'|'scrollbarbutton-left'|'scrollbarbutton-right'|'scrollbarbutton-up'|'scrollbargripper-horizontal'|'scrollbargripper-vertical'|'scrollbarthumb-horizontal'|'scrollbarthumb-vertical'|'scrollbartrack-horizontal'|'scrollbartrack-vertical'|'searchfield'|'searchfield-cancel-button'|'searchfield-decoration'|'searchfield-results-button'|'searchfield-results-decoration'|'slider-horizontal'|'sliderthumb-horizontal'|'sliderthumb-vertical'|'slider-vertical'|'square-button'|'textarea'|'textfield'
      /**
       * Applies a filter effect where the first filter in the list takes the element's background image as the input image.
       */
      '-webkit-backdrop-filter'?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
      /**
       * Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.
       */
      '-webkit-backface-visibility'?: 'hidden'|'visible'
      /**
       * Determines the background painting area.
       */
      '-webkit-background-clip'?: string
      /**
       * 
       */
      '-webkit-background-composite'?: 'border'|'padding'
      /**
       * For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).
       */
      '-webkit-background-origin'?: string
      /**
       * Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.
       */
      '-webkit-border-image'?: 'auto'|'fill'|'none'|'repeat'|'round'|'space'|'stretch'|'url()'
      /**
       * Specifies the alignment of nested elements within an outer flexible box element.
       */
      '-webkit-box-align'?: 'baseline'|'center'|'end'|'start'|'stretch'
      /**
       * In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
       */
      '-webkit-box-direction'?: 'normal'|'reverse'
      /**
       * Specifies an element's flexibility.
       */
      '-webkit-box-flex'?: string
      /**
       * Flexible elements can be assigned to flex groups using the 'box-flex-group' property.
       */
      '-webkit-box-flex-group'?: string
      /**
       * Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.
       */
      '-webkit-box-ordinal-group'?: string
      /**
       * In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.
       */
      '-webkit-box-orient'?: 'block-axis'|'horizontal'|'inline-axis'|'vertical'
      /**
       * Specifies alignment of child elements within the current element in the direction of orientation.
       */
      '-webkit-box-pack'?: 'center'|'end'|'justify'|'start'
      /**
       * Defines a reflection of a border box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-box-reflect)
       */
      '-webkit-box-reflect'?: 'above'|'below'|'left'|'right'
      /**
       * Box Model addition in CSS3.
       */
      '-webkit-box-sizing'?: 'border-box'|'content-box'
      /**
       * Describes the page/column break behavior before the generated box.
       */
      '-webkit-break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
      /**
       * Describes the page/column break behavior before the generated box.
       */
      '-webkit-break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
      /**
       * Describes the page/column break behavior inside the generated box.
       */
      '-webkit-break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
      /**
       * Describes the page/column break behavior before the generated box.
       */
      '-webkit-column-break-after'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
      /**
       * Describes the page/column break behavior before the generated box.
       */
      '-webkit-column-break-before'?: 'always'|'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'|'column'|'left'|'page'|'region'|'right'
      /**
       * Describes the page/column break behavior inside the generated box.
       */
      '-webkit-column-break-inside'?: 'auto'|'avoid'|'avoid-column'|'avoid-page'|'avoid-region'
      /**
       * Describes the optimal number of columns into which the content of the element will be flowed.
       */
      '-webkit-column-count'?: 'auto'
      /**
       * Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.
       */
      '-webkit-column-gap'?: 'normal'
      /**
       * This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.
       */
      '-webkit-column-rule'?: string
      /**
       * Sets the color of the column rule
       */
      '-webkit-column-rule-color'?: string
      /**
       * Sets the style of the rule between columns of an element.
       */
      '-webkit-column-rule-style'?: string
      /**
       * Sets the width of the rule between columns. Negative values are not allowed.
       */
      '-webkit-column-rule-width'?: string
      /**
       * A shorthand property which sets both 'column-width' and 'column-count'.
       */
      '-webkit-columns'?: 'auto'
      /**
       * Describes the page/column break behavior after the generated box.
       */
      '-webkit-column-span'?: 'all'|'none'
      /**
       * This property describes the width of columns in multicol elements.
       */
      '-webkit-column-width'?: 'auto'
      /**
       * Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.
       */
      '-webkit-filter'?: 'none'|'blur()'|'brightness()'|'contrast()'|'drop-shadow()'|'grayscale()'|'hue-rotate()'|'invert()'|'opacity()'|'saturate()'|'sepia()'|'url()'
      /**
       * Makes a block container a region and associates it with a named flow.
       */
      '-webkit-flow-from'?: 'none'
      /**
       * Places an element or its contents into a named flow.
       */
      '-webkit-flow-into'?: 'none'
      /**
       * This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.
       */
      '-webkit-font-feature-settings'?: 'c2cs"'|'dlig"'|'kern"'|'liga"'|'lnum"'|'onum"'|'smcp"'|'swsh"'|'tnum"'|'normal'|'off'|'on'
      /**
       * Controls whether hyphenation is allowed to create more break opportunities within a line of text.
       */
      '-webkit-hyphens'?: 'auto'|'manual'|'none'
      /**
       * Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.
       */
      '-webkit-line-break'?: 'after-white-space'|'normal'
      /**
       * 
       */
      '-webkit-margin-bottom-collapse'?: 'collapse'|'discard'|'separate'
      /**
       * 
       */
      '-webkit-margin-collapse'?: 'collapse'|'discard'|'separate'
      /**
       * 
       */
      '-webkit-margin-start'?: 'auto'
      /**
       * 
       */
      '-webkit-margin-top-collapse'?: 'collapse'|'discard'|'separate'
      /**
       * Determines the mask painting area, which determines the area that is affected by the mask.
       */
      '-webkit-mask-clip'?: string
      /**
       * Sets the mask layer image of an element.
       */
      '-webkit-mask-image'?: 'none'|'url()'
      /**
       * Specifies the mask positioning area.
       */
      '-webkit-mask-origin'?: string
      /**
       * Specifies how mask layer images are tiled after they have been sized and positioned.
       */
      '-webkit-mask-repeat'?: string
      /**
       * Specifies the size of the mask layer images.
       */
      '-webkit-mask-size'?: 'auto'|'contain'|'cover'
      /**
       * Defines the behavior of nonbreaking spaces within text.
       */
      '-webkit-nbsp-mode'?: 'normal'|'space'
      /**
       * Specifies whether to use native-style scrolling in an overflow:scroll element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-overflow-scrolling)
       */
      '-webkit-overflow-scrolling'?: 'auto'|'touch'
      /**
       * 
       */
      '-webkit-padding-start'?: string
      /**
       * Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.
       */
      '-webkit-perspective'?: 'none'
      /**
       * Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
       */
      '-webkit-perspective-origin'?: string
      /**
       * The 'region-fragment' property controls the behavior of the last region associated with a named flow.
       */
      '-webkit-region-fragment'?: 'auto'|'break'
      /**
       * 
       */
      '-webkit-tap-highlight-color'?: string
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color)
       */
      '-webkit-text-fill-color'?: string
      /**
       * Specifies a size adjustment for displaying text content in mobile browsers.
       */
      '-webkit-text-size-adjust'?: 'auto'|'none'
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke)
       */
      '-webkit-text-stroke'?: string
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color)
       */
      '-webkit-text-stroke-color'?: string
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width)
       */
      '-webkit-text-stroke-width'?: string
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-touch-callout)
       */
      '-webkit-touch-callout'?: 'none'
      /**
       * A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.
       */
      '-webkit-transform'?: 'matrix()'|'matrix3d()'|'none'|'perspective()'|'rotate()'|'rotate3d()'|'rotateX(\'angle\')'|'rotateY(\'angle\')'|'rotateZ(\'angle\')'|'scale()'|'scale3d()'|'scaleX()'|'scaleY()'|'scaleZ()'|'skew()'|'skewX()'|'skewY()'|'translate()'|'translate3d()'|'translateX()'|'translateY()'|'translateZ()'
      /**
       * Establishes the origin of transformation for an element.
       */
      '-webkit-transform-origin'?: string
      /**
       * The x coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-webkit-transform-origin-x'?: string
      /**
       * The y coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-webkit-transform-origin-y'?: string
      /**
       * The z coordinate of the origin for transforms applied to an element with respect to its border box.
       */
      '-webkit-transform-origin-z'?: string
      /**
       * Defines how nested elements are rendered in 3D space.
       */
      '-webkit-transform-style'?: 'flat'
      /**
       * Shorthand property combines four of the transition properties into a single property.
       */
      '-webkit-transition'?: 'all'|'none'
      /**
       * Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.
       */
      '-webkit-transition-delay'?: string
      /**
       * Specifies how long the transition from the old value to the new value should take.
       */
      '-webkit-transition-duration'?: string
      /**
       * Specifies the name of the CSS property to which the transition is applied.
       */
      '-webkit-transition-property'?: 'all'|'none'
      /**
       * Describes how the intermediate values used during a transition will be calculated.
       */
      '-webkit-transition-timing-function'?: string
      /**
       * 
       */
      '-webkit-user-drag'?: 'auto'|'element'|'none'
      /**
       * Determines whether a user can edit the content of an element.
       */
      '-webkit-user-modify'?: 'read-only'|'read-write'|'read-write-plaintext-only'
      /**
       * Controls the appearance of selection.
       */
      '-webkit-user-select'?: 'auto'|'none'|'text'
      /**
       * Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.
       */
      '-ms-ime-align'?: string
      /**
       * The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-binding)
       */
      '-moz-binding'?: string
      /**
       * If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.
       * 
       * This feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-context-properties)
       */
      '-moz-context-properties'?: string
      /**
       * The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
       */
      '-moz-float-edge'?: string
      /**
       * The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.
       */
      '-moz-force-broken-image-icon'?: string
      /**
       * For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-image-region)
       */
      '-moz-image-region'?: string
      /**
       * The -moz-orient CSS property specifies the orientation of the element to which it's applied.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-orient)
       */
      '-moz-orient'?: string
      /**
       * In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-outline-radius)
       */
      '-moz-outline-radius'?: string
      /**
       * In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.
       */
      '-moz-outline-radius-bottomleft'?: string
      /**
       * In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.
       */
      '-moz-outline-radius-bottomright'?: string
      /**
       * In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.
       */
      '-moz-outline-radius-topleft'?: string
      /**
       * In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.
       */
      '-moz-outline-radius-topright'?: string
      /**
       * -moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
       */
      '-moz-stack-sizing'?: string
      /**
       * The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-text-blink)
       */
      '-moz-text-blink'?: string
      /**
       * In Mozilla applications, -moz-user-input determines if an element will accept user input.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-user-input)
       */
      '-moz-user-input'?: string
      /**
       * The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.
       */
      '-moz-user-modify'?: string
      /**
       * The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
       */
      '-moz-window-dragging'?: string
      /**
       * The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-moz-window-shadow)
       */
      '-moz-window-shadow'?: string
      /**
       * The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-border-before)
       */
      '-webkit-border-before'?: string
      /**
       * The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.
       */
      '-webkit-border-before-color'?: string
      /**
       * The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.
       */
      '-webkit-border-before-style'?: string
      /**
       * The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.
       */
      '-webkit-border-before-width'?: string
      /**
       * The -webkit-line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp)
       */
      '-webkit-line-clamp'?: string
      /**
       * The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
       */
      '-webkit-mask'?: string
      /**
       * If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-attachment)
       */
      '-webkit-mask-attachment'?: string
      /**
       * The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite)
       */
      '-webkit-mask-composite'?: string
      /**
       * The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.
       */
      '-webkit-mask-position'?: string
      /**
       * The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-x)
       */
      '-webkit-mask-position-x'?: string
      /**
       * The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-position-y)
       */
      '-webkit-mask-position-y'?: string
      /**
       * The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-x)
       */
      '-webkit-mask-repeat-x'?: string
      /**
       * The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-repeat-y)
       */
      '-webkit-mask-repeat-y'?: string
      /**
       * Changes the appearance of buttons and other controls to resemble native controls.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
       */
      appearance?: string
      /**
       * 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio)
       */
      'aspect-ratio'?: string
      /**
       * In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/azimuth)
       */
      azimuth?: string
      /**
       * The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius)
       */
      'border-end-end-radius'?: string
      /**
       * The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius)
       */
      'border-end-start-radius'?: string
      /**
       * The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius)
       */
      'border-start-end-radius'?: string
      /**
       * The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius)
       */
      'border-start-start-radius'?: string
      /**
       * The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
       */
      'box-align'?: string
      /**
       * The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-direction)
       */
      'box-direction'?: string
      /**
       * The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
       */
      'box-flex'?: string
      /**
       * The box-flex-group CSS property assigns the flexbox's child elements to a flex group.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex-group)
       */
      'box-flex-group'?: string
      /**
       * The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-lines)
       */
      'box-lines'?: string
      /**
       * The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
       */
      'box-ordinal-group'?: string
      /**
       * The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
       */
      'box-orient'?: string
      /**
       * The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
       */
      'box-pack'?: string
      /**
       * The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-adjust)
       */
      'color-adjust'?: string
      /**
       * The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set)
       */
      'counter-set'?: string
      /**
       * The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation)
       */
      'hanging-punctuation'?: string
      /**
       * The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter)
       */
      'initial-letter'?: string
      /**
       * The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/initial-letter-align)
       */
      'initial-letter-align'?: string
      /**
       * The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content.
       */
      'line-clamp'?: string
      /**
       * The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height-step)
       */
      'line-height-step'?: string
      /**
       * The mask-border CSS property lets you create a mask along the edge of an element's border.
       * 
       * This property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.
       */
      'mask-border'?: string
      /**
       * The mask-border-mode CSS property specifies the blending mode used in a mask border.
       */
      'mask-border-mode'?: string
      /**
       * The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.
       */
      'mask-border-outset'?: string
      /**
       * The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
       */
      'mask-border-repeat'?: string
      /**
       * The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.
       */
      'mask-border-slice'?: string
      /**
       * The mask-border-source CSS property specifies the source image used to create an element's mask border.
       * 
       * The mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.
       */
      'mask-border-source'?: string
      /**
       * The mask-border-width CSS property specifies the width of an element's mask border.
       */
      'mask-border-width'?: string
      /**
       * The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
       */
      'mask-clip'?: string
      /**
       * The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite)
       */
      'mask-composite'?: string
      /**
       * The max-liens property forces a break after a set number of lines
       */
      'max-lines'?: string
      /**
       * The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-block)
       */
      'overflow-block'?: string
      /**
       * The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.
       * [MDN Reference](https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box)
       */
      'overflow-clip-box'?: string
      /**
       * The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-inline)
       */
      'overflow-inline'?: string
      /**
       * The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior)
       */
      'overscroll-behavior'?: string
      /**
       * The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x)
       */
      'overscroll-behavior-x'?: string
      /**
       * The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)
       */
      'overscroll-behavior-y'?: string
      /**
       * This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.
       */
      'ruby-merge'?: string
      /**
       * The scrollbar-color CSS property sets the color of the scrollbar track and thumb.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-color)
       */
      'scrollbar-color'?: string
      /**
       * The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown. 
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width)
       */
      'scrollbar-width'?: string
      /**
       * The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin)
       */
      'scroll-margin'?: string
      /**
       * The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block)
       */
      'scroll-margin-block'?: string
      /**
       * The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start)
       */
      'scroll-margin-block-start'?: string
      /**
       * The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end)
       */
      'scroll-margin-block-end'?: string
      /**
       * The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom)
       */
      'scroll-margin-bottom'?: string
      /**
       * The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline)
       */
      'scroll-margin-inline'?: string
      /**
       * The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start)
       */
      'scroll-margin-inline-start'?: string
      /**
       * The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end)
       */
      'scroll-margin-inline-end'?: string
      /**
       * The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left)
       */
      'scroll-margin-left'?: string
      /**
       * The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right)
       */
      'scroll-margin-right'?: string
      /**
       * The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top)
       */
      'scroll-margin-top'?: string
      /**
       * The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
       * 
       * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-x)
       */
      'scroll-snap-type-x'?: string
      /**
       * The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
       * 
       * Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type-y)
       */
      'scroll-snap-type-y'?: string
      /**
       * The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness)
       */
      'text-decoration-thickness'?: string
      /**
       * The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis)
       */
      'text-emphasis'?: string
      /**
       * The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color)
       */
      'text-emphasis-color'?: string
      /**
       * The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position)
       */
      'text-emphasis-position'?: string
      /**
       * The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style)
       */
      'text-emphasis-style'?: string
      /**
       * The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.
       * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset)
       */
      'text-underline-offset'?: string
      /**
       * The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.
       */
      'speak-as'?: string
      /**
       * The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property.
       */
      bleed?: string
      /**
       * The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.
       */
      marks?: string
    }
  }
}