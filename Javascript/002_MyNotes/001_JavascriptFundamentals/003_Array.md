# Array

Data structure to store ordered collections.

**Declaration**

```
let arr = new Array();
let arr = [];           // used most frequently
```

## Basic Array methods

- **push** - to add element at the end
- **pop** - to remove element from end
- **unshift** - to add element at the start
- **shift** - to remove element from start
- **indexOf** - returns first index of element passed
- **included** - tells whether an element is present or not.

## A word about “length”

The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

```
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124
```

Another interesting thing about the length property is that it’s writable.

If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

```
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return
```

So, the simplest way to clear the array is: arr.length = 0;.

## toString

Arrays have their own implementation of toString method that returns a comma-separated list of elements.

```
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
```

```
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

## Looping an array

- for loop
- for of loop
- for in loop (**never use**)

```
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```

```
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
```

### **Don't use for in loop for array**

Technically, because arrays are objects, it is also possible to use for..in:

```
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
```

But that’s actually a bad idea. There are potential problems with it:

The loop for..in iterates over all properties, not only the numeric ones (which we usually don't need while working with ordered collection)

Generally, we shouldn’t use for..in for arrays.
