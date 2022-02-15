# Sass

Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

## Initial Setup

Install Live Sass Compiler extension in Vs code (or try alternative to compile sass)

For setting up vs code extension for compliling sass:

https://ritwickdey.github.io/vscode-live-sass-compiler/docs/settings.html

```
    "liveSassCompile.settings.formats":[
          // This is Default.
          {
              "format": "expanded",
              "extensionName": ".css",
              "savePath": null
          },
          // You can add more
          {
              "format": "compressed",
              "extensionName": ".min.css",
              "savePath": "/dist/css"
          },
          // More Complex
          {
              "format": "compressed",
              "extensionName": ".min.css",
              "savePath": "~/../css/"
          }
      ]
```

If you wanted to watch (instead of manually build) your input.scss file, you'd just add the watch flag to your command, like so:

```
sass --watch input.scss output.css
```

You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:

```
sass --watch app/sass:public/stylesheets
```

## Variables

You can store things like colors, font stacks, or any CSS value you think you'll want to reuse.

```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

When the Sass is processed, it takes the variables we define for the $font-stack and $primary-color and outputs normal CSS with our variable values placed in the CSS

## &

```
The & is always the fully compiled parent selector.
```

## Maps

Maps are all about associating keys and values.

```
$font-weights: ("regular": 400, "medium": 500, "bold": 700);
p {
    font-weight: map-get($font-weights, bold);
}
```

## Interpolation

Interpolation can be used almost anywhere in a Sass stylesheet to embed the result of a SassScript expression into a chunk of CSS. Just wrap an expression in #{}

```
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```

## Partials

You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like \_partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule.

## Modules

```
// _base.scss
$primary-color: #333;

body {
  color: $primary-color;
}
```

```
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
}
```

## Mixins

It helps keep your Sass very DRY

```
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin theme($light-theme: true) {
  @if $light-theme {
    background-color: white;
    color: black;
  } @else {
    background-color: black;
    color: white;
  }
}

@mixin mobile {
  @media (max-width: 800px) {
    @content;
  }
}

body {
  @include flexCenter;
  @include theme($light-theme: true);
  @include mobile {
    background-color: pink;
  }
}
```

## Functions

Functions help to compute values

```
@function weight($weight-name) {
  @return map-get($font-weights, $weight-name);
}
body {
  font-weight: weight(bold);
}
```

## Extend

I want this selector to inherit the styles from this selector.

```
.foo {
  color: red;
}
.bar {
  @extend .foo;
}
// Output (css compiled)
.foo, .bar {
  color: red;
}
```

#### placeholder way

Placeholder selectors are useful when writing a Sass library where each style rule may or may not be used. As a rule of thumb, if you’re writing a stylesheet just for your own app, it’s often better to just extend a class selector if one is available.

```
%message-shared {
  border: 1px solid #ccc;
  color: #333;
}

.message {
  @extend %message-shared;
}
```

Generally any time you’d use a mixin with no parameter, an extend will be more efficient

## Operations

In css we have to use calc(), but in sass we can directly use operators.
But in sass we can't mix types like in calc(80% - 40px)

```
p {
  width: (((1 + 2) * 3 + 4) * 5) * 4 px;  // compiles to 260px
}
```

### Loops

For stylying based on child number you can use loops

```
@for $i from 1 through 4 {
  .menu-nav__item:nth-child(#{$i}) {
    transition-delay: ($i * 0.1s) + 0.15s;
  }
}
```
