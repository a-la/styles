## Usage

By installing this package, you will be able to specify styles on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/styles` package in your source code:

%EXAMPLE: example, ../ => @a-la/bootstrap%

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `container-fluid` and will only see `containerFluid`, but you can actually use both. The camel cases are added for discoverability of classes.


%~%

<typedef method="style">types/api.xml</typedef>

<typedef>types/index.xml</typedef>

%EXAMPLE: example, ../src => @a-la/styles%
%FORK example%

%~%