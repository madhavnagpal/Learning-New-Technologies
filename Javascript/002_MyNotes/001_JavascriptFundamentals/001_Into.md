# Fundamentals of Javascript

Javascript is a high level, object-oriented, multi-paradigm programming language.

- High level: We don't have to worry about complex stuff like memory management.
- OOPS: Based on objects for storing most kind of data.
- Multi Paradigm: We can use different styles of programming
- PL: Instruct computer to do things

**Javascript has dynamic typing** : We do not have to manually define th3e data type of value stored in a variable, data types are determined automatically (**Value has type, NOT variable**).

## Data Types

- Object
- Primitive Data Types
  1. Number (for decimal and integers)
  2. String
  3. Boolean
  4. undefined
  5. null
  6. Symbol
  7. Big int

## typeof

```
// Numbers
typeof 3.14 === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('shoe') === 'number';

// Strings
typeof (typeof 1) === 'string'; // typeof always returns a string

// Booleans
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// This stands since the beginning of JavaScript
typeof null === 'object';

// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

```

### Using **new** constructor

```
// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
let str = new String('String');
let num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

let func = new Function();

typeof func; // It will return 'function'

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';
```

## Type Conversions

#### Number Conversion rules

| Value          |                                                                                 Becomes                                                                                 |
| -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| undefined      |                                                                                   NaN                                                                                   |
| null           |                                                                                    0                                                                                    |
| true and false |                                                                                 1 and 0                                                                                 |
| string         | Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN. |

### String Conversion

String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

### Boolean Conversion

- 5 Falsy values are
  **0**, **an empty string('')**, **undefined**, **null**, **NaN**.

- Other values become true.

Few Type Conversions

```
Number('123')
// tries to convert it number - 123

Number('ab')
// NaN

```

### **Type Cohersion** (Js does implicit type conversion)

```
'1' + 1 - 1
// 10

'10' - '4' - '3'
// 3

'10' - 'ab'
// NaN
```

&nbsp;

## Statements and expressions

**Expressions** - produces a value  
**Statements** - does not produces a value
