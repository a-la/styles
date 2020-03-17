## Usage

By installing this package, you will be able to specify styles on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/styles` package in your source code:

%EXAMPLE: example, ../ => @a-la/styles%

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `margin-top` and will only see `marginTop`, but you can actually use both. The camel cases are added for discoverability of properties.

%~%

## Special Cases

Some CSS properties will interfere with attributes of certain tags. There's an ignore map that prevents the output of the following cases:

<fork lang="html">example/ignore</fork>

%~%