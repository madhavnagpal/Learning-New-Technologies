# Object

They store properties (key-value pairs), where:

- Property keys must be strings or symbols (usually strings).
- Values can be of any type.

**Declaration**

```
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

**Accessing a property**
To access a property, we can use:

- The dot notation: obj.property.
- Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].

**Additional Operators**

- To delete a property: **delete obj.prop**
- To check if a property with the given key exists: **"key" in obj**
- To iterate over an object: **for (let key in obj)** loop.

**Computed Properties**

```
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

&nbsp;

## Property existence test, “in” operator

In Javascript it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns undefined

```
let obj = {
  test: undefined
};

obj.test // it's undefined, so - no such property?

"test" in obj  // true, the property does exist!
```

&nbsp;

## Object.create()
